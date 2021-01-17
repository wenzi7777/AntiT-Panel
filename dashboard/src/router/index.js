/*
 * @Author: NickXu
 * @LastEditors: NickXu <wenzi7777@icloud.com>
 * @Description: 遵守MPL2.0协议进行分发。
 */
import Vue from 'vue'
import Router from 'vue-router'
import FooterNav from '@/components/FooterNav'
import Footer from '@/components/Footer'
import Home from '@/components/Home'
import Settings from '@/components/Settings'
import Gallery from '@/components/Gallery'
import Logs from '@/components/Logs'
import Status from '@/components/Status'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      components: {
        Body: Home,
        FooterNav: FooterNav,
        Footer: Footer
      }
    },
    {
      path: '/settings',
      name: 'settings',
      components: {
        Body: Settings,
        FooterNav: FooterNav,
        Footer: Footer
      }
    },
    {
      path: '/gallery',
      name: 'gallery',
      components: {
        Body: Gallery,
        FooterNav: FooterNav,
        Footer: Footer
      }
    },
    {
      path: '/logs',
      name: 'logs',
      components: {
        Body: Logs,
        FooterNav: FooterNav,
        Footer: Footer
      }
    },
    {
      path: '/status',
      name: 'status',
      components: {
        Body: Status,
        FooterNav: FooterNav,
        Footer: Footer
      }
    },
    {
      path: '/about',
      name: 'about',
      components: {
        Body: About,
        FooterNav: FooterNav,
        Footer: Footer
      }
    }
  ]
})
