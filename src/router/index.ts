import { createWebHistory, createRouter,RouteRecordRaw } from "vue-router";


import AuthLayout from "@/layouts/AuthLayout.vue";

import AdminLayout from "@/layouts/AdminLayout.vue";



const routes: Array<RouteRecordRaw> = [
  
  {

    path: '/login',
    component: AuthLayout,
    children: [
      {
        path:'',
        name:'Login',
        component:()=> import('@/views/LoginView.vue')

      }
    ]
  },
{
  path: '',
  name: 'Dashboard',
  component: ()=> import('@/views/DashBoard.vue'),
  meta:{requiresAuth:true}

}
]
const router = createRouter ({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router