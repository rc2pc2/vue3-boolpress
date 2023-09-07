<template lang="">
    <div>
        <h1>
            Contact us!
        </h1>
        <div>
            <ContactForm />
        </div>
    </div>
</template>
<script>
import ContactForm from '../components/ContactForm.vue';

export default {
    name : 'AboutUs',
    components: {
        ContactForm
    }
}
</script>

<style lang="scss" scoped>
    h1{
        text-align: center;
    }
</style>