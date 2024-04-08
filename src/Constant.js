import cakeImage from '../assets/images/cake1.png'
import pancakeImage from '../assets/images/pancake1.png'
import pancake2Image from '../assets/images/pancake2.png'
import pancake3Image from '../assets/images/pancake3.png'
import cookiesImage from '../assets/images/cookies1.png'
import tiramisuImage from '../assets/images/tiramisu1.png'

export const colors = {
    COLOR_PRIMARY: "pink",
    COLOR_LIGHT: "#fff",
    COLOR_DARK: "#000",
    COLOR_DARK_ALT: "262626",
}

export const categories = [
    {
        id: "01",
        category: "Торты"
    },
    {
        id: "02",
        category: "Панкейки"
    },
    {
        id: "03",
        category: "Печенье"
    },
    {
        id: "04",
        category: "Все"
    },
    {
        id: "05",
        category: "Напитки"
    },
]

export const goodsList = [
    {
        id: "01",
        name: "Кусочек Шоколад",
        image: cakeImage,
        price: 120,
        description: "У нас вы найдете великолепные торты, созданные по особым рецептам с использованием только самых свежих ингредиентов. Они точно порадуют ваш взгляд и нежностями.",
        kcal: 350,
        child: 'Можно',
        ingredients: [
                "Мука",
                "Яйца",
                "Молоко",  
                "Сливки",
                "Ванилин"
        ],
        category: "Торты"
    },
    {
        id: "02",
        name: "Кукисы",
        image: cookiesImage,
        price: 140,
        description: "Приходите в нашу пекарню и попробуйте наши нежные печенья, испеченные с любовью и украшенные изысканными декорациями.",
        kcal: 120,
        child: 'Можно',
        ingredients: [
                "Мука",
                "Яйца",
                "Молоко",  
                "Сливки",
                "Ванилин"
        ],
        category: "Печенье"
    },
    {
        id: "03",
        name: "Панкейк",
        image: pancakeImage,
        price: 130,
        description: "Не упустите возможность попробовать наши натуральные панкейки, приготовленное с любовью к деталям. Оно станет идеальным дополнением к вашему сладкому удовольствию.",
        kcal: 110,
        child: 'Можно',
        ingredients: [
                "Мука",
                "Яйца",
                "Молоко",  
                "Сливки",
                "Ванилин"
        ],
        category: "Панкейки"
    },
    {
        id: "04",
        name: "Панкейк",
        image: pancake2Image,
        price: 160,
        description: "Не упустите возможность попробовать наши натуральные панкейки, приготовленное с любовью к деталям. Оно станет идеальным дополнением к вашему сладкому удовольствию.",
        kcal: 140,
        child: 'Можно',
        ingredients: [
                "Мука",
                "Яйца",
                "Молоко",  
                "Сливки",
                "Ванилин"
        ],
        category: "Панкейки"
    },
    {
        id: "05",
        name: "Панкейк",
        image: pancake3Image,
        price: 180,
        description: "Не упустите возможность попробовать наши натуральные панкейки, приготовленное с любовью к деталям. Оно станет идеальным дополнением к вашему сладкому удовольствию.",
        kcal: 130,
        child: 'Можно',
        ingredients: [
                "Мука",
                "Яйца",
                "Молоко",  
                "Сливки",
                "Ванилин"
        ],
        category: "Панкейки"
    },
    {
        id: "06",
        name: "Панкейк",
        image: pancakeImage,
        price: 110,
        description: "Не упустите возможность попробовать наши натуральные панкейки, приготовленное с любовью к деталям. Оно станет идеальным дополнением к вашему сладкому удовольствию.",
        kcal: 130,
        child: 'Можно',
        ingredients: [
                "Мука",
                "Яйца",
                "Молоко", 
                "Сливки",
                "Ванилин"
        ],
        category: "Панкейки"
    },
    {
        id: "07",
        name: "Правильное питание",
        image: cakeImage,
        price: 220,
        description: "Отведайте наши роскошные пирожные, которые тают во рту, раскрывая богатство вкусов и текстур.",
        kcal: 70,
        child: 'Можно',
        ingredients: [
                "Мука",
                "Яйца",
                "Молоко",  
                "Сливки",
                "Ванилин"
        ],
        category: "Торты"
    },
    {
        id: "08",
        name: "Тирамису",
        image: tiramisuImage,
        price: 190,
        description: "Отведайте наши роскошные пирожные, которые тают во рту, раскрывая богатство вкусов и текстур.",
        kcal: 230,
        child: 'Можно',
        ingredients: [
                "Мука",
                "Яйца",
                "Молоко",  
                "Сливки",
                "Ванилин"
        ],
        category: "Торты"
    },
]