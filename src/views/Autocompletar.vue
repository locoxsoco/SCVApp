<!--<template>
    <div class="autocompletar">
        <input class="form-control" @click="toggleVisible" v-model="query">
        <select class="form-control" v-show="visible" v-model="valor" @click="pasarValor">
            <option v-for="match in matches" :key="match[filterBy]" v-text="match[filterBy]"></option>
        </select>
    </div>
</template> -->

<template>
    <div class="autocompletar">
        <input type="text" class="form-control" v-model="query" @input="onChange"/>
        <ul class="autocomplete-results" v-show="visible">
            <li v-for="result in results" :key="result[filterByID]" @click="setResult(result)" v-text="result[filterBy]" class="autocomplete-result"> </li>
        </ul>
    </div>
</template>


<script>
export default {
    props: ['items','filterByID', 'filterBy', 'filterBy2', 'query'],
    data(){
        return{
            visible: false
        };
    },
    methods: {
        onChange(){
            if(this.query.length==0){
                this.visible = false;
            }
            else{
                this.visible = true;
            }
        },
        setResult(result){
            if(this.filterBy2!=""){
                this.query = result[this.filterBy] + ' - ' + result[this.filterBy2];
            }
            else{
                this.query = result[this.filterBy];
            }
            
            this.resultSelected = result;
            this.visible = false;
            this.$emit('hijoEnvia',this.resultSelected);
        },

    },
    computed: {
        results(){        
            if (this.query == ''){
                return [];
            }
            return this.items.filter((item) => item[this.filterBy].toLowerCase().includes(this.query.toLowerCase()));
        }
    }
    
}
</script>

<style scoped>
  .autocomplete-results {
    padding: 0;
    margin: 0;
    border: 1px solid #eeeeee;
    height: 120px;
    overflow: auto;
  }

  .autocomplete-result {
    list-style: none;
    text-align: left;
    padding: 4px 2px;
    cursor: pointer;
  }

  .autocomplete-result:hover {
    background-color: #4AAE9B;
    color: white;
  }
</style>


