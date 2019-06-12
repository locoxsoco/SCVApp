
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
                                    <h3 class="mb-0">Modificar aviones</h3>
                                </div>
                            </div>
                        </div>
                        <template>
                            <div class="form-group row">
                                <div class="col-md-5">
                                    <h3>Buscar por código de registro:</h3>
                                </div>
                                <div class="col-md-4">
                                    <form>
                                        <base-input alternative="" type="text" v-model="buscarAviones" placeholder="Ingresar código de registro" input-classes="form-control-alternative">
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
import swal from'sweetalert2';
    
    export default {
        data() {
             const tableData = [
                { 'id':1, 'regNro': 'AIR200', 'modelo': 'BOEING707', 'iata': 'AI', 'icao': 'OEI'},
                { 'id':2, 'regNro': 'QAT100', 'modelo': 'BOEING100', 'iata': 'OE', 'icao': 'A3I'},
                { 'id':3, 'regNro': 'RET150', 'modelo': 'BOEING101', 'iata': 'PL', 'icao': 'OP2'},
                { 'id':4, 'regNro': 'POR200', 'modelo': 'BOEING100', 'iata': 'IT', 'icao': 'IN1'},
                { 'id':5, 'regNro': 'QAT500', 'modelo': 'BOEING333', 'iata': 'BN', 'icao': 'OP6'}
            ]


            return {
                selected: tableData[0],
                tableData,
                columns: [
                    {
                        field: 'id',
                        label: 'ID',
                        width: '40',
                        numeric: true
                    },                   
                    {
                        field: 'regNro',
                        label: 'Codigo de registro',
                    },
                    {
                        field: 'modelo',
                        label: 'Modelo',
                    },
                    {
                        field: 'iata',
                        label: 'Código IATA',
                    },
                    {
                        field: 'icao',
                        label: 'Código ICAO',
                    }
                ],
                buscarAviones:''
            }
        },
        methods: {
            confirmar: function(){
                        
                //this.$router.push({name:'modificarAviones2', params: {codigoDeRegistro: this.selected.codigoDeRegistro, modelo: this.selected.modelo, iata: this.selected.iata, icao: this.selected.icao}})
            }
        },
        computed: {
            filter: function(){
                var name_re1 = new RegExp(this.buscarAviones, 'i');
                var tableData = [];
                var i = this.tableData.length;
                for (i in this.tableData) {
                if (this.tableData[i].regNro.match(name_re1)) {
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