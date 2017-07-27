import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/Index'
import Tourism from '@/components/Tourism'
import School from '@/components/School'
import Latest from '@/components/Latest'
import User from '@/components/User'


Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/tourism',
            name: 'Tourism',
            component: Tourism
        },
        {
            path: '/school',
            name: 'School',
            component: School
        },
        {
            path: '/latest',
            name: 'Latest',
            component: Latest
        },
        {
            path: '/user',
            name: 'User',
            component: User
        }
    ]
})