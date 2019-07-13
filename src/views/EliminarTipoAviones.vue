
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
                                    <h3 class="mb-0">Eliminar tipo de aviones</h3>
                                </div>
                            </div>
                        </div>
                        <template>
                            <div class="form-group row">
                                <div class="col-md-3">
                                    <h3>Buscar por modelo:</h3>
                                </div>
                                <div class="col-md-4">
                                    <form>
                                        <base-input alternative="" type="text" v-model="buscarTipoAviones" placeholder="Ingresar modelo" input-classes="form-control-alternative">
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
            const tableData = []
            return {
                selected: tableData[0],
                isPaginated: true,
                isPaginationSimple: false,
                paginationPosition: 'bottom',
                defaultSortDirection: 'asc',
                currentPage: 1,
                perPage: 10,
                tableData,
                columns: [
                    {
                        field: 'idTipoAvion',
                        label: 'ID',
                        width: '40',
                        numeric: true,
                        sortable: true
                    },                   
                    {
                        field: 'modelo',
                        label: 'Modelo',
                        sortable: true
                    },
                    {
                        field: 'iata',
                        label: 'Código IATA',
                        sortable: true
                    },
                    {
                        field: 'tamano',
                        label: 'Tamaño',
                        sortable: true
                    }
                ],
                buscarTipoAviones: ''
            }
        },
        mounted(){            
            axios.get(this.$connectionString+"/scv/api/tipoAvion/obtenerTodos")
            .then((response) => {
                
                this.selected = null
                this.tableData = response.data.filter(item => !item.esEliminado);
                
            })     
        },
        methods: {
            confirmar: function(){
                let aux = this;
                if(this.selected == null){
                    swal.fire({
                        type: 'warning',
                        title: 'Alerta de validación',
                        text: 'No hay un tipo de avión seleccionado',
                        confirmButtonColor: '#fb6340'
                    });
                } else {
                    swal.fire({
                        title: 'Estas seguro?',
                        text: "No se podrá deshacer la acción",
                        type: 'warning',
                        showCancelButton: true,
                        cancelButtonText: 'Cancelar',
                        confirmButtonColor: '#2dce89',
                        cancelButtonColor: '#f5365c',
                        confirmButtonText: 'Si'
                    }).then((result) => {
                        if (result.value) {
                            let tipoAvion = {
                                idTipoAvion: this.selected.idTipoAvion,
                                modelo: this.selected.modelo,
                                iata: this.selected.iata,
                                tamano: this.selected.tamano,
                                esEliminado: true
                            }                    
                            axios.put(this.$connectionString+"/scv/api/tipoAvion/eliminar/"+localStorage.usuarioId+"?idTipoAvion="+ tipoAvion.idTipoAvion)
                            .then(function (response){
                            swal.fire({
                                type: 'success',
                                title: 'Éxito!',
                                text: 'Eliminación de tipo de avión confirmada!',
                                confirmButtonColor: '#2dce89'
                            }).then(() => {
                                    location.reload(false);
                                });
                            aux.salida = response.data;
                            })
                        }
                    })

                .catch(function () {
                    swal.fire({
                        type: 'error',
                        title: 'Eliminación de tipo de avión fallida!',
                        text: 'Intentelo más tarde',
                        confirmButtonColor: '#f5365c'
                    });
                })                     
                }                        

            }
        },
        computed: {
            filter: function(){
                var name_re1 = new RegExp(this.buscarTipoAviones, 'i');
                var tableData = [];
                var i = this.tableData.length;
                for (i in this.tableData) {
                if (this.tableData[i].modelo.match(name_re1)) {
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
