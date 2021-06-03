var data = [{
        "img": "img/listing1.png",
        "name": "Coalesce: Functioning On Impatience T-Shirt",
        "description": "When you're dress-hunting, you want to find something that's fun, comfortable, flattering, and uniquely you! So, why not start with a sundress? They always brighten up the environment around you and inspire positivity wherever you go! \nLooking for some color to brighten up your day? Check out the cotton sundresses. ",
        "price": 15.00,
        "stars": 3
    },
    {
        "img": "img/listing2.png",
        "name": "Coalesce: Functioning On Impatience T-Shirt",
        "description": "When you're dress-hunting, you want to find something that's fun, comfortable, flattering, and uniquely you! So, why not start with a sundress? They always brighten up the environment around you and inspire positivity wherever you go! \nLooking for some color to brighten up your day? Check out the cotton sundresses. ",
        "price": 22.00,
        "stars": 5
    },
    {
        "img": "img/listing3.png",
        "name": "Coalesce: Functioning On Impatience T-Shirt",
        "description": "When you're dress-hunting, you want to find something that's fun, always brighten up the environment around you and inspire positivity wherever you go! \nLooking for some color to brighten up your day? Check out the cotton sundresses. ",
        "price": 55.00,
        "stars": 1
    },
    {
        "img": "img/listing1.png",
        "name": "Coalesce: Functioning On Impatience T-Shirt",
        "description": "When you're dress-hunting, you want to find something that's fun, comfortable, flattering, and uniquely you! So, why not start with a sundress? They always brighten up the environment around you and inspire positivity wherever you go! \nLooking for some color to brighten up your day? Check out the cotton sundresses. ",
        "price": 15.00,
        "stars": 3
    },
    {
        "img": "img/listing4.png",
        "name": "Coalesce: Functioning On Impatience T-Shirt",
        "description": "When you're dress-hunting, you want to find something that's fu",
        "price": 33.98,
        "stars": 3
    },
    {
        "img": "img/listing5.png",
        "name": "Coalesce: Functioning On Impatience T-Shirt",
        "description": "When you're dress-hunting, you want to find something that's fun, comfortable, flattering, and uniquely you! So, why not start with a sundress? They always brighten up the environment around you and inspire positivity wherever you go! \nLooking for some color to brighten up your day? Check out the cotton sundresses. ",
        "price": 13.50,
        "stars": 5
    },
    {
        "img": "img/listing6.png",
        "name": "The Get Up Kids:Band Camp Pullover Hoodie Hoodie Hoodie Hoodie",
        "description": "When you're dress-hunting, you want to find something that's fun, comfortable, flattering, and uniquely you! So, why not start with a sundress? They always brighten up the environment around you and inspire positivity wherever you go! \nLooking for some color to brighten up your day? Check out the cotton sundresses. ",
        "price": 12.30,
        "stars": 1
    },
    {
        "img": "img/listing7.png",
        "name": "Coalesce: Functioning On Impatience T-Shirt",
        "description": "When you're dress-hunting, you want to find something that's fun, why not start with a sundress? They always brighten up the environment around you and inspire positivity wherever you go! \nLooking for some color to brighten up your day? Check out the cotton sundresses. ",
        "price": 169.99,
        "stars": 3
    },
    {
        "img": "img/listing8.png",
        "name": "Coalesce: Functioning On Impatience T-Shirt",
        "description": "When you're dress-hunting, you want to find something that's fun, comfortable, flattering, and uniquely you! So, why not start with a sundress? They always brighten up the environment around you and inspire positivity wherever you go! \nLooking for some color to brighten up your day? Check out the cotton sundresses. ",
        "price": 198.29,
        "stars": 1
    }
]

const renderItem = () => {
    document.querySelector('.items').innerHTML += fillListing()
}

/**
 * Получаем данные из массива объектов и заполняем листинг
 * @returns {string} html элементы листинга
 */
const fillListing = () => {
    let output = ``

    data.forEach((item) => {
        output += `
    <div class="wrapper" description="${item.description}">
        <div class="item-content">
            <img src="${item.img}" alt="item">
            <p class="item-content__name">${item.name}</p>
            <div class="item-content__bottom-wrapper">
                <div class="item-content__price-wrapper">
                    <span class="item-content__dollar">$</span>
                    <span class="item-content__main-price">${item.price ? item.price.toFixed(0): '99'}.</span>
                    <span class="item-content__cents">${calculateCents(item.price)}</span>
                </div>
                <div><a class="item-content__to-cart-btn">Add to cart</a></div> 
            </div>
            <h2 class="item-content__stars-block"><span class="item-content__star">${'&#9733;'.repeat(item.stars)}</span></h2>
        </div>
    </div>`
    })

    return output
}

/**
 * Проверяет наличие центов и возвращает их
 * @param {number} sum - общая цена
 * @returns {string} cents
 */
const calculateCents = (sum) => {
    let strSum = sum ? sum.toString() : '00'
    const indexPoint = strSum.indexOf('.') + 1

    strSum = indexPoint === 0 ? '00' : strSum.substring(indexPoint, strSum.length)

    return strSum.length === 1 ? strSum += '0' : strSum
}

window.onload = renderItem