<template>
    <div class="root-container">
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from './header/HeaderComponent';
    import Content from './content/ContentComponent';
    import Footer from './footer/FooterComponent';

    export default {
        components: {
            Header,
            Content,
            Footer
        }
    }
</script>

<style>
    .root-container {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 1200px;
    }
</style>


