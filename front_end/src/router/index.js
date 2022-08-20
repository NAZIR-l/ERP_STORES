import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import signin from '../components/sign/sign_in.vue'
import Product from '../components/Products/Product.vue'
import sign_Up from '../components/sign/sign_up.vue'
import addProduct from '../components/Products/add.vue'
import addEmployee from '../components/staff/addEmployee.vue'
import ListEmployee from '../components/staff/ListEmployee.vue'
import update from '../components/staff/UpdateEmployee.vue'
import ListProduct from '../components/Products/manageProduct.vue'
import updateProduct from '../components/Products/UpdateProduct.vue'
import logout from '../components/sign/logout.vue'
import MangerHome from '../components/Mamger/MangerHome.vue'
import ListCustomer from '../components/sign/ListCustomer.vue'
import Order from '../components/Order/Order.vue'
import ALLOrder from '../components/Order/ALLORDER'
import ALLOrders from '../components/Order/Allorders.vue'
import Profile from '../components/sign/Profile.vue'
import HomeEmployee from '../components/staff/Home.vue'
import SignUp_Source from '../components/Source/SignUp_source.vue'
import Show_All_Source from '../components/Source/Show_All_Source.vue'
import Home_source from '../components/Source/Home.vue'
import ADDCarousel from '../components/staff/Addcarousel.vue'
import ShowCarousel from '../components/staff/ShowCarousel.vue'
import AddOrder from '../components/Source/AddOrder.vue'
import UpdateState from '../components/staff/UpdateState.vue'
import AddDelivery from '../components/Delivery/AddDelivery.vue'
import ShowDelivery from '../components/Delivery/ListDelivery.vue'
import HomeDelivery from '../components/Delivery/Home.vue'
import recepit from '../components/Delivery/reciptOrder.vue'
import AllOrderDelived from '../components/staff/ShowALLOrderDelive.vue'













const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/signin', name: 'signin', component: signin },
  { path: '/logout', name: 'logout', component: logout },
  { path: '/Product', name: 'Product', component: Product },
  { path: '/sign_Up', name: 'sign_Up', component: sign_Up },
  { path: '/addproduct', name: 'addProduct', component: addProduct },
  { path: '/addEmployee', name: 'addEmployee', component: addEmployee },
  { path: '/ListEmployee', name: 'ListEmployee', component: ListEmployee },
  { path: '/:id', name: 'update', component: update },
  { path: '/ListProduct', name: 'ListProduct', component: ListProduct },
  { path: '/:id', name: 'updateProduct', component: updateProduct },
  { path: '/manger', name: 'MangerHome', component: MangerHome },
  { path: '/ListUser', name: 'ListCustomer', component: ListCustomer },
  { path: '/Order', name: 'Order', component: Order },
  {
    path: '/ALLOrder',
    name: 'ALLOrder',
    component: ALLOrder
  }
  ,
  {
    path: '/ALLOrders',
    name: 'ALLOrders',
    component: ALLOrders
  }
  ,
  {
    path: '/Profile',
    name: 'Profile',
    component: Profile
  }
  ,
  {
    path: '/HomeEmployee',
    name: 'HomeEmployee',
    component: HomeEmployee
  },
  {
    path: '/SignUp_Source',
    name: 'SignUp_Source',
    component: SignUp_Source
  },
  {
    path: '/Show_All_Source',
    name: 'Show_All_Source',
    component: Show_All_Source
  }
  ,
  {
    path: '/Home_source',
    name: 'Home_source',
    component: Home_source
  },
  {
    path: '/ADDCarousel',
    name: 'ADDCarousel',
    component: ADDCarousel
  },
  { path: '/ShowCarousel', name: 'ShowCarousel', component: ShowCarousel },
  { path: '/AddOrder', name: 'AddOrder', component: AddOrder },
  { path: '/UpdateState', name: 'UpdateState', component: UpdateState },
  { path: '/ShowDelivery', name: 'ShowDelivery', component: ShowDelivery },
  { path: '/AddDelivery', name: 'AddDelivery', component: AddDelivery },
  { path: '/HomeDelivery', name: 'HomeDelivery', component: HomeDelivery },
  { path: '/recepit', name: 'recepit', component: recepit },
  { path: '/AllOrderDelived', name: 'AllOrderDelived', component: AllOrderDelived },

]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
