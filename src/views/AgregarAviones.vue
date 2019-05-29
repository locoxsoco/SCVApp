<template>
    <div>
        <base-header type="gradient-success" class="pb-1 pb-2 pt-2 pt-md-1">
            <div class="row">
                <h2> Agregar aviones </h2>
            </div>
        </base-header>

        <div class="table-responsive">
            <div class="row pb-4 pb-4 pt-4 pt-md-4" >
            <div class="col-lg-4" > 
                <h3> Id del avión </h3> 
            </div>
            </div>
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
            <div class="row">
                <div class="col-lg-3">
                    <h3> Tipo de avión </h3>
                </div> 
                <div class="col-lg-3">
                    <form>
                        <base-dropdown>
                            <base-button slot="title" type="primary" class="dropdown-toggle">
                                Regular
                            </base-button>
                            <a class="dropdown-item" href="#">Grande</a>
                            <a class="dropdown-item" href="#">Regular</a>
                            <a class="dropdown-item" href="#">Bajo costo</a>
                        </base-dropdown>
                    </form>
                </div>
                <div class="col-lg-3">
                    <base-button type="primary"> + </base-button>
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
<script>
  // Charts
  import * as chartConfigs from '@/components/Charts/config';
  /* import LineChart from '@/components/Charts/LineChart';
  import BarChart from '@/components/Charts/BarChart'; */



  export default {
    components: {
      /*LineChart,
      BarChart */
    },
    data() {
      return {
        bigLineChart: {
          allData: [
            [0, 20, 10, 30, 15, 40, 20, 60, 60],
            [0, 20, 5, 25, 10, 30, 15, 40, 40]
          ],
          activeIndex: 0,
          chartData: {
            datasets: [],
            labels: [],
          },
          extraOptions: chartConfigs.blueChartOptions,
        },
        redBarChart: {
          chartData: {
            labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
              label: 'Sales',
              data: [25, 20, 30, 22, 17, 29]
            }]
          }
        }
      };
    },
    methods: {
      initBigChart(index) {
        let chartData = {
          datasets: [
            {
              label: 'Performance',
              data: this.bigLineChart.allData[index]
            }
          ],
          labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        };
        this.bigLineChart.chartData = chartData;
        this.bigLineChart.activeIndex = index;
      }
    },
    mounted() {
      this.initBigChart(0);
    }
  };
</script>
<style></style>