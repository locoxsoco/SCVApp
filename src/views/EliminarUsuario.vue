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
                                    <h3 class="mb-0">Eliminar usuarios</h3>
                                </div>
                            </div>
                        </div>
                        <template>
                            <div class="form-group row">
                                <div class="col-md-5">
                                    <h3>Buscar por nombre de usuario:</h3>
                                </div>
                                <div class="col-md-4">
                                    <form>
                                        <base-input alternative="" type="text" v-model="buscarUsuario" placeholder="Ingresar nombre de usuario" input-classes="form-control-alternative">
                                        </base-input>
                                    </form>
                                </div>
                            </div>

                            <b-table
                                    :data="filter"
                                    :columns="columns"
                                    :selected.sync="selected"
                                    focusable>
                            </b-table>

                            <div class="form-group row">
                                <div class="col-md-5">
                                </div>
                                <div class="col-md-3">
                                    <b-button @click="confirmar">Confirmar eliminación</b-button>                              
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
        data() {
            const tableData =[]


            return {
                selected: tableData[0],
                tableData,
                columns: [
                {
                    field: 'idUsuario',
                    label: 'Código de usuario',
                    width: '40',
                    numeric: true
                },
                {
                    field: 'usuario',
                    label: 'Nombre de usuario'
                },
                {
                    field: 'rol',
                    label: 'Rol'
                }
                ],
                buscarUsuario: ''
            }
        },
        mounted(){            
            axios.get(this.$connectionString+"/scv/api/usuario/obtenerTodos")
            .then((response) => {
                
                this.tableData = response.data.filter(item => !item.esEliminado);
                this.selected = null;

                
            })     
        },        
        methods: {
            confirmar: function(){
                let aux = this;

                if(this.selected == null){
                    swal.fire({
                        type: 'warning',
                        title: 'Alerta de validación',
                        text: 'No hay usuario seleccionado'
                    });
                }
                else{
                    let usuario = {
                        idUsuario: this.selected.idUsuario,
                        usuario: this.selected.usuario,
                        contrasena: this.selected.contrasena,
                        rol: this.selected.rol,
                        esEliminado: true
                    }                    
                    axios.put(this.$connectionString+"/scv/api/usuario/actualizar", usuario)
                    .then(function (response) {
                        aux.salida = response.data;
                        swal.fire({
                            type: 'success',
                            title: 'Éxito!',
                            text: 'Eliminación de usuario confirmada!'
                        }).then(() => {
                            location.reload(false);
                        })
                        .catch(function () {
                            swal.fire({
                                type: 'error',
                                title: 'Eliminación de usuario fallida!',
                                text: 'Reintenta más tarde'
                            });
                        })
                    })                     
                }       
            }
        },
        computed: {
            filter: function(){
                var name_re1 = new RegExp(this.buscarUsuario, 'i');
                var tableData = [];
                var i = this.tableData.length;
                for (i in this.tableData) {
                if (this.tableData[i].usuario.match(name_re1)) {
                    tableData.push(this.tableData[i])
                }
                }
                return tableData;
            }
        }
    }
</script>

<style>
    tr.is-info {
        background: #167df0;
        color: #fff;
    }
</style>