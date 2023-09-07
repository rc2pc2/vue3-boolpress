import { createRouter, createWebHistory } from "vue-router";

// importo componenti
import AboutUs from './pages/AboutUs.vue';
import HomePage from './pages/HomePage.vue';
import Posts from './pages/Posts.vue';
import PostShow from './pages/PostShow.vue';
import ContactUs from './pages/ContactUs.vue';


const router = createRouter({
    history: createWebHistory(),
    routes : [
        {
            path: '/',
            name : 'homepage',
            component : HomePage,
        },
        {
            path: '/about-us',
            name : 'about',
            component : AboutUs,
        },
        {
            path: '/contact-us',
            name : 'contact-us',
            component : ContactUs,
        },
        {
            path: '/posts',
            name : 'posts.index',
            component : Posts,
        },
        {
            path: '/posts/:slug',
            name : 'posts.show',
            component : PostShow,
        },
    ]
})

export { router };
