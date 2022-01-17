var searchParams = new URLSearchParams(window.location.search);
var productId = searchParams.get("productId");
var product = productList.find(function (product) {
  return product.id === productId;
});
console.log(product);

// function calculateDiscountPrice(price, discountPercentage) {
//   var finalPrice = price - ((price * discountPercentage) / 100)
//   return finalPrice;
// }

function productDetailsPage() {
    let productDetails = document.querySelector('#product-details');
    let productInfo = document.createElement("div");
    let productImage = document.createElement("img");
    let productBrand = document.createElement("p");
    let productLabel = document.createElement("p");
    var productPrice = document.createElement("span");
    var productFinalPrice = document.createElement("span");
    var productDiscountPercentage = document.createElement("span");
    var productRating = document.createElement("div");
    var productBtn = document.createElement("div");
    var addToCartBtn = document.createElement("button")
    var buyNowBtn = document.createElement("button")

    var finalPrice = calculateDiscountPrice(product.price, product.discountPercentage);

    productImage.classList.add("product-details-image")
    productImage.src =  product.imageUrl;
    productBrand.classList.add("product-info-brand")
    productBrand.textContent = product.brand;
    productLabel.classList.add("product-info-label")
    productLabel.textContent = product.label;
    productFinalPrice.classList.add('product-info-final-price');
    productFinalPrice.textContent = "Rs." + finalPrice.toFixed(0);
    productPrice.classList.add('product-info-price');
    productPrice.textContent = "Rs." + product.price;
    productDiscountPercentage.classList.add('product-info-discount-percentage');
    productDiscountPercentage.textContent = product.discountPercentage + "% off";
    productRating.classList.add('product-info-rating');
    for (let i = 0; i < product.ratings; i++) {
      var rating = document.createElement("span")
      rating.className = 'fa fa-star star-icon';
      productRating.appendChild(rating);
    };

    productBtn.classList.add("product-info-btn")
    addToCartBtn.className = "addToCart-btn btn";
    addToCartBtn.textContent = "Add To Cart";
    buyNowBtn.className = "buyNow-btn btn" ;
    buyNowBtn.textContent = "Buy Now" ;
    productBtn.appendChild(addToCartBtn);
    productBtn.appendChild(buyNowBtn);


    productInfo.classList.add("product-info");
    productInfo.appendChild(productBrand);
    productInfo.appendChild(productLabel);
    productInfo.appendChild(productFinalPrice);
    productInfo.appendChild(productPrice);
    productInfo.appendChild(productDiscountPercentage);
    productInfo.appendChild(productRating);
    productInfo.appendChild(productBtn);
    
    productDetails.appendChild(productImage);
    productDetails.appendChild(productInfo);
}

productDetailsPage();
