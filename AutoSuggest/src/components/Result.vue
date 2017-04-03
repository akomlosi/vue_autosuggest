<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
	<!--<li @click="selectResult({ name: result.name })">-->
	<!--<span v-text="result.title"></span>-->
	<!--<img v-bind:src=" result.pic "/>-->
	<!--</li>-->
	<li class="name">
		<a v-bind:href="url" v-bind:title="result.title">
			<span class="pic">
				<i style="background-image: url('https://img0.dditscdn.com/ff268cab8d9fbae1ed7506f97496274f14/49e479a31cda156a5fa91a9087e4c0c9_erotic_224x168.jpg?cno=361e')"></i>
			</span>
			<span class="suggestion_text"><strong v-text="result.title"></strong></span>
			<span class="status online">•</span> </a></li>
</template>
<script>

	export default {
		name    : 'Result',
		props   : ['result'],
		data() {
			return {}
		},
		methods : {
			selectResult(name) {
				console.log('SELECTED : ', name);
			}
		},

		computed : {
			url() {
				return '/chat/' + this.result.title
			}
		}
	}

</script>

