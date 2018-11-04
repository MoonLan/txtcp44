import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _48eb892e = () => import('../src/pages/classicxixiv22.vue' /* webpackChunkName: "pages/classicxixiv22" */).then(m => m.default || m)
const _7b1e370d = () => import('../src/pages/slotmachine.vue' /* webpackChunkName: "pages/slotmachine" */).then(m => m.default || m)
const _6eea1298 = () => import('../src/pages/classicxixiv2.vue' /* webpackChunkName: "pages/classicxixiv2" */).then(m => m.default || m)
const _9895d4c6 = () => import('../src/pages/classicdoubtdice.vue' /* webpackChunkName: "pages/classicdoubtdice" */).then(m => m.default || m)
const _dce4d994 = () => import('../src/pages/bankoper.vue' /* webpackChunkName: "pages/bankoper" */).then(m => m.default || m)
const _48dd71ad = () => import('../src/pages/classicxixiv21.vue' /* webpackChunkName: "pages/classicxixiv21" */).then(m => m.default || m)
const _b6e3368a = () => import('../src/pages/403.vue' /* webpackChunkName: "pages/403" */).then(m => m.default || m)
const _6e958592 = () => import('../src/pages/classicxixiv5.vue' /* webpackChunkName: "pages/classicxixiv5" */).then(m => m.default || m)
const _6ecde396 = () => import('../src/pages/classicxixiv3.vue' /* webpackChunkName: "pages/classicxixiv3" */).then(m => m.default || m)
const _6f06419a = () => import('../src/pages/classicxixiv1.vue' /* webpackChunkName: "pages/classicxixiv1" */).then(m => m.default || m)
const _19278dde = () => import('../src/pages/about.vue' /* webpackChunkName: "pages/about" */).then(m => m.default || m)
const _6e795690 = () => import('../src/pages/classicxixiv6.vue' /* webpackChunkName: "pages/classicxixiv6" */).then(m => m.default || m)
const _6eb1b494 = () => import('../src/pages/classicxixiv4.vue' /* webpackChunkName: "pages/classicxixiv4" */).then(m => m.default || m)
const _2509b30c = () => import('../src/pages/classticketgame.vue' /* webpackChunkName: "pages/classticketgame" */).then(m => m.default || m)
const _580f8f9b = () => import('../src/pages/buycoin.vue' /* webpackChunkName: "pages/buycoin" */).then(m => m.default || m)
const _48cf5a2c = () => import('../src/pages/classicxixiv20.vue' /* webpackChunkName: "pages/classicxixiv20" */).then(m => m.default || m)
const _3496638a = () => import('../src/pages/classicroulette.vue' /* webpackChunkName: "pages/classicroulette" */).then(m => m.default || m)
const _b6c70788 = () => import('../src/pages/404.vue' /* webpackChunkName: "pages/404" */).then(m => m.default || m)
const _1ccda72e = () => import('../src/pages/classicmine.vue' /* webpackChunkName: "pages/classicmine" */).then(m => m.default || m)
const _7bb395b8 = () => import('../src/pages/c_tunnel_fly.vue' /* webpackChunkName: "pages/c_tunnel_fly" */).then(m => m.default || m)
const _132413d6 = () => import('../src/pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/classicxixiv22",
			component: _48eb892e,
			name: "classicxixiv22"
		},
		{
			path: "/slotmachine",
			component: _7b1e370d,
			name: "slotmachine"
		},
		{
			path: "/classicxixiv2",
			component: _6eea1298,
			name: "classicxixiv2"
		},
		{
			path: "/classicdoubtdice",
			component: _9895d4c6,
			name: "classicdoubtdice"
		},
		{
			path: "/bankoper",
			component: _dce4d994,
			name: "bankoper"
		},
		{
			path: "/classicxixiv21",
			component: _48dd71ad,
			name: "classicxixiv21"
		},
		{
			path: "/403",
			component: _b6e3368a,
			name: "403"
		},
		{
			path: "/classicxixiv5",
			component: _6e958592,
			name: "classicxixiv5"
		},
		{
			path: "/classicxixiv3",
			component: _6ecde396,
			name: "classicxixiv3"
		},
		{
			path: "/classicxixiv1",
			component: _6f06419a,
			name: "classicxixiv1"
		},
		{
			path: "/about",
			component: _19278dde,
			name: "about"
		},
		{
			path: "/classicxixiv6",
			component: _6e795690,
			name: "classicxixiv6"
		},
		{
			path: "/classicxixiv4",
			component: _6eb1b494,
			name: "classicxixiv4"
		},
		{
			path: "/classticketgame",
			component: _2509b30c,
			name: "classticketgame"
		},
		{
			path: "/buycoin",
			component: _580f8f9b,
			name: "buycoin"
		},
		{
			path: "/classicxixiv20",
			component: _48cf5a2c,
			name: "classicxixiv20"
		},
		{
			path: "/classicroulette",
			component: _3496638a,
			name: "classicroulette"
		},
		{
			path: "/404",
			component: _b6c70788,
			name: "404"
		},
		{
			path: "/classicmine",
			component: _1ccda72e,
			name: "classicmine"
		},
		{
			path: "/c:tunnel_fly",
			component: _7bb395b8,
			name: "ctunnel_fly"
		},
		{
			path: "/",
			component: _132413d6,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
