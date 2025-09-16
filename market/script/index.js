const modalFunc = () => {
    const modal = document.querySelector('.cart-modal__overlay');
    const cartBtn = document.querySelector('#cart');

    const openModal = () => {
        modal.classList.add('open');
    }

    const closeModal = () => {
        modal.classList.remove('open');
    }

    cartBtn.addEventListener('click', () => {
        openModal();
    });


    modal.addEventListener('click', (event) => {
        if (
            event.target.classList.contains('cart-modal__overlay') ||
            event.target.closest('.cart-modal__header--close')
        ) {
            closeModal();
        }
    })
};


const restFunc = () => {
    const container = document.querySelector('#cardsContainer');

    const loading = () => {
        container.innerHTML = '<p style="width: 100%; text-align: center;">Загрузка...</p>'
    }

    const restArray = [
        {
            id: 0,
            title: 'Пицца плюс',
            time: 50,
            price: 900,
            raiting: 4.5,
            type: 'Пицца',
            img: './images/cards/restaraunt/PizzaPlus.jpg'
        },
        {
            id: 1,
            title: 'Пицца Тануки',
            time: 50,
            price: 900,
            raiting: 4.5,
            type: 'Пицца',
            img: './images/cards/restaraunt/Tanuki.jpg'
        },
        {
            id: 2,
            title: 'Food Band',
            time: 50,
            price: 900,
            raiting: 4.5,
            type: 'Пицца',
            img: './images/cards/restaraunt/FoodBand.jpg'
        },
        {
            id: 3,
            title: 'Жадина-пицца',
            time: 50,
            price: 900,
            raiting: 4.5,
            type: 'Пицца',
            img: './images/cards/restaraunt/Zhadina.jpg'
        },
        {
            id: 4,
            title: 'Точка еды',
            time: 50,
            price: 900,
            raiting: 4.5,
            type: 'Пицца',
            img: './images/cards/restaraunt/TochkaEdi.jpg'
        },
        {
            id: 5,
            title: 'PizzaBurger',
            time: 50,
            price: 900,
            raiting: 4.5,
            type: 'Пицца',
            img: './images/cards/restaraunt/PizzaBurger.jpg'
        }
    ]

    const randerRests = (array) => {
        container.innerHTML = '';

        array.forEach((card) => {
            container.insertAdjacentHTML('beforeend', `
            <a href="./goods.html?id=${card.id}" class="card">
                <div class="card-img">
                    <img src="${card.img}" alt="${card.title}">
                </div>
                <div class="card-text flex">
                    <div class="card-title">${card.title}</div>
                    <div class="card-subtitle">${card.time} мин</div>
                </div>
                <div class="card-description flex">
                    <p class="card-description-ratio"><img src="./images/icons/star.svg" alt="" srcset=""> ${card.raiting}</p>
                    <p class="card-description-price">От ${card.price} &#8381;</p>
                    <p class="card-description-group">${card.type}</p>
                </div>
            </a>
            `);
        });
    }

    if (container) {
        loading();

        setTimeout(() => {
            randerRests(restArray);
            console.log('restArray:', restArray);
        }, 1000);
    }

};

const goodsFunc = () => {
    const productContainer = document.querySelector('#productCardsContainer');

    const loading = () => {
        productContainer.innerHTML = '<p style="width: 100%; text-align: center;">Загрузка...</p>'
    }

    const productArry = [
        {
            id: 0,
            title: 'Ролл угорь стандарт',
            price: 250,
            desc: 'Рис, угорь, соус унаги, кунжут, водоросли нори.',
            img: './images/cards/goods/Ugor.jpg'
        },
        {
            id: 1,
            title: 'Калифорния лосось стандарт',
            price: 395,
            desc: 'Рис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори.',
            img: './images/cards/goods/California.jpg'
        },
        {
            id: 2,
            title: 'Окинава стандарт',
            price: 250,
            desc: 'Рис, креветка отварная, сыр сливочный, лосось, огурец свежий...',
            img: './images/cards/goods/Okinava.jpg'
        },
        {
            id: 3,
            title: 'Цезарь маки хl',
            price: 250,
            desc: 'Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь...',
            img: './images/cards/goods/Ceaser.jpg'
        },
        {
            id: 4,
            title: 'Ясай маки стандарт 185 г',
            price: 250,
            desc: 'Рис, помидор свежий, перец болгарский, авокадо, огурец, айсберг',
            img: './images/cards/goods/YasayMaki.jpg'
        },
        {
            id: 5,
            title: 'Ролл с креветкой стандарт',
            price: 250,
            desc: 'Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы',
            img: './images/cards/goods/ShrimpRoll.jpg'
        }

    ]

    const randerProducts = (array) => {
        productContainer.innerHTML = '';

        array.forEach((card) => {
            productContainer.insertAdjacentHTML('beforeend', `
                                    
                                 <div class="card">
                                 <div class="card-img">
                                        <img src="${card.img}" alt="Калифорния">
                                    </div>
                                    <div class="card-text flex">
                                        <div class="card-text__row">
                                            <h5 class="card-text__row--name">
                                                ${card.title}
                                            </h5>
                                        </div>
                                        <div class="card-text__row ">
                                            <p class="card-text__row--text">
                                                ${card.desc}
                                            </p>
                                        </div>
                                        <div class="card-text__row">
                                            <div class="card-text__row-controls flex">
                                                <div class="button button-active flex">Корзина <img
                                                        src="images/icons/shopping-cart-white.svg" alt="Shopping cart">
                                                </div>
                                                <span class="card-text__row-controls--price">${card.price} &#8381;</span>
                                            </div>
                                        </div>
                                    </div>
                                 </div>   
            `);
        });
    }

    if (productContainer) {
        loading();

        setTimeout(() => {
            randerProducts(productArry);
        }, 1000);
    }

}

goodsFunc()
modalFunc()
restFunc()

