<template>
    <div>
        <v-circle :config="{
            x: x,
            y: y, 
            radius: (ancho + largo)/275,
            fill: 'green'
            }"
        />
        <v-text ref="text" :config="{
            x: x + sumaX,
            y: y + sumaY,
            fontFamily: 'Calibri',
            fontSize: (ancho + largo)/150,
            text: text,
            fill: 'black'
        }"/>
    </div>
</template>

<script>
export default {
    props: ['x', 'y', 'text', 'modo', 'ancho', 'largo'],
    data(){
        return{
            sumaY: 0,
            sumaX: 0
        }
    },
    mounted(){
        if (this.modo == "arriba"){
            this.sumaY = -this.largo/25;
        } else {
            this.sumaY = this.largo/35;
        }

        if (this.text.length == 2){
            this.sumaX = -this.ancho/200
        } else {
            this.sumaX = -this.ancho/300
        }
    }
}
</script>

<style>

</style>
