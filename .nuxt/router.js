import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _2509b30c = () => import('../src/pages/classticketgame.vue' /* webpackChunkName: "pages/classticketgame" */).then(m => m.default || m)
const _7b1e370d = () => import('../src/pages/slotmachine.vue' /* webpackChunkName: "pages/slotmachine" */).then(m => m.default || m)
const _580f8f9b = () => import('../src/pages/buycoin.vue' /* webpackChunkName: "pages/buycoin" */).then(m => m.default || m)
const _19278dde = () => import('../src/pages/about.vue' /* webpackChunkName: "pages/about" */).then(m => m.default || m)
const _9895d4c6 = () => import('../src/pages/classicdoubtdice.vue' /* webpackChunkName: "pages/classicdoubtdice" */).then(m => m.default || m)
const _6eea1298 = () => import('../src/pages/classicxixiv2.vue' /* webpackChunkName: "pages/classicxixiv2" */).then(m => m.default || m)
const _6f06419a = () => import('../src/pages/classicxixiv1.vue' /* webpackChunkName: "pages/classicxixiv1" */).then(m => m.default || m)
const _1ccda72e = () => import('../src/pages/classicmine.vue' /* webpackChunkName: "pages/classicmine" */).then(m => m.default || m)
const _dce4d994 = () => import('../src/pages/bankoper.vue' /* webpackChunkName: "pages/bankoper" */).then(m => m.default || m)
const _b6e3368a = () => import('../src/pages/403.vue' /* webpackChunkName: "pages/403" */).then(m => m.default || m)
const _3496638a = () => import('../src/pages/classicroulette.vue' /* webpackChunkName: "pages/classicroulette" */).then(m => m.default || m)
const _b6c70788 = () => import('../src/pages/404.vue' /* webpackChunkName: "pages/404" */).then(m => m.default || m)
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
			path: "/classticketgame",
			component: _2509b30c,
			name: "classticketgame"
		},
		{
			path: "/slotmachine",
			component: _7b1e370d,
			name: "slotmachine"
		},
		{
			path: "/buycoin",
			component: _580f8f9b,
			name: "buycoin"
		},
		{
			path: "/about",
			component: _19278dde,
			name: "about"
		},
		{
			path: "/classicdoubtdice",
			component: _9895d4c6,
			name: "classicdoubtdice"
		},
		{
			path: "/classicxixiv2",
			component: _6eea1298,
			name: "classicxixiv2"
		},
		{
			path: "/classicxixiv1",
			component: _6f06419a,
			name: "classicxixiv1"
		},
		{
			path: "/classicmine",
			component: _1ccda72e,
			name: "classicmine"
		},
		{
			path: "/bankoper",
			component: _dce4d994,
			name: "bankoper"
		},
		{
			path: "/403",
			component: _b6e3368a,
			name: "403"
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
			path: "/",
			component: _132413d6,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
