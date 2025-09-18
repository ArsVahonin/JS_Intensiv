<template>
  <header class="header">
            <div class="container">
                <div class="header-box">
                    <router-link to="/" class="header-logo logo">
                        <img src="../assets/images/logo.png" alt="logo">
                    </router-link>
                    <div class="header-buttons flex">
                        <button class="button button-active flex"><img src="../assets/images/icons/user.svg" alt="">Войти</button>
                        <button class="button flex" @click="openModal()"><img src="../assets/images/icons/shopping-cart.svg" alt="">Корзина</button>
                    </div>
                </div>
            </div>
        </header>
</template>

<script setup>
    const emit = defineEmits(['toogleModal'])
    const openModal = () => {
        emit('toogleModal')
    }

</script>

<style scoped>
    .header {
    min-height: 124px;
    padding: 20px 0;
}

.header-box {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    width: 100px;
    padding-right: 35px;
}

.logo img {
    width: 100%;
    min-width: 100px;
}

.header-buttons {
    gap: 8px;
}



/* .button:active {
    border: #1890FF 1px solid;
    background-color: #1890FF;
    color: #fff;
} */

</style>