<template>
  <div class="postWrapper">
    <div class="header">
      <div class="title">
        <h1>{{title}}</h1>
        <h2>{{date}}</h2>
      </div>
      <img :src="thumbnail" alt />
    </div>
    <div class="content"><span v-html="content"></span></div>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  name: 'Post',
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      title: this.post.Title,
      content: this.post.Content,
      thumbnail: this.post.Thumbnail ? this.post.Thumbnail.url : '',
      date: this.post.Date.split('T')[0],
    };
  },
};
</script>


<style lang="scss" scoped>
.postWrapper {
  margin: 40px auto 100px auto;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 765px) {
    flex-direction: column;
    align-items: flex-start;
  }

  img {
    height: 150px;
    max-width: 200px;
    object-fit: contain;
  }

  .title {
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

    h2 {
      opacity: 0.6;
      font-size: 1em;
      margin: 0;
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

.line {
  height: 2px;
  width: 100%;
  background: #ccc;
  border-radius: 1px;
  margin: 50px 0px;
}
</style>
