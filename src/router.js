import Vue from 'vue'
import Router from 'vue-router'
import DashboardLayout from '@/layout/DashboardLayout'
import AuthLayout from '@/layout/AuthLayout'

import Inicio from '@/views/Dashboard.vue'
import Menu from '@/views/Dashboard.vue'
import AgregarUsuario from '@/views/Dashboard.vue'
import ModificarUsuario from '@/views/Dashboard.vue'
import EliminarUsuario from '@/views/Dashboard.vue'
import AgregarAviones from '@/views/Dashboard.vue'
import AgregarTipoAviones from '@/views/Dashboard.vue'
import ModificarAviones from '@/views/Dashboard.vue'
import ModificarTipoAviones from '@/views/Dashboard.vue'
import EliminarAviones from '@/views/Dashboard.vue'
import EliminarTipoAviones from '@/views/Dashboard.vue'
import VisualizarMapa from '@/views/Dashboard.vue'
import PuertasYZonas from '@/views/Dashboard.vue'

Vue.use(Router)

export default new Router({
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: 'inicio',
      component: DashboardLayout,
      children: [
        {
          path: '/inicio',
          name: 'inicio',
          component: Inicio
        },
        {
          path: '/icons',
          name: 'icons',
          component: () => import(/* webpackChunkName: "demo" */ './views/Icons.vue')
        },
        {
          path: '/profile',
          name: 'profile',
          component: () => import(/* webpackChunkName: "demo" */ './views/UserProfile.vue')
        },
        {
          path: '/maps',
          name: 'maps',
          component: () => import(/* webpackChunkName: "demo" */ './views/Maps.vue')
        },
        {
          path: '/tables',
          name: 'tables',
          component: () => import(/* webpackChunkName: "demo" */ './views/Tables.vue')
        }
      ]
    },
    {
      path: '/admin',
      name: 'admin',
      redirect: '/admin/menu',
      component: DashboardLayout,
      children: [
        {
          path: '/admin/menu',
          name: 'menu',
          component: Menu
        },
        {
          path: '/admin/usuario/agregar',
          name: 'agregarUsuario',
          component: AgregarUsuario
        },
        {
          path: '/admin/usuario/modificar',
          name: 'modificarUsuario',
          component: ModificarUsuario
        },
        {
          path: '/admin/usuario/eliminar',
          name: 'eliminarUsuario',
          component: EliminarUsuario
        },
        {
          path: '/admin/aviones/agregar',
          name: 'agregarAviones',
          component: AgregarAviones
        },
        {
          path: '/admin/aviones/agregarTipo',
          name: 'agregarTipoAviones',
          component: AgregarTipoAviones
        },
        {
          path: '/admin/aviones/modificar',
          name: 'modificarAviones',
          component: ModificarAviones
        },
        {
          path: '/admin/aviones/modificarTipo',
          name: 'modificarTipoAviones',
          component: ModificarTipoAviones
        },
        {
          path: '/admin/aviones/eliminar',
          name: 'eliminarAviones',
          component: EliminarAviones
        },
        {
          path: '/admin/aviones/eliminarTipo',
          name: 'eliminarTipoAviones',
          component: EliminarTipoAviones
        },
        {
          path: '/admin/visualizarMapa',
          name: 'visualizarMapa',
          component: VisualizarMapa
        },
        {
          path: '/admin/puertasYZonas',
          name: 'puertasYZonas',
          component: PuertasYZonas
        }
      ]
    },
    {
      path: '/',
      redirect: 'login',
      component: AuthLayout,
      children: [
        {
          path: '/login',
          name: 'login',
          component: () => import(/* webpackChunkName: "demo" */ './views/Login.vue')
        },
        {
          path: '/register',
          name: 'register',
          component: () => import(/* webpackChunkName: "demo" */ './views/Register.vue')
        }
      ]
    }
  ]
})
