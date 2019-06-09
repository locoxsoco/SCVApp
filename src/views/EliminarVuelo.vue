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
                            <div class="pl-lg-4">
                                <div class="row">
                                    <div class="col-lg-4">
                                        <base-input alternative=""
                                                    placeholder="Aerolínea"
                                                    input-classes="form-control-alternative"
                                        />
                                    </div>
                                    <div class="col-lg-4">
                                        <base-input alternative=""
                                                    placeholder="# de vuelo"
                                                    input-classes="form-control-alternative"
                                        />
                                    </div>
                                    <div class="col-lg-4">
                                        <button type="button" class="btn btn-primary">Buscar</button>
                                    </div>
                                </div>
                            </div>   
                            <div class="table-responsive">   
                            <base-table class="table align-items-center table-flush"
                                        :class="type === 'dark' ? 'table-dark': ''"
                                        :thead-classes="type === 'dark' ? 'thead-dark': 'thead-light'"
                                        tbody-classes="list"
                                        :data="tableData">

                                <template slot="columns">
                                <th>Aerolinea</th>
                                <th>Vuelo</th>
                                <th>Procedencia</th>
                                <th>Hora Programada</th>
                                <th>Hora Real</th>
                                <th>Estado</th>
                                <th>Puerta</th>
                                <th></th>
                                </template>

                                <template slot-scope="{row}">
                                <th scope="row">
                                    <div class="media align-items-center">
                                    <div class="media-body">
                                        <span class="name mb-0 text-sm">{{row.aerolinea}}</span>
                                    </div>
                                    </div>
                                </th>
                                <td class="budget">
                                    {{row.vuelo}}
                                </td>
                                <td>
                                    <badge class="badge-dot mr-4">
                                    <span class="status">{{row.procedencia}}</span>
                                    </badge>
                                </td>
                                <td class="budget">
                                    {{row.horaProgramada}}
                                </td>
                                <td class="budget">
                                    {{row.horaReal}}
                                </td>
                                <td class="budget">
                                    {{row.estado}}
                                </td>                              
                                <td class="budget">
                                    {{row.puerta}}
                                </td>


                                </template>

                            </base-table>
                            </div>

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