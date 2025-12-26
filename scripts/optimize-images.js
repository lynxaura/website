import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 图片优化配置
const IMAGE_CONFIG = {
  creators: {
    maxWidth: 800,
    maxHeight: 1200,
    quality: 85,
    prefix: 'creator'
  },
  community: {
    maxWidth: 800,
    maxHeight: 1000,
    quality: 85,
    prefix: 'community'
  },
  product: {
    maxWidth: 1200,
    maxHeight: 1200,
    quality: 90,
    prefix: 'product'
  },
  sprites: {
    maxWidth: 1400,
    maxHeight: 1400,
    quality: 90,
    prefix: 'sprite'
  }
};

async function optimizeImage(inputPath, outputPath, config) {
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();

    // 计算新尺寸，保持宽高比
    let width = metadata.width;
    let height = metadata.height;

    if (width > config.maxWidth) {
      height = Math.round((height * config.maxWidth) / width);
      width = config.maxWidth;
    }

    if (height > config.maxHeight) {
      width = Math.round((width * config.maxHeight) / height);
      height = config.maxHeight;
    }

    // 压缩并输出为WebP和原始格式
    const ext = path.extname(outputPath).toLowerCase();
    const basePath = outputPath.replace(ext, '');

    // 输出原始格式（优化版）
    if (ext === '.png') {
      await image
        .resize(width, height, { fit: 'inside', withoutEnlargement: true })
        .png({ quality: config.quality, compressionLevel: 9 })
        .toFile(outputPath);
    } else if (ext === '.jpg' || ext === '.jpeg') {
      await image
        .resize(width, height, { fit: 'inside', withoutEnlargement: true })
        .jpeg({ quality: config.quality, progressive: true })
        .toFile(outputPath);
    }

    // 同时输出WebP格式
    const webpPath = basePath + '.webp';
    await image
      .resize(width, height, { fit: 'inside', withoutEnlargement: true })
      .webp({ quality: config.quality })
      .toFile(webpPath);

    const originalSize = (await fs.stat(inputPath)).size;
    const newSize = (await fs.stat(outputPath)).size;
    const webpSize = (await fs.stat(webpPath)).size;

    console.log(`✓ ${path.basename(inputPath)}`);
    console.log(`  Original: ${(originalSize / 1024 / 1024).toFixed(2)}MB`);
    console.log(`  Optimized: ${(newSize / 1024 / 1024).toFixed(2)}MB (${Math.round((1 - newSize/originalSize) * 100)}% smaller)`);
    console.log(`  WebP: ${(webpSize / 1024 / 1024).toFixed(2)}MB`);
    console.log(`  Dimensions: ${width}x${height}`);

  } catch (error) {
    console.error(`✗ Error processing ${inputPath}:`, error.message);
  }
}

async function processDirectory(dirName) {
  const publicDir = path.join(__dirname, '..', 'public', 'images');
  const sourceDir = path.join(publicDir, dirName);
  const optimizedDir = path.join(publicDir, `${dirName}_optimized`);

  // 创建优化后的目录
  await fs.mkdir(optimizedDir, { recursive: true });

  const config = IMAGE_CONFIG[dirName];
  if (!config) {
    console.log(`⚠ No config found for ${dirName}, skipping...`);
    return;
  }

  console.log(`\n📁 Processing ${dirName}...`);
  console.log(`Config: ${config.maxWidth}x${config.maxHeight}px, quality: ${config.quality}`);

  const files = await fs.readdir(sourceDir);
  const imageFiles = files.filter(file =>
    /\.(jpg|jpeg|png)$/i.test(file)
  );

  let index = 1;
  for (const file of imageFiles) {
    const ext = path.extname(file).toLowerCase();
    const newFileName = `${config.prefix}-${index}${ext}`;

    const inputPath = path.join(sourceDir, file);
    const outputPath = path.join(optimizedDir, newFileName);

    await optimizeImage(inputPath, outputPath, config);
    index++;
  }

  console.log(`\n✓ Completed ${dirName}: ${imageFiles.length} images processed`);
}

async function main() {
  console.log('🚀 Starting image optimization...\n');

  const directories = ['creators', 'community', 'product', 'sprites'];

  for (const dir of directories) {
    try {
      await processDirectory(dir);
    } catch (error) {
      console.error(`Error processing ${dir}:`, error.message);
    }
  }

  console.log('\n✅ Image optimization complete!');
  console.log('\n📝 Next steps:');
  console.log('1. Review the optimized images in the *_optimized directories');
  console.log('2. If satisfied, replace the original directories with the optimized ones');
  console.log('3. Update your components to use .webp images with fallbacks');
}

main().catch(console.error);
