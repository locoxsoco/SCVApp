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
                                        <base-input alternative="" type="text" v-model="buscarUsuario" placeholder="Ingresar nombre de usuario" input-classes="form-control-alternative">
                                        </base-input>
                                    </form>
                                </div>
                            </div>

                            <b-table
                                    :data="filter"
                                    :columns="columns"
                                    :selected.sync="selected"
                                    :paginated="isPaginated"
                                    :per-page="perPage"
                                    :current-page.sync="currentPage"
                                    :pagination-simple="isPaginationSimple"
                                    :pagination-position="paginationPosition"
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
export default {
    data() {
        const tableData =[]
        return {
            tableData,
            isPaginated: true,
            isPaginationSimple: false,
            paginationPosition: 'bottom',
            defaultSortDirection: 'asc',
            currentPage: 1,
            perPage: 10,
            selected:tableData[0],
            // data,
            columns: [
                {
                    field: 'idUsuario',
                    label: 'Código de usuario',
                    width: '40',
                    numeric: true,
                    sortable: true
                },
                {
                    field: 'usuario',
                    label: 'Nombre de usuario',
                    sortable: true
                },
                {
                    field: 'rol',
                    label: 'Rol',
                    sortable: true
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
            if(this.selected == null){
                swal.fire({
                    type: 'warning',
                    title: 'Alerta de validación',
                    text: 'No hay usuario seleccionado',
                    confirmButtonColor: '#fb6340'
                });
            }
            else{
                this.$router.push({name:'modificarUsuario2', params: {idDelUsuario: this.selected.idUsuario, nombreDelUsuario: this.selected.usuario, rol: this.selected.rol, contrasena: this.selected.contrasena}});   
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
