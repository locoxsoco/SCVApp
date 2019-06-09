<template>
    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
            <!-- Card stats -->

        </base-header>
        
        <div class="container-fluid mt--7">
            <div class="row">
                <div class="col-md-2">
                </div>
                <div class="col-md-8">
                    
                    <card shadow type="secondary">
                        <div slot="header" class="bg-white border-0">
                            <div class="row align-items-center">
                                <div class="col-12">
                                    <h3 class="mb-0">Modificar avion</h3>
                                </div>
                            </div>
                        </div>
                        <template>

                            <div class="form-group row">
                                <div class="col-md-1">
                                </div>                                
                                <div class="col-md-4" >
                                    <h3>Codigo de registro:</h3>
                                </div>                                
                                <div class="col-md-5" >
                                    <input :value="codigoDeRegistro" type="text" class="form-control" placeholder=""> 
                                </div>
                            </div>                          

                            <div class="form-group row">
                                <div class="col-md-1">
                                </div>                                
                                <div class="col-md-4" >
                                    <h3>Código IATA: </h3>
                                </div>                                
                                <div class="col-md-5" >
                                    <input :value="iata" type="text" class="form-control" placeholder="">                                   
                                </div>
                            </div>

                            <div class="form-group row">
                                <div class="col-md-1">
                                </div>                                
                                <div class="col-md-4" >
                                    <h3>Código ICAO: </h3>
                                </div>                                
                                <div class="col-md-5" >
                                    <input :value="icao" type="text" class="form-control" placeholder="">                                   
                                </div>
                            </div>

                            <div class="form-group row">
                                <div class="col-md-1">
                                </div>                                
                                <div class="col-md-4" >
                                    <h3>Tipo de avion:</h3>
                                </div> 
                                <div class="col-md-4" >                                 
                                    <input v-model="tipoAvion" type="text" class="form-control" placeholder="">                                   
                     
                                </div>
                                <div class="col-md-3">
                                  <base-button type="primary" @click="agregarTipoAvion()"> Seleccionar tipo </base-button>
                                </div>
                            </div>                            

                            <div class="form-group row" >
                                <div class="col-md-3"> </div>
                                <div class="col-md-3">
                                    <base-button size = "lg" type="default" @click="atras">Atras</base-button>
                                </div>
                                <div class="col-md-3">
                                    <base-button  size = "lg" type="default">Confirmar cambios</base-button>
                                </div>
                            </div>  
                        </template>
                    </card>
                </div>
            </div>
        </div> 

          <!-- <card class="strpied-tabled-with-hover"
                body-classes="table-full-width table-responsive"
          >
            <template slot="header">
              <h4 class="card-title">Llegadas del aeropuerto</h4>
            </template>         
               
            <div class="form-group row"> 

              <div class="col-md-4" >
                <input type="text" class="form-control form-control-lg" id="exampleInputName2" placeholder="Aerolinea">
              </div>

              <div class="col-md-4" > 
                <input type="email" class="form-control form-control-lg" id="exampleInputEmail2" placeholder="# de vuelo">
              </div>

              <div class="col-md-4">
                <button type="submit" class="btn btn-default">Buscar</button>
              </div>
            </div>         

            <l-table class="table-hover table-striped"
                     :columns="table1.columns"
                     :data="table1.data"
                     style="margin-left:0px !important">
            </l-table>
          </card> -->

    </div>
</template>

<script>


export default {
    props: ['codigoDeRegistro', 'modelo', 'iata', 'icao'],

    data() {
      return {
        
      }
    },

    methods: {
        atras: function(){
                    
            this.$router.push({name:'modificarAviones'})
        }
    }
}
</script>
<style>

</style>