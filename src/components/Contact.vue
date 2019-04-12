<template>
  <div class="contactWrapper">
    <h1>Znajdziesz nas tutaj</h1>
    <div class="iconsContainer">
      <a
        href="https://www.facebook.com/czarnakompania.ultimate/?__tn__=%2Cd%2CP-R&eid=ARASu9gcMIEC7I8X4yEND8WdYpE0xTAdp9dHIYgqpBvtEAsgd41qycY3OKvWEHbzthc7PrY6PjoBbGS0"
      >
        <i class="fab fa-facebook"></i>
      </a>
      <a href="https://www.instagram.com/czarnakompania/">
        <i class="fab fa-instagram"></i>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contactWrapper {
  text-align: center;
  color: white;
  margin-top: 40px;
  margin: 10px;

  @media (min-width: 768px) {
    position: relative;
    top: 30%;
    width: 70%;
    margin: auto;
  }
}

.iconsContainer {
  display: flex;
  justify-content: center;

  a {
    cursor: pointer;
    color: inherit;
    margin: 20px;
  }

  i {
    font-size: 3em;
  }
}
</style>