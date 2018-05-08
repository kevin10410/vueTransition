import Home from '../component/Home.vue'
import Property from '../component/Property.vue'
import Application from '../component/Application.vue'
import TransitionGroup from '../component/TransitionGroup.vue'


export const routes = [
    { path:'', component:Home },
    { path:'/property', component:Property },
    { path:'/application', component:Application },
    { path:'/group', component:TransitionGroup },
]