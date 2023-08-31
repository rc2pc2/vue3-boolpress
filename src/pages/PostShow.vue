<template lang="">
    <SinglePost v-if="post" class="single-post w-100" :post='post'/>
</template>

<script>
import axios from 'axios';
import SinglePost from '../components/SinglePost.vue'

export default {
    name: 'PostShow',
    components: {
        SinglePost
    },
    data() {
        return {
            apiUrl : 'http://127.0.0.1:8000',
            post : false
        }
    },
    methods: {
        getSinglePost(){
            console.log(this.$route.params.slug);
            axios.get(`${this.apiUrl}/api/posts/${this.$route.params.slug}`).then((response) => {
                console.log(response);
                this.post = response.data.results;
            }).catch(function (error) {
                // handle error
                console.log(error);
            });
        }
    },

    created() {
        this.getSinglePost();
    },
}
</script>
<style lang="scss" scoped>
    article.single-post{
        padding-top: 2rem;
        width: 100%;
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

</style>