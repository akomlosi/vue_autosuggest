<template>
    <div id="autosuggest">
        <input type="text" v-model="searchText" v-on:keyup="onKeyup"/>
        <div v-if="hasResults">
            <ul>
                <li v-for="model in response.models">
                    <img v-bind:src=" model.img "/>
                    {{ model.name }}
                </li>
            </ul>
        </div>
    </div>
</template>
<style>
    body{
        background-color:#ccc;
    }
    #autosuggest input {
        margin:0;
        padding:0;
        width: 104px;
        display: block;
    }
    #autosuggest ul {
        width: 100px;
        margin: 0;
            -webkit-margin-before: 0;
    -webkit-margin-start: 0;
    -webkit-margin-end: 0;
    -webkit-padding-start: 0;
    }
    #autosuggest ul li {
        list-style-type: none;
        width: 100px;
        height: 30px;
        padding: 4px;
        background: black;
        color: white;
        font: 10px Arial;
        text-align: left;
    }
    #autosuggest img {
            width: 20px;
            height: 20px;
            display: inline-block;
            margin-right: 20px;
    }




</style>
<script>

    import Vue from 'vue';

    var autosuggest = {
        name: 'autosuggest',
        data(){
            return{
                searchText: null,
                response: null,
                hasResults: false
            }
        },

        methods: {
            onKeyup() {
                if (this.searchText.length >= 3) {
                    setTimeout(()=> {
                        console.log('simulating request...');
                        this.hasResults = true;
                        this.response = {
                            models : [
                                {name: 'Lola', img: 'https://image.flaticon.com/icons/png/128/119/119591.png'},
                                {name: 'Luluxxx', img: 'https://image.flaticon.com/icons/png/128/119/119591.png'},
                                {name: 'Xxx', img: 'https://image.flaticon.com/icons/png/128/119/119591.png'},
                                {name: 'Blonde', img: 'https://image.flaticon.com/icons/png/128/119/119591.png'},
                                {name: 'Hooker', img: 'https://image.flaticon.com/icons/png/128/119/119591.png'},
                            ]
                        }
                    }, 500)
                } else {
                    this.hasResults = false;
                }
            }
        }
    }

    export default Vue.component('autosuggest', autosuggest);




</script>
