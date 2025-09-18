
<template>
  <section class="banner">
    <div class="container">
      <div class="banner-item">
        <h2 class="banner-item-title">Онлайн-сервис <br />дом еды на дом</h2>
        <p class="banner-item-subtittle">
          Блюда из любимого ресторана привезет курьер в перчатках, маске и с антисептиком
        </p>
      </div>
    </div>
  </section>
    <div class="products">
    <div class="container">
      <div class="main-box">
        <div class="main-info flex">
          <div class="main-title">
            <h3 class="main-title-text">Рестораны</h3>
          </div>
          <div class="search-container">
            <input
              type="text"
              placeholder="Поиск блюд и ресторанов"
              class="search-input"
              id="searchInput"
            />
          </div>
        </div>

        <div class="cards-container flex" id="cardsContainer">
          <router-link
            class="card"
            v-for="rest in restArray"
            :key="rest.id"
            :to="`/rest?=${rest.id}`"
          >
            <div class="card-img">
              <img :src="getUrl(rest.img)" :alt="rest.title"/>
            </div>
            <div class="card-text flex">
              <div class="card-title">{{ rest.title }}</div>
              <div class="card-subtitle">{{ rest.time }} мин</div>
            </div>
            <div class="card-description flex">
              <p class="card-description-ratio">
                <img src="../assets/images/icons/star.svg" alt="" srcset="" /> {{ rest.raiting }}
              </p>
              <p class="card-description-price">{{ rest.price }} &#8381;</p>
              <p class="card-description-group">{{ rest.type }}</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    </div>
</template>

<script setup>

import { restArray } from '../constants/rests'
const getUrl = (name) => {
    return new URL(`../assets/images/cards/restaraunt/${name}`, import.meta.url)
}

</script>