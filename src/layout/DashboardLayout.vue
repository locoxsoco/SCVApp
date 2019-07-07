<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <side-bar
      :background-color="sidebarBackground"
      short-title="SCV"
      title="SCV"
    >
    
      <template slot="links">
        <!-- Inicio -->
        <sidebar-item v-if="['inicio'].indexOf($route.name) > -1"
          :link="{
            name: 'SCV',
            icon: 'fas fa-plane-arrival text-primary',
            path: '/inicio'
          }"
        />
        <!-- Menu -->
        <sidebar-item v-if="['menu','ingresarVuelo','eliminarVuelo','ingresarUsuario','modificarUsuario','modificarUsuario2','eliminarUsuario','ingresarAviones','ingresarTipoAviones','modificarAviones','modificarAviones2','modificarTipoAvionesPrincipal','modificarTipoAviones','eliminarAviones','eliminarTipoAviones','visualizarMapa','puertasYZonas'].indexOf($route.name) > -1"
          :link="{
            name: 'SCV',
            icon: 'fas fa-plane-arrival text-primary',
            path: '/admin/menu'
          }"
        />
        <!-- Administrar de vuelos -->
        <sidebar-item v-if="['menu'].indexOf($route.name) > -1"
          :link="{
            name: 'Administración de vuelos',
            icon: 'fas fa-calendar text-primary',
            path: '/admin/vuelo/ingresar'
          }"
        />
        <!-- Administrar de vuelos - Ingresar vuelos -->
        <sidebar-item v-if="['ingresarVuelo','eliminarVuelo'].indexOf($route.name) > -1"
          :link="{
            name: 'Ingresar vuelo',
            icon: 'fas fa-calendar-plus text-primary',
            path: '/admin/vuelo/ingresar'
          }"
        />
        <!-- Administrar de vuelos - Eliminar vuelos -->
        <sidebar-item v-if="['ingresarVuelo','eliminarVuelo'].indexOf($route.name) > -1"
          :link="{
            name: 'Eliminar vuelo',
            icon: 'fas fa-calendar-minus text-primary',
            path: '/admin/vuelo/eliminar'
          }"
        />
        <!-- Administrar usuarios -->
        <sidebar-item v-if="['menu'].indexOf($route.name) > -1 && usuarioRol == 'Administrador'"
          :link="{
            name: 'Administración de usuario',
            icon: 'fa fa-users text-primary',
            path: '/admin/usuario/ingresar'
          }"
        />
        <!-- Administrar usuarios - Ingresar usuarios -->
        <sidebar-item v-if="['ingresarUsuario','modificarUsuario','modificarUsuario2','eliminarUsuario'].indexOf($route.name) > -1 && usuarioRol == 'Administrador'"
          :link="{
            name: 'Ingresar Usuarios',
            icon: 'fa fa-user-plus text-primary',
            path: '/admin/usuario/ingresar'
          }"
        />
        <!-- Administrar usuarios - Modificar usuarios -->
        <sidebar-item v-if="['ingresarUsuario','modificarUsuario','modificarUsuario2','eliminarUsuario'].indexOf($route.name) > -1 && usuarioRol == 'Administrador'"
          :link="{
            name: 'Modificar Usuarios',
            icon: 'fa fa-user text-primary',
            path: '/admin/usuario/modificar'
          }"
        />
        <!-- Administrar usuarios - Eliminar usuarios -->
        <sidebar-item v-if="['ingresarUsuario','modificarUsuario','modificarUsuario2','eliminarUsuario'].indexOf($route.name) > -1 && usuarioRol == 'Administrador'"
          :link="{
            name: 'Eliminar Usuarios',
            icon: 'fa fa-user-times text-primary',
            path: '/admin/usuario/eliminar'
          }"
        />
        <!-- Administrar aviones y tipos de aviones -->
        <sidebar-item v-if="['menu'].indexOf($route.name) > -1"
          :link="{
            name: 'Administración de aviones y sus tipos',
            icon: 'fas fa-plane text-primary',
            path: '/admin/aviones/ingresar'
          }"
        />
        <!-- Administrar aviones y tipos de aviones - Ingresar aviones -->
        <sidebar-item v-if="['ingresarAviones','ingresarTipoAviones','modificarAviones','modificarAviones2','modificarTipoAvionesPrincipal','modificarTipoAviones','eliminarAviones','eliminarTipoAviones'].indexOf($route.name) > -1"
          :link="{
            name: 'Ingresar Aviones',
            icon: 'fas fa-plus text-primary',
            path: '/admin/aviones/ingresar'
          }"
        />
        <!-- Administrar aviones y tipos de aviones - Ingresar Tipo aviones -->
        <sidebar-item v-if="['ingresarAviones','ingresarTipoAviones','modificarAviones','modificarAviones2','modificarTipoAvionesPrincipal','modificarTipoAviones','eliminarAviones','eliminarTipoAviones'].indexOf($route.name) > -1"
          :link="{
            name: 'Ingresar Tipo de Aviones',
            icon: 'fas fa-plus text-primary',
            path: '/admin/aviones/ingresarTipo'
          }"
        />
        <!-- Administrar aviones y tipos de aviones - Modificar aviones -->
        <sidebar-item v-if="['ingresarAviones','ingresarTipoAviones','modificarAviones','modificarAviones2','modificarTipoAvionesPrincipal','modificarTipoAviones','eliminarAviones','eliminarTipoAviones'].indexOf($route.name) > -1"
          :link="{
            name: 'Modificar Aviones',
            icon: 'fas fa-edit text-primary',
            path: '/admin/aviones/modificar'
          }"
        />
        <!-- Administrar aviones y tipos de aviones - Modificar Tipo aviones -->
        <sidebar-item v-if="['ingresarAviones','ingresarTipoAviones','modificarAviones','modificarAviones2','modificarTipoAvionesPrincipal','modificarTipoAviones','eliminarAviones','eliminarTipoAviones'].indexOf($route.name) > -1"
          :link="{
            name: 'Modificar Tipo de Aviones',
            icon: 'fas fa-edit text-primary',
            path: '/admin/aviones/modificarTipo'
          }"
        />
        <!-- Administrar aviones y tipos de aviones - Eliminar aviones -->
        <sidebar-item v-if="['ingresarAviones','ingresarTipoAviones','modificarAviones','modificarAviones2','modificarTipoAvionesPrincipal','modificarTipoAviones','eliminarAviones','eliminarTipoAviones'].indexOf($route.name) > -1"
          :link="{
            name: 'Eliminar Aviones',
            icon: 'fas fa-eraser text-primary',
            path: '/admin/aviones/eliminar'
          }"
        />
        <!-- Administrar aviones y tipos de aviones - Eliminar Tipo aviones -->
        <sidebar-item v-if="['ingresarAviones','ingresarTipoAviones','modificarAviones','modificarAviones2','modificarTipoAvionesPrincipal','modificarTipoAviones','eliminarAviones','eliminarTipoAviones'].indexOf($route.name) > -1"
          :link="{
            name: 'Eliminar Tipo de Aviones',
            icon: 'fas fa-eraser text-primary',
            path: '/admin/aviones/eliminarTipo'
          }"
        />
        <!-- Administrar zonas y puertas -->
        <!--<sidebar-item v-if="['menu'].indexOf($route.name) > -1"
          :link="{
            name: 'Administración de zonas y puertas',
            icon: 'fas fa-parking text-primary',
            path: '/admin/puertasYZonas'
          }"
        />-->
        <!-- Visualizar el mapa -->
        <sidebar-item v-if="['menu'].indexOf($route.name) > -1"
          :link="{
            name: 'Visualizar el mapa',
            icon: 'fas fa-map text-primary',
            path: '/admin/visualizarMapa'
          }"
        />
        

        <!--<sidebar-item :link="{name: 'Icons', icon: 'ni ni-planet text-blue', path: '/icons'}"/>
        <sidebar-item :link="{name: 'Maps', icon: 'ni ni-pin-3 text-orange', path: '/maps'}"/>
        <sidebar-item :link="{name: 'User Profile', icon: 'ni ni-single-02 text-yellow', path: '/profile'}"/>
        <sidebar-item :link="{name: 'Tables', icon: 'ni ni-bullet-list-67 text-red', path: '/tables'}"/>
        <sidebar-item :link="{name: 'Login', icon: 'ni ni-key-25 text-info', path: '/login'}"/>
        <sidebar-item :link="{name: 'Register', icon: 'ni ni-circle-08 text-pink', path: '/register'}"/> 
        -->
      </template>
    </side-bar>
    <div class="main-content" :data="sidebarBackground">
      <dashboard-navbar></dashboard-navbar>

      <div @click="toggleSidebar">
        <fade-transition :duration="200" origin="center top" mode="out-in">
          <!-- your content here -->
          <router-view></router-view>
        </fade-transition>
        <content-footer v-if="!$route.meta.hideFooter"></content-footer>
      </div>
    </div>
  </div>
</template>
<script>
  import DashboardNavbar from './DashboardNavbar.vue';
  import ContentFooter from './ContentFooter.vue';
  import { FadeTransition } from 'vue2-transitions';

  export default {
    components: {
      DashboardNavbar,
      ContentFooter,
      FadeTransition
    },
    data() {
      return {
        sidebarBackground: 'vue', //vue|blue|orange|green|red|primary
        usuarioRol: localStorage.usuarioRol
      };
    },
    mounted(){
      if (this.usuarioRol != 'Administrador' && this.usuarioRol != 'Operador técnico') {
        localStorage.usuarioNombre = '';
        localStorage.usuarioRol = '';
        this.$router.push({name:'login'});
      }
    },
    methods: {
      toggleSidebar() {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false);
        }
      }
    }
  };
</script>
<style lang="scss">
</style>
