<template>
    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
            <!-- Card stats -->

        </base-header>

        <div class="container-fluid mt--7">
            <div class="row">
                <div class="col-md-1"></div>
                <div class="col-md-10">                    
                    <card shadow type="secondary">
                        <div slot="header" class="bg-white border-0">
                            <div class="row align-items-center">
                                <div class="col-12">
                                    <h3 class="mb-0">Ingresar vuelo</h3>
                                </div>
                            </div>
                        </div>
                        <template>
                            <!-- <div class="form-group row">
                                <div class="col-md-2">
                                </div>
                                <div class="col-md-4" >
                                    <h3>Codigo del usuario:</h3>
                                </div>
                                <div class="col-md-4" > 
                                    <h3> {{idDelUsuario}} </h3>
                                </div>
                            </div> -->
                            <div class="form-group row">         
                                <div class="col-md-2" >
                                    <h3>Avion:</h3>
                                </div>                                
                                <div class="col-md-4" >
                                    <autocompletar v-model="avion.regNro" :items="aviones" filterByID="idAvion" filterBy="regNro" filterBy2="iata" v-on:hijoEnvia="setAvion" :query="avion.regNro"/>
                                </div>
                            </div>
                            <div class="form-group row">         
                                <div class="col-md-2" >
                                    <h3>Aeropuerto de Procedencia:</h3>
                                </div>                                
                                <div class="col-md-4" >
                                    <autocompletar v-model="aeropuerto.nombre" :items="aeropuertos" filterByID="idAeropuerto" filterBy="nombre" filterBy2="" v-on:hijoEnvia="setAeropuerto" :query="aeropuerto.nombre"/>
                                </div>
                                <div class="col-md-2" >
                                    <h3>Estado de Vuelo: </h3>
                                </div>                                
                                <div class="col-md-4" >
                                    <div class="form-group">
                                        <select v-model="inputEstadoVuelo" class="form-control">
                                            <option>Programado</option>
                                            <option>Cancelado</option>
                                            <option>En vuelo</option>
                                            <option>Aterrizado</option>                                            
                                        </select>
                                    </div>  
                                </div>
                            </div>
                            <div class="form-group row">         
                                <div class="col-md-2" >
                                    <h3>IATA: </h3>
                                </div>                                
                                <div class="col-md-4" >
                                    <input v-model="codigoIATA" type="text" class="form-control" placeholder="Ingresar el código IATA">                                   
                                </div>
                                <div class="col-md-2" >
                                    <h3>ICAO:</h3>
                                </div>                                
                                <div class="col-md-4" >
                                    <input v-model="codigoICAO" type="text" class="form-control" placeholder="Ingresar el código ICAO">                                   
                                </div>
                            </div>
                            <div class="form-group row">         
                                <div class="col-md-2" >
                                    <h3>Hora Programada: </h3>
                                </div>                                
                                <div class="col-md-4" >
                                    <date-picker v-model="horaProg" :config="options"></date-picker>
                                </div>
                                <div class="col-md-2" >
                                    <h3>Hora Estimada: </h3>
                                </div>                                
                                <div class="col-md-4" >
                                    <date-picker v-model="horaReal" :config="options"></date-picker>
                                </div>
                            </div>
                            <div class="form-group row" >
                                <div class="col-md-3"> </div>
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
                <div class="col-md-1"></div>
            </div>
        </div> 
    </div>
</template>

<script>

import axios from 'axios';
import autocompletar from './Autocompletar.vue';
import datePicker from 'vue-bootstrap-datetimepicker';
import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';
import swal from 'sweetalert2';
export default {
    data() {
      return {
        horaProg: new Date(),
        horaReal: new Date(),
        options: {
            format: 'DD/MM/YYYY HH:mm',
            useCurrent: false,
            icons: {
                time: 'far fa-clock',
                date: 'far fa-calendar',
                up: 'fas fa-arrow-up',
                down: 'fas fa-arrow-down',
                previous: 'fas fa-chevron-left',
                next: 'fas fa-chevron-right',
                today: 'fas fa-calendar-check',
                clear: 'far fa-trash-alt',
                close: 'far fa-times-circle'
            }
        },

        avion: {idAvion:'', regNro:'', iata:''},
        aviones: [],
        aeropuerto: {idAeropuerto:'', nombre:''},
        aeropuertos: [],
        inputEstadoVuelo: '',
        codigoIATA: '',
        codigoICAO: ''
      }
    },
    components: {
        autocompletar,
        datePicker
    },

    mounted(){
        axios.get(this.$connectionString+"scv/api/aeropuertoOrigen/obtenerTodos")
        .then((response) => {
            this.aeropuertos = response.data;
        }),
        axios.get(this.$connectionString+"/scv/api/avion/obtenerTodos")
        .then((response) => {
            this.aviones = response.data;
        })
        
    },

    methods: {
        borrar: function(){
            this.horaProg = '';
            this.horaReal = '';
            this.avion.regNro = '';
            this.ciudad.nombre = '';
            this.inputEstadoVuelo = '';
        },
        guardar: function(){
            if (this.aeropuerto.nombre.length == 0){
                swal.fire({
                    type: 'warning',
                    title: 'Alerta de validación',
                    text: 'No se ha seleccionado una aerolínea',
                    confirmButtonColor: '#fb6340'                    
                });
            } else if (this.avion.regNro.length == 0){
                swal.fire({
                    type: 'warning',
                    title: 'Alerta de validación',
                    text: 'No se ha seleccionado un avión',
                    confirmButtonColor: '#fb6340'                    
                });              
            } else if (this.inputEstadoVuelo.length == 0){
                swal.fire({
                    type: 'warning',
                    title: 'Alerta de validación',
                    text: 'No se ha seleccionado el estado del vuelo',
                    confirmButtonColor: '#fb6340'                    
                });                  
            } else if (this.horaProg.length == 0){
                swal.fire({
                    type: 'warning',
                    title: 'Alerta de validación',
                    text: 'No se ha seleccionado el estado del vuelo',
                    confirmButtonColor: '#fb6340'    
                });
            } else if (this.horaReal.length == 0){
                swal.fire({
                    type: 'warning',
                    title: 'Alerta de validación',
                    text: 'No se ha seleccionado el estado del vuelo',
                    confirmButtonColor: '#fb6340'  
                });
            } else {
                let aux = this;
                let avion = {
                    regNro: this.codigoRegistro,
                    iata: this.codigoIATA,
                    icao: this.codigoICAO,
                    taerolineaIdAerolinea: this.aerolinea.idAerolinea,
                    ttipoAvionIdTipoAvion: this.tipoAvion.idTipoAvion,
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
                        text: 'Has pensado en cambiar el código de registro?',
                        confirmButtonColor: '#f5365c'
                    });
                })
            }
        },
        setAeroPuerto(value) {
            this.aeropuerto = value;
        },
        setAvion(value){
            this.avion = value;
        }
    },
    computed: {
        filter: function(){
        var name_re1 = new RegExp(this.buscarAerolinea, 'i');
        var name_re2 = new RegExp(this.buscarNroVuelo, 'i');
        var tableData = [];
        var i = this.tableData.length;
        for (i in this.tableData) {
            if (this.tableData[i].nombreAerolinea.match(name_re1) && this.tableData[i].nroVuelo.match(name_re2)) {
            tableData.push(this.tableData[i])
            }
        }
        return tableData;
        }
    }
}
</script>
<style>

</style>
