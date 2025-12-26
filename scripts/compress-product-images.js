import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const productDir = path.join(__dirname, '..', 'public', 'images', 'product');

// 按照用户指定的顺序
const imageMapping = [
  { input: '星座集合.png', output: 'product-1.webp' },
  { input: '天秤座.png', output: 'product-2.webp' },
  { input: '天蝎座.png', output: 'product-3.webp' },
  { input: '射手座.png', output: 'product-4.webp' },
  { input: '摩羯座.png', output: 'product-5.webp' }
];

async function compressImage(inputFile, outputFile) {
  try {
    const inputPath = path.join(productDir, inputFile);
    const outputPath = path.join(productDir, outputFile);

    await sharp(inputPath)
      .resize(1200, 1200, { fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 90 })
      .toFile(outputPath);

    console.log(`✓ ${inputFile} -> ${outputFile}`);
  } catch (error) {
    console.error(`✗ Error processing ${inputFile}:`, error.message);
  }
}

async function main() {
  console.log('🚀 Compressing product images...\n');

  for (const { input, output } of imageMapping) {
    await compressImage(input, output);
  }

  console.log('\n✅ All product images compressed!');
}

main().catch(console.error);
