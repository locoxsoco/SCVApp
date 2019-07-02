<template>
  <div>
    <div v-bind:style="{ height: '100vh', width: '100vw'}" ref="container">
      <v-stage ref="stage" :config="stageSize">
        <v-layer>
          <v-shape :config="{
          sceneFunc: function(context, shape) {
            context.beginPath();
            context.moveTo(stageSize.width*0.05, stageSize.height*0.1);
            context.lineTo(stageSize.width*0.05, stageSize.height*0.25);
            context.lineTo(stageSize.width*0.1, stageSize.height*0.25);
            context.lineTo(stageSize.width*0.1, stageSize.height*0.2);
            context.lineTo(stageSize.width*0.13, stageSize.height*0.15);
            context.lineTo(stageSize.width*0.2, stageSize.height*0.15);
            context.lineTo(stageSize.width*0.2, stageSize.height*0.21);
            context.quadraticCurveTo(stageSize.width*0.18, stageSize.height*0.22, stageSize.width*0.17, stageSize.height*0.23);
            context.lineTo(stageSize.width*0.175, stageSize.height*0.27);
            context.quadraticCurveTo(stageSize.width*0.5, stageSize.height*0.225, stageSize.width*0.7, stageSize.height*0.25);
            context.lineTo(stageSize.width*0.71, stageSize.height*0.205);
            context.quadraticCurveTo(stageSize.width*0.5, stageSize.height*0.21, stageSize.width*0.4, stageSize.height*0.21);
            context.lineTo(stageSize.width*0.4, stageSize.height*0.15);
            context.lineTo(stageSize.width*0.8, stageSize.height*0.15);
            context.lineTo(stageSize.width*0.8, stageSize.height*0.25);
            context.lineTo(stageSize.width*0.95, stageSize.height*0.25);
            context.lineTo(stageSize.width*0.95, stageSize.height*0.1);
            context.closePath();
            context.fillStrokeShape(shape);
            /* context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(0, 150);
            context.lineTo(100, 150);
            context.lineTo(100, 100);
            context.lineTo(130, 50);
            context.lineTo(200, 50);
            context.lineTo(200, 110);
            context.quadraticCurveTo(180, 120, 170, 130);
            context.lineTo(175, 150);
            context.quadraticCurveTo(500, 125, 700, 150);
            context.lineTo(710, 120);
            context.quadraticCurveTo(500, 110, 400, 110);
            context.lineTo(400, 50);
            context.lineTo(800, 50);
            context.lineTo(800, 150);
            context.lineTo(1000, 150);
            context.lineTo(1000, 0);
            context.closePath();
            context.fillStrokeShape(shape); */
          },
          fill: '#00D2FF',
          stroke: 'black',
          strokeWidth: 4
          }"/>
        </v-layer>
        <v-layer>
          <figura :x = "stageSize.width*0.19" :y = "stageSize.height*0.20" text = "8" modo = "arriba" :ancho = "stageSize.width" :largo = "stageSize.height"/> 
          <figura :x = "stageSize.width*0.175" :y = "stageSize.height*0.21" text = "9" modo = "arriba" :ancho = "stageSize.width" :largo = "stageSize.height"/>
          <figura :x = "stageSize.width*0.16" :y = "stageSize.height*0.235" text = "10" modo = "arriba" :ancho = "stageSize.width" :largo = "stageSize.height"/>
          <figura :x = "stageSize.width*0.165" :y = "stageSize.height*0.26" text = "11" modo = "abajo" :ancho = "stageSize.width" :largo = "stageSize.height"/>
          <figura :x = "stageSize.width*0.19" :y = "stageSize.height*0.29" text = "12" modo = "abajo" :ancho = "stageSize.width" :largo = "stageSize.height"/>
          <figura :x = "stageSize.width*0.22" :y = "stageSize.height*0.285" text = "13" modo = "abajo" :ancho = "stageSize.width" :largo = "stageSize.height"/>
          <figura :x = "stageSize.width*0.26" :y = "stageSize.height*0.282" text = "14" modo = "abajo" :ancho = "stageSize.width" :largo = "stageSize.height"/>
          <figura :x = "stageSize.width*0.3" :y = "stageSize.height*0.28" text = "15" modo = "abajo" :ancho = "stageSize.width" :largo = "stageSize.height"/>
          <figura :x = "stageSize.width*0.35" :y = "stageSize.height*0.275" text = "16" modo = "abajo" :ancho = "stageSize.width" :largo = "stageSize.height"/>
          <figura :x = "stageSize.width*0.41" :y = "stageSize.height*0.27" text = "17" modo = "abajo" :ancho = "stageSize.width" :largo = "stageSize.height"/>
          <figura :x = "stageSize.width*0.48" :y = "stageSize.height*0.265" text = "18" modo = "abajo" :ancho = "stageSize.width" :largo = "stageSize.height"/>
          <figura :x = "stageSize.width*0.55" :y = "stageSize.height*0.26" text = "19" modo = "abajo" :ancho = "stageSize.width" :largo = "stageSize.height"/>
          <figura :x = "stageSize.width*0.62" :y = "stageSize.height*0.265" text = "20" modo = "abajo" :ancho = "stageSize.width" :largo = "stageSize.height"/>
          <figura :x = "stageSize.width*0.68" :y = "stageSize.height*0.265" text = "21" modo = "abajo" :ancho = "stageSize.width" :largo = "stageSize.height"/>
          <figura :x = "stageSize.width*0.71" :y = "stageSize.height*0.25" text = "22" modo = "abajo" :ancho = "stageSize.width" :largo = "stageSize.height"/>
          <figura :x = "stageSize.width*0.715" :y = "stageSize.height*0.22" text = "23" modo = "arriba" :ancho = "stageSize.width" :largo = "stageSize.height"/>
          <figura :x = "stageSize.width*0.7" :y = "stageSize.height*0.19" text = "24" modo = "arriba" :ancho = "stageSize.width" :largo = "stageSize.height"/>
          <figura :x = "stageSize.width*0.65" :y = "stageSize.height*0.19" text = "25" modo = "arriba" :ancho = "stageSize.width" :largo = "stageSize.height"/>
          <figura :x = "stageSize.width*0.6" :y = "stageSize.height*0.19" text = "26" modo = "arriba" :ancho = "stageSize.width" :largo = "stageSize.height"/>

          <!-- <v-circle :config="{ ENVIAR EL TEXT PERO HACER LOS NUMEROS DE FORMA SEPARADA OOO pasar los parametros de width y height sin multiplicarlos por nada y hacer el radio en base a eso
              x: stageSize.width*0.1,
              y: stageSize.height*0.3, 
              radius: 10,
              fill: 'green' stageSize.width*0.17, stageSize.height*0.13
            }"
          /> -->
        </v-layer>

        <v-layer>
          <v-text ref="text" :config="{
              x: stageSize.width*0.1,
              y: stageSize.height*0.05,
              fontFamily: 'Calibri',
              fontSize: (stageSize.width + stageSize.height)/150,
              text: 'Salida de vuelos nacionales',
              fill: 'black'
          }"/>
          <v-text ref="text" :config="{
              x: stageSize.width*0.1,
              y: stageSize.height*0.45,
              fontFamily: 'Calibri',
              fontSize: (stageSize.width + stageSize.height)/150,
              text: 'Salida de vuelos nacionales',
              fill: 'black'
          }"/>
          <v-text ref="text" :config="{
              x: stageSize.width*0.25,
              y: stageSize.height*0.05,
              fontFamily: 'Calibri',
              fontSize: (stageSize.width + stageSize.height)/150,
              text: 'Entrada',
              fill: 'black'
          }"/> 
          <v-text ref="text" :config="{
              x: stageSize.width*0.3,
              y: stageSize.height*0.05,
              fontFamily: 'Calibri',
              fontSize: (stageSize.width + stageSize.height)/150,
              text: 'Entrada',
              fill: 'black'
          }"/>
          <v-text ref="text" :config="{
              x: stageSize.width*0.35,
              y: stageSize.height*0.05,
              fontFamily: 'Calibri',
              fontSize: (stageSize.width + stageSize.height)/150,
              text: 'Entrada',
              fill: 'black'
          }"/>
          <v-text ref="text" :config="{
              x: stageSize.width*0.25,
              y: stageSize.height*0.45,
              fontFamily: 'Calibri',
              fontSize: (stageSize.width + stageSize.height)/150,
              text: 'Entrada',
              fill: 'black'
          }"/> 
          <v-text ref="text" :config="{
              x: stageSize.width*0.3,
              y: stageSize.height*0.45,
              fontFamily: 'Calibri',
              fontSize: (stageSize.width + stageSize.height)/150,
              text: 'Entrada',
              fill: 'black'
          }"/>
          <v-text ref="text" :config="{
              x: stageSize.width*0.35,
              y: stageSize.height*0.45,
              fontFamily: 'Calibri',
              fontSize: (stageSize.width + stageSize.height)/150,
              text: 'Entrada',
              fill: 'black'
          }"/>
          <v-text ref="text" :config="{
              x: stageSize.width*0.5,
              y: stageSize.height*0.05,
              fontFamily: 'Calibri',
              fontSize: (stageSize.width + stageSize.height)/150,
              text: 'Salidas de vuelos internacionales',
              fill: 'black'
          }"/> 
          <v-text ref="text" :config="{
              x: stageSize.width*0.5,
              y: stageSize.height*0.45,
              fontFamily: 'Calibri',
              fontSize: (stageSize.width + stageSize.height)/150,
              text: 'Salidas de vuelos internacionales',
              fill: 'black'
          }"/>  
          <v-text ref="text" :config="{
              x: stageSize.width*0.05,
              y: stageSize.height*0.35,
              fontFamily: 'Calibri',
              fontSize: (stageSize.width + stageSize.height)/75,
              text: 'Segundo piso',
              fill: 'black'
          }"/>
          <v-text ref="text" :config="{
              x: stageSize.width*0.05,
              y: stageSize.height*0.75,
              fontFamily: 'Calibri',
              fontSize: (stageSize.width + stageSize.height)/75,
              text: 'Primer piso',
              fill: 'black'
          }"/>                                                                                         
        </v-layer>

        <v-layer>
          <v-shape :config="{
          sceneFunc: function(context, shape) {
            context.beginPath();
            context.moveTo(stageSize.width*0.05, stageSize.height*0.5);
            context.lineTo(stageSize.width*0.05, stageSize.height*0.65);
            context.lineTo(stageSize.width*0.1, stageSize.height*0.65);
            context.lineTo(stageSize.width*0.1, stageSize.height*0.60);
            context.lineTo(stageSize.width*0.13, stageSize.height*0.55);
            context.lineTo(stageSize.width*0.2, stageSize.height*0.55);
            context.lineTo(stageSize.width*0.2, stageSize.height*0.61);
            context.lineTo(stageSize.width*0.18, stageSize.height*0.61);
            context.lineTo(stageSize.width*0.18, stageSize.height*0.66);
            context.quadraticCurveTo(stageSize.width*0.5, stageSize.height*0.625, stageSize.width*0.65, stageSize.height*0.65);
            context.lineTo(stageSize.width*0.65, stageSize.height*0.61);
            context.quadraticCurveTo(stageSize.width*0.5, stageSize.height*0.61, stageSize.width*0.4, stageSize.height*0.61);
            context.lineTo(stageSize.width*0.4, stageSize.height*0.55);
            context.lineTo(stageSize.width*0.8, stageSize.height*0.55);
            context.lineTo(stageSize.width*0.8, stageSize.height*0.65);
            context.lineTo(stageSize.width*0.95, stageSize.height*0.65);
            context.lineTo(stageSize.width*0.95, stageSize.height*0.5);
            context.closePath();
            context.fillStrokeShape(shape);    
          },
          fill: '#00D2FF',
          stroke: 'black',
          strokeWidth: 4
          }"/>      
        </v-layer>
        <v-layer>
          <v-shape :config="{
          sceneFunc: function(context, shape) {
            context.beginPath();
            context.moveTo(stageSize.width*0.155, stageSize.height*0.61);
            context.lineTo(stageSize.width*0.135, stageSize.height*0.61);
            context.lineTo(stageSize.width*0.135, stageSize.height*0.66);
            context.lineTo(stageSize.width*0.155, stageSize.height*0.66);
            context.closePath();
            context.fillStrokeShape(shape);    
          },
          fill: '#00D2FF',
          stroke: 'black',
          strokeWidth: 4
          }"/>   
        </v-layer>
        <v-layer>
          <v-shape :config="{
          sceneFunc: function(context, shape) {
            context.beginPath();
            context.moveTo(stageSize.width*0.68, stageSize.height*0.67);
            context.lineTo(stageSize.width*0.73, stageSize.height*0.67);
            context.lineTo(stageSize.width*0.73, stageSize.height*0.61);
            context.lineTo(stageSize.width*0.68, stageSize.height*0.61);
            context.lineTo()
            context.closePath();
            context.fillStrokeShape(shape);    
          },
          fill: '#00D2FF',
          stroke: 'black',
          strokeWidth: 4
          }"/>   
        </v-layer>      
        <v-layer>
          <figura :x = "stageSize.width*0.195" :y = "stageSize.height*0.595" text = "1" modo = "arriba" :ancho = "stageSize.width" :largo = "stageSize.height"/> 
          <figura :x = "stageSize.width*0.1835" :y = "stageSize.height*0.595" text = "2" modo = "arriba" :ancho = "stageSize.width" :largo = "stageSize.height"/> 
          <figura :x = "stageSize.width*0.173" :y = "stageSize.height*0.615" text = "3" modo = "arriba" :ancho = "stageSize.width" :largo = "stageSize.height"/> 
          <figura :x = "stageSize.width*0.173" :y = "stageSize.height*0.64" text = "4" modo = "abajo" :ancho = "stageSize.width" :largo = "stageSize.height"/> 
          <figura :x = "stageSize.width*0.183" :y = "stageSize.height*0.68" text = "5" modo = "abajo" :ancho = "stageSize.width" :largo = "stageSize.height"/> 
          <figura :x = "stageSize.width*0.194" :y = "stageSize.height*0.676" text = "6" modo = "abajo" :ancho = "stageSize.width" :largo = "stageSize.height"/> 
          <figura :x = "stageSize.width*0.205" :y = "stageSize.height*0.671" text = "7" modo = "abajo" :ancho = "stageSize.width" :largo = "stageSize.height"/> 
          <figura :x = "stageSize.width*0.162" :y = "stageSize.height*0.615" text = "34" modo = "arriba" :ancho = "stageSize.width" :largo = "stageSize.height"/> 
          <figura :x = "stageSize.width*0.162" :y = "stageSize.height*0.655" text = "35" modo = "abajo" :ancho = "stageSize.width" :largo = "stageSize.height"/> 
          <figura :x = "stageSize.width*0.7" :y = "stageSize.height*0.595" text = "29" modo = "arriba" :ancho = "stageSize.width" :largo = "stageSize.height"/> 
          <figura :x = "stageSize.width*0.685" :y = "stageSize.height*0.595" text = "30" modo = "arriba" :ancho = "stageSize.width" :largo = "stageSize.height"/> 
          <figura :x = "stageSize.width*0.672" :y = "stageSize.height*0.615" text = "31" modo = "arriba" :ancho = "stageSize.width" :largo = "stageSize.height"/> 
          <figura :x = "stageSize.width*0.672" :y = "stageSize.height*0.655" text = "32" modo = "abajo" :ancho = "stageSize.width" :largo = "stageSize.height"/> 
          <figura :x = "stageSize.width*0.685" :y = "stageSize.height*0.69" text = "33" modo = "abajo" :ancho = "stageSize.width" :largo = "stageSize.height"/> 
   
        </v-layer>  
        <v-layer ref="dragLayer"></v-layer>
      </v-stage>
    </div>


    <div class="container-fluid mt--7">
      <div class="row">
        <div class="col-md-1">
        </div>
        <div class="col-md-10">
          <card shadow type="secondary">
            <template>
              <b-table
                :data="tableData"
                :columns="columns"
                :selected.sync="selected"
                focusable
              >
              </b-table>
            </template>
          </card>
        </div>
        <div class="col-md-1">
        </div>
      </div>
    </div>
    <!-- <div class="container-fluid mt--7">
      <div class="row">
        <div class="col-md-1">
        </div>
        <div class="col-md-8">
          <template>
            <b-table
              :data="tableData"
              :columns="columns"
              :selected.sync="selected"
              focusable
            >
            </b-table>
          </template>
        </div>
        <div class="col-md-1">
        </div>
      </div>
    </div> -->
    
  </div>
</template>

<script>
import figura from './Figura.vue'
const width = window.innerWidth;
const height = window.innerHeight;
export default {
  data() {
    const tableData = []
    return {
      selected: tableData[0],
      tableData,
      stageSize: {
        width: width,
        height: height,
      },
      columns: [
        {
            field: 'aerolinea',
            label: 'Aerolinea',
            sortable: true,
            width: 10
        },                   
        {
            field: 'vuelo',
            label: 'Vuelo',
            sortable: true,
            width: 10
        },
        {
            field: 'procedencia',
            label: 'Procedencia',
            sortable: true,
            width: 10
        },
        {
            field: 'horaProgramada',
            label: 'Hora Programada',
            sortable: true,
            width: 10
        },
        {
            field: 'horaEstimada',
            label: 'Hora Estimada',
            sortable: true,
            width: 10
        },
        {
            field: 'estado',
            label: 'Estado',
            sortable: true,
            width: 10
        },
        {
            field: 'puerta',
            label: 'Puerta',
            sortable: true
        }
      ]
    };
  },
  mounted() {
    this.selected = null;
    this.tableData = [
      {
        aerolinea:"American Airlines",
        vuelo:"RAN001",
        procedencia:"Santiago de Chile",
        horaProgramada:"14:00",
        horaEstimada:"14:00",
        estado:"Aterrizado",
        puerta:"5P",
      },
      {
        aerolinea:"Federal Express",
        vuelo:"MIR100",
        procedencia:"Rio",
        horaProgramada:"18:00",
        horaEstimada:"18:00",
        estado:"Aterrizado",
        puerta:"16Z",
      },
      {
        aerolinea:"Emirates",
        vuelo:"VUE333",
        procedencia:"Guadalajara",
        horaProgramada:"16:00",
        horaEstimada:"16:30",
        estado:"Aterrizado",
        puerta:"7P",
      },
      {
        aerolinea:"Air Canada",
        vuelo:"AIR250",
        procedencia:"Ontario",
        horaProgramada:"15:00",
        horaEstimada:"15:00",
        estado:"Aterrizado",
        puerta:"4P",
      }
    ]
  },
  components: {
    figura
  },
  created: function(){
    window.addEventListener("resize", this.changeRect);
    this.changeRect();
  },
  methods: {
    changeRect: function(){
      const container = this.$refs.container;
      if(!container){
        return;
      }

      const height = container.offsetHeight;
      const width = container.offsetWidth;

      this.stageSize.width = width;
      this.stageSize.height = height;
    }
  }
};
</script>