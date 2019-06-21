<template>
  <div v-bind:style="{ height: '100vh', width: '100vw'}" ref="container">
    <v-stage ref="stage" :config="stageSize">
      <v-layer>
        <v-shape :config="{
        sceneFunc: function(context, shape) {
          context.beginPath();
          context.moveTo(stageSize.width*0, stageSize.height*0);
          context.lineTo(stageSize.width*0, stageSize.height*0.15);
          context.lineTo(stageSize.width*0.1, stageSize.height*0.15);
          context.lineTo(stageSize.width*0.1, stageSize.height*0.1);
          context.lineTo(stageSize.width*0.13, stageSize.height*0.05);
          context.lineTo(stageSize.width*0.2, stageSize.height*0.05);
          context.lineTo(stageSize.width*0.2, stageSize.height*0.11);
          context.quadraticCurveTo(stageSize.width*0.18, stageSize.height*0.12, stageSize.width*0.17, stageSize.height*0.13);
          context.lineTo(stageSize.width*0.175, stageSize.height*0.17);
          context.quadraticCurveTo(stageSize.width*0.5, stageSize.height*0.125, stageSize.width*0.7, stageSize.height*0.15);
          context.lineTo(stageSize.width*0.71, stageSize.height*0.105);
          context.quadraticCurveTo(stageSize.width*0.5, stageSize.height*0.11, stageSize.width*0.4, stageSize.height*0.11);
          context.lineTo(stageSize.width*0.4, stageSize.height*0.05);
          context.lineTo(stageSize.width*0.8, stageSize.height*0.05);
          context.lineTo(stageSize.width*0.8, stageSize.height*0.15);
          context.lineTo(stageSize.width*1, stageSize.height*0.15);
          context.lineTo(stageSize.width*1, stageSize.height*0);
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
        <figura :x = "stageSize.width*0.19" :y = "stageSize.height*0.10" text = "8" modo = "arriba" :ancho = "stageSize.width" :largo = "stageSize.height"/> 
        <figura :x = "stageSize.width*0.175" :y = "stageSize.height*0.11" text = "9" modo = "arriba" :ancho = "stageSize.width" :largo = "stageSize.height"/>
        <figura :x = "stageSize.width*0.16" :y = "stageSize.height*0.135" text = "10" modo = "arriba" :ancho = "stageSize.width" :largo = "stageSize.height"/>
        <figura :x = "stageSize.width*0.165" :y = "stageSize.height*0.16" text = "11" modo = "abajo" :ancho = "stageSize.width" :largo = "stageSize.height"/>
        <figura :x = "stageSize.width*0.19" :y = "stageSize.height*0.19" text = "12" modo = "abajo" :ancho = "stageSize.width" :largo = "stageSize.height"/>
        <figura :x = "stageSize.width*0.22" :y = "stageSize.height*0.185" text = "13" modo = "abajo" :ancho = "stageSize.width" :largo = "stageSize.height"/>
        <figura :x = "stageSize.width*0.26" :y = "stageSize.height*0.182" text = "14" modo = "abajo" :ancho = "stageSize.width" :largo = "stageSize.height"/>
        <figura :x = "stageSize.width*0.3" :y = "stageSize.height*0.18" text = "15" modo = "abajo" :ancho = "stageSize.width" :largo = "stageSize.height"/>
        <figura :x = "stageSize.width*0.35" :y = "stageSize.height*0.175" text = "16" modo = "abajo" :ancho = "stageSize.width" :largo = "stageSize.height"/>
        <figura :x = "stageSize.width*0.41" :y = "stageSize.height*0.17" text = "17" modo = "abajo" :ancho = "stageSize.width" :largo = "stageSize.height"/>
        <figura :x = "stageSize.width*0.48" :y = "stageSize.height*0.165" text = "18" modo = "abajo" :ancho = "stageSize.width" :largo = "stageSize.height"/>
        <figura :x = "stageSize.width*0.55" :y = "stageSize.height*0.16" text = "19" modo = "abajo" :ancho = "stageSize.width" :largo = "stageSize.height"/>
        <figura :x = "stageSize.width*0.62" :y = "stageSize.height*0.165" text = "20" modo = "abajo" :ancho = "stageSize.width" :largo = "stageSize.height"/>
        <figura :x = "stageSize.width*0.68" :y = "stageSize.height*0.165" text = "21" modo = "abajo" :ancho = "stageSize.width" :largo = "stageSize.height"/>
        <figura :x = "stageSize.width*0.71" :y = "stageSize.height*0.15" text = "22" modo = "abajo" :ancho = "stageSize.width" :largo = "stageSize.height"/>
        <figura :x = "stageSize.width*0.715" :y = "stageSize.height*0.12" text = "23" modo = "arriba" :ancho = "stageSize.width" :largo = "stageSize.height"/>
        <figura :x = "stageSize.width*0.7" :y = "stageSize.height*0.09" text = "24" modo = "arriba" :ancho = "stageSize.width" :largo = "stageSize.height"/>
        <figura :x = "stageSize.width*0.65" :y = "stageSize.height*0.09" text = "25" modo = "arriba" :ancho = "stageSize.width" :largo = "stageSize.height"/>
        <figura :x = "stageSize.width*0.6" :y = "stageSize.height*0.09" text = "26" modo = "arriba" :ancho = "stageSize.width" :largo = "stageSize.height"/>

        <!-- <v-circle :config="{ ENVIAR EL TEXT PERO HACER LOS NUMEROS DE FORMA SEPARADA OOO pasar los parametros de width y height sin multiplicarlos por nada y hacer el radio en base a eso
            x: stageSize.width*0.1,
            y: stageSize.height*0.3, 
            radius: 10,
            fill: 'green' stageSize.width*0.17, stageSize.height*0.13
          }"
        /> -->
      </v-layer>
      <v-layer ref="dragLayer"></v-layer>
      <v-layer>
        
      </v-layer>
    </v-stage>

    <b-table
      :data="tableData"
      :columns="columns"
      :selected.sync="selected"
      focusable
    >
    </b-table>
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
            sortable: true
        },                   
        {
            field: 'vuelo',
            label: 'Vuelo',
            sortable: true
        },
        {
            field: 'procedencia',
            label: 'Procedencia',
            sortable: true
        },
        {
            field: 'horaProgramada',
            label: 'Hora Programada',
            sortable: true
        },
        {
            field: 'horaEstimada',
            label: 'Hora Estimada',
            sortable: true
        },
        {
            field: 'estado',
            label: 'Estado',
            sortable: true
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