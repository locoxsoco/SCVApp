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
                                    <h3 class="mb-0">Ingresar aviones</h3>
                                </div>
                            </div>
                        </div>
                        <template>

                            <div class="form-group row">
                                <div class="col-md-1">
                                </div>                                
                                <div class="col-md-4" >
                                    <h3>Código de registro: </h3>
                                </div>                                
                                <div class="col-md-5" >
                                    <input v-model="codigoRegistro" type="text" class="form-control" placeholder="Ingresar el código de registro">                                   
                                </div>
                            </div>

                            <div class="form-group row">
                                <div class="col-md-1">
                                </div>                                
                                <div class="col-md-4" >
                                    <h3>Código IATA: </h3>
                                </div>                                
                                <div class="col-md-5" >
                                    <input v-model="codigoIATA" type="text" class="form-control" placeholder="Ingresar el código IATA">                                   
                                </div>
                            </div>

                            <div class="form-group row">
                                <div class="col-md-1">
                                </div>                                
                                <div class="col-md-4" >
                                    <h3>Código ICAO:</h3>
                                </div>                                
                                <div class="col-md-5" >
                                    <input v-model="codigoICAO" type="text" class="form-control" placeholder="Ingresar el código ICAO">                                   
                                </div>
                            </div>                                                        

                            <div class="form-group row">
                                <div class="col-md-1">
                                </div>                                
                                <div class="col-md-4" >
                                    <h3>Modelo de avion - IATA:</h3>
                                </div> 
                                <div class="col-md-5" >                                 
                                    <autocompletar v-model="tipoAvion.modelo" :items="tiposDeAvion" filterByID="idTipoAvion" filterBy="modelo" filterBy2="iata" v-on:hijoEnvia="setTipoAvion"/>
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-md-1">
                                </div>                                
                                <div class="col-md-4" >
                                    <h3>Aerolínea - IATA:</h3>
                                </div> 
                                <div class="col-md-5" >                                 
                                    <autocompletar v-model="aerolinea.nombre" :items="aerolineas" filterByID="idAerolinea" filterBy="nombre" filterBy2="iata" v-on:hijoEnvia="setAerolinea"/>
                                </div>
                            </div>
                            <div class="form-group row" >
                                <div class="col-md-4"> </div>
                                <div class="col-md-3">
                                    <base-button size = "lg" type="default" @click="borrar">Borrar</base-button>
                                </div>
                                <div class="col-md-3">
                                    <base-button  size = "lg" type="default" @click="guardar">Guardar</base-button>
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
        codigoRegistro: '',
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
        axios.get(this.$connectionString+"/scv/api/tipoAvion/obtenerTodos")
        .then((response) => {
            this.tiposDeAvion = response.data;
        }),
        axios.get(this.$connectionString+"/scv/api/aerolinea/obtenerTodos")
        .then((response) => {
            this.aerolineas = response.data;
        })
    },
    
    methods: {
        setTipoAvion(value) {
            this.tipoAvion = value;
        },
        setAerolinea(value) {
            this.aerolinea = value;
        },
        borrar: function(){
            this.codigoRegistro = '';
            this.tipoAvion = '';
            this.codigoICAO = '';
            this.codigoIATA = '';
            this.aerolinea = '';
        },

        guardar: function(){
            if(this.codigoRegistro.length==0){
                swal.fire({
                    type: 'warning',
                    title: 'Alerta de validación',
                    text: 'El código de registro está vacío',
                    confirmButtonColor: '#fb6340'
                });
            }
            else if(this.codigoRegistro.length!=6){
                swal.fire({
                    type: 'warning',
                    title: 'Alerta de validación',
                    text: 'El código de registro debe tener 6 caracteres',
                    confirmButtonColor: '#fb6340'
                });
            }
            else if(this.codigoIATA.length==0){
                swal.fire({
                    type: 'warning',
                    title: 'Alerta de validación',
                    text: 'El código IATA está vacío',
                    confirmButtonColor: '#fb6340'
                });
            }
            else if(this.codigoIATA.length>8){
                swal.fire({
                    type: 'warning',
                    title: 'Alerta de validación',
                    text: 'El código IATA debe tener 8 caracteres o menos',
                    confirmButtonColor: '#fb6340'
                });
            }
            else if(this.codigoICAO.length==0){
                swal.fire({
                    type: 'warning',
                    title: 'Alerta de validación',
                    text: 'El código ICAO está vacío',
                    confirmButtonColor: '#fb6340'
                });
            }
            else if(this.codigoICAO.length!=3){
                swal.fire({
                    type: 'warning',
                    title: 'Alerta de validación',
                    text: 'El código ICAO debe tener 3 caracteres',
                    confirmButtonColor: '#fb6340'
                });
            }
            else if(this.tipoAvion.modelo.length==0){
                swal.fire({
                    type: 'warning',
                    title: 'Alerta de validación',
                    text: 'El modelo de avión está vacío',
                    confirmButtonColor: '#fb6340'
                });
            }else if(this.aerolinea.nombre.length==0){
                swal.fire({
                    type: 'warning',
                    title: 'Alerta de validación',
                    text: 'La aerolínea está vacía',
                    confirmButtonColor: '#fb6340'
                });
            }
            else {
                let aux = this;
                let avion = {
                    regNro: this.codigoRegistro,
                    iata: this.codigoIATA,
                    icao: this.codigoICAO,
                    taerolineaIdAerolinea: this.tipoAvion.idTipoAvion,
                    ttipoAvionIdTipoAvion: this.aerolinea.idAerolinea,
                    esEliminado: false
                }
                axios.post(this.$connectionString+'/scv/api/avion/crear/' + localStorage.usuarioId, avion)
                .then(function (response) {
                    swal.fire({
                        type: 'success',
                        title: 'Éxito!',
                        text: 'Creación de avión confirmada!',
                        confirmButtonColor: '#2dce89'
                    });
                    aux.salida = response.data;
                })
                .catch(function () {
                    swal.fire({
                        type: 'error',
                        title: 'Creación de avión fallida!',
                        text: 'Has pensado en cambiar el código IATA?',
                        confirmButtonColor: '#f5365c'
                    });
                })
            }
        }
    }
  };
</script>
<style>
</style>