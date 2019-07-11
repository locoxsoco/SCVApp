<template>
    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
            <!-- Card stats -->

        </base-header>
        
        <div class="container-fluid mt--7">
            <div class="row">
                <div class="col-md-2">
                </div>
                <div class="col-md-8">
                    
                    <card shadow type="secondary">
                        <div slot="header" class="bg-white border-0">
                            <div class="row align-items-center">
                                <div class="col-12">
                                    <h3 class="mb-0">Modificar avion</h3>
                                </div>
                            </div>
                        </div>
                        <template>

                            <div class="form-group row">
                                <div class="col-md-1">
                                </div>                                
                                <div class="col-md-4" >
                                    <h3>Codigo de registro:</h3>
                                </div>                                
                                <div class="col-md-5" >
                                    <input v-model="codigoDeRegistro" type="text" class="form-control" placeholder=""> 
                                </div>
                            </div>                          

                            <div class="form-group row">
                                <div class="col-md-1">
                                </div>                                
                                <div class="col-md-4" >
                                    <h3>Código IATA: </h3>
                                </div>                                
                                <div class="col-md-5" >
                                    <input v-model="iata" type="text" class="form-control" placeholder="">                                   
                                </div>
                            </div>

                            <div class="form-group row">
                                <div class="col-md-1">
                                </div>                                
                                <div class="col-md-4" >
                                    <h3>Código ICAO: </h3>
                                </div>                                
                                <div class="col-md-5" >
                                    <input v-model="icao" type="text" class="form-control" placeholder="">                                   
                                </div>
                            </div>

                            <div class="form-group row">
                                <div class="col-md-1">
                                </div>                                
                                <div class="col-md-4" >
                                    <h3>Modelo de avion:</h3>
                                </div> 
                                <div class="col-md-5" >                                 
                                    <autocompletar v-model="tipoAvion.modelo" :items="tiposDeAvion" filterByID="idTipoAvion" filterBy="modelo" filterBy2="iata" v-on:hijoEnvia="setTipoAvion"/>
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-md-1">
                                </div>                                
                                <div class="col-md-4" >
                                    <h3>Aerolínea:</h3>
                                </div> 
                                <div class="col-md-5" >                                 
                                    <autocompletar v-model="aerolinea.nombre" :items="aerolineas" filterByID="idAerolinea" filterBy="nombre" filterBy2="" v-on:hijoEnvia="setAerolinea"/>
                                </div>
                            </div>                            

                            <div class="form-group row" >
                                <div class="col-md-3"> </div>
                                <div class="col-md-3">
                                    <base-button size = "lg" type="default" @click="atras">Atras</base-button>
                                </div>
                                <div class="col-md-3">
                                    <base-button  size = "lg" type="default" @click="confirmar">Confirmar cambios</base-button>
                                </div>
                            </div>  
                        </template>
                    </card>
                </div>
            </div>
        </div> 

          <!-- <card class="strpied-tabled-with-hover"
                body-classes="table-full-width table-responsive"
          >
            <template slot="header">
              <h4 class="card-title">Llegadas del aeropuerto</h4>
            </template>         
               
            <div class="form-group row"> 

              <div class="col-md-4" >
                <input type="text" class="form-control form-control-lg" id="exampleInputName2" placeholder="Aerolinea">
              </div>

              <div class="col-md-4" > 
                <input type="email" class="form-control form-control-lg" id="exampleInputEmail2" placeholder="# de vuelo">
              </div>

              <div class="col-md-4">
                <button type="submit" class="btn btn-default">Buscar</button>
              </div>
            </div>         

            <l-table class="table-hover table-striped"
                     :columns="table1.columns"
                     :data="table1.data"
                     style="margin-left:0px !important">
            </l-table>
          </card> -->

    </div>
</template>

<script>

import axios from 'axios';
import swal from 'sweetalert2';
import autocompletar from './Autocompletar.vue';

export default {
    props: ['idAvion', 'codigoDeRegistro', 'iata', 'icao'],

    data() {
      return {
        tiposDeAvion: [],
        tipoAvion: {idTipoAvion:'',modelo:'',iata:''},
        aerolinea: {idAerolinea:'',nombre:''},
        aerolineas: []
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
        atras: function(){
                    
            this.$router.push({name:'modificarAviones'})
        },
        confirmar: function(){
            if(this.codigoDeRegistro.length==0){
                swal.fire({
                    type: 'warning',
                    title: 'Alerta de validación',
                    text: 'El código de registro está vacío',
                    confirmButtonColor: '#fb6340'
                });
            }
            else if(this.codigoDeRegistro.length!=6){
                swal.fire({
                    type: 'warning',
                    title: 'Alerta de validación',
                    text: 'El código de registro debe tener 6 caracteres',
                    confirmButtonColor: '#fb6340'
                });
            }
            else if(this.iata.length==0){
                swal.fire({
                    type: 'warning',
                    title: 'Alerta de validación',
                    text: 'El código IATA está vacío',
                    confirmButtonColor: '#fb6340'
                });
            }
            else if(this.iata.length!=2){
                swal.fire({
                    type: 'warning',
                    title: 'Alerta de validación',
                    text: 'El código IATA debe tener 2 caracteres',
                    confirmButtonColor: '#fb6340'
                });
            }
            else if(this.icao.length==0){
                swal.fire({
                    type: 'warning',
                    title: 'Alerta de validación',
                    text: 'El código ICAO está vacío',
                    confirmButtonColor: '#fb6340'
                });
            }
            else if(this.icao.length!=3){
                swal.fire({
                    type: 'warning',
                    title: 'Alerta de validación',
                    text: 'El código ICAO debe tener 3 caracteres',
                    confirmButtonColor: '#fb6340'
                });
            }
            else if(this.tipoAvion.modelo.length<=5){
                swal.fire({
                    type: 'warning',
                    title: 'Alerta de validación',
                    text: 'El modelo de avión está vacío',
                    confirmButtonColor: '#fb6340'
                });
            }else if(this.aerolinea.nombre.length<3){
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
                    idAvion: this.idAvion,
                    regNro: this.codigoDeRegistro,
                    iata: this.iata,
                    icao: this.icao,
                    taerolineaIdAerolinea: this.aerolinea.idAerolinea,
                    ttipoAvionIdTipoAvion: this.tipoAvion.idTipoAvion,
                    esEliminado: false
                }

                axios.put(this.$connectionString+"/scv/api/avion/actualizar", avion)
                .then(function (response) {
                        swal.fire({
                            type: 'success',
                            title: 'Éxito!',
                            text: 'Modificación de avión confirmada!',
                            confirmButtonColor: '#2dce89'
                        });
                        aux.salida = response.data;
                })
                .catch(function () {
                        swal.fire({
                            type: 'error',
                            title: 'Modificación de avión fallida!',
                            text: 'Has pensado en cambiar el código IATA?',
                            confirmButtonColor: '#f5365c'
                        });
                })
            }

        }
    }
}
</script>
<style>

</style>