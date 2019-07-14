import Vue from 'vue'
import Router from 'vue-router'
import DashboardLayoutMapa from '@/layout/DashboardLayoutMapa'
import DashboardLayoutInicio from '@/layout/DashboardLayoutInicio'
import DashboardLayout from '@/layout/DashboardLayout'
import AuthLayout from '@/layout/AuthLayout'

import Inicio from '@/views/Inicio.vue'
import Menu from '@/views/Menu.vue'
import IngresarVuelo from '@/views/IngresarVuelo.vue'
import EliminarVuelo from '@/views/EliminarVuelo.vue'
import IngresarUsuario from '@/views/IngresarUsuario.vue'
import ModificarUsuario from '@/views/ModificarUsuario.vue'
import ModificarUsuario2 from '@/views/ModificarUsuario2.vue'
import EliminarUsuario from '@/views/EliminarUsuario.vue'
import IngresarAviones from '@/views/IngresarAviones.vue'
import IngresarTipoAviones from '@/views/IngresarTipoAviones.vue'
import ModificarAviones from '@/views/ModificarAviones.vue'
import ModificarAviones2 from '@/views/ModificarAviones2.vue'
import ModificarTipoAviones from '@/views/ModificarTipoAviones.vue'
import ModificarTipoAvionesPrincipal from '@/views/ModificarTipoAvionesPrincipal.vue'
import EliminarAviones from '@/views/EliminarAviones.vue'
import EliminarTipoAviones from '@/views/EliminarTipoAviones.vue'
import VisualizarMapa from '@/views/VisualizarMapa.vue'
import IngresarAerolinea from '@/views/IngresarAerolinea.vue'
import ModificarAerolinea from '@/views/ModificarAerolinea.vue'
import ModificarAerolinea2 from '@/views/ModificarAerolinea2.vue'
import EliminarAerolinea from '@/views/EliminarAerolinea.vue'
import Simulacion from '@/views/Simulacion.vue'

Vue.use(Router)

export default new Router({
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/inicio',
      component: DashboardLayoutInicio,
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
          path: '/admin/vuelo/ingresar',
          name: 'ingresarVuelo',
          component: IngresarVuelo
        },     
        {
          path: '/admin/vuelo/eliminar',
          name: 'eliminarVuelo',
          component: EliminarVuelo
        },
        {
          path: '/admin/usuario/ingresar',
          name: 'ingresarUsuario',
          component: IngresarUsuario
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
          path: '/admin/aviones/ingresar',
          name: 'ingresarAviones',
          component: IngresarAviones
        },
        {
          path: '/admin/aviones/ingresarTipo',
          name: 'ingresarTipoAviones',
          component: IngresarTipoAviones
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
          path: '/admin/aerolinea/ingresar',
          name: 'ingresarAerolinea',
          component: IngresarAerolinea
        },     
        {
          path: '/admin/aerolinea/modificar',
          name: 'modificarAerolinea',
          component: ModificarAerolinea
        },
        {
          path: '/admin/aerolinea/modificar2',
          name: 'modificarAerolinea2',
          component: ModificarAerolinea2,
          props: true
        },
        {
          path: '/admin/aerolinea/eliminar',
          name: 'eliminarAerolinea',
          component: EliminarAerolinea
        },
        ,
        {
          path: '/admin/simulacion',
          name: 'simulacion',
          component: Simulacion
        }
      ]
    },
    {
      path: '/admin',
      name: 'adminMapa',
      redirect: '/admin/visualizarMapa',
      component: DashboardLayoutMapa,
      children: [
        {
          path: '/admin/visualizarMapa',
          name: 'visualizarMapa',
          component: VisualizarMapa
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
