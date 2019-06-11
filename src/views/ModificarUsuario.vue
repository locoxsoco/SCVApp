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
                                    <h3 class="mb-0">Modificar usuarios</h3>
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
                                        <base-input alternative="" placeholder="Ingresar nombre de usuario" input-classes="form-control-alternative">
                                        </base-input>
                                    </form>
                                </div>
                            </div>

                            <b-table
                                    :data="tableData"
                                    :columns="columns"
                                    :selected.sync="selected"
                                    focusable>
                            </b-table>

                            <div class="form-group row">
                                <div class="col-md-5">
                                </div>
                                <div class="col-md-3">
                                    <b-button @click="confirmar">Confirmar</b-button>                              
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
//     export default axios.create({
//   baseURL: "http://localhost:8080/api",
//   headers: {
//     "Content-type": "application/json",
//   }
// });
export default {
    data() {
        const tableData =[]
        return {
            tableData,
            selected:tableData[0],
            // data,
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
            ]
        }
    },
    mounted(){            
        axios.get("http://localhost:8000/scv/api/usuario/obtenerTodos")
        .then((response) => {
            
            this.tableData = response.data;
            this.selected=null;
            
        })     
    },
    methods: {
        confirmar: function(){
            if(this.selected == null){
                swal.fire({
                    type: 'warning',
                    title: 'Alerta de validación',
                    text: 'No hay usuario seleccionado'
                });
            }
            else{
                this.$router.push({name:'modificarUsuario2', params: {idDelUsuario: this.selected.id, nombreDelUsuario: this.selected.nombre}});   
            }            
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
