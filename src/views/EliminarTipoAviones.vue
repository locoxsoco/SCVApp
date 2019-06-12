
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
                                    <h3 class="mb-0">Modificar tipo de aviones</h3>
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
                                        <base-input alternative="" placeholder="Ingresar código de registro" input-classes="form-control-alternative">
                                        </base-input>
                                    </form>
                                </div>
                            </div>

                            <b-table
                                    :data="data"
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
import swal from'sweetalert2';
    export default {
        data() {
             const data = [
                { 'id':1, 'modelo': 'BOE200', 'codigoIATA': 'AA', 'tamaño': 'Grande'},
                { 'id':2, 'modelo': 'BOE300', 'codigoIATA': 'A3', 'tamaño': 'Mediano'},
                { 'id':3, 'modelo': 'AIA150', 'codigoIATA': 'C2', 'tamaño': 'Mediano'},
                { 'id':4, 'modelo': 'EEE200', 'codigoIATA': 'M5', 'tamaño': 'Grande'},
                { 'id':5, 'modelo': 'AIA500', 'codigoIATA': 'DD', 'tamaño': 'Pequeño'}
            ]


            return {
                selected: data[1],
                data,
                columns: [
                    {
                        field: 'id',
                        label: 'ID',
                        width: '40',
                        numeric: true
                    },                   
                    {
                        field: 'modelo',
                        label: 'Modelo',
                    },
                    {
                        field: 'codigoIATA',
                        label: 'Código IATA',
                    },
                    {
                        field: 'tamaño',
                        label: 'Tamaño',
                    }
                ]
            }
        },
        methods: {
            confirmar: function(){
                        
                //this.$router.push({name:'modificarTipoAviones', params: {modelo: this.selected.modelo, codigoIATA: this.selected.codigoIATA, tamaño: this.selected.tamaño}})
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
