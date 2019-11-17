<template>
  <div>
    <div class="ckWrapper" id="top">
      <h1>Czarna Kompania</h1>
      <br>
      <p>
        Czarna Kompania to klub sportowy, paczka przyjaciół,
        mieszkańcy Poznania i okolic. Drużyna powstała w
        2018 roku, stawiając sobie za cel zebranie osób,
        które na poważnie biorą osobisty rozwój. Od początku
        współpracujemy z Młodzieżową Akademią Frisbee,
        prowadzimy warsztaty rzutowe i zajęcia animacyjne
        dla dzieci, młodzieży i dorosłych. Chcemy aktywnie
        dawać coś od siebie naszym lokalnym społecznościom i
        być przykładem dla wzrastającego pokolenia. Jesteśmy
        aktualnie Mistrzem III Ligi, dzięki czemu w kolejnym
        sezonie będziemy piąć się po szczeblach
      </p>
      <a @click="scrollToNews()" class="arrow">
        <i class="fa fa-chevron-down"></i>
      </a>
    </div>
    <News id="news"/>
    <a @click="scrollToTop()" class="to-top">
      <i class="fa fa-chevron-up"></i>
    </a>
  </div>
</template>

<script>
import News from '@/components/News';

export default {
  components: {
    News,
  },
  methods: {
    scrollToNews() {
      document.getElementById('news').scrollIntoView({ behavior: 'smooth' });
    },
    scrollToTop() {
      window.scrollTo({ behavior: 'smooth', top: 0 });
    },
  },
};

window.onscroll = function () {
  const pageOffset = document.documentElement.scrollTop;

  if (pageOffset >= 100) {
    document.querySelector('.to-top').style.visibility = 'visible';
  } else {
    document.querySelector('.to-top').style.visibility = 'hidden';
  }
};
</script>


<style lang="scss" scoped>
html {
  scroll-behavior: smooth;
}

.ckWrapper {
  display: block;
  text-align: left;
  padding: 30px 15px;
  height: 90vh;
  color: white;
  line-height: 25px;

  @media (min-width: 768px) {
    padding: 18% 180px;
    margin: auto;
  }
}

p {
  font-weight: 500;
}

.to-top {
  color: rgb(145, 11, 11);
  font-size: 2em;
  position: fixed;
  bottom: 30px;
  right: 30px;
  visibility: hidden;

  @media (max-width: 765px) {
    bottom: 10px;
    right: 15px;
  }
}

.arrow {
  position: relative;
  font-size: 3em;
  color: rgb(145, 11, 11);
  margin-top: 10%;
  left: 50%;
  animation: jump 3s infinite ease-in-out;
}

// Animation
@keyframes jump {
  0% {
    top: 150px;
  }
  60% {
    top: 150px;
  }
  70% {
    top: 160px;
  }
  80% {
    top: 150px;
  }
  90% {
    top: 160px;
  }
  100% {
    top: 150px;
  }
}
</style>
