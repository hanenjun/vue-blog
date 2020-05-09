<template>
    <div v-theme:column="'wide'" id="show-blogs">
        <h1>博客总览</h1>
        <input type="text" v-model="search" placeholder="搜索" class="search">
        <div class="single-blog" v-for="item in filteredBlogs" :key="item.index">
        <router-link :to="'/blog/'+item.id"><h2  v-reinbow>{{item.title | to-uppercase}}</h2></router-link>
            <article>
                {{item.body | snipet}}
            </article>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            blogs:[],
            search:""
        }
    },
    created(){

        this.$http.get("http://localhost:3000/blog-content",{
        }).then((data)=>{
            console.log(data)
            this.blogs = data.body.slice(0,10);
        })
    },
    computed:{
        filteredBlogs:function(){
            return this.blogs.filter((blog)=>{
                return blog.title.match(this.search);
            })
        }
    },
    filters:{
        "to-uppercase":function(value){
            return value.toUpperCase()
        }
    }
}
</script>

<style scoped>
#show-blogs{
    max-width: 800px;
    margin: 0 auto;
    border: 1px dotted #aaa;
}
#show-blogs a{
    color: #444;
    text-decoration: none;
}
.search{
    padding: 8px;
    width: 100%;
    box-sizing: border-box;
}

.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
</style>