const fs = require('fs');
const path = require('path');

// Image names to create
const images = [
  'logo',
  'cake-oreo-drip',
  'cake-red-velvet-layers',
  'cake-wedding-blue-floral',
  'cake-pawpatrol-daniel',
  'cake-pawpatrol-andre',
  'food-jollof-chicken-plantain',
  'food-meat-skewers',
  'food-moi-moi',
  'food-efo-riro',
  'food-peppered-meat',
  'food-fried-rice-1',
  'food-fried-rice-2',
  'smallchops-platter-mixed',
  'smallchops-tray-puffpuff',
];

const imagesDir = path.join(__dirname, 'public', 'images');

// Create directory if it doesn't exist
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Create placeholder SVGs for each image
images.forEach((imageName) => {
  const categoryMap = {
    'cake-': '#E8493F',
    'food-': '#F5B335',
    'smallchops-': '#25D366',
    'logo': '#0F0F0F',
  };

  let bgColor = '#1A1A1A';
  for (const [prefix, color] of Object.entries(categoryMap)) {
    if (imageName.startsWith(prefix)) {
      bgColor = color;
      break;
    }
  }

  const svg = `<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="400" fill="${bgColor}"/>
  <text x="200" y="200" font-family="Arial, sans-serif" font-size="24" fill="#F7F2EA" text-anchor="middle" dominant-baseline="middle">
    ${imageName}
  </text>
  <text x="200" y="230" font-family="Arial, sans-serif" font-size="14" fill="#B8B2A7" text-anchor="middle" dominant-baseline="middle">
    Placeholder Image
  </text>
</svg>`;

  const filePath = path.join(imagesDir, `${imageName}.svg`);
  fs.writeFileSync(filePath, svg);
  console.log(`Created placeholder: ${imageName}.svg`);
});

console.log(`\nAll placeholder images created in ${imagesDir}`);
console.log('Note: Replace these with actual .webp images');
