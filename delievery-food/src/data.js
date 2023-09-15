export const restaurants = [
    {
        id: 1,
        name: "Пицца плюс",
        delieveryTime: 50,
        rating: "4.5",
        price: "900",
        category: {
            id: 1,
            name: "Пицца"
        },
        image: { 
            src: "pizza-plus/preview.jpg",
            alt: "image"
        }
    },
    {
        id: 2,
        name: "Тануки",
        delieveryTime: 60,
        rating: "4.5",
        price: "1200",
        category: {
            id: 2,
            name: "Суши, Роллы",
        },
        image: { 
            src: "tanuki/preview.jpg",
            alt: "image"
        }
    },
    {
        id: 3,
        name: "FoodBand",
        delieveryTime: 40,
        rating: "4.5",
        price: "450",
        category: {
            id: 1,
            name: "Пицца"
        },
        image: { 
            src: "food-band/preview.jpg",
            alt: "image"
        }
    },
    {
        id: 4,
        name: "Палки скалки",
        delieveryTime: 55,
        rating: "4.5",
        price: "500",
        category: {
            id: 1,
            name: "Пицца"
        },
        image: { 
            src: "palki-skalki/preview.jpg",
            alt: "image"
        }
    },
    {
        id: 5,
        name: "Гуси Лебеди",
        delieveryTime: 75,
        rating: "4.5",
        price: "1000",
        category: {
            id: 3,
            name: "Русская кухня"
        },
        image: { 
            src: "gusi-lebedi/preview.jpg",
            alt: "image"
        }
    },
    {
        id: 6,
        name: "PizzaBurger",
        delieveryTime: 45,
        rating: "4.5",
        price: "700",
        category: {
            id: 1,
            name: "Пицца"
        },
        image: { 
            src: "pizza-burger/preview.jpg",
            alt: "image"
        }
    },
]
export const pizzas = [
    {
        id: 1,
        name: "Пицца Везувий",
        price: 545,
        ingredients: [
            {
                id: 1,
                name: "Cоус Томатный"
            },
            {
                id: 2,
                name: "сыр \"Моцарелла\""
            },
            {
                id: 3,
                name: "ветчина"
            },
            {
                id: 4,
                name: "пепперони"
            },
            {
                id: 5,
                name: "\"Перец Халапенье\""
            },
            {
                id: 6,
                name: "соус \"Табаско\""
            },
            {
                id: 7,
                name: "томаты"
            }
        ],
        image: {
            src: "pizza-plus/pizza-vesuvius.jpg",
            alt: "image"
        }
    },
    {
        id: 2,
        name: "Пицца девичник",
        price: 450,
        ingredients: [
            {
                id: 1,
                name: "Cоус томатный"
            },
            {
                id: 8,
                name: "постное тесто"
            },
            {
                id: 9,
                name: "нежирный сыр"
            },
            {
                id: 10,
                name: "кукуруза"
            },
            {
                id: 11,
                name: "лук"
            },
            {
                id: 12,
                name: "маслины"
            },
            {
                id: 13,
                name: "грибы"
            },
            {
                id: 14,
                name: "помидоры"
            },
            {
                id: 15,
                name: "болгарский перец"
            }
        ],
        image: {
            src: "pizza-plus/pizza-girls.jpg",
            alt: "image"
        }
    },
    {
        id: 3,
        name: "Пицца Оле-Оле",
        price: 440,
        ingredients: [
            {
                id: 1,
                name: "Cоус томатный"
            },
            {
                id: 2,
                name: "сыр \"Моцарелла\""
            },
            {
                id: 16,
                name: "черри"
            },
            {
                id: 12,
                name: "маслины"
            },
            {
                id: 17,
                name: "зелень"
            },
            {
                id: 18,
                name: "майонез"
            }
        ],
        image: {
            src: "pizza-plus/pizza-classic.jpg",
            alt: "image"
        }
    },
    {
        id: 4,
        name: "Пицца Плюс",
        price: 805,
        ingredients: [
            {
                id: 1,
                name: "Cоус томатный"
            },
            {
                id: 2,
                name: "сыр \"Моцарелла\""
            },
            {
                id: 19,
                name: "сыр \"Чеддер\""
            },
            {
                id: 7,
                name: "томаты"
            },
            {
                id: 4,
                name: "пепперони"
            },
            {
                id: 20,
                name: "телятина"
            },
            {
                id: 13,
                name: "грибы"
            },
            {
                id: 21,
                name: "бекон"
            },
            {
                id: 15,
                name: "болгарский перец"
            }
        ],
        image: {
            src: "pizza-plus/pizza-plus.jpg",
            alt: "image"
        }
    },
    {
        id: 5,
        name: "Пицца Гавайская",
        price: 440,
        ingredients: [
            {
                id: 1,
                name: "Cоус томатный"
            },
            {
                id: 2,
                name: "сыр \"Моцарелла\""
            },
            {
                id: 3,
                name: "ветчина"
            },
            {
                id: 22,
                name: "ананасы"
            }
        ],
        image: {
            src: "pizza-plus/pizza-hawaiian.jpg",
            alt: "image"
        }
    },
    {
        id: 6,
        name: "Пицца Классика",
        price: 510,
        ingredients: [
            {
                id: 1,
                name: "Cоус томатный"
            },
            {
                id: 2,
                name: "сыр \"Моцарелла\""
            },
            {
                id: 23,
                name: "сыр \"Пармезан\""
            },
            {
                id: 3,
                name: "ветчина"
            },
            {
                id: 24,
                name: "салями"
            },
            {
                id: 13,
                name: "грибы"
            },
        ],
        image: {
            src: "pizza-plus/pizza-classic.jpg",
            alt: "image"
        }
    }
]