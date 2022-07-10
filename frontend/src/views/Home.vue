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
export default {
    name: 'Home',
    components: {
        HeaderComponent
    },
    setup () {
        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>