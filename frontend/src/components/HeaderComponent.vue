<template>
    <div class="wrapper">
        <div class="wrap-logo">
            <img src="../assets/logo.png" alt="">
        </div>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HeaderComponent',
    setup () {
        
        return {}
    }
}
</script>

<style lang="scss" scoped>
.wrapper { 
    display: flex;
    align-items: center;
    height: 100px;
    background-color: #00dc82;
    .wrap-logo {
        width: 50%;
        display: flex;
        align-items: center;
        img {
            width: 80px;
            margin-left: 100px;
        }
    }

    ul {
        width: 50%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        height: 100%;
        li {
            a {
                padding-right: 2em;
                color: #001e26;
                font-size: 1.1em;
                font-weight: 600;
            }
        }
    }
}
</style>