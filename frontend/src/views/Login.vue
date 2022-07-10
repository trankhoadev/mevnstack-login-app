<template>
    <div class="wrapper">
        <HeaderComponent></HeaderComponent>
        <div class="wrap-form">
            <form action="" method="POST">
                <div class="form-group">
                    <label for="">User name: </label>
                    <input type="text" class="form-control" placeholder="Enter your user name...">
                </div>

                <div class="form-group">
                    <label for="">Password: </label>
                    <input type="password" class="form-control" placeholder="Enter your password...">
                </div>

                <div class="form-submit">
                    <button class="btn btn-success">Submit</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
export default {
    name: 'Login',
    components: {HeaderComponent},
    setup () {        
        return {}
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