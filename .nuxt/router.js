import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _dbb51f0a = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages_admin_index" */))
const _cfed879c = () => interopDefault(import('..\\pages\\inspire.vue' /* webpackChunkName: "pages_inspire" */))
const _458bd0b1 = () => interopDefault(import('..\\pages\\admin\\users\\index.vue' /* webpackChunkName: "pages_admin_users_index" */))
const _97246148 = () => interopDefault(import('..\\pages\\DetailsDispositionTable\\Detailtable.vue' /* webpackChunkName: "pages_DetailsDispositionTable_Detailtable" */))
const _a532dcee = () => interopDefault(import('..\\pages\\DispositionPage\\disposition.vue' /* webpackChunkName: "pages_DispositionPage_disposition" */))
const _0dea58b2 = () => interopDefault(import('..\\pages\\FormUser\\user.vue' /* webpackChunkName: "pages_FormUser_user" */))
const _75f4a9c9 = () => interopDefault(import('..\\pages\\LoginPage\\login.vue' /* webpackChunkName: "pages_LoginPage_login" */))
const _d2ef694e = () => interopDefault(import('..\\pages\\admin\\users\\_id.vue' /* webpackChunkName: "pages_admin_users__id" */))
const _3312d5a8 = () => interopDefault(import('..\\pages\\admin\\_test\\index.vue' /* webpackChunkName: "pages_admin__test_index" */))
const _b5abbbe0 = () => interopDefault(import('..\\pages\\admin\\_test\\_id.vue' /* webpackChunkName: "pages_admin__test__id" */))
const _da63b3ac = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
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

export function createRouter() {
  return new Router({
    mode: 'history',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/admin",
      component: _dbb51f0a,
      name: "admin"
    }, {
      path: "/inspire",
      component: _cfed879c,
      name: "inspire"
    }, {
      path: "/admin/users",
      component: _458bd0b1,
      name: "admin-users"
    }, {
      path: "/DetailsDispositionTable/Detailtable",
      component: _97246148,
      name: "DetailsDispositionTable-Detailtable"
    }, {
      path: "/DispositionPage/disposition",
      component: _a532dcee,
      name: "DispositionPage-disposition"
    }, {
      path: "/FormUser/user",
      component: _0dea58b2,
      name: "FormUser-user"
    }, {
      path: "/LoginPage/login",
      component: _75f4a9c9,
      name: "LoginPage-login"
    }, {
      path: "/admin/users/:id",
      component: _d2ef694e,
      name: "admin-users-id"
    }, {
      path: "/admin/:test",
      component: _3312d5a8,
      name: "admin-test"
    }, {
      path: "/admin/:test/:id",
      component: _b5abbbe0,
      name: "admin-test-id"
    }, {
      path: "/",
      component: _da63b3ac,
      name: "index"
    }],

    fallback: false
  })
}
