<template lang="">
    <form @submit.prevent="sendContactForm" @reset.prevent="clearForm">

        <div class="form-element info" v-if="response === false">
            <h3>
                There are errors in your form:
                {{ errors }}
            </h3>
        </div>

        <div class="form-element">
            <p>Type your name:</p>
            <input type="text" v-model="name">
        </div>

        <div class="form-element">
            <p>Type your email:</p>
            <input type="email" v-model="email">
        </div>

        <div class="form-element">
            <p>Type your message:</p>
            <textarea type="text" v-model="message" rows="10" ></textarea>
        </div>

        <div class="task-bar">
            <button type="submit">Send contact form</button>
            <button type="reset">Reset contact form</button>
        </div>
    </form>
</template>

<script>
import axios from 'axios';

export default {
    name: 'ContactForm',
    data() {
        return {
            name: '',
            email: '',
            message: '',
            response : null,
            errors : false,
            apiUrl : 'http://127.0.0.1:8000/api/contact-form',
        }
    },
    methods: {
        sendContactForm(){
            console.log('contact form send starting...');
            axios.post(this.apiUrl, {
                    name: this.name,
                    email: this.email,
                    message: this.message,
            })
            .then((response) => {
                this.response = response.data.success;
                console.log(this.email, this.name, this.message, );
                console.log(response);
                if (this.response ){
                    // ? una serie di operazioni

                    this.clearForm();
                } else {
                    this.errors = response.data.errors;
                    console.log(this.errors);
                }
            })
            .catch((error) => {
                console.log(error);
                this.response = false;
                this.errors = error.response.data.message;
                console.log(this.response);
            });
        },

        clearForm(){
            this.name = '';
            this.email = '';
            this.message = '';
        }
    },
    created() {

    },
}
</script>

<style lang="scss">
    form {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        width: 100%;
        margin: 0 auto;

        div.form-element{
            width: 70%;
            margin-bottom: 1rem;

            *{
                width: 100%;
            }
        }

        button {
            padding: 1rem 2rem;
            margin-right: 1rem;
        }
    }
</style>