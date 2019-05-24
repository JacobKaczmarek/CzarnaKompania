<template>
  <div class="navigationWrapper">
    <div class="mobileWrapper">
      <router-link to="/">czarna kompania</router-link>
      <i class="fas fa-bars" @click="toggleMenu()"></i>
    </div>
    <nav @click="toggleMenu()" class="folded" id="navigation">
      <router-link v-for="link of links" :to="link.to" :key="link.id">{{ link.text }}</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      folded: true,
      links: [
        {
          id: 0,
          to: "people",
          text: "Ludzie"
        },
        {
          id: 1,
          to: "ultimate",
          text: "Ultimate"
        },
        {
          id: 2,
          to: "contact",
          text: "kontakt"
        },
        {
          id: 3,
          to: "training",
          text: "trenuj"
        }
      ]
    };
  },
  methods: {
    toggleMenu() {
      $("#navigation").toggleClass("folded");
      this.folded = !this.folded;
    }
  }
};
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
  list-style: none;

  @media (min-width: 768px) {
    flex-direction: row;

    a {
      margin-left: 15px;
    }
  }
}

.folded {
  display: none;

  @media (min-width: 768px) {
    display: flex;
  }
}

a {
  position: relative;
  text-decoration: none;
  color: rgb(214, 214, 214);
  font-size: 2em;
  text-transform: uppercase;
  font-family: "Germania One", cursive;
  margin: 0;
}

a::first-letter {
  color: rgb(145, 11, 11);
}

a::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  width: 0;
  background: rgb(145, 11, 11);
  transition-duration: 0.2s;
}

a:hover::after {
  width: 100%;
  color: white;
}

.navigationWrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
  padding: 20px;
  background: rgba(0, 0, 0, 0.75);

  @media (min-width: 768px) {
    flex-direction: row;
  }
}

.mobileWrapper {
  width: 100%;
  display: flex;
  justify-content: space-between;

  i {
    font-size: 2em;
    color: white;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    i {
      display: none;
    }
  }
}
</style>
