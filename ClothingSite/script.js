const shopItemData = [
    {
        title: "Drop shoulder Shirt",
        brand: "ZARA",
        description: "Unisex shirt: Pure comfort in a timeless design. Soft cotton, classic fit. Your essential wardrobe staple.",
        color: "YourSelectedColor", // You need to determine the selected color
        size: size,
        quantity: 1
    }
];

let generateShop= () => {
    shopItemData.innerHTML = shopItemData.map((x) => {
        let {title, brand, description, color, size, quantity} = x;

        return `
                <div class="content">
                    <h2 id="content-title" ${title}></h2>
                    <h3 id="content-details" ${brand}>ZARA</h3>
                    <p id="content-details" ${description}>"Unisex shirt: Pure comfort in a timeless design. Soft cotton, classic fit. Your essential wardrobe staple."</p>
                    <div class="color-palettes" ${color}>
                        <p>Choose color</p>
                        <div class="colors">
                            <div class="circle child1"></div>
                            <div class="circle child2"></div>
                            <div class="circle child3"></div>
                            <div class="circle child4"></div>
                        </div>
                    </div>
                    <div class="quantity" ${quantity}>
                        <p>Qty</p>
                        <input type="number" id="qty-number">
                    </div>
                    <div class="size" ${size}>
                        <div id="size-child">S</div>
                        <div id="size-child">M</div>
                        <div id="size-child">L</div>
                        <div id="size-child">XL</div>
                    </div>
                    <div class="addcart-wishlist">
                        <button id="addcart" onclick="addCart()">ADD TO CART <span id="add">+</span></button>
                        <button id="wishlist" onclick="wishList()">WISH LIST<span id="add">+</span></button>
                    </div>
                </div>
        `
    });
}

let add_to_cart =(title, brand, description, color, size, quantity) => {
    localStorage.setItem('data'.JSON.stringyfy(basket))
}