<template>
  <div id="SingleBlog">
    <div v-for="item in blog" :key="item.index">
      <h1>{{item.title}}</h1>
      <article>{{item.body}}</article>
    </div>
    <div class="modify">
      <button @click="modify">编辑</button>
      <button @click="deleteblog">删除</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      blog: []
    };
  },
  created() {
    this.$http
      .get(`http://localhost:3000/blog-content/single?id=${this.id}`)
      .then(data => {
        console.log(data);
        this.blog = data.body;
      });
  },
  methods: {
    modify() {
      this.$router.push({ name: "modifyBlog", query: { id: this.id } });
    },
    deleteblog() {
      if (window.confirm("确定删除吗")) {
        this.$http
          .get(`http://localhost:3000/blog-content/delete?id=${this.id}`)
          .then(
              
          );
          this.$router.push("/");
      }
    }
  },

};
</script>
<style scoped>
#SingleBlog {
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
  background: #eee;
  border: 1px solid #aaa;
}
</style>