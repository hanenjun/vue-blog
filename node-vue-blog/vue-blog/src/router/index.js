import Vue from 'vue'
import VueRouter from 'vue-router'
import AddBlog from "../components/AddBlog"
import ShowBlog from "../components/ShowBlog"
import SingleBlog from "../components/SingleBlog"
import modifyBlog from "../components/modifyBlog"
// import UserLogin from "../components/UserLogin"
// import store from "../store"
// import showUser from "../components/showUser"
Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    component:ShowBlog
  },
  {
    path:"/add",
    component:AddBlog,
    // beforeEach:((to,from,next)=>{
    //   if(!store.state.root){
    //     if(window.confirm("是否要登入")){
    //       next({path:"login"})
    //     }
    //   }else{
    //     next()
    //   }
    // })
  },
  {
    path:"/blog/:id",
    component:SingleBlog
  },
  {
    path:"/modifyBlog",
    name:"modifyBlog",
    component:modifyBlog
  }
  // {
  //   path:"/login",
  //   name:"login",
  //   component:UserLogin,
  // },
  //   // {
    //   path:"/showUser",
    //   name:'showUser',
    //   component:showUser,
    // }
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
