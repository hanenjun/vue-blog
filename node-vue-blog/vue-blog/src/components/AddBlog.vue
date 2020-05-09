<template>
  <div id="add-blog">
    <h2>添加博客</h2>
    <form action="http://localhost:3000/add-blog" v-if="!submmited">
      <label for>博客标题：</label>
      <input type="text" name id v-model="blog.title" required />
      <br />
      <label for>博客内容：</label>
      <textarea name id cols="30" rows="10" v-model="blog.content"></textarea>
      <div id="checkboxes" name="calss">
          <h4>分类</h4>
            <input type="text" name="categories" id="" v-model="blog.categories">
      </div>
      <label for>作者：</label>
            <input type="text" name="authors" id="" v-model="blog.authors">
      <button v-on:click.prevent="post">添加博客</button>
    </form>
    <div v-if="submmited">
      <h3>您的博客发布成功！</h3>
    </div>
    <!-- <div id="previw">
      <h3>博客总览</h3>
      <p>博客标题：{{blog.title}}</p>
      <p>博客内容：</p>
      <p>{{blog.content}}</p>
      <p>博客分类</p>
      <ul v-for="item in blog.categories" :key="item.index">
        <li>{{item}}</li>
      </ul>
      <p>作者：{{blog.authors}}</p>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      blog: {
        title: "",
        content: "",
        categories: "",
        authors: ""
      },
      submmited: false
    };
  },
  methods: {
    post() {
      this.$http
        .post("http://localhost:3000/add-blog", {
          title: this.blog.title,
          body: this.blog.content,
          classification: this.blog.categories,
          author: this.blog.authors
        })
        .then(data => {
          console.log(data);
          this.submmited = true;
        });
    }
  },
  watch:{
    submmited(){
      if(this.submmited){
         setTimeout(()=>{
            this.$router.push("/");
         },500)
      }
    }
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