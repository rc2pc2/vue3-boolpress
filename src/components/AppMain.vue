<template >
    <PostsList :posts="posts" />
</template>

<script>
import PostsList from './PostsList.vue';
import axios from 'axios';

export default {
    name: 'AppMain',
    components : {
        PostsList
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

<style lang="scss">

    h1.main-title{
        margin-bottom: 3rem;
    }

    div.posts{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;

        .single-post{
            width: calc((100% / 2) - 1rem);
            border-radius: 1rem;
            padding: 1rem;
            margin-right: 1rem;
            background-color: rgb(221, 221, 221);
            color: black;
            margin-bottom: 2rem;

            *{
                margin-bottom: 1rem;
            }

            img{
                width: 100%;
                height: 10rem;
                object-fit: cover;
            }

            h6 span{
                margin-right: 1rem;
            }

            &:hover{
                background-color: white;
            }
        }
    }
</style>