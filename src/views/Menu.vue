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
                                  :selected.sync="selected"
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
            tableData,
            columns: [         
                {
                    field: 'numeroVuelo',
                    label: 'Vuelo',
                    sortable: true
                },{
                    field: 'nombreAerolinea',
                    label: 'Aerolinea',
                    sortable: true
                },
                {
                    field: 'iataProcedencia',
                    label: 'Procedencia',
                    sortable: true
                },
                {
                    field: 'tiempoProgramado',
                    label: 'Hora Programada',
                    sortable: true
                },
                {
                    field: 'tiempoLlegada',
                    label: 'Hora Estimada',
                    sortable: true
                },
                {
                    field: 'estado',
                    label: 'Estado',
                    sortable: true
                },
                {
                    field: 'idArea',
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
        axios.get(this.$connectionString+"/scv/api/resultado/getResultado")
        .then((response) => {
            this.selected = null;
            this.tableData = response.data[0];
        });    
    },
    methods: {
        confirmar: function(){
            if(this.selected == null){
            swal.fire({
                type: 'warning',
                title: 'Alerta de validación',
                text: 'No hay tipo de avion seleccionado'
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
            if (this.tableData[i].nombreAerolinea.match(name_re1) && this.tableData[i].numeroVuelo.match(name_re2)) {
            tableData.push(this.tableData[i])
            }
        }
        return tableData;
        }
    }
};
</script>
<style></style>