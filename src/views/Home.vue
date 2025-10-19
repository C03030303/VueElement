<script setup>
const value1 = ref('')
</script>

<template>
	<div class="a">11122222</div>
	<div class="pl-10">
		<el-button type="danger">111</el-button>
	</div>
	<el-date-picker
			v-model="value1"
			type="date"
			placeholder="Pick a day"
	/>
</template>

<style scoped>
@reference "tailwindcss";

.a {
	@apply text-2xl;
}
</style>
