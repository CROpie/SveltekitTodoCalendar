<script>
	console.log('Component ProjectList');
	import { page } from '$app/stores';
	import NewProject from './NewProject.svelte';
	let projectListData = $page.data.projectList;

	let isNewProject = false;
</script>

<div class="projectList">
	<ul>
		<li>
            <div class="project">All</div>
        </li>
		{#if projectListData}
        {#each projectListData as project (project.id)}
        <li>
            <div class="project">{project.projectName}</div>
        </li>
        {/each}
		{/if}
    </ul>
		{#if isNewProject}
        <form method="POST" action="api/projects?addProjectToDB">
            <input name="projectName" />
        </form>
		{/if}
	    <NewProject bind:isNewProject />
</div>

<style>
	.projectList {
		border: 1px solid black;
	}
	ul {
		list-style-type: none;
		padding: 0;
	}
</style>
