//Search Function
const searchData = [
    {
        name: "Linen Shirt",
        type: "Product",
        link: "linen-shirt.html",
        keywords: "shirt linen white ivory men women best seller"
    },
    {
        name: "Cashmere Cardigan",
        type: "Product",
        link: "cashmere-cardigan.html",
        keywords: "cardigan cashmere navy oxford best seller"
    },
    {
        name: "Linen Trousers",
        type: "Product",
        link: "linen-trousers.html",
        keywords: "trousers pants linen white natural women best seller"
    },
    {
        name: "Suede Cap",
        type: "Product",
        link: "suede-cap.html",
        keywords: "cap hat suede teal accessories best seller"
    },
    {
        name: "Men",
        type: "Page",
        link: "men.html",
        keywords: "men mens collection"
    },
    {
        name: "Women",
        type: "Page",
        link: "women.html",
        keywords: "women womens collection"
    },
    {
        name: "Accessories",
        type: "Page",
        link: "accessories.html",
        keywords: "accessories cap bag"
    },
    {
        name: "Cart",
        type: "Page",
        link: "cart.html",
        keywords: "cart shopping bag checkout"
    }
];

const searchBtn = document.getElementById("searchBtn");
const searchBox = document.getElementById("searchBox");
const closeSearch = document.getElementById("closeSearch");
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

searchBtn.addEventListener("click", function(event) {
    event.preventDefault();

    searchBox.style.display = "flex";
    searchInput.focus();
});

closeSearch.addEventListener("click", function() {
    searchBox.style.display = "none";
    searchInput.value = "";
    searchResults.innerHTML = "";
});

searchInput.addEventListener("input", function() {
    let keyword = searchInput.value.toLowerCase().trim();

    searchResults.innerHTML = "";

    if (keyword === "") {
        return;
    }

    let filteredResults = searchData.filter(function(item) {
        return item.name.toLowerCase().includes(keyword) ||
                item.type.toLowerCase().includes(keyword) ||
                item.keywords.toLowerCase().includes(keyword);
    });

    if (filteredResults.length === 0) {
        searchResults.innerHTML = `<p class="no-result">No results found.</p>`;
        return;
    }

    filteredResults.forEach(function(item) {
        let resultItem = document.createElement("div");
        resultItem.className = "search-item";

        resultItem.innerHTML = `
            <h3>${item.name}</h3>
            <p>${item.type}</p>
        `;

        resultItem.addEventListener("click", function() {
            window.location.href = item.link;
        });

        searchResults.appendChild(resultItem);
    });
});

searchInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        let keyword = searchInput.value.toLowerCase().trim();

        let firstResult = searchData.find(function(item) {
            return item.name.toLowerCase().includes(keyword) ||
                    item.type.toLowerCase().includes(keyword) ||
                    item.keywords.toLowerCase().includes(keyword);
        });

        if (firstResult) {
            window.location.href = firstResult.link;
        }
    }
});
//Điều chỉnh The look
const products = {
        1: [
            {
                img: "image/Linen Shirt - Men/1.png",
                name: "Linen Shirt",
                gender: "Men"
            },
            {
                img: "image/Linen Pants - Men/1.png",
                name: "Linen Trousers",
                gender: "Men"
            },
        ],

        2: [
            {
                img: "image/Linen Shirt - Women/1.png",
                name: "Linen Shirt",
                gender: "Women"
            },
            {
                img: "image/Linen Pants - Women/1.png",
                name: "Linen Trousers",
                gender: "Women"
            },
        ]
    };

    let currentIndex = {
        1: 0,
        2: 0
    };

    function showProduct(lookNumber, index) {
        currentIndex[lookNumber] = index;

        let product = products[lookNumber][index];

        document.getElementById("productImg" + lookNumber).src = product.img;
        document.getElementById("productName" + lookNumber).innerText = product.name;
        document.getElementById("productGender" + lookNumber).innerText = product.gender;

        let dots = document.querySelectorAll(".dots" + lookNumber + " .dot");

        dots.forEach(function(dot) {
            dot.classList.remove("active");
        });

        dots[index].classList.add("active");
    }

    function nextProduct(lookNumber) {
        let nextIndex = currentIndex[lookNumber] + 1;

        if (nextIndex >= products[lookNumber].length) {
            nextIndex = 0;
        }

        showProduct(lookNumber, nextIndex);
    }

    function prevProduct(lookNumber) {
        let prevIndex = currentIndex[lookNumber] - 1;

        if (prevIndex < 0) {
            prevIndex = products[lookNumber].length - 1;
        }

        showProduct(lookNumber, prevIndex);
    }