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
            <li v-for="result in results" :key="result[filterBy]" @click="setResult(result)" class="autocomplete-result"> {{result}} </li>
        </ul>
    </div>
</template>


<script>
export default {
    props: ['items', 'filterBy'],
    data(){
        return{
            query: '',
            visible: false
        };
    },
    methods: {
        onChange(){
            this.visible = true; 
            this.filterResults();
        },
        filterResults(){
            this.results = this.items.filter((item) => item[this.filterBy].toLowerCase().includes(this.query.toLowerCase()));
        },
        setResult(result){
            this.query = result;
            this.visible = false;
        }
    },
    computed: {
        results(){
            if (this.query == ''){
                return [];
            }

            return this.items.filter((item) => item[this.filterBy].includes(this.query))
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


