<script>
	console.log('/ +page.svelte');
	import ProjectList from './components/ProjectList.svelte';

	export let data;
</script>

<div class="full-container">
	<div class="side-panel">
		<ProjectList />
	</div>

	<div class="view-container">

    </div>
</div>

<style>
	.full-container {
		display: grid;
		grid-template-columns: 300px 1fr;
        border: 2px solid black;
	}
	.side-panel {
		border: 2px solid black;
	}
</style>
