<template >
    <div>
        <h1 class="main-title">
            Latest Posts:
        </h1>
        <div class="posts">
            <div class="single-post" v-for="post in posts">
                <h2>
                    {{ post.title }}
                </h2>
                <h3>
                    Written by: {{ post.user.name }}
                </h3>
                <h4 :style="'color:' + post.category.color + ';'">
                    Category: {{ post.category.name }}
                </h4>
                <h5>
                    {{ post.slug }}
                </h5>
                <h6>
                    <span v-for="tag in post.tags" :style="'color:' + tag.color + ';'">#{{ tag.name }} </span>
                </h6>
                <p>
                    {{ post.content.substr(0, 250) }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'AppMain',

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

        div.single-post{
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

            h6 span{
                margin-right: 1rem;
            }

            &:hover{
                background-color: white;
            }
        }
    }
</style>