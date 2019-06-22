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
                                  :filter="buscarAerolinea"
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
    export default {
        data() {
            const tableData = []
            return {
                selected: tableData[0],
                tableData,
                columns: [
                    {
                        field: 'aerolinea',
                        label: 'Aerolinea',
                        sortable: true
                    },                   
                    {
                        field: 'vuelo',
                        label: 'Vuelo',
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
            axios.get(this.$connectionString+"/scv/api/tipoAvion/obtenerTodos")
            .then((response) => {
                this.selected = null;
                //this.tableData = response.data;
                this.tableData = [
                  {
                    aerolinea:"American Airlines",
                    vuelo:"RAN001",
                    procedencia:"Santiago de Chile",
                    horaProgramada:"14:00",
                    horaEstimada:"14:00",
                    estado:"Aterrizado",
                    puerta:"5P",
                  },
                  {
                    aerolinea:"Federal Express",
                    vuelo:"MIR100",
                    procedencia:"Rio",
                    horaProgramada:"18:00",
                    horaEstimada:"18:00",
                    estado:"Aterrizado",
                    puerta:"16Z",
                  },
                  {
                    aerolinea:"Emirates",
                    vuelo:"VUE333",
                    procedencia:"Guadalajara",
                    horaProgramada:"16:00",
                    horaEstimada:"16:30",
                    estado:"Aterrizado",
                    puerta:"7P",
                  },
                  {
                    aerolinea:"Air Canada",
                    vuelo:"AIR250",
                    procedencia:"Ontario",
                    horaProgramada:"15:00",
                    horaEstimada:"15:00",
                    estado:"Aterrizado",
                    puerta:"4P",
                  }
                ]
            })     
        },
        methods: {
            confirmar: function(){
            }
        },
        computed: {
          filter: function(){
            var name_re1 = new RegExp(this.buscarAerolinea, 'i');
            var name_re2 = new RegExp(this.buscarNroVuelo, 'i');
            var tableData = [];
            var i = this.tableData.length;
            for (i in this.tableData) {
              if (this.tableData[i].aerolinea.match(name_re1) && this.tableData[i].vuelo.match(name_re2)) {
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