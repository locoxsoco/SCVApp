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
                                    <h3>Modelo de avion:</h3>
                                </div> 
                                <div class="col-md-5" >                                 
                                    <autocompletar :items="tiposDeAvion" filterBy="modelo" v-on:hijoEnvia="onChildClick"/>
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

    <!-- <div>
        <base-header type="gradient-success" class="pb-1 pb-2 pt-2 pt-md-1">
            <div class="row">
                <h2> Agregar aviones </h2>
            </div>
        </base-header>

        <div class="table-responsive">
            <div class="row pb-4 pb-4 pt-4 pt-md-4" >
            <div class="col-lg-4" > 
                <h3> Id del avión </h3> 
            </div>
            </div>
            <div class="row ">
                <div class="col-lg-3">
                    <h3> Código de registro </h3>
                </div> 
                <div class="col-lg-3">
                    <form>
                          <base-input v-model="idCodAvion" alternative="" placeholder="Ingresar código de registro" input-classes="form-control-alternative">
                          </base-input>
                    </form>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-3">
                    <h3> Tipo de avión </h3>
                </div> 
                <div class="col-lg-3">
                    <form>
                      <b-select placeholder="Select a name" v-model="tipoAvion">
                            <option
                              v-for="option in data"
                              :value="option.id"
                              :key="option.id">
                              {{ option.tipo }}
                            </option>
                      </b-select>
                    </form>
                </div>
                <div class="col-lg-3">
                    <base-button type="primary" @click="agregarTipoAvion()"> + </base-button>
                </div>   
            </div>
            <div class="row pb-4 pb-4 pt-4 pt-md-4" >
                <div class=" col-lg-4"> </div>
                <div class=" col-lg-1">
                    <base-button size = "lg" type="default">  Borrar  </base-button>
                </div>     
                <div class="col-lg-1 ">
                    <base-button  size = "lg" type="default" v-on:click="guardarAvion">Guardar</base-button>
                </div>
            </div>   

        </div>

    </div> -->
</template>
<script>

import axios from 'axios'
import autocompletar from './Autocompletar.vue'
  export default {
    data() {
      return {
        codigoRegistro: '',
        tipoAvion: '',
        codigoICAO: '',
        codigoIATA: '',
        tiposDeAvion: []
      }
    },
    components: {
        autocompletar
    },

    mounted(){            
        axios.get("http://localhost:8000/scv/api/tipoAvion/obtenerTodos")
        .then((response) => {
            this.tiposDeAvion = response.data;
        })     
    },
    
    methods: {

    borrar: function(){
        this.codigoRegistro = ''
        this.tipoAvion = ''
        this.codigoICAO = ''
        this.codigoIATA = ''
    },

    guardar: function(){
        console.log(this.tipoAvion)
        let aux = this;
        let avion = {
            regNro: this.codigoRegistro,
            iata: this.codigoIATA,
            icao: this.codigoICAO,
            taerolineaIdAerolinea: 1,
            ttipoAvionIdTipoAvion: 1,
            esEliminado: false
        }
        axios.post('http://127.0.0.1:8000/scv/api/avion/crear', avion)
        .then(function (response) {
            aux.salida = response.data;
            //console.log(this.salida);
        })
        }
    },
    onChildClick(value) {
        this.tipoAvion = value;
        console.log(this.tipoAvion);
    }
  };
</script>
<style>
</style>