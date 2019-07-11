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
                                    <h3>Aerolínea - IATA: </h3>
                                </div>                                
                                <div class="col-md-4" >
                                    <autocompletar v-model="aerolinea.nombre" :items="aerolineas" filterByID="idAerolinea" filterBy="nombre" filterBy2="iata" v-on:hijoEnvia="setAerolinea"/>
                                </div>
                                <div class="col-md-2" >
                                    <h3>Avion:</h3>
                                </div>                                
                                <div class="col-md-4" >
                                    <autocompletar v-model="avion.regNro" :items="aviones" filterByID="idAvion" filterBy="regNro" filterBy2="iata" v-on:hijoEnvia="setAvion"/>
                                </div>
                            </div>
                            <div class="form-group row">         
                                <div class="col-md-2" >
                                    <h3>Ciudad de Procedencia: </h3>
                                </div>                                
                                <div class="col-md-4" >
                                    <input v-model="inputAerolinea" type="text" class="form-control" placeholder="Ingresar aerolínea">
                                </div>
                                <div class="col-md-2" >
                                    <h3>Estado de Vuelo: </h3>
                                </div>                                
                                <div class="col-md-4" >
                                    <div class="form-group">
                                        <select v-model="inputVuelo" class="form-control">
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
                                    <h3>Hora Programada: </h3>
                                </div>                                
                                <div class="col-md-4" >
                                    <input v-model="inputAerolinea" type="text" class="form-control" placeholder="Ingresar hora programada">
                                </div>
                                <div class="col-md-2" >
                                    <h3>Hora Estimada: </h3>
                                </div>                                
                                <div class="col-md-4" >
                                    <input v-model="inputVuelo" type="text" class="form-control" placeholder="Ingresar hora estimada">
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

import axios from 'axios'
import autocompletar from './Autocompletar.vue';
export default {
    data() {
      return {
        idDelUsuario: '',
        salida: '',
        inputNombre: '',
        inputContraseña: '',
        aerolinea: {idAerolinea:'',nombre:'',iata:''},
        aerolineas: [],
        avion: {idAvion:'', regNro:'', iata:''},
        aviones: [],
      }
    },
    components: {
        autocompletar
    },

    mounted(){
        axios.get(this.$connectionString+"/scv/api/aerolinea/obtenerTodos")
        .then((response) => {
            this.aerolineas = response.data;
        }),
        axios.get(this.$connectionString+"/scv/api/avion/obtenerTodos")
        .then((response) => {
            this.aviones = response.data;
        })
    },

    methods: {
        borrar: function(){
            document.getElementById('inputNombre').nodeValue = '';   
            document.getElementById('inputContraseña').nodeValue = '';
        },
        guardar: function(){
            let aux = this;
            axios.post('http://127.0.0.1:8000/scv/api/usuario/crear', {
                usuario: this.inputNombre,
                contrasena: this.inputContraseña,
                rol: 1,
                estado: 'ACTIVO',
                taeropuertoIdAeropuerto: 1
            })
            .then(function (response) {
                aux.salida = response.data;
                //console.log(this.salida);
            })
        },
        setAerolinea(value) {
            this.aerolinea = value;
        },
        setAvion(value){
            this.avion = value;
        }
    }
}
</script>
<style>

</style>
