<template>

    <div class="login">

        <button @click="handleClick">{{ btnText }}</button>

    </div>

</template>

<script>

import auth from '../utils/auth';

export default {
    name: "Login",
    data() {

        return {

            // isLogin: document.cookie.includes('login=true'),
            isLogin: auth.isLogin(),
        }
    },
    methods: {

        handleClick() {

            document.cookie = 'login=true';

            if (this.isLogin) {

                auth.cancelLogin();

            } else {

                auth.login();

                this.goBack();
            }

            this.isLogin = !this.isLogin;
        },

        goBack() {

            const isGoBack = window.confirm('登陆成功，是否返回原来的页面');

            if (isGoBack) {

                this.$router.go(-1);
            }
        }
    },
    computed: {

        btnText() {

            return this.isLogin ? '取消登陆' : '登陆';
        }
    }
}

</script>

<style scoped>

</style>