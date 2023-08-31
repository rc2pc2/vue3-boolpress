<template lang="">
    <section class="posts-wrapper">
        <h1 class="main-title">
            Latest Posts:
        </h1>
        <div class="posts">
            <SinglePost class="single-post w-50" v-for="post in posts" :post='post'
                @click="$router.push({ name: 'posts.show', params: { slug: post.slug} })" />
        </div>
    </section>
</template>

<script>
import axios from 'axios';
import SinglePost from '../components/SinglePost.vue';

export default {
    name: 'Posts',
    components: {
        SinglePost
    },
    data() {
        return {
            posts : [],
            apiUrl : 'http://127.0.0.1:8000/api/posts'
        }
    },

    methods: {
        getPosts(){
            // recuper i miei post e popolo la variabile posts
            axios.get(this.apiUrl, {
                params: {}
            })
            .then((response) => {
                console.log(response.data.results.data)
                this.posts = response.data.results.data;
            })
            .catch(function (error) {
                console.log(error);
            })
        }
    },

    created(){
        this.getPosts();
    }
}

</script>
<style lang="scss" scoped>
    h1.main-title{
        margin-bottom: 3rem;
    }
    div.posts{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }
</style>