<template>
  <div class="contactWrapper">
    <h1>Znajdziesz nas tutaj</h1>
    <br>
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
    <a href="mailto:czarna.kompania.poznan@gmail.com" class="mail">
      <i class="fa fa-envelope" aria-hidden="true"></i>
      <p>czarna.kompania.poznan@gmail.com</p>
    </a>
  </div>
</template>

<style lang="scss" scoped>
.contactWrapper {
  display: block;
  text-align: center;
  padding: 30px 15px;
  height: 90vh;
  color: white;
  line-height: 25px;

  @media (min-width: 768px) {
    position: relative;
    top: 30%;
    width: 70%;
    margin: auto;
  }

  h1 {
    @media (max-width: 765px) {
      font-size: 25px;
    }
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
    transition: 0.3s;
  }

  i:hover {
    color: rgb(145, 11, 11);
  }
}

.mail {
  text-decoration: none;
  color: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.1em;
  font-weight: 400;

  @media (max-width: 765px) {
    font-size: 15px;
  }
  i {
    margin-right: 10px;
  }
}
</style>
