<template>
    <div>
        <base-header type="gradient-success" class="pb-1 pb-2 pt-2 pt-md-1">
            <div class="row">
                <h2> Buscar el tipo de avion </h2>
            </div>
        </base-header>
        <div class="table">
            <div class="row"><br/></div>
            <div class="row ">
                <div class="col-lg-4">
                    <h3> Buscar por numero de registro </h3>
                </div> 
                <div class="col-lg-4">
                    <base-input placeholder="Ingrese numero de registro" addon-right-icon="ni ni-zoom-split-in"></base-input>
                </div>
            </div>
        </div>
        <b-tabs>
            <b-table
                :data="data"
                :columns="columns"
                :selected.sync="selected"
                focusable>
            </b-table>
        </b-tabs>
        <section>
            <b-button @click="clickMe">Click Me</b-button>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        const data = [
            { 'id': 1, 'nro_registro': 'Jesse', 'codigo_icao': 'Simmons'},
            { 'id': 2, 'nro_registro': 'John', 'codigo_icao': 'Jacobs'},
            { 'id': 3, 'nro_registro': 'Tina', 'codigo_icao': 'Gilbert'},
            { 'id': 4, 'nro_registro': 'Clarence', 'codigo_icao': 'Flores'},
            { 'id': 5, 'nro_registro': 'Anne', 'codigo_icao': 'Lee'}
        ]
        return {
            data,
            selected: data[0],
            columns: [
                {
                    field: 'id',
                    label: 'ID',
                    width: '40',
                    numeric: true
                },
                {
                    field: 'nro_registro',
                    label: 'Numero de registro',
                },
                {
                    field: 'codigo_icao',
                    label: 'Codigo ICAO',
                }
            ]
        }
    },
    methods: {
        clickMe : function(){
            alert(this.selected.id)
            // this.$store.dispatch("clickMe",Number(this.selected.id))
            this.$router.push('/admin/aviones/modificarTipo2');
        }
    }
}
</script>
