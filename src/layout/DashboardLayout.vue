<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <side-bar
      :background-color="sidebarBackground"
      short-title="Argon"
      title="Argon"
    >
      <template slot="links">
        <sidebar-item
          :link="{
            name: 'SCV',
            icon: 'ni ni-tv-2 text-primary',
            path: '/inicio'
          }"
        />
        <sidebar-item
          :link="{
            name: 'SCV',
            icon: 'ni ni-tv-2 text-primary',
            path: '/admin/menu'
          }"
        />
        <sidebar-item 
          :link="{
            name: 'Administración de usuario',
            icon: 'ni ni-tv-2 text-primary',
            path: '/admin/usuario/agregar'
          }"
        />
        <sidebar-item
          :link="{
            name: 'Agregar Usuarios',
            icon: 'ni ni-tv-2 text-primary',
            path: '/admin/usuario/agregar'
          }"
        />
        <sidebar-item
          :link="{
            name: 'Modificar Usuarios',
            icon: 'ni ni-tv-2 text-primary',
            path: '/admin/usuario/modificar'
          }"
        />
        <sidebar-item
          :link="{
            name: 'Eliminar Usuarios',
            icon: 'ni ni-tv-2 text-primary',
            path: '/admin/usuario/eliminar'
          }"
        />
        <sidebar-item
          :link="{
            name: 'Administración de aviones y sus tipos',
            icon: 'ni ni-tv-2 text-primary',
            path: '/admin/aviones/agregar'
          }"
        />
        <sidebar-item
          :link="{
            name: 'Agregar Aviones',
            icon: 'ni ni-tv-2 text-primary',
            path: '/admin/aviones/agregar'
          }"
        />
        <sidebar-item
          :link="{
            name: 'Agregar Tipo de Aviones',
            icon: 'ni ni-tv-2 text-primary',
            path: '/admin/aviones/agregarTipo'
          }"
        />
        <sidebar-item
          :link="{
            name: 'Modificar Aviones',
            icon: 'ni ni-tv-2 text-primary',
            path: '/admin/aviones/modificar'
          }"
        />
        <sidebar-item
          :link="{
            name: 'Modificar Tipo de Aviones',
            icon: 'ni ni-tv-2 text-primary',
            path: '/admin/aviones/modificarTipo'
          }"
        />
        <sidebar-item
          :link="{
            name: 'Eliminar Aviones',
            icon: 'ni ni-tv-2 text-primary',
            path: '/admin/aviones/eliminar'
          }"
        />
        <sidebar-item
          :link="{
            name: 'Eliminar Tipo de Aviones',
            icon: 'ni ni-tv-2 text-primary',
            path: '/admin/aviones/eliminarTipo'
          }"
        />
        <sidebar-item
          :link="{
            name: 'Administración de zonas y puertas',
            icon: 'ni ni-tv-2 text-primary',
            path: '/admin/puertasYZonas'
          }"
        />
        <sidebar-item
          :link="{
            name: 'Visualizar el mapa',
            icon: 'ni ni-tv-2 text-primary',
            path: '/admin/visualizarMapa'
          }"
        />
        

        <!-- <sidebar-item :link="{name: 'Icons', icon: 'ni ni-planet text-blue', path: '/icons'}"/>
        <sidebar-item :link="{name: 'Maps', icon: 'ni ni-pin-3 text-orange', path: '/maps'}"/>
        <sidebar-item :link="{name: 'User Profile', icon: 'ni ni-single-02 text-yellow', path: '/profile'}"/>
        <sidebar-item :link="{name: 'Tables', icon: 'ni ni-bullet-list-67 text-red', path: '/tables'}"/>
        <sidebar-item :link="{name: 'Login', icon: 'ni ni-key-25 text-info', path: '/login'}"/>
        <sidebar-item :link="{name: 'Register', icon: 'ni ni-circle-08 text-pink', path: '/register'}"/> -->

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
