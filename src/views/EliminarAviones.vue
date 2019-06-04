
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
                                    <h3 class="mb-0">Eliminar aviones</h3>
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
    
    export default {
        data() {
             const data = [
                { 'id':1, 'codigoDeRegistro': 'AIR200', 'tipoDeAvion': 'Grande'},
                { 'id':2, 'codigoDeRegistro': 'QAT100', 'tipoDeAvion': 'Mediano'},
                { 'id':3, 'codigoDeRegistro': 'RET150', 'tipoDeAvion': 'Mediano'},
                { 'id':4, 'codigoDeRegistro': 'POR200', 'tipoDeAvion': 'Pequeño'},
                { 'id':5, 'codigoDeRegistro': 'QAT500', 'tipoDeAvion': 'Grande'}
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
                        field: 'codigoDeRegistro',
                        label: 'Codigo de registro',
                    },
                    {
                        field: 'tipoDeAvion',
                        label: 'Tipo de avion',
                    }
                ]
            }
        },
        methods: {
            confirmar: function(){
                        
                //this.$router.push({name:'modificarAviones2', params: {idDelAvion: this.selected.id, codigoDeRegistro: this.selected.codigoDeRegistro}})
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