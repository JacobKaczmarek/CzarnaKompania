<template>
  <div class="postWrapper">
    <div class="header">
      <img src="../assets/juwe_logo.png" alt>
      <h1>Frisbee na Juwenaliach!</h1>
    </div>
    <div class="content">
      Przez cały czas trwania Juwenaliów zapraszamy do strefy animacji, gdzie będziemy zarażać Was naszą zajawką do frisbee! Powiemy Wam o rzutach i chwytach. Opowiemy historie z Mistrzostw Europy i Świata. Pokażemy Wam freestyle i discgolf. Czekamy na Was przy flagach Ultimate Frisbee!
      Poznań jest kolebką polskiego Ultimate. To właśnie tu, ponad 20 lat temu, na Cytadeli odbył się pierwszy mecz frisbee. Obecnie w mieście istnieją już 3 drużyny i my, Czarna Kompania, zachęcamy wszystkich do spróbowania swoich sił w trakcie Juwenaliów – a potem zapraszamy na treningi!
      Specjalnie dla Was uruchamiamy treningi:
      - w poniedziałki, na polanie przy Dzwonie Pokoju o godz. 18:00 - w środy, na polanie przy Dzwonie Pokoju o godz. 18:00
      Przyjdź, pokażemy Ci jak rzucać frisbee bez psów!
    </div>
  </div>
</template>

<script>
export default {
  name: "Post"
};
</script>


<style lang="scss" scoped>
.postWrapper {
  margin: 40px auto;
}

.header {
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 765px) {
    flex-direction: column;
    align-items: flex-start;
  }

  img {
    width: 200px;
    object-fit: contain;
  }

  h1 {
    font-size: 1.6em;
    border-left: 2px solid gray;
    padding: 20px;
    margin-left: 20px;
    font-weight: normal;

    @media (max-width: 7655px) {
      border: none;
      margin-left: 0;
      padding-left: 0;
    }
  }
}

.content {
  margin-top: 50px;
  line-height: 25px;

  @media (max-width: 765px) {
    margin-top: 20px;
  }
}
</style>
