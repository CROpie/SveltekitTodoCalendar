<script>
	console.log('Component ProjectList');
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	import { blur } from 'svelte/transition'

	$: projectListData = $page.data.projectList;
	$: userData = $page.data.userData

	export let selectedProjectID

	let isNewProject = false;

	const closeNewProject = () => {
		isNewProject = false;
	}
	
	const clickNewProject = () => {
        isNewProject = true;
        window.addEventListener('mouseup', cancelInputProjectByClick);
    }
    function cancelInputProjectByClick(event) {
        if (event.target != document.querySelector('.project-input-field')) {
            window.removeEventListener('mouseup', cancelInputProjectByClick);
            isNewProject= false
        }
    }
	// doesn't work for some reason, not selecting 'All' after a delete
	const setAll = () => {
		console.log('hello??', selectedProjectID)
		if (selectedProjectID != -1) {
			console.log('huh??', selectedProjectID)
			selectedProjectID = -1
		}
	}

</script>

<div class="ProjectList">
	<ul>
		<li on:click={() => selectedProjectID = -1}>
            <div class="list-item" class:selected={selectedProjectID === -1}>All</div>
        </li>

		{#if projectListData}
        {#each projectListData as project (project.id)}
        <li on:click={() => selectedProjectID = project.id} out:blur>
			<form class="form-container" method="POST" action="../testapi/project?/removeProjectFromDB" use:enhance>
            	<div class="list-item" class:selected={selectedProjectID === project.id}>{project.projectName}</div>
				<input name="projectID" type="hidden" value={project.id}>
				<button class="del-button" type="submit" on:click={setAll}>✘</button>
			</form>
        </li>
        {/each}
		{/if}
    
		{#if isNewProject}
		<li class="list-new-project-container">
			<form method="POST" action="../testapi/project?/addProjectToDB" use:enhance={closeNewProject}>
				<input class="project-input-field" name="projectName" type="text" autocomplete="off" autofocus required/>
				<input name="userID" type="hidden" value={userData.id}>
			</form>
		</li>
		{/if}

		<li class="list-new-project">
	    	<div class="list-item">
				<div class="new-project-button" on:click={clickNewProject}>New Project</div>
			</div>
		</li>

	</ul>
</div>

<style>
	.ProjectList {
		margin-top: 1rem;
		padding: 0rem 1rem;
	}
	ul {
	list-style-type: none;
	padding: 0;
	margin: 0;
	}
	li {
		cursor: pointer;
		text-shadow: 2px 2px 2px black;
		font-size: 1.5rem;
		color: white;
		border-radius: 1rem;
		padding: 0rem 1rem;
	}
	li:hover {
		background-color: rgba(138, 43, 226, 0.7);
    }
	.form-container {
		display: flex;
		justify-content: space-between;
	}
	.selected {
		color: orange;
	}

	/* DELETE BUTTON */
	.del-button {
		border: none;
		outline: none;
        font-size: 1.5rem;
        visibility: hidden;
		background-color: transparent;
		color: white;
		text-shadow: 2px 2px 2px black;
	}
	.del-button:hover {
		color: red;
	}
	li:hover .del-button,
    .del-button:hover {
    visibility: visible;
	cursor: crosshair;
    } 

	/* NEW PROJECT */
	.project-input-field {
		outline: none;
		border: none;
		background-color: transparent;
		color: white;
		text-shadow: 2px 2px 2px black;
		font-size: 1.5rem;
		max-width: 100%;
		box-shadow: 0 0 10px #9ecaed;
	}
	.list-new-project {
		margin-bottom: 1rem;
	}
	.list-new-project-container:hover {
		background-color: transparent;
	}
	.list-new-project {
		margin-top: 2rem;
		color: greenyellow;
	}
</style>