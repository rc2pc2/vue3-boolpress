<template lang="">
    <section class="posts-wrapper">
        <h1 class="main-title">
            Latest Posts:
        </h1>
        <div class="posts">
            <SinglePost class="single-post" v-for="post in posts" :post='post' />
        </div>
    </section>
</template>

<script>
import SinglePost from './SinglePost.vue';

export default {
    name: 'PostsList',
    components: {
        SinglePost
    },
    props: {
        'posts' : Array
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