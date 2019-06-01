<template>
    <div>
        <base-header type="gradient-success" class="pb-1 pb-2 pt-2 pt-md-1">
            <div class="row">
                <h2> Agregar tipo de aviones </h2>
            </div>
        </base-header>
        <div class='table'>
            <div class="row"><br/></div>
            <div class="row ">
                <div class="col-lg-3">
                    <h3> Código de registro </h3>
                </div> 
                <div class="col-lg-3">
                    <form>
                          <base-input alternative="" placeholder="Ingresar código de registro" input-classes="form-control-alternative">
                          </base-input>
                    </form>
                </div>
            </div>
            <div class="row ">
                <div class="col-lg-3">
                    <h3> Capacidad </h3>
                </div> 
                <div class="col-lg-3">
                    <form>
                          <base-input alternative="" placeholder="Ingresa capacidad" input-classes="form-control-alternative">
                          </base-input>
                    </form>
                </div>
            </div>
            <div class="row ">
                <div class="col-lg-3">
                    <h3> Codigo ICAO </h3>
                </div> 
                <div class="col-lg-3">
                    <form>
                        <base-input alternative="" placeholder="Ingresar codigo icao" input-classes="form-control-alternative">
                        </base-input>
                    </form>
                </div>
            </div>
            <div class="row ">
                <div class="col-lg-3">
                    <h3> Largo </h3>
                </div> 
                <div class="col-lg-3">
                    <form>
                        <base-input alternative="" placeholder="Ingresar largo" input-classes="form-control-alternative">
                        </base-input>
                    </form>
                </div>
            </div>
            <div class="row ">
                <div class="col-lg-3">
                    <h3> Ancho </h3>
                </div> 
                <div class="col-lg-3">
                    <form>
                        <base-input alternative="" placeholder="Ingresar ancho" input-classes="form-control-alternative">
                        </base-input>
                    </form>
                </div>
            </div>
            <div class="row pb-4 pb-4 pt-4 pt-md-4" >
                <div class=" col-lg-4"> </div>
                <div class=" col-lg-1">
                    <base-button size = "lg" type="default">  Borrar  </base-button>
                </div>     
                <div class="col-lg-1 ">
                    <base-button  size = "lg" type="default">Guardar</base-button>
                </div>
            </div>  
        </div>
    </div>
</template>
