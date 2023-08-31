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
</style>