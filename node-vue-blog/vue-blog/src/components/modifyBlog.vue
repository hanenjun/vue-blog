<template>
  <div id="add-blog">
    <h2>添加博客</h2>
    <form action="http://localhost:3000/add-blog" v-if="!submmited">
      <label for>博客标题：</label>
      <input type="text" name id v-model="bloga.title" required />
      <br />
      <label for>博客内容：</label>
      <textarea name id cols="30" rows="10" v-model="bloga.content"></textarea>
      <div id="checkboxes" name="calss">
        <h4>分类</h4>
        <input type="text" name="categories" id v-model="bloga.categories" />
      </div>
      <label for>作者：</label>
      <input type="text" name="authors" id v-model="bloga.authors" />
      <button v-on:click.prevent="post">修改博客</button>
    </form>
    <!-- <div v-if="submmited">
      <h3>您的博客发布成功！</h3>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      bloga: {
        title: "aaa",
        content: "aaaa",
        categories: "aaaa",
        authors: "aaaa"
      },
      submmited: false,
      id: this.$route.query.id
    };
  },
  methods: {
    post() {
      this.$http.post("http://localhost:3000/modifyBlogblog", {
        id: this.$route.query.id,
        title: this.bloga.title,
        body: this.bloga.content,
        classification: this.bloga.categories,
        author: this.bloga.authors,
      });
      console.log(this.id)
      alert("修改成功")
      this.$router.push("/")
    }
  },
  created() {
    this.$http
      .get(`http://localhost:3000/blog-content/single?id=${this.id}`)
      .then(data => {
        console.log(data);
        console.log(data);
        this.bloga.title = data.body[0].title;
        this.bloga.content = data.body[0].body;
        this.bloga.categories = data.body[0].classification;
        this.bloga.authors = data.body[0].author;
      });
  }
};
</script>

<style scoped>
#add-blog * {
  box-sizing: border-box;
}
#add-blog {
  margin: 20px auto;
  max-width: 600px;
  padding: 20px;
}
label {
  display: block;
  margin: 20px 0 10px;
}
input[type="text"],
textarea,
select {
  display: block;
  width: 100%;
  padding: 8px;
}
#checkboxes label {
  margin-top: 0;
  display: inline-block;
}
#checkboxes input {
  display: inline-block;
  margin-right: 10px;
}
textarea {
  height: 200px;
}
button {
  display: block;
  margin: 20px 0;
  background-color: crimson;
  color: #fff;
  border: 0;
  padding: 14px;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
}
#previw {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
#previw h3 {
  margin-top: 10px;
}
</style>