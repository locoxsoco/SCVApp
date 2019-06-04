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
                                        <base-input alternative="" placeholder="Ingresar nombre de usuario" input-classes="form-control-alternative">
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
                { 'id': 1, 'nombre': 'Jesse', 'rol': 'Administrador'},
                { 'id': 2, 'nombre': 'John', 'rol': 'Operador técnico'},
                { 'id': 3, 'nombre': 'Tina', 'rol': 'Administrador'},
                { 'id': 4, 'nombre': 'Clarence', 'rol': 'Operador técnico'},
                { 'id': 5, 'nombre': 'Anne', 'rol': 'Operador técnico'}
            ]


            return {
                selected: data[1],
                data,
                columns: [
                    {
                        field: 'id',
                        label: 'Código de usuario',
                        width: '40',
                        numeric: true
                    },
                    {
                        field: 'nombre',
                        label: 'Nombre de usuario',
                    },
                    {
                        field: 'rol',
                        label: 'Rol',
                    }
                ]
            }
        },
        methods: {
            confirmar: function(){
                        
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