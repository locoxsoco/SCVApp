<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <side-bar
      :background-color="sidebarBackground"
      short-title="Argon"
      title="Argon"
    >
      <template slot="links">
        <sidebar-item v-if="['inicio'].indexOf($route.name) > -1"
          :link="{
            name: 'SCV',
            icon: 'fas fa-plane-arrival text-primary',
            path: '/inicio'
          }"
        />
        <sidebar-item v-if="['menu','agregarUsuario','modificarUsuario','eliminarUsuario','agregarAviones','agregarTipoAviones','modificarAviones','modificarTipoAvionesPrincipal','modificarTipoAviones','eliminarAviones','eliminarTipoAviones','visualizarMapa','puertasYZonas'].indexOf($route.name) > -1"
          :link="{
            name: 'SCV',
            icon: 'fas fa-plane-arrival text-primary',
            path: '/admin/menu'
          }"
        />
        <sidebar-item v-if="['menu'].indexOf($route.name) > -1"
          :link="{
            name: 'Administración de usuario',
            icon: 'fa fa-users text-primary',
            path: '/admin/usuario/agregar'
          }"
        />
        <sidebar-item v-if="['agregarUsuario','modificarUsuario','eliminarUsuario'].indexOf($route.name) > -1"
          :link="{
            name: 'Agregar Usuarios',
            icon: 'fa fa-user-plus text-primary',
            path: '/admin/usuario/agregar'
          }"
        />
        <sidebar-item v-if="['agregarUsuario','modificarUsuario','eliminarUsuario'].indexOf($route.name) > -1"
          :link="{
            name: 'Modificar Usuarios',
            icon: 'fa fa-user text-primary',
            path: '/admin/usuario/modificar'
          }"
        />
        <sidebar-item v-if="['agregarUsuario','modificarUsuario','eliminarUsuario'].indexOf($route.name) > -1"
          :link="{
            name: 'Eliminar Usuarios',
            icon: 'fa fa-user-times text-primary',
            path: '/admin/usuario/eliminar'
          }"
        />
        <sidebar-item v-if="['menu'].indexOf($route.name) > -1"
          :link="{
            name: 'Administración de aviones y sus tipos',
            icon: 'fas fa-plane text-primary',
            path: '/admin/aviones/agregar'
          }"
        />
        <sidebar-item v-if="['agregarAviones','agregarTipoAviones','modificarAviones','modificarTipoAvionesPrincipal','modificarTipoAviones','eliminarAviones','eliminarTipoAviones'].indexOf($route.name) > -1"
          :link="{
            name: 'Agregar Aviones',
            icon: 'fas fa-plus text-primary',
            path: '/admin/aviones/agregar'
          }"
        />
        <sidebar-item v-if="['agregarAviones','agregarTipoAviones','modificarAviones','modificarTipoAvionesPrincipal','modificarTipoAviones','eliminarAviones','eliminarTipoAviones'].indexOf($route.name) > -1"
          :link="{
            name: 'Agregar Tipo de Aviones',
            icon: 'fas fa-plus text-primary',
            path: '/admin/aviones/agregarTipo'
          }"
        />
        <sidebar-item v-if="['agregarAviones','agregarTipoAviones','modificarAviones','modificarTipoAvionesPrincipal','modificarTipoAviones','eliminarAviones','eliminarTipoAviones'].indexOf($route.name) > -1"
          :link="{
            name: 'Modificar Aviones',
            icon: 'fas fa-edit text-primary',
            path: '/admin/aviones/modificar'
          }"
        />
        <sidebar-item v-if="['agregarAviones','agregarTipoAviones','modificarAviones','modificarTipoAvionesPrincipal','modificarTipoAviones','eliminarAviones','eliminarTipoAviones'].indexOf($route.name) > -1"
          :link="{
            name: 'Modificar Tipo de Aviones',
            icon: 'fas fa-edit text-primary',
            path: '/admin/aviones/modificarTipo'
          }"
        />
        <sidebar-item v-if="['agregarAviones','agregarTipoAviones','modificarAviones','modificarTipoAvionesPrincipal','modificarTipoAviones','eliminarAviones','eliminarTipoAviones'].indexOf($route.name) > -1"
          :link="{
            name: 'Eliminar Aviones',
            icon: 'fas fa-eraser text-primary',
            path: '/admin/aviones/eliminar'
          }"
        />
        <sidebar-item v-if="['agregarAviones','agregarTipoAviones','modificarAviones','modificarTipoAvionesPrincipal','modificarTipoAviones','eliminarAviones','eliminarTipoAviones'].indexOf($route.name) > -1"
          :link="{
            name: 'Eliminar Tipo de Aviones',
            icon: 'fas fa-eraser text-primary',
            path: '/admin/aviones/eliminarTipo'
          }"
        />
        <sidebar-item v-if="['menu'].indexOf($route.name) > -1"
          :link="{
            name: 'Administración de zonas y puertas',
            icon: 'fas fa-parking text-primary',
            path: '/admin/puertasYZonas'
          }"
        />
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
        sidebarBackground: 'vue' //vue|blue|orange|green|red|primary
      };
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
