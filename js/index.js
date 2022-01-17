function calculateDiscountPrice(price, discountPercentage) {
    var finalPrice = price - ((price * discountPercentage) / 100)
    return finalPrice;
}

// Function to create a Product Card
function createProductCard(product) {
    var productCard = document.createElement("div");
    var productImage = document.createElement("img");
    var productBrand = document.createElement("p");
    var productLabel = document.createElement("p");
    var productPrice = document.createElement("span");
    var productFinalPrice = document.createElement("span");
    var productDiscountPercentage = document.createElement("span");
    var productRating = document.createElement("div");
    var finalPrice = calculateDiscountPrice(product.price, product.discountPercentage);

    productImage.classList.add('product-image');
    productImage.src = product.imageUrl;
    productBrand.classList.add('product-brand');
    productBrand.textContent = product.brand;
    productLabel.classList.add('product-label');
    productLabel.textContent = product.label.slice(0, 30);
    productFinalPrice.classList.add('product-final-price');
    productFinalPrice.textContent = "Rs." + finalPrice.toFixed(0);
    productPrice.classList.add('product-price');
    productPrice.textContent = "Rs." + product.price;
    productDiscountPercentage.classList.add('product-discount-percentage');
    productDiscountPercentage.textContent = product.discountPercentage + "% off";
    productRating.classList.add('product-rating');
    // productRating.textContent = ratings;
    for (let i = 0; i < product.ratings; i++) {
        var rating = document.createElement("span")
        rating.className = 'fa fa-star star-icon';
        productRating.appendChild(rating);
    };

    productCard.classList.add("product-card");
    productCard.appendChild(productImage);
    productCard.appendChild(productBrand);
    productCard.appendChild(productLabel);
    productCard.appendChild(productFinalPrice);
    productCard.appendChild(productPrice);
    productCard.appendChild(productDiscountPercentage);
    productCard.appendChild(productRating);
    productCard.addEventListener("click", function () {
        window.location.href = "productDetails.html?productId=" + product.id;

        
    });
    return productCard;
}

// Function to create a Category Card
function createCategoryCard(category) {
    var categoryCard = document.createElement("div");
    var categoryImage = document.createElement("img");
    var categoryLabel = document.createElement("p");

    categoryImage.src = category.imageUrl;
    categoryLabel.textContent = category.label;
    categoryCard.classList.add('category-card')

    categoryCard.appendChild(categoryImage);
    categoryCard.appendChild(categoryLabel);
    categoryCard.addEventListener("click", function() {
        window.location.href = "categoryDetails.html?categoryId=" + category.id;        
    })
    return categoryCard;
}

// Function to iterate over the categoriesList and display the list of all Categories
function displayCategories() {
    for (var i = 0; i < categoryList.length; i++) {
        var category = categoryList[i];
        var categoryRef = document.querySelector("#category-list");
        // create a Category Card
        var categoryCard = createCategoryCard(category);
        categoryRef.appendChild(categoryCard);
        }
}
  
// Function to iterate over the productList and display the list of all Products
function displayProducts() {
    for (var i = 0; i < productList.length; i++) {
    var product = productList[i];
    var productRef = document.querySelector("#product-list");
    // create a Product Card
    var productCard = createProductCard(product);
    productRef.appendChild(productCard);
    }
}


// Redirect to product page
// function redirectToProductDetailsPage() {
    //     let productImage = document.createElement("img");
    //     productImage.innerText =  "hello";
    // }
    
    
//Render the Categories and Products
displayCategories();
displayProducts();
  