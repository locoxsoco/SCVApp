<template>

    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
            <!-- Card stats -->

        </base-header>

        <div class="container-fluid mt--7">
            <div class="row">
                <div class="col-md-1">
                </div>
                <div class="col-md-10">
                    
                    <card shadow type="secondary">
                        <div slot="header" class="bg-white border-0">
                            <div class="row align-items-center">
                                <div class="col-12">
                                    <h3 class="mb-0">Simulación de Vuelos</h3>
                                </div>
                            </div>
                        </div>
                        <template>

                            <div class="form-group row">
                                <div class="col-md-1">
                                </div>                                
                                <div class="col-md-3" >
                                    <h3>Modo simulación de vuelos: </h3>
                                </div>                                
                                <div class="col-md-5" v-if="!estadoSimulacion" >
                                    <base-button outline type="default" @click="activar">Desactivado</base-button>
                                </div>
                                <div class="col-md-5" v-if="estadoSimulacion" >
                                    <base-button type="default" @click="desactivar">Activado</base-button>
                                </div>
                            </div>
                        </template>
                    </card>
                </div>
            </div>
        </div> 

    </div>
</template>
<script>

import axios from 'axios';
import swal from 'sweetalert2';
import autocompletar from './Autocompletar.vue';
  export default {
    data() {
      return {
        estadoSimulacion: 0,
        tipoAvion: {idTipoAvion:'',modelo:'',iata:''},
        codigoICAO: '',
        codigoIATA: '',
        tiposDeAvion: [],
        aerolineas: [],
        aerolinea: {idAerolinea:'',nombre:'',iata:''},
      }
    },
    components: {
        autocompletar
    },

    mounted(){            
        axios.get(this.$connectionString+"/scv/api/simulacion/obtenerEstado")
        .then((response) => {
            this.estadoSimulacion = response.data;
        })
    },
    
    methods: {
        activar: function(){
            let aux = this;
            axios.get(this.$connectionString+'/scv/api/simulacion/activar/' + localStorage.usuarioId)
            .then(function () {
                swal.fire({
                    type: 'success',
                    title: 'Éxito!',
                    text: 'Activación de simulación confirmada!',
                    confirmButtonColor: '#2dce89'
                });
                aux.estadoSimulacion = 1;
            })
            .catch(function (err) {
                console.log(err);
                swal.fire({
                    type: 'error',
                    title: 'Activación de simulación fallida!',
                    text: 'Intentelo nuevamente más tarde',
                    confirmButtonColor: '#f5365c'
                });
            });
        },
        desactivar: function(){
            let aux2 = this;
            axios.get(this.$connectionString+'/scv/api/simulacion/desactivar/' + localStorage.usuarioId)
            .then(function () {
                swal.fire({
                    type: 'success',
                    title: 'Éxito!',
                    text: 'Desactivación de simulación confirmada!',
                    confirmButtonColor: '#2dce89'
                });
                aux2.estadoSimulacion = 0;
            })
            .catch(function (err) {
                console.log(err);
                swal.fire({
                    type: 'error',
                    title: 'Desactivación de simulación fallida!',
                    text: 'Intentelo nuevamente más tarde',
                    confirmButtonColor: '#f5365c'
                });
            });
            
        }
    }
  };
</script>
<style>
</style>