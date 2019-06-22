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
                                    <h3 class="mb-0">Modificar usuario</h3>
                                </div>
                            </div>
                        </div>
                        <template>
                            <div class="form-group row">
                                <div class="col-md-2">
                                </div>                                
                                <div class="col-md-4" >
                                    <h3>Rol: </h3>
                                </div> 
                                <div class="col-md-5" >                                 
                                    <div class="form-group">
                                        <select v-model="rol" class="form-control" id="sel1">
                                            <option>Administrador</option>
                                            <option>Operador técnico</option>
                                        </select>
                                    </div>                       
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

import axios from "axios";
import swal from'sweetalert2';

export default {
    props: ['idDelUsuario', 'nombreDelUsuario', 'rol', 'contrasena'],

    data() {
      return {
        
      }
    },
    methods: {
        atras: function(){                    
            this.$router.push({name:'modificarUsuario'})
        },
        confirmar: function(){
            if(this.rol.length==0){
                swal.fire({
                    type: 'warning',
                    title: 'Alerta de validación',
                    text: 'Elegir un rol'
                });
            }
            else {
                let aux = this;
                let usuario = {
                    idUsuario: this.idDelUsuario,
                    usuario: this.nombreDelUsuario,
                    contrasena: this.contrasena,
                    rol: this.rol,
                    esEliminado: false
                }

                axios.put(this.$connectionString+"/scv/api/usuario/actualizar?flagContra=0", usuario)
                .then(function (response) {
                    swal.fire({
                        type: 'success',
                        title: 'Éxito!',
                        text: 'Modificación de usuario confirmada!'
                    });
                    aux.salida = response.data;
                })
                .catch(function () {
                    swal.fire({
                        type: 'error',
                        title: 'Modificación de usuario fallida!',
                        text: 'Escogiste correctamente el rol?'
                    });
                })            
            }
        }
    }

}
</script>
<style>

</style>