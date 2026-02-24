// This is a helper script to generate the gallery arrays
// Run this in the browser console on the Produtos page to get all image paths

const fs = require('fs');
const path = require('path');

const productsDir = path.join(__dirname);
const products = ['cortina', 'garagem', 'automatico', 'fixo', 'passarela', 'termoforro'];

products.forEach(product => {
    const productDir = path.join(productsDir, product);
    const getAllImages = (dir, baseDir = '') => {
        let images = [];
        const items = fs.readdirSync(dir, { withFileTypes: true });

        items.forEach(item => {
            if (item.isDirectory()) {
                images = images.concat(getAllImages(path.join(dir, item.name), path.join(baseDir, item.name)));
            } else if (/\.(jpg|jpeg|png|webp)$/i.test(item.name) && item.name !== 'main.jpg') {
                const relativePath = baseDir ? `${baseDir}/${item.name}` : item.name;
                images.push(`/assets/produtos/${product}/${relativePath}`);
            }
        });
        return images;
    };

    const images = getAllImages(productDir);
    console.log(`\n${product}:`);
    console.log(JSON.stringify(images, null, 2));
});
