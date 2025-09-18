<template>
  <footer class="footer">
            <div class="container">
                <div class="footer-box flex">
                    <router-link to="/" class="footer-logo logo">
                        <img src="../assets/images/logo.png" alt="logo">
                    </router-link>
                    <div class="footer-nav">
                        <ul class="footer-list flex">
                            <li class="footer-item">
                                <a href="goods.html" target="_self" class="footer-link">Ресторанам</a>
                            </li>
                            <li class="footer-item">
                                <a href="goods.html" target="_self" class="footer-link">Курьерам</a>
                            </li>
                            <li class="footer-item">
                                <a href="goods.html" target="_self" class="footer-link">Пресс-центр</a>
                            </li>
                            <li class="footer-item">
                                <a href="goods.html" target="_self" class="footer-link">Контакты</a>
                            </li>
                        </ul>
                    </div>
                    <div class="footer-social">
                        <ul class="social flex">
                            <li class="social-item">
                                <a href="#" target="_blank" class="social-link">
                                    <img src="../assets/images/icons/facebook.svg" alt="facebook">
                                </a>
                            </li>
                            <li class="social-item">
                                <a href="#" target="_blank" class="social-link">
                                    <img src="../assets/images/icons/instagram.svg" alt="instagram">
                                </a>
                            </li>
                            <li class="social-item">
                                <a href="#" target="_blank" class="social-link">
                                    <img src="../assets/images/icons/vk.svg" alt="vkontakte">
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
    .footer {
    height: 156px;
    justify-content: space-between;
    align-items: center;
    padding: 60px 0;
}

.footer-box {
    min-height: 100%;
    justify-content: space-between;
    align-items: center;
    gap: 36px;
}

.footer-nav {
    flex-grow: 1;
}

.footer-item {
    color: #595959;
    display: inline-block;
}

.footer-list {
    gap: 15px;
}

.social {
    justify-content: flex-end;
    gap: 20px;
}

.footer-social {
    align-items: center;
    display: inline-block;
}
</style>