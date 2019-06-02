<template>
    <div>
        <base-header type="gradient-success" class="pb-1 pb-2 pt-2 pt-md-1">
            <div class="row">
                <h2> Modificar aviones </h2>
            </div>
        </base-header>
    
        <div>
            <div class = "form-group row">
                <div class="col-lg-3">
                    <h3> Buscar por código de registro </h3>
                </div> 
                <div class="col-lg-3">
                    <form>
                          <base-input alternative="" placeholder="Ingresar cÃ³digo de registro" input-classes="form-control-alternative">
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

        <section>
            <b-button @click="confirmar">Confirmar</b-button>
        </section>

        </div>    

      
    </div>
</template>

<script>
    export default {
        data() {
             const data = [
                { 'id': 1, 'first_name': 'Jesse', 'last_name': 'Simmons', 'date': '2016-10-15 13:43:27', 'gender': 'Male' },
                { 'id': 2, 'first_name': 'John', 'last_name': 'Jacobs', 'date': '2016-12-15 06:00:53', 'gender': 'Male' },
                { 'id': 3, 'first_name': 'Tina', 'last_name': 'Gilbert', 'date': '2016-04-26 06:26:28', 'gender': 'Female' },
                { 'id': 4, 'first_name': 'Clarence', 'last_name': 'Flores', 'date': '2016-04-10 10:28:46', 'gender': 'Male' },
                { 'id': 5, 'first_name': 'Anne', 'last_name': 'Lee', 'date': '2016-12-06 14:38:38', 'gender': 'Female' }
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
                        field: 'first_name',
                        label: 'First Name',
                    },
                    {
                        field: 'last_name',
                        label: 'Last Name',
                    },
                    {
                        field: 'date',
                        label: 'Date',
                        centered: true
                    },
                    {
                        field: 'gender',
                        label: 'Gender',
                    }
                ]
            }
        },
        methods: {
            confirmar(){
               
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