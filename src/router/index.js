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
import Panorama from '@/components/Panorama'
import TVLogin from '@/components/TVLogin'
import Upload from '@/components/Upload'
import Login from '@/components/login'
import Sphere from '@/components/Sphere'

Vue.use(Router);

export default new Router({
    routes: [{
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/provinces/cities',
            name: 'Tourism',
            component: Tourism

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
            path: '/provinces/college/:provinceName/:cityName/spots',
            name: 'Collage',
            component: Spots
        },
        {
            path: '/provinces/college/:provinceName/:albumId/:photoId',
            name: 'Album',
            component: Album
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
            path: '/user/works',
            name: 'Works',
            component: Works
        },
        {
            path: '/user/favorite',
            name: 'Favorite',
            component: Favorite
        },
        {
            path: '/user/panorama',
            name: 'Panorama',
            component: Panorama
        },
        {
            path: '/tvlogin',
            name: 'TVLogin',
            component: TVLogin
        },
        {
            path: '/user/works/upload',
            name: 'Upload',
            component: Upload
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/sphere',
            name: 'Sphere',
            component: Sphere
        }
    ]
});