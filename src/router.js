import Vue from 'vue'
import Router from 'vue-router'
import DashboardLayout from '@/layout/DashboardLayout'
import AuthLayout from '@/layout/AuthLayout'

import Inicio from '@/views/Inicio.vue'
import Menu from '@/views/Menu.vue'
import AgregarUsuario from '@/views/AgregarUsuario.vue'
import ModificarUsuario from '@/views/ModificarUsuario.vue'
import EliminarUsuario from '@/views/EliminarUsuario.vue'
import AgregarAviones from '@/views/AgregarAviones.vue'
import AgregarTipoAviones from '@/views/AgregarTipoAviones.vue'
import ModificarAviones from '@/views/ModificarAviones.vue'
import ModificarAviones2 from '@/views/ModificarAviones2.vue'
import ModificarTipoAviones from '@/views/ModificarTipoAviones.vue'
import ModificarTipoAvionesPrincipal from '@/views/ModificarTipoAvionesPrincipal.vue'
import EliminarAviones from '@/views/EliminarAviones.vue'
import EliminarTipoAviones from '@/views/EliminarTipoAviones.vue'
import VisualizarMapa from '@/views/VisualizarMapa.vue'
import PuertasYZonas from '@/views/PuertasYZonas.vue'
import ModificarUsuario2 from '@/views/ModificarUsuario2.vue'

Vue.use(Router)

export default new Router({
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/admin/menu',
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
          path: '/admin/usuario/modificar2',
          name: 'modificarUsuario2',
          component: ModificarUsuario2,
          props: true
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
          path: '/admin/aviones/modificar2',
          name: 'modificarAviones2',
          component: ModificarAviones2,
          props: true
        },
        {
          path: '/admin/aviones/modificarTipo',
          name: 'modificarTipoAvionesPrincipal',
          component: ModificarTipoAvionesPrincipal
        },
        {
          path: '/admin/aviones/modificarTipo2',
          name: 'modificarTipoAviones',
          component: ModificarTipoAviones,
          props: true
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
