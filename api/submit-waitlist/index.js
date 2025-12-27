const https = require('https');
const querystring = require('querystring');

module.exports = async function (context, req) {
    const email = (req.body && req.body.email);
    const scriptUrl = "https://script.google.com/macros/s/AKfycbwEKZveVInt0GR37VTrNS6PxlBrA54f75CYyVtxSEgxjFB5s7l7HqN-6TyQNpLEsRXVag/exec";

    if (!email) {
        context.res = {
            status: 400,
            body: "Please provide an email address."
        };
        return;
    }

    // Prepare data for Google Apps Script (x-www-form-urlencoded)
    const postData = querystring.stringify({
        'email': email,
        'timestamp': new Date().toISOString()
    });

    // Parse the Google URL to get hostname and path
    // Note: This URL will redirect (302) to googleusercontent.com
    // However, the doPost triggers BEFORE the redirect output is served.
    // So we just need to send the POST and assume success if we get a 200 or 302.
    const url = new URL(scriptUrl);

    const options = {
        hostname: url.hostname,
        path: url.pathname + url.search,
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength(postData)
        }
    };

    try {
        await new Promise((resolve, reject) => {
            const request = https.request(options, (res) => {
                // We expect a 302 Found (Redirect) or 200 OK
                if (res.statusCode === 302 || res.statusCode === 200) {
                    context.res = {
                        status: 200,
                        body: { message: "Success" }
                    };
                    resolve();
                } else {
                    // Log specific error status but tell client success to be graceful
                    context.log.warn(`Google Script returned status: ${res.statusCode}`);
                    context.res = {
                        status: 200,
                        body: { message: "Success (Partial)" }
                    };
                    resolve();
                }
            });

            request.on('error', (e) => {
                context.log.error(e);
                // Even on error, we might fail gracefully? 
                // No, internal server error is appropriate here so we see it in Azure logs.
                reject(e);
            });

            // Write data to request body
            request.write(postData);
            request.end();
        });
    } catch (error) {
        context.log.error("Request error:", error);
        context.res = {
            status: 500,
            body: "Internal Backend Error"
        };
    }
};
