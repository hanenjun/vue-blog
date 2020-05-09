<template>
    <div class="BlogHeard">
        <ul class="nav">
            <li><router-link to="/" exact>博客</router-link></li>
            <li><router-link to="/add" exact>写博客</router-link></li>
            <!-- <li><router-link to="/login" exact>登入</router-link></li> -->
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
        
        }
    },

    computed:{
        root(){
            let root =this.$store.state.root;
            return root
        },
    } ,   
    watch:{
        root(){
         this.$store.commit("changeRoot",1);
        }
    },
}
</script>

<style scoped>
    ul{
        list-style: none;
        /* width: 800px; */
        text-align: center;
        margin: 0 auto;
    }
    li{
        display: inline-block;
        margin: 0 10px;
    }
    a{
    color: #fff;
    text-decoration: none;
    padding: 12px;
    border-radius: 5px;
    }
    .nav{
        background: crimson;
        padding: 30px 0;
        margin-bottom:40px; 
    }
    .router-link-active{
        background-color: rgba(255, 255, 255, .8);
        color: #444;
    }
    
</style>