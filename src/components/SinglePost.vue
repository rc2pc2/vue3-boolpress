<template lang="">
    <div class="single-post">

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
</template>
<script>
export default {
    name: 'SinglePost',
    props : {
        'post' : Object
    }
}
</script>
<style lang="">

</style>