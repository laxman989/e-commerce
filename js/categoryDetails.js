var searchParams = new URLSearchParams(window.location.search);
var categoryId = searchParams.get("categoryId");
var category = categoryList.find(function (category) {
  return category.id === categoryId;
});
// console.log(categoryId);

function calculateDiscountPrice(price, discountPercentage) {
    var finalPrice = price - ((price * discountPercentage) / 100)
    return finalPrice;
}

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

function categoryDetailsPage() {
    // productRef.textContent = productList;
    for (var i = 0; i < productList.length; i++) {
        var productRef = document.querySelector("#category-product-list");
        var product = productList[i];
        // var productRef = document.querySelector("#product-list");
        // create a Product Card
        if(categoryId === product.categoryId){
            var productCard = createProductCard(product);
            productRef.appendChild(productCard);
        }
    }

}

categoryDetailsPage();
