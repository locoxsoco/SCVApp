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
                                    <h3 class="mb-0">Ingresar usuarios</h3>
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
                                <div class="col-md-2">
                                </div>                                
                                <div class="col-md-4" >
                                    <h3>Nombre del usuario: </h3>
                                </div>                                
                                <div class="col-md-5" >
                                    <input v-model="usuario" type="text" class="form-control" placeholder="Ingresar el usuario">                                   
                                    <!-- <input v-model="inputNombre" alternative="" placeholder="Ingresar nombre del usuario" input-classes="form-control-alternative"> -->
                                </div>
                            </div>

                            <div class="form-group row">
                                <div class="col-md-2">
                                </div>                                
                                <div class="col-md-4" >
                                    <h3>Contraseña: </h3>
                                </div>                                
                                <div class="col-md-5" >
                                    <input v-model="contrasena" type="password" class="form-control" placeholder="Ingresar la contraseña">                                                                       
                                    <!-- <input v-model="inputContraseña" alternative="" placeholder="Ingresar la contraseña" input-classes="form-control-alternative"> -->
                                </div>
                            </div>

                            <div class="form-group row">


                                <div class="col-md-2">
                                </div>                                
                                <div class="col-md-4" >
                                    <h3>Rol: </h3>
                                </div> 
                                <div class="col-md-5" >                                 
                                    <div class="form-group">
                                        <select v-model="rol" class="form-control" id="formRol">
                                            <option>Administrador</option>
                                            <option>Operador técnico</option>
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
import swal from 'sweetalert2';
import axios from 'axios'

export default {
    data() {
      return {
        objeto:{usuario:"",contrasena:"",rol:"",esEliminado:false},
        idDelUsuario: '',
        salida: '',
        usuario: '',
        contrasena: '',
        rol: ''
      }
    },
    
    methods: {
        borrar: function(){
            this.usuario = '' 
            this.contrasena = ''
            this.rol = ''
        },
        guardar: function(){
            if(this.usuario.length==0){
                swal.fire({
                    type: 'warning',
                    title: 'Alerta de validación',
                    text: 'El nombre de usuario está vacío'
                });
            }
            else if(this.usuario.length<=8){
                swal.fire({
                    type: 'warning',
                    title: 'Alerta de validación',
                    text: 'El nombre de usuario debe ser de mínimo 8 caracteres'
                });
            }
            else if(this.usuario.length>80){
                swal.fire({
                    type: 'warning',
                    title: 'Alerta de validación',
                    text: 'El nombre de usuario debe ser de máximo 80 caracteres'
                });
            }
            else if(this.contrasena.length==0){
                swal.fire({
                    type: 'warning',
                    title: 'Alerta de validación',
                    text: 'La constraseña está vacía'
                });
            }
            else if(this.contrasena.length<8){
                swal.fire({
                    type: 'warning',
                    title: 'Alerta de validación',
                    text: 'La contraseña debe ser de mínimo 8 caracteres'
                });
            }
            else if(this.contrasena.length>80){
                swal.fire({
                    type: 'warning',
                    title: 'Alerta de validación',
                    text: 'La contraseña debe ser de máximo 80 caracteres'
                });
            }
            else if(this.rol.length==0){
                swal.fire({
                    type: 'warning',
                    title: 'Alerta de validación',
                    text: 'Elegir un rol'
                });
            }
            else {
                let aux = this;
                let usuario = {
                    usuario: this.usuario,
                    contrasena: this.contrasena,
                    rol: this.rol,
                    esEliminado: false,
                };
                axios.post(this.$connectionString+'/scv/api/usuario/crear', usuario)
                .then(function (response) {
                    swal.fire({
                        type: 'success',
                        title: 'Éxito!',
                        text: 'Creación de avión confirmada!'
                    });
                    aux.salida = response.data;
                })
                .catch(function () {
                    swal.fire({
                        type: 'error',
                        title: 'Creación de usuario fallida!',
                        text: 'Has pensado en cambiar nombre de usuario?'
                    });
                })
            }
        }
    }
}
</script>
<style>

</style>