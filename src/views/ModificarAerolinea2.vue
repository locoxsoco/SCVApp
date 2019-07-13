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
                                    <h3 class="mb-0">Modificar Aerolínea</h3>
                                </div>
                            </div>
                        </div>
                        <template>

                            <div class="form-group row">
                                <div class="col-md-2">
                                </div>                                
                                <div class="col-md-4" >
                                    <h3>Nombre de Aerolinea:</h3>
                                </div> 
                                <div class="col-md-5" >                                 
                                    <input v-model="nombre" type="text" class="form-control" placeholder="">                 
                                </div>
                            </div>

                            <div class="form-group row">
                                <div class="col-md-2">
                                </div>                                
                                <div class="col-md-4" >
                                    <h3>Código IATA:</h3>
                                </div> 
                                <div class="col-md-5" >                                 
                                    <input v-model="iata" type="text" class="form-control" placeholder=""> 
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-md-2">
                                </div>                                
                                <div class="col-md-4" >
                                    <h3>Código ICAO:</h3>
                                </div> 
                                <div class="col-md-5" >                                 
                                    <input v-model="icao" type="text" class="form-control" placeholder=""> 
                                </div>
                            </div>

                            <div class="form-group row" >
                                <div class="col-md-3"> </div>
                                <div class="col-md-3">
                                    <base-button size = "lg" type="default" @click="atras">Atras</base-button>
                                </div>
                                <div class="col-md-4">
                                    <base-button  size = "lg" type="default" @click="confirmar">Confirmar cambios</base-button>
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

import axios from "axios";
import swal from'sweetalert2';

export default {
    props: ['idAerolinea', 'nombre', 'iata', 'icao'],

    data() {
      return {
        
      }
    },
    methods: {
        atras: function(){                    
            this.$router.push({name:'modificarAerolinea'})
        },
        confirmar: function(){
            if(this.nombre.length==0){
                swal.fire({
                    type: 'warning',
                    title: 'Alerta de validación',
                    text: 'El nombre de aerolínea está vacío',
                    confirmButtonColor: '#fb6340'
                });
            }
            else if(this.nombre.length>120){
                swal.fire({
                    type: 'warning',
                    title: 'Alerta de validación',
                    text: 'El nombre de la aerolínea debe ser de máximo 120 caracteres',
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
                    text: 'El código IATA debe ser de 2 caracteres',
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
                    text: 'El código ICAO debe ser de 3 caracteres',
                    confirmButtonColor: '#fb6340'
                });
            }
            else {
                let aux = this;
                let aerolinea = {
                    idAerolinea: this.idAerolinea,
                    nombre: this.nombre,
                    iata: this.iata,
                    icao: this.icao,
                    esEliminado:0
                };
                axios.put(this.$connectionString+"/scv/api/aerolinea/actualizar/"+localStorage.usuarioId, aerolinea)
                .then(function (response) {
                    swal.fire({
                        type: 'success',
                        title: 'Éxito!',
                        text: 'Modificación de aerolínea confirmada!',
                        confirmButtonColor: '#2dce89'
                    });
                    aux.salida = response.data;
                })
                .catch(function () {
                    swal.fire({
                        type: 'error',
                        title: 'Modificación de aerolínea fallida!',
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