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
                                    <h3 class="mb-0">Ingresar tipo de aviones</h3>
                                </div>
                            </div>
                        </div>
                        <template>

                            <div class="form-group row">
                                <div class="col-md-2">
                                </div>                                
                                <div class="col-md-4" >
                                    <h3>Modelo:</h3>
                                </div>                                
                                <div class="col-md-4" >
                                    <input v-model="modelo" type="text" class="form-control" placeholder="Ingresar el modelo">                                   
                                </div>
                            </div>

                            <div class="form-group row">
                                <div class="col-md-2">
                                </div>                                
                                <div class="col-md-4" >
                                    <h3>Código IATA: </h3>
                                </div>                                
                                <div class="col-md-4" >
                                    <input v-model="codigoIATA" type="text" class="form-control" placeholder="Ingresar el código IATA">                                   
                                </div>
                            </div>

                            <div class="form group row">
                                <div class="col-md-2">
                                </div>                                
                                <div class="col-md-4" >
                                    <h3>Tamaño:</h3>
                                </div>   
                                <div class="col-md-4" >                                 
                                    <div class="form-group">
                                        <select v-model="tipoAvion" class="form-control" id="sel1">
                                            <option>Grande</option>
                                            <option>Mediano</option>
                                            <option>Pequeño</option>
                                        </select>
                                    </div>                       
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
            </div>
        </div> 


        <!-- <base-header type="gradient-success" class="pb-1 pb-2 pt-2 pt-md-1">
            <div class="row">
                <h2> Agregar tipo de aviones </h2>
            </div>
        </base-header>
        <div class='table'>
            <div class="row"><br/></div>
            <div class="row ">
                <div class="col-lg-3">
                    <h3> Código de registro </h3>
                </div> 
                <div class="col-lg-3">
                    <form>
                          <base-input alternative="" placeholder="Ingresar código de registro" input-classes="form-control-alternative">
                          </base-input>
                    </form>
                </div>
            </div>
            <div class="row ">
                <div class="col-lg-3">
                    <h3> Capacidad </h3>
                </div> 
                <div class="col-lg-3">
                    <form>
                          <base-input alternative="" placeholder="Ingresa capacidad" input-classes="form-control-alternative">
                          </base-input>
                    </form>
                </div>
            </div>
            <div class="row ">
                <div class="col-lg-3">
                    <h3> Codigo ICAO </h3>
                </div> 
                <div class="col-lg-3">
                    <form>
                        <base-input alternative="" placeholder="Ingresar codigo icao" input-classes="form-control-alternative">
                        </base-input>
                    </form>
                </div>
            </div>
            <div class="row ">
                <div class="col-lg-3">
                    <h3> Largo </h3>
                </div> 
                <div class="col-lg-3">
                    <form>
                        <base-input alternative="" placeholder="Ingresar largo" input-classes="form-control-alternative">
                        </base-input>
                    </form>
                </div>
            </div>
            <div class="row ">
                <div class="col-lg-3">
                    <h3> Ancho </h3>
                </div> 
                <div class="col-lg-3">
                    <form>
                        <base-input alternative="" placeholder="Ingresar ancho" input-classes="form-control-alternative">
                        </base-input>
                    </form>
                </div>
            </div>
            <div class="row pb-4 pb-4 pt-4 pt-md-4" >
                <div class=" col-lg-4"> </div>
                <div class=" col-lg-1">
                    <base-button size = "lg" type="default">  Borrar  </base-button>
                </div>
                <div class="col-lg-1 ">
                    <base-button  size = "lg" type="default">Guardar</base-button>
                </div>
            </div>  
        </div> -->
    </div>
</template>
<script>
import swal from'sweetalert2';
import axios from 'axios'


export default {
    data() {
      return {
        modelo: '',
        codigoIATA: '',
        tipoAvion: '',
        salida: ''
      }
    },

    methods: {
        borrar: function(){
            this.modelo = ''
            this.codigoIATA = ''
        },        
        guardar: function(){
            if(this.modelo.length==0){
                swal.fire({
                    type: 'warning',
                    title: 'Alerta de validación',
                    text: 'El nombre del modelo está vacío'
                });
            }
            else if(this.modelo.length>100){
                swal.fire({
                    type: 'warning',
                    title: 'Alerta de validación',
                    text: 'El nombre del modelo debe ser de máximo 100 caracteres'
                });
            }
            else if(this.codigoIATA.length==0){
                swal.fire({
                    type: 'warning',
                    title: 'Alerta de validación',
                    text: 'El código IATA está vacío'
                });
            }
            else if(this.codigoIATA.length!=3){
                swal.fire({
                    type: 'warning',
                    title: 'Alerta de validación',
                    text: 'La código IATA debe ser de 3 caracteres'
                });
            }
            else if(this.tipoAvion.length==0){
                swal.fire({
                    type: 'warning',
                    title: 'Alerta de validación',
                    text: 'Elegir un rol'
                });
            }
            else {
                let aux = this;
                //let tipoAvionFinal = this.tipoAvion
                //tipoAvionFinal = tipoAvionFinal.toUpperCase()
                //console.log(tipoAvionFinal.toUpperCase())
                let tipoAvion = {
                    modelo: this.modelo,
                    iata: this.codigoIATA,
                    tamano: this.tipoAvion,
                    esEliminado: false
                };
                axios.post('http://localhost:8000/scv/api/tipoAvion/crear', tipoAvion)
                .then(function (response){
                    swal.fire({
                        type: 'success',
                        title: 'Éxito!',
                        text: 'Creación de tipo de avión confirmada!'
                    });
                    aux.salida = response.data;
                })
            }            
        }
    }
};
</script>
<style>
</style>