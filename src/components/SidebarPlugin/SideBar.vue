<template>
    <nav class="navbar navbar-vertical fixed-left navbar-expand-md navbar-light bg-white" id="sidenav-main">
        <div class="container-fluid">

            <!--Toggler-->
            <navbar-toggle-button @click.native="showSidebar">
                <span class="navbar-toggler-icon"></span>
            </navbar-toggle-button>
            <router-link class="navbar-brand" to="/"  v-if="sinAcceso">
                <!-- <img :src="logo" class="navbar-brand-img" alt="..."> -->
                <h1>SCV</h1>
            </router-link>
            <router-link class="navbar-brand" to="/admin/menu"  v-if="!sinAcceso">
                <!-- <img :src="logo" class="navbar-brand-img" alt="..."> -->
                <h1>SCV</h1>
            </router-link>
            <slot></slot>
            <slot></slot>
            <div v-show="$sidebar.showSidebar" class="navbar-collapse collapse show" id="sidenav-collapse-main">

                <div class="navbar-collapse-header d-md-none">
                    <div class="row">
                        <div class="col-6 collapse-brand">
                            <router-link to="/">
                                <img :src="logo">
                            </router-link>
                        </div>
                        <div class="col-6 collapse-close">
                            <navbar-toggle-button @click.native="closeSidebar"></navbar-toggle-button>
                        </div>
                    </div>
                </div>

                <ul class="navbar-nav">
                    <slot name="links">
                    </slot>
                </ul>

                
                <!--Divider-->
                <hr class="my-3">
                <!--Heading-->
                <!--<h6 class="navbar-heading text-muted">Documentation</h6>-->
                <!--Navigation-->
                <!--<ul class="navbar-nav mb-md-3">
                    <li class="nav-item">
                        <a class="nav-link"
                           href="https://demos.creative-tim.com/vue-argon-dashboard/documentation">
                            <i class="ni ni-spaceship"></i> Getting started
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"
                           href="https://demos.creative-tim.com/vue-argon-dashboard/documentation/foundation/colors.html">
                            <i class="ni ni-palette"></i> Foundation
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"
                           href="https://demos.creative-tim.com/vue-argon-dashboard/documentation/components/alerts.html">
                            <i class="ni ni-ui-04"></i> Components
                        </a>
                    </li>
                </ul>
                -->
            </div>
            </div>
    </nav>
</template>
<script>
  import NavbarToggleButton from '@/components/NavbarToggleButton'

  export default {
    name: 'sidebar',
    components: {
      NavbarToggleButton
    },
    data() {
      return {
        sinAcceso: localStorage.usuarioRol==''
      };
    },
    props: {
      logo: {
        type: String,
        //default: 'img/brand/green.png',
        description: 'Sidebar app logo'
      },
      autoClose: {
        type: Boolean,
        default: true,
        description:
          'Whether sidebar should autoclose on mobile when clicking an item'
      }
    },
    provide() {
      return {
        autoClose: this.autoClose
      };
    },
    methods: {
      closeSidebar() {
        this.$sidebar.displaySidebar(false)
      },
      showSidebar() {
        this.$sidebar.displaySidebar(true)
      }
    },
    beforeDestroy() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.showSidebar = false;
      }
    }
  };
</script>
