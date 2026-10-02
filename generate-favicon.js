const sharp = require('sharp');
const path = require('path');

async function generateFavicon() {
  try {
    const inputPath = path.join(__dirname, 'public/images/logo.webp');
    const iconOutputPath = path.join(__dirname, 'src/app/icon.png');
    const appleIconOutputPath = path.join(__dirname, 'src/app/apple-icon.png');

    console.log('Converting logo.webp to favicons...\n');

    // Generate 512x512 icon.png (tight crop around logo)
    console.log('✓ Generating icon.png (512x512)...');
    await sharp(inputPath)
      .resize(512, 512, {
        fit: 'cover',
        position: 'center',
        background: { r: 15, g: 15, b: 15, alpha: 1 }, // #0F0F0F
      })
      .png()
      .toFile(iconOutputPath);
    console.log(`  Created: ${iconOutputPath}`);

    // Generate 180x180 apple-icon.png
    console.log('✓ Generating apple-icon.png (180x180)...');
    await sharp(inputPath)
      .resize(180, 180, {
        fit: 'cover',
        position: 'center',
        background: { r: 15, g: 15, b: 15, alpha: 1 }, // #0F0F0F
      })
      .png()
      .toFile(appleIconOutputPath);
    console.log(`  Created: ${appleIconOutputPath}`);

    console.log('\n✅ Favicon generation complete!');
    console.log('\nFile sizes:');
    const fs = require('fs');
    const iconStats = fs.statSync(iconOutputPath);
    const appleStats = fs.statSync(appleIconOutputPath);
    console.log(`  icon.png: ${(iconStats.size / 1024).toFixed(2)} KB`);
    console.log(`  apple-icon.png: ${(appleStats.size / 1024).toFixed(2)} KB`);
    
    console.log('\nNext.js will automatically use these files for:');
    console.log('  ✓ /favicon.ico (from icon.png)');
    console.log('  ✓ Apple touch icon (from apple-icon.png)');
    console.log('  ✓ Web app manifest');
  } catch (error) {
    console.error('Error generating favicon:', error);
    process.exit(1);
  }
}

generateFavicon();
