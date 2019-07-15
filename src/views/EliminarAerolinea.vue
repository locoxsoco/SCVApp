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
                                    <h3 class="mb-0">Eliminar Aerolíneas</h3>
                                </div>
                            </div>
                        </div>
                        <template>
                            <div class="form-group row">
                                <div class="col-md-5">
                                    <h3>Buscar por nombre de aerolínea:</h3>
                                </div>
                                <div class="col-md-4">
                                    <form>
                                        <base-input alternative="" type="text" v-model="buscarAerolinea" placeholder="Ingresar nombre de aerolínea" input-classes="form-control-alternative">
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
                                    <base-button @click="confirmar">Confirmar eliminación</base-button>                              
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
                isPaginated: true,
                isPaginationSimple: false,
                paginationPosition: 'bottom',
                defaultSortDirection: 'asc',
                currentPage: 1,
                perPage: 10,
                tableData,
                columns: [
                {
                    field: 'idAerolinea',
                    label: 'Código de aerolínea',
                    width: '40',
                    numeric: true,
                    sortable: true
                },
                {
                    field: 'nombre',
                    label: 'Nombre de aerolínea',
                    sortable: true
                },
                {
                    field: 'iata',
                    label: 'IATA',
                    sortable: true
                },
                {
                    field: 'icao',
                    label: 'ICAO',
                    sortable: true
                }
                ],
                buscarAerolinea: ''
            }
        },
        mounted(){            
            axios.get(this.$connectionString+"/scv/api/aerolinea/obtenerTodos")
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
                        text: 'No hay aerolínea seleccionada',
                        confirmButtonColor: '#fb6340'
                    });
                }
                else{

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
                        if (result.value){
                            let aerolinea = {
                                idAerolinea: this.selected.idAerolinea,
                                nombre: this.selected.nombre,
                                iata: this.selected.iata,
                                icao: this.selected.icao,
                                esEliminado:0
                            };                  
                            axios.put(this.$connectionString+"/scv/api/aerolinea/eliminar/"+localStorage.usuarioId+"?idAerolinea="+ aerolinea.idAerolinea)
                            .then(function (response) {
                                aux.salida = response.data;
                                swal.fire({
                                    type: 'success',
                                    title: 'Éxito!',
                                    text: 'Eliminación de aerolínea confirmada!',
                                    confirmButtonColor: '#2dce89'
                                }).then(() => {
                                    location.reload(false);
                                })
                            })
                            .catch(function () {
                                    swal.fire({
                                        type: 'error',
                                        title: 'Eliminación de aerolínea fallida!',
                                        text: 'Reintenta más tarde',
                                        confirmButtonColor: '#f5365c'
                                    });
                                })                            
                        }
                    })    
                     
                }       
            }
        },
        computed: {
            filter: function(){
                var name_re1 = new RegExp(this.buscarAerolinea, 'i');
                var tableData = [];
                var i = this.tableData.length;
                for (i in this.tableData) {
                if (this.tableData[i].nombre.match(name_re1)) {
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