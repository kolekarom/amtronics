const fs = require('fs');
const https = require('https');
const path = require('path');

const imagesDir = path.join(__dirname, '../public/images');

// Create images directory if it doesn't exist
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Product images with placeholder URLs
const productImages = [
  { name: 'power-supply', url: 'https://images.unsplash.com/photo-1603732551655-5230cb87cb31?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' },
  { name: 'control-panel', url: 'https://images.unsplash.com/photo-1581092921461-39b2f2f8a4c6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' },
  { name: 'iot-sensor', url: 'https://images.unsplash.com/photo-1531403007395-8c93017b5a2e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' },
  { name: 'motor-drive', url: 'https://images.unsplash.com/photo-1581093057302-1fe5a2b7d8a1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' },
  { name: 'hmi-panel', url: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' },
  { name: 'custom-solution', url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' },
];

// Function to download an image
function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const fileStream = fs.createWriteStream(filepath);
        response.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          console.log(`Downloaded ${filepath}`);
          resolve();
        });
      } else {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      reject(err);
    });
  });
}

// Download all images
async function downloadAllImages() {
  try {
    for (const img of productImages) {
      const filePath = path.join(imagesDir, `${img.name}.jpg`);
      if (!fs.existsSync(filePath)) {
        await downloadImage(img.url, filePath);
      } else {
        console.log(`Skipping ${filePath} - already exists`);
      }
    }
    console.log('All images downloaded successfully!');
  } catch (error) {
    console.error('Error downloading images:', error);
  }
}

downloadAllImages();
