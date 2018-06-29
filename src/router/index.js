import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      meta: {
        title: ''
      },
      component: resolve => require(['@/views/index.vue'], resolve),
      children:[
        {
          path: '/',
          name: 'index',
          meta: {
            title: '首页'
          },
          component: resolve => require(['@/views/welcome.vue'], resolve)
        },
        {
          path: '/contract',
          name: 'contract',
          meta: {
            title: '合同备案'
          },
          component: resolve => require(['@/views/contract/contract.vue'], resolve)
        },
        {
          path: '/send-letter',
          name: 'send-letter',
          meta: {
            title: '发函'
          },
          component: resolve => require(['@/views/send-letter/send-letter.vue'], resolve)
        },
        {
          path: '/circular-notice',
          name: 'circular-notice',
          meta: {
            title: '交房通知'
          },
          component: resolve => require(['@/views/circular-notice/circular-notice.vue'], resolve)
        },
        {
          path: '/hydropower',
          name: 'hydropower',
          meta: {
            title: '水电过户'
          },
          component: resolve => require(['@/views/hydropower/hydropower.vue'], resolve)
        },
        {
          path: '/two-book',
          name: 'two-book',
          meta: {
            title: '两书'
          },
          component: resolve => require(['@/views/two-book/two-book.vue'], resolve)
        },
        {
          path: '/property-right',
          name: 'property-right',
          meta: {
            title: '产权办理'
          },
          component: resolve => require(['@/views/property-right/property-right.vue'], resolve)
        },
        {
          path: '/agreement',
          name: 'agreement',
          meta: {
            title: '协议书申请'
          },
          component: resolve => require(['@/views/agreement/agreement.vue'], resolve)
        },
        {
          path: '/process-configuration',
          name: 'process-configuration',
          meta: {
            title: '流程设置'
          },
          component: resolve => require(['@/views/process-configuration/process-configuration.vue'], resolve)
        },
        {
          path: '/basic-setting',
          name: 'basic-setting',
          meta: {
            title: '基础设置'
          },
          component: resolve => require(['@/views/basic-setting/basic-setting.vue'], resolve)
        }
      ]
    }
  ]
})
