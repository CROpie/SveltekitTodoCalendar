<script>
	console.log('Component ProjectList');
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	import NewProject from './NewProject.svelte';

	$: projectListData = $page.data.projectList;
	$: userData = $page.data.userData

	export let selectedProjectID

	let isNewProject = false;

	const closeNewProject = () => {
		isNewProject = false;
	}

</script>

<div class="ProjectList">
	<ul>
		<li on:click={() => selectedProjectID = -1}>
            <div class="project" class:selected={selectedProjectID === -1}>All</div>
        </li>
		{#if projectListData}
        {#each projectListData as project (project.id)}
        <li on:click={() => selectedProjectID = project.id}>
			<form class="project-container" method="POST" action="../api/project?/removeProjectFromDB" use:enhance>
            	<div class="project" class:selected={selectedProjectID === project.id}>{project.projectName}</div>
				<input name="projectID" type="hidden" value={project.id}>
				<button type="submit">X</button>
			</form>
        </li>
        {/each}
		{/if}
    
		{#if isNewProject}
		<li>
			<form method="POST" action="../api/project?/addProjectToDB" use:enhance={closeNewProject}>
				<input name="projectName" type="text" />
				<input name="userID" type="hidden" value={userData.id}>
			</form>
		</li>
		{/if}
		<li>
	    	<NewProject bind:isNewProject />
		</li>
	</ul>
</div>

<style>
	.ProjectList {
		border: 1px solid black;
		cursor: pointer;
	}
	ul {
		list-style-type: none;
		padding: 0;
		margin: 0;
	}
	li:hover {
        background-color: blueviolet;
    }
	.project-container {
		display: flex;
		justify-content: space-between;

	}
	.selected {
		color: orange;
		font-weight: 800;
	}
</style>
