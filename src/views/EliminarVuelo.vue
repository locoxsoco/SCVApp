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
                                    <h3 class="mb-0">Eliminar vuelo</h3>
                                </div>
                            </div>
                        </div>
                        <template>
                          <div class="form-group row">
                              <div class="col-md-2"/>
                              <div class="col-md-4">
                                      <base-input alternative="" type="text" v-model="buscarAerolinea" placeholder="Aerolínea" input-classes="form-control-alternative">
                                      </base-input>
                              </div>
                              <div class="col-md-4">
                                      <base-input alternative="" type="text" v-model="buscarNroVuelo" placeholder="# de vuelo" input-classes="form-control-alternative">
                                      </base-input>
                              </div>
                              <div class="col-md-2"/>
                          </div>

                          <b-table
                                  :data="filter"
                                  :columns="columns"
                                  :selected.sync="selected"
                                  :filter="buscarAerolinea"
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
                                  <base-button @click="confirmar">Confirmar</base-button>                              
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
                    field: 'nroVuelo',
                    label: 'Vuelo',
                    sortable: true
                },{
                    field: 'nombreAerolinea',
                    label: 'Aerolinea',
                    sortable: true
                },
                {
                    field: 'procedencia',
                    label: 'Procedencia',
                    sortable: true
                },
                {
                    field: 'horaProgramada',
                    label: 'Hora Programada',
                    sortable: true
                },
                {
                    field: 'horaEstimada',
                    label: 'Hora Estimada',
                    sortable: true
                },
                {
                    field: 'estado',
                    label: 'Estado',
                    sortable: true
                },
                {
                    field: 'puerta',
                    label: 'Puerta',
                    sortable: true
                }
            ],
            buscarAerolinea: '',
            buscarNroVuelo: ''
        }
    },
    mounted(){            
        axios.get(this.$connectionString+"/scv/api/resultado/obtenerDatosTablero")
        .then((response) => {
            this.tableData = response.data.listaObjTablero;
            this.ultimaActualizacion = response.data.horaDeEnvio;
        });
        setInterval(function(){axios.get("http://200.16.7.177/scv/api/resultado/obtenerDatosTablero")
            .then((response) => {
                this.tableData = response.data.listaObjTablero;
                this.ultimaActualizacion = response.data.horaDeEnvio;
            });  }, 180000);     
    },
    methods: {
        confirmar: function(){
                let aux = this;
                if(this.selected == null){
                    swal.fire({
                        type: 'warning',
                        title: 'Alerta de validación',
                        text: 'No hay vuelo seleccionado',
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
                        if (result.value){                   
                            axios.put(this.$connectionString+"/scv/api/vuelo/eliminar/"+localStorage.usuarioId+"?idVuelo="+this.selected.idVuelo)
                            .then(function (response) {
                            swal.fire({
                                type: 'success',
                                title: 'Éxito!',
                                text: 'Eliminación de avión confirmada!',
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
                        title: 'Eliminación de avión fallida!',
                        text: 'Intentelo más tarde',
                        confirmButtonColor: '#f5365c'
                    });
                })                       
                }
                       
            }
    },
    computed: {
        filter: function(){
        var name_re1 = new RegExp(this.buscarAerolinea, 'i');
        var name_re2 = new RegExp(this.buscarNroVuelo, 'i');
        var tableData = [];
        var i = this.tableData.length;
        for (i in this.tableData) {
            if (this.tableData[i].nombreAerolinea.match(name_re1) && this.tableData[i].nroVuelo.match(name_re2)) {
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