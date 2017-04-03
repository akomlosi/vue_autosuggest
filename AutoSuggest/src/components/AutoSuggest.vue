<template>
	<div id="autosuggest" class="auto_suggest_list">
		<input type="text" v-model="searchText" v-on:keyup="onKeyup"/>
		<div v-if="hasResults">
			<ul>
				<result v-for="(result, index) in results" :key="index" :result="result"></result>
			</ul>
		</div>
	</div>
</template>
<style>
	body {
		background-color: #ccc;
	}

	#autosuggest input {
		margin: 0;
		padding: 0;
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
	import Result from './Result.vue';

	var autosuggest = {
		name       : 'autosuggest',
		components : {Result},
		props      : {
			category : {
				type    : String,
				default : 'girl'
			},
			url      : {
				type    : String,
				default : '/auto-suggest-search/auto-suggest'
			}
		},
		data(){
			return {
				searchText : null,
				response   : null,
				hasResults : false
			}
		},

		methods : {
			onKeyup() {
				if (this.searchText.length >= 3) {

					var u = new URLSearchParams();
					u.append('category', this.category);
					u.append('searchText', this.searchText);

					var req = new Request(this.url + '?' + u, {method : 'GET'});

					window.fetch(req).then((response) => {
						response.json().then((res) => {
							this.hasResults = true;
							this.$store.commit('search', {
								searchText : this.searchText,
								response   : res.data.rawdata,
								hasResults : this.hasResults
							});
						})
					}).catch(function(e) {
						console.error("e: ", e);
					});

				}
				else {
					this.hasResults = false;
				}
			}
		},

		computed : {
			results() {
				return this.$store.state.result.response;
			}
		}
	};

	export default Vue.component('autosuggest', autosuggest);


</script>