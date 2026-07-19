const teaButton = document.getElementById("teaBtn");

const coffeeButton = document.getElementById("coffeeBtn");

const productInfo = document.getElementById("productInfo");



const teaData = {

    image: "images/tea-bomb.jpg",

    name: "Tea Bomb",

    description:
    "Healthy herbal tea experience made with natural ingredients.",

    ingredients:[
        "Lemon Turmeric Tea",
        "Hibiscus Berry Tea",
        "Jesmine Milk Tea"
    ],

    benefits:[
        "Supports healthy lifestyle",
        "Easy preparation",
        "Refreshing taste"
    ],

    price:"Rs.1200"

};



const coffeeData = {

    image: "images/coffee-strip.jpg",

    name: "Coffee Strip",

    description:
    "Instant coffee solution that you can enjoy anywhere anytime.",

    ingredients:[
        "Ginger Coffee",
        "Cinnamon Coffee",
        "Rose & Cardemom Coffee"
    ],

    benefits:[
        "Quick preparation",
        "Easy to carry",
        "Great coffee taste"
    ],

    price:"Rs.1500"

};

function orderProduct(product){

    let message = 
    `Hello CEYORA,
    
I would like to order:
${product.name}`;


    let whatsappURL =
    "https://wa.me/94703245689?text="
    + encodeURIComponent(message);


    window.open(whatsappURL, "_blank");

}

function showProduct(product){

    productInfo.innerHTML = `

        <img src="${product.image}" alt="${product.name}">


        <h3>${product.name}</h3>


        <p>
            ${product.description}
        </p>


        <h4>
            Ingredients
        </h4>


        <p>
            ${product.ingredients.join(", ")}
        </p>


        <h4>
            Benefits
        </h4>


        <p>
            ${product.benefits.join(", ")}
        </p>


        <h4>
            Price
        </h4>


        <p>
            ${product.price}
        </p>


        <button id="orderBtn">
            Order Now
        </button>


    `;

    const orderButton = document.getElementById("orderBtn");

    orderButton.addEventListener("click", function () {
        orderProduct(product);
    });

}



teaButton.addEventListener("click", function(){

    showProduct(teaData);


    teaButton.classList.add("active");

    coffeeButton.classList.remove("active");

});


coffeeButton.addEventListener("click", function(){

    showProduct(coffeeData);


    coffeeButton.classList.add("active");

    teaButton.classList.remove("active");

});

showProduct(teaData);