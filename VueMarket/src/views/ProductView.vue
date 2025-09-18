

<template>
  <main class="main">
    <section class="products">
      <div class="container">
        <div class="main-box">
          <div class="main-info flex">
            <div class="main-title">
              <h3 class="main-title-text">Тануки</h3>
            </div>
            <div class="main-title-ratio flex">
              <p class="card-description-ratio">
                <img src="../assets/images/icons/star.svg" alt="" srcset="" /> 4.5
              </p>
              <p class="card-description-price">От 900 &#8381;</p>
              <p class="card-description-group">Пицца и суши</p>
            </div>
          </div>
          <div class="cards-container flex" id="productCardsContainer">
            <div class="card" v-for="goods in productArray">
              <div class="card-img">
                <img :src="getUrl(goods.img)" :alt="goods.title" />
              </div>
              <div class="card-text flex">
                <div class="card-text__row">
                  <h5 class="card-text__row--name">{{ goods.title }}</h5>
                </div>
                <div class="card-text__row">
                  <p class="card-text__row--text">
                    {{ goods.desc }}
                  </p>
                </div>
                <div class="card-text__row">
                  <div class="card-text__row-controls flex">
                    <div class="button button-active flex">
                      Корзина
                      <img
                        src="../assets/images/icons/shopping-cart-white.svg"
                        alt="Shopping cart"
                      />
                    </div>
                    <span class="card-text__row-controls--price">{{ goods.price }} &#8381;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>

import { productArray } from "../constants/goods"


const getUrl = (name) => {  
  return new URL(`../assets/images/cards/goods/${name}`, import.meta.url)
}
</script>