import MainLayout from 'src/layouts/MainLayout.vue'
import IndexPage from 'src/pages/IndexPage.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: IndexPage
      }
    ]
  }
]

export default routes
