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
                                    <h3 class="mb-0">Ingresar Aerolíneas</h3>
                                </div>
                            </div>
                        </div>
                        <template>
                            <div class="form-group row">
                                <div class="col-md-2">
                                </div>                                
                                <div class="col-md-4" >
                                    <h3>Nombre de aerolínea: </h3>
                                </div>                                
                                <div class="col-md-5" >
                                    <input v-model="aerolinea" type="text" class="form-control" placeholder="Ingresar el nombre de aerolínea">                                   
                                    <!-- <input v-model="inputNombre" alternative="" placeholder="Ingresar nombre del usuario" input-classes="form-control-alternative"> -->
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-md-2">
                                </div>                                
                                <div class="col-md-4" >
                                    <h3>Código IATA: </h3>
                                </div>                                
                                <div class="col-md-5" >
                                    <input v-model="iata" type="text" class="form-control" placeholder="Ingresar el código IATA">                                   
                                    <!-- <input v-model="inputNombre" alternative="" placeholder="Ingresar nombre del usuario" input-classes="form-control-alternative"> -->
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-md-2">
                                </div>                                
                                <div class="col-md-4" >
                                    <h3>Código ICAO: </h3>
                                </div>                                
                                <div class="col-md-5" >
                                    <input v-model="icao" type="text" class="form-control" placeholder="Ingresar el código ICAO">                                   
                                    <!-- <input v-model="inputNombre" alternative="" placeholder="Ingresar nombre del usuario" input-classes="form-control-alternative"> -->
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
    </div>
</template>

<script>
import swal from 'sweetalert2';
import axios from 'axios'

export default {
    data() {
      return {
        objeto:{aerolinea:"",iata:"",icao:"",esEliminado:false},
        idDelUsuario: '',
        salida: '',
        aerolinea: '',
        iata: '',
        icao: ''
      }
    },
    
    methods: {
        borrar: function(){
            this.aerolinea = '' 
            this.iata = ''
            this.icao = ''
        },
        guardar: function(){
            if(this.aerolinea.length==0){
                swal.fire({
                    type: 'warning',
                    title: 'Alerta de validación',
                    text: 'El nombre de aerolínea está vacío',
                    confirmButtonColor: '#fb6340'
                });
            }
            else if(this.aerolinea.length>120){
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
                    nombre: this.aerolinea,
                    iata: this.iata,
                    icao: this.icao,
                    esEliminado:0
                };
                axios.post(this.$connectionString+'/scv/api/aerolinea/crear/'+localStorage.usuarioId, aerolinea)
                .then(function (response) {
                    swal.fire({
                        type: 'success',
                        title: 'Éxito!',
                        text: 'Creación de aerolínea confirmada!',
                        confirmButtonColor: '#2dce89'
                    });
                    aux.salida = response.data;
                })
                .catch(function () {
                    swal.fire({
                        type: 'error',
                        title: 'Creación de aerolínea fallida!',
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