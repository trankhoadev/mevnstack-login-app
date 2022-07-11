<template>
    <div class="wrapper">
        <HeaderComponent></HeaderComponent>
        <div class="wrap-form">
            <form>
                <div class="form-group">
                    <label for="">User name: </label>
                    <input type="text" name="userName" class="form-control" placeholder="Enter your user name..." v-model="userName">
                </div>

                <div class="form-group">
                    <label for="">Password: </label>
                    <input type="password" name="password" class="form-control" placeholder="Enter your password..." v-model="password">
                </div>

                <div class="form-submit">
                    <button class="btn btn-success" @click.prevent="postLogin()">Submit</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import axios from 'axios';
export default {
    name: 'Login',
    components: {HeaderComponent},
    setup () {        
        return {}
    },
    methods: {
        postLogin() {
            let URL = process.env.VUE_APP_BASEURL + 'isAuth';

            axios.post(URL, 
            {
                userName: this.userName,
                password: this.password
            }).then((re) => {
                console.log(re.data);
                if(re.data === 1) {
                    alert('Login successfully !');
                    this.$router.push('/home');
                }
                else {
                    alert('Login fail !');
                }
            })  
        }
    },
    data() {
        return {
            userName: '',
            password: ''
        }
    }
}
</script>

<style lang="scss" scoped>
@mixin flexCenter {
    display: flex;
    justify-content: center;
    align-items: center;
}
.wrapper {
    .wrap-form {
        height: calc(100vh - 100px);
        background-color: #001e26;
        @include flexCenter();
        form {
            background-color: #004d3d;
            width: 1000px;
            height: 500px;
            border-radius: 3px;
            border: 2px solid #00dc82;
            flex-direction: column;
            @include flexCenter();

            .form-group {
                padding: 1em 0;   
                label {
                    color: #ffffff;
                }

                input {
                    width: 400px;
                }
            }

            .form-submit {
                padding: 1em 0;
                button {}
            }
        }
    }
}
</style>