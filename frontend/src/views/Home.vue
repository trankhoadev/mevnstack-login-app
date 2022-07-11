<template>
    <div class="wrapper">
        <HeaderComponent></HeaderComponent>
        <div class="wrap-body">
            <h1>Welcome to my app</h1>
        </div>
    </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import axios from 'axios';
export default {
    name: 'Home',
    components: {
        HeaderComponent
    },
    setup () {
        return {}
    },
    methods: {
        getData() {
            axios.get(process.env.VUE_APP_BASEURL + 'routers')
            .then((re) => {
                console.log(re.data);
            }) 
        }
    },
    mounted() {
        this.getData();
    },
    updated() {
                this.getData();
    },
}
</script>

<style lang="scss" scoped>

</style>