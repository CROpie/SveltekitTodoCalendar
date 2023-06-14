<script>
	console.log('Component NewProject');

	export let isNewProject;
</script>

<div class="newProject">
	<button on:click={() => (isNewProject = true)}>New Project</button>
</div>

<style>
	.newProject {
		border: 1px solid black;
	}
</style>
