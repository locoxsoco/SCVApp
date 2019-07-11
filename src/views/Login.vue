<template>
        <div class="row justify-content-center">
            <div class="col-lg-5 col-md-7">
                <div class="card bg-secondary shadow border-0">
                    <div class="card-body px-lg-5 py-lg-5">
                        <form role="form">
                            <base-input class="input-group-alternative mb-3"
                                        placeholder="Nombre de usuario"
                                        addon-left-icon="ni ni-single-02"
                                        v-model="model.usuario">
                            </base-input>

                            <base-input class="input-group-alternative"
                                        placeholder="Contraseña"
                                        type="password"
                                        addon-left-icon="ni ni-lock-circle-open"
                                        v-model="model.contrasena">
                            </base-input>
                            <div class="text-center">
                                <base-button type="primary" class="my-4" @click="ingresar">Ingresar</base-button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-12">
                        <small style="color:#f4f4f4">Olvidó su contraseña? Contacte al administrador</small>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
import swal from 'sweetalert2';
import axios from 'axios'
  export default {
    name: 'login',
    data() {
      return {
        model: {
          usuario: '',
          contrasena: ''
        }
      }
    },
    
    methods: {
        ingresar: function(){
            if(this.model.usuario==0){
                swal.fire({
                    type: 'warning',
                    title: 'Alerta de validación',
                    text: 'El nombre de usuario está vacío',
                    confirmButtonColor: '#fb6340'
                });
            }
            else if(this.model.usuario.length<=8){
                swal.fire({
                    type: 'warning',
                    title: 'Alerta de validación',
                    text: 'El nombre de usuario debe ser de mínimo 8 caracteres',
                    confirmButtonColor: '#fb6340'
                });
            }
            else if(this.model.usuario.length>80){
                swal.fire({
                    type: 'warning',
                    title: 'Alerta de validación',
                    text: 'El nombre de usuario debe ser de máximo 80 caracteres',
                    confirmButtonColor: '#fb6340'
                });
            }
            else if(this.model.contrasena.length==0){
                swal.fire({
                    type: 'warning',
                    title: 'Alerta de validación',
                    text: 'La constraseña está vacía',
                    confirmButtonColor: '#fb6340'
                });
            }
            else if(this.model.contrasena.length<8){
                swal.fire({
                    type: 'warning',
                    title: 'Alerta de validación',
                    text: 'La contraseña debe ser de mínimo 8 caracteres',
                    confirmButtonColor: '#fb6340'
                });
            }
            else if(this.model.contrasena.length>80){
                swal.fire({
                    type: 'warning',
                    title: 'Alerta de validación',
                    text: 'La contraseña debe ser de máximo 80 caracteres',
                    confirmButtonColor: '#fb6340'
                });
            }
            else {
                let aux = this;
                let cuentaUsuario = {
                    usuario: this.model.usuario,
                    contrasena: this.model.contrasena
                };
                axios.post(this.$connectionString+'/scv/api/usuario/login',cuentaUsuario)
                .then(function (response) {
                    aux.salida = response.data;
                    localStorage.usuarioNombre = aux.salida.usuario;
                    localStorage.usuarioRol = aux.salida.rol;
                }).then(() => {
                            this.$router.push({name:'menu'});
                        })
                .catch(function () {
                    swal.fire({
                        type: 'error',
                        title: 'Acceso de usuario fallido!',
                        text: 'El nombre de usuario y/o contraseña son incorrectos',
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
