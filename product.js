// Add any interactive functionality here, such as scroll animations or pop-ups.
document.addEventListener('DOMContentLoaded', () => {
    console.log('YOCHI! Landing Page Loaded');
  });
  
window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);


// Product Data
const products = [
    { name: "Strawberry Delight", image: "mascot.png", hoverImage: "logo.png" },
    { name: "Matcha Green Tea", image: "mascot.png", hoverImage: "logo.png" },
    { name: "Mango Passion", image: "mascot.png", hoverImage: "logo.png" },
    { name: "Chocolate Truffle", image: "mascot.png", hoverImage: "logo.png" },
    { name: "Jamur", image: "mascot.png", hoverImage: "logo.png" },
    { name: "Blueberry Bliss", image: "mascot.png", hoverImage: "logo.png" },
    { name: "Vanilla Dream", image: "mascot.png", hoverImage: "logo.png" },
    { name: "Vanilla Dream", image: "mascot.png", hoverImage: "logo.png" },
    { name: "Vanilla Dream", image: "mascot.png", hoverImage: "logo.png" },
    { name: "Vanilla Dream", image: "mascot.png", hoverImage: "logo.png" },
    { name: "Vanilla Dream", image: "mascot.png", hoverImage: "logo.png" }

];

// Preload Hover Images
products.forEach(product => {
    const imgPreload = new Image();
    imgPreload.src = product.hoverImage;
});

// Render Products
const productGrid = document.getElementById("productGrid");

products.forEach(product => {
    // Create Product Container
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    // Default Image
    const imgDefault = document.createElement("img");
    imgDefault.src = product.image;
    imgDefault.classList.add("default-image");

    // Hover Image
    const imgHover = document.createElement("img");
    imgHover.src = product.hoverImage;
    imgHover.classList.add("hover-image");

    // Title
    const title = document.createElement("h3");
    title.classList.add("product-title");
    title.textContent = product.name;

    // Append Elements to Product Container
    productDiv.appendChild(imgDefault);
    productDiv.appendChild(imgHover);
    productDiv.appendChild(title);

    // Append Product to Grid
    productGrid.appendChild(productDiv);
});

