import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/Index'
import Tourism from '@/components/Tourism'
import Collage from '@/components/Collage'
import Latest from '@/components/Latest'
import User from '@/components/User'
import ProvinceName from '@/components/ProvinceName'
import CityName from '@/components/CityName'
import Spots from '@/components/Spots'
import Album from '@/components/Album'
import Comment from '@/components/Comment'
import Works from '@/components/Works'
import Favorite from '@/components/Favorite'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/provinces/cities',
            name: 'Tourism',
            component: Tourism,

        },
        {
            path: '/provinces/cities/:provinceName',
            name: 'Tourism',
            component: ProvinceName
        },
        {
            path: '/provinces/cities/:provinceName/:cityName',
            name: 'CityName',
            component: CityName
        },
        {
            path: '/provinces/cities/:provinceName/:cityName/spots',
            name: 'Spots',
            component: Spots
        },
        {
            path: '/provinces/cities/:provinceName/:cityName/spots/:albumId',
            name: 'Album',
            component: Album
        },
        {
            path: '/provinces/cities/:provinceName/:cityName/spots/:albumId/:photoId',
            name: 'Album',
            component: Album
        },
        {
            path: '/provinces/cities/:provinceName/:cityName/spots/:albumId/:photoId/comment',
            name: 'Comment',
            component: Comment
        },
        {
            path: '/provinces/collage',
            name: 'Collage',
            component: Collage
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
        },
        {
            path: '/user/works/:userName',
            name: 'Works',
            component: Works
        },
        {
            path: '/user/favorite/:userId',
            name: 'Favorite',
            component: Favorite
        }
    ]
})