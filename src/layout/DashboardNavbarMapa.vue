<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <div class="collapse navbar-collapse justify-content-end">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <sidebar-item v-if="['menu','ingresarVuelo','eliminarVuelo','ingresarUsuario','modificarUsuario','modificarUsuario2','eliminarUsuario','ingresarAviones','ingresarTipoAviones','modificarAviones','modificarAviones2','modificarTipoAvionesPrincipal','modificarTipoAviones','eliminarAviones','eliminarTipoAviones','visualizarMapa','puertasYZonas'].indexOf($route.name) > -1"
          :link="{
            name: 'SCV',
            icon: 'fas fa-plane-arrival text-primary',
            path: '/admin/menu'
          }"
        />
          </li>
         
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
  export default {
    data() {
      return {
        activeNotifications: false,
        showMenu: false,
        searchQuery: ''
      };
    },
    methods: {
      toggleSidebar() {
        this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
      },
      hideSidebar() {
        this.$sidebar.displaySidebar(false);
      },
      toggleMenu() {
        this.showMenu = !this.showMenu;
      }
    }
  };
</script>

<style>

</style>

