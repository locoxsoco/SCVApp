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
                                    <h3 class="mb-0">Ingresar usuarios</h3>
                                </div>
                            </div>
                        </div>
                        <template>
                            <div class="form-group row">
                                <div class="col-md-2">
                                </div>
                                <div class="col-md-4" >
                                    <h6 class="heading-small mb-4">Codigo del usuario:</h6>
                                </div>
                                <div class="col-md-4" > 
                                    <h6 class="heading-small mb-4"> {{idDelUsuario}} </h6>
                                </div>
                            </div>

                            <div class="form-group row">
                                <div class="col-md-2">
                                </div>                                
                                <div class="col-md-4" >
                                    <h6 class="heading-small mb-4">Nombre del usuario: </h6>
                                </div>                                
                                <div class="col-md-4" >
                                    <input type="text" class="form-control form-control-lg">
                                </div>
                            </div>

                            <div class="form-group row">
                                <div class="col-md-2">
                                </div>                                
                                <div class="col-md-4" >
                                    <h6 class="heading-small mb-4">Rol: </h6>
                                </div> 
                                <div class="col-md-4" >                                 
                                    <div class="form-group">
                                        <select class="form-control" id="sel1">
                                            <option>Administrador</option>
                                            <option>Operador técnico</option>
                                        </select>
                                    </div>                       
                                </div>
                            </div>

                            <div class="form-group row">
                                <div class="col-md-2">
                                </div>                                
                                <div class="col-md-4" >
                                    <h6 class="heading-small mb-4">Contraseña: </h6>
                                </div>                                
                                <div class="col-md-4" >
                                    <input type="text" class="form-control form-control-lg">
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
    data() {
      return {
        idDelUsuario: 1
      }
    },
}
</script>
<style>
.center {
  margin: auto;
  width: 50%;
  padding: 10px;
}
</style>
