<template>
    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
                <!-- Card stats -->

        </base-header>

        <div class="container-fluid mt--7">
            <div class="row">
              <div class="col-md-12">
                  <card shadow type="secondary">
                      <div slot="header" class="bg-white border-0">
                          <div class="row align-items-center">
                              <div class="col-12">
                                  <h3 class="mb-0">Llegadas al aeropuerto</h3>
                              </div>
                          </div>
                      </div>
                      <template>
                          <div class="form-group row">
                              <div class="col-md-2"/>
                              <div class="col-md-4">
                                  <form>
                                      <base-input alternative="" type="text" v-model="buscarAerolinea" placeholder="Aerolínea" input-classes="form-control-alternative">
                                      </base-input>
                                  </form>
                              </div>
                              <div class="col-md-4">
                                  <form>
                                      <base-input alternative="" type="text" v-model="buscarNroVuelo" placeholder="# de vuelo" input-classes="form-control-alternative">
                                      </base-input>
                                  </form>
                              </div>
                              <div class="col-md-2"/>
                          </div>
                          <b-table
                                  :data="filter"
                                  :columns="columns"
                                  :paginated="isPaginated"
                                  :per-page="perPage"
                                  :current-page.sync="currentPage"
                                  :pagination-simple="isPaginationSimple"
                                  :pagination-position="paginationPosition"
                                  focusable>  
                          </b-table>                        
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
            usuarioRol: localStorage.usuarioRol,
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
                },
                {
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
                },
                {
                    field: 'tipoArea',
                    label: 'Tipo Area',
                    sortable: true
                }
            ],
            buscarAerolinea: '',
            buscarNroVuelo: '',
        }
    },
    mounted(){            
        axios.get(this.$connectionString+"/scv/api/resultado/obtenerDatosTablero")
        .then((response) => {
            this.tableData = response.data;
        });    
        setInterval(function(){axios.get("http://200.16.7.177/scv/api/resultado/obtenerDatosTablero")
            .then((response) => {
                this.tableData = response.data;
            });  }, 600000);
    },
    methods: {
        confirmar: function(){
            if(this.selected == null){
            swal.fire({
                type: 'warning',
                title: 'Alerta de validación',
                text: 'No hay tipo de avion seleccionado',
                confirmButtonColor: '#fb6340'
            });
            }                          
            this.$router.push({name:'modificarTipoAviones', params: {idTipoAvion: this.selected.idTipoAvion, modelo: this.selected.modelo, codigoIATA: this.selected.iata, tamaño: this.selected.tamano}})
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
};
</script>
<style></style>