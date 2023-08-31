<template lang="">
    <h1 class="main-title">
            Latest Posts:
    </h1>
    <div class="posts">
        <SinglePost class="single-post" v-for="post in posts" :post='post' />
    </div>
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
<style lang="">

</style>