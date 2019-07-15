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
                                    <h3 class="mb-0">Modificar tipo de aviones</h3>
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
                                <div class="col-md-5" >
                                    <input v-model="modelo" type="text" class="form-control" placeholder="Ingresar el modelo">                                   
                                </div>
                            </div>

                            <div class="form-group row">
                                <div class="col-md-2">
                                </div>                                
                                <div class="col-md-4" >
                                    <h3>Código IATA:: </h3>
                                </div>                                
                                <div class="col-md-5" >
                                    <input v-model="codigoIATA" type="text" class="form-control" placeholder="Ingresar el modelo">                                   
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
                                        <select v-model="tamaño" class="form-control" id="sel1">
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
                                    <base-button size = "lg" type="default" @click="atras">Atras</base-button>
                                </div>
                                <div class="col-md-3">
                                    <base-button  size = "lg" type="default" @click="confirmar">Guardar</base-button>
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
import swal from'sweetalert2';
import axios from 'axios';
export default {
    
    props: ['idTipoAvion', 'modelo', 'codigoIATA', 'tamaño'],

    data() {
      return {
        
      }
    },
    methods: {
        atras: function(){        
            this.$router.push({name:'modificarTipoAvionesPrincipal'})
        },
        confirmar: function(){
            if(this.modelo.length==0){
                swal.fire({
                    type: 'warning',
                    title: 'Alerta de validación',
                    text: 'El nombre del modelo está vacío',
                    confirmButtonColor: '#fb6340'
                });
            }
            else if(this.modelo.length>100){
                swal.fire({
                    type: 'warning',
                    title: 'Alerta de validación',
                    text: 'El nombre del modelo debe ser de máximo 100 caracteres',
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
            else if(this.codigoIATA.length!=3){
                swal.fire({
                    type: 'warning',
                    title: 'Alerta de validación',
                    text: 'La código IATA debe ser de 3 caracteres',
                    confirmButtonColor: '#fb6340'
                });
            }
            else if(this.tamaño.length==0){
                swal.fire({
                    type: 'warning',
                    title: 'Alerta de validación',
                    text: 'Elegir un tamaño',
                    confirmButtonColor: '#fb6340'
                });
            }
            else {
                let aux = this;
                let tipoAvion = {
                    idTipoAvion: this.idTipoAvion,
                    modelo: this.modelo,
                    iata: this.codigoIATA,
                    tamano: this.tamaño,
                    esEliminado: false
                }
                axios.put(this.$connectionString+"/scv/api/tipoAvion/actualizar/"+localStorage.usuarioId, tipoAvion)
                .then((response) =>{
                    aux.salida = response.data;
                    swal.fire({
                        type: 'success',
                        title: 'Éxito!',
                        text: 'Modificación de tipo de avión confirmada!',
                        confirmButtonColor: '#2dce89'
                    });
                }
                )
                .catch(function () {
                    swal.fire({
                        type: 'error',
                        title: 'Modifiación de tipo de avión fallida!',
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
