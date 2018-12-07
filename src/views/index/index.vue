<template>
    <div class="index">
        <div class="banner">
            <x-img src="./../../static/img/activity.png"></x-img>
        </div>
        <div class="list">
            <x-button class="list_item">信用购机</x-button>
            <x-button class="list_item">敬请期待</x-button>
        </div>

    </div>
</template>

<script>
    import {XImg, Divider, ViewBox, XButton} from 'vux'
    import {mapState} from 'vuex'

    export default {
        name: 'shopcar',
        components: {
            XImg,
            XButton,
            ViewBox,
            Divider
        },
        computed: {
            ...mapState({
                isAndroid: state => state.app.isAndroid,
                iosJsUrl: state => state.app.iosJsUrl
            })
        },
        data () {
            return {}
        },
        activated () {
            this.share()
        },
        methods: {
            share () {
                let link = window.location.href.split('#')[0]
                this.wxShare('首页', '信用购机', link, 'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg')
            }
        }
    }
</script>

<style lang="less" scoped>
    .index {
        .list {
            overflow: hidden;
            zoom: 1;
            .list_item {
                border: 1px solid #000000;
                overflow: hidden;
                zoom: 1;
            }
        }
    }


</style>
