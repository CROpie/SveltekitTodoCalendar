<script>
	console.log('Component NewProject');

	export let isNewProject;
</script>

<div class="NewProject">
	<button on:click={() => (isNewProject = true)}>New Project</button>
</div>

<style>
	.NewProject {
		border: 1px solid black;
	}
</style>
