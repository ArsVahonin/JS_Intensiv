<template>
  <div class="cart-modal__overlay" :class="{ open: isOpen }" @click.self="closeModal()">
    <div class="cart-modal">
      <div class="cart-modal__header flex">
        <div class="cart-modal__header--tittle">Корзина</div>
        <div class="cart-modal__header--close" @click="closeModal()">
          <img src="../assets/images/icons/exit.svg" alt="close window" />
        </div>
      </div>
      <div class="cart-modal__body">
        <div class="cart-item flex">
          <p class="cart-item__title">Ролл угорь стандарт</p>

          <div class="cart-item__controls flex">
            <div class="cart-item__controls--price">250 &#8381;</div>

            <div class="cart-item__controls--minus">
              <button class="button">-</button>
            </div>
            <div class="cart-item__controls--amount">1</div>
            <button class="button">+</button>
          </div>
        </div>
        <div class="cart-item flex">
          <p class="cart-item__title">Ролл угорь стандарт</p>

          <div class="cart-item__controls flex">
            <div class="cart-item__controls--price">250 &#8381;</div>

            <div class="cart-item__controls--minus">
              <button class="button">-</button>
            </div>
            <div class="cart-item__controls--amount">1</div>
            <button class="button">+</button>
          </div>
        </div>

        <div class="cart-item flex">
          <p class="cart-item__title">Ролл угорь стандарт</p>

          <div class="cart-item__controls flex">
            <div class="cart-item__controls--price">250 &#8381;</div>

            <div class="cart-item__controls--minus">
              <button class="button">-</button>
            </div>
            <div class="cart-item__controls--amount">1</div>
            <button class="button">+</button>
          </div>
        </div>

        <div class="cart-item flex">
          <p class="cart-item__title">Ролл угорь стандарт</p>

          <div class="cart-item__controls flex">
            <div class="cart-item__controls--price">250 &#8381;</div>

            <div class="cart-item__controls--minus">
              <button class="button">-</button>
            </div>
            <div class="cart-item__controls--amount">1</div>
            <button class="button">+</button>
          </div>
        </div>

        <div class="cart-item flex">
          <p class="cart-item__title">Ролл угорь стандарт</p>

          <div class="cart-item__controls flex">
            <div class="cart-item__controls--price">250 &#8381;</div>

            <div class="cart-item__controls--minus">
              <button class="button">-</button>
            </div>
            <div class="cart-item__controls--amount">1</div>
            <button class="button">+</button>
          </div>
        </div>
      </div>
      <div class="cart-modal__footer flex">
        <div class="cart-modal__footer--total">
          <div class="cart-modal__footer--total--price">1250 &#8381;</div>
        </div>
        <div class="cart-modal__footer--button">
          <button class="button button-active">Оформить заказ</button>
          <button class="button" id="cancel">Отмена</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const {isOpen} = defineProps({isOpen: Boolean})
    const emit = defineEmits(['toogleModal'])
    const closeModal = () => emit('toogleModal')
</script>

<style scoped>
.cart-modal__overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 100;

  justify-content: center;
  align-items: center;
  display: none;
}

.cart-modal__overlay.open {
  display: flex;
}

.cart-modal {
  width: 100%;
  max-width: 780px;
  padding: 40px 45px;
  background: #fff;
  border-radius: 5px;
}

.cart-modal__header {
  justify-content: space-between;
  align-items: center;
  margin-bottom: 48px;
}

.cart-modal__header--tittle {
  color: #000;
  font-size: 36px;
  font-weight: 700;
}

.cart-modal__header--close {
  cursor: pointer;
}

.cart-item {
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  border-bottom: #d9d9d9 1px solid;
  padding-bottom: 20px;
  margin-bottom: 20px;
}

.cart-item:not(:last-child) {
  padding-bottom: 17px;
  margin-top: 8px;
}

.cart-item__title {
  color: #000;
  font-size: 18px;
  font-weight: 400;
}

.cart-item__controls--price {
  margin-right: 47px;
  color: #000;
  font-size: 20px;
  font-weight: 700;
  line-height: 32px;
}

.cart-item__controls {
  align-items: center;
  gap: 10px;
}

.cart-item__controls button {
  border: #1890ff 1px solid;
  background-color: #fff;
  color: #1890ff;
}

.cart-item__controls--amount {
  margin-left: 15px;
  margin-right: 15px;
}

.cart-modal__footer {
  margin-top: 50px;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}

.cart-modal__footer--total--price {
  padding: 15px 20px;
  color: #fafafa;
  background-color: #262626;
  font-size: 20px;
  font-weight: 400;
  border-radius: 2px;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0);
}

.cart-modal__footer--button {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}
</style>