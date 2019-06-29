<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <div class="collapse navbar-collapse justify-content-end">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link">
              Bienvenido, {{this.usuarioNombre}}
            </a>
          </li>
          <li class="nav-item">
            <a @click="cerrarSesion" class="nav-link">
              Cerrar sesión
            </a>
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
      searchQuery: '',
      usuarioNombre: localStorage.usuarioNombre
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
    },
    cerrarSesion: function(){
      localStorage.usuarioNombre = '';
      localStorage.usuarioRol = '';            
      this.$router.push({name:'login'});
    }
  }
};
</script>

<style>

</style>

