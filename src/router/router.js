import Home from '../component/Home.vue'
import Property from '../component/Property.vue'
import Application from '../component/Application.vue'
import TransitionGroup from '../component/TransitionGroup.vue'

import Use from '../component/property/Use.vue'
import Name from '../component/property/Name.vue'
import Class from '../component/property/Class.vue'
import Mode from '../component/property/Mode.vue'
import Appear from '../component/property/Appear.vue'


export const routes = [
    { path:'*', redirect:'/home' },
    { path:'/home', component:Home },
    { path:'/property*', component:Property, redirect:'/property/use', children:[
        { path:'/property/use', component:Use },
        { path:'/property/name', component:Name },
        { path:'/property/class', component:Class },
        { path:'/property/mode', component:Mode },
        { path:'/property/appear', component:Appear },
    ] },
    { path:'/application', component:Application },
    { path:'/group', component:TransitionGroup },
]