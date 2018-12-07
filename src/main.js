// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import FastClick from 'fastclick'
import wechat from './libs/wechat'
import * as types from './store/mutation-types'
import {AlertPlugin, ToastPlugin, AjaxPlugin, WechatPlugin, DevicePlugin} from 'vux'

import "./styles/common/common.css"

require('es6-promise').polyfill()

Vue.use(AjaxPlugin)
Vue.use(AlertPlugin)
Vue.use(ToastPlugin)
Vue.use(WechatPlugin)
Vue.use(DevicePlugin)

FastClick.attach(document.body)
Vue.config.productionTip = false

Vue.prototype.wxShare = wechat.setWxShare
/* eslint-disable no-new */
new Vue({
    el: '#app-box',
    router,
    store,
    render: h => h(App),
    mounted () {
        this.$store.commit(types.UPDATE_DEVICE, {isAndroid: Vue.device.isAndroid})
    }
})
