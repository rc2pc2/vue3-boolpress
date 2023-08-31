<template lang="">
    <section class="posts-wrapper">
        <h1 class="main-title">
            Latest Posts:
        </h1>
        <nav class="pagination">
            <li class="prev" @click="prevPage" v-if="prevPageUrl">
                Previous
            </li>
            <li class="next" @click="nextPage" v-if="nextPageUrl">
                Next
            </li>
        </nav>
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
            nextPageUrl : '',
            currentPageNo: '',
            prevPageUrl : '',
            apiUrl : 'http://127.0.0.1:8000/api/posts'
        }
    },

    methods: {
        getPosts(apiUrl = this.apiUrl){
            // recuper i miei post e popolo la variabile posts
            axios.get(apiUrl)
            .then((response) => {
                console.log(response)
                this.posts = response.data.results.data;
                this.nextPageUrl = response.data.results.next_page_url;
                this.prevPageUrl = response.data.results.prev_page_url;
            })
            .catch(function (error) {
                console.log(error);
            })
        },

        nextPage(){
            // alert('next page');
            this.getPosts(this.nextPageUrl);
        },

        prevPage(){
            // alert('prev page');
            this.getPosts(this.prevPageUrl);
        },

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

    nav.pagination{
        width: 100%;
        padding: 1rem;
        display: flex;
        // justify-content: space-between;
        align-items: center;
        background-color: black;
        list-style-type: none;

        li{
            padding: 1rem;
            background-color: blue;
            color: white;

            &.next{
                margin-left: auto;
            }
        }
    }
</style>