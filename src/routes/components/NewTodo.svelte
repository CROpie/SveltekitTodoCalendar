<script>
    console.log('Component NewTodo');
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';

	$: projectListData = $page.data.projectList;
	$: userData = $page.data.userData
    let notes;
    export let newTodoFlag

    const clearNotes = ({cancel}) => {
		if (!notes) {
			notes = "please fill out this field."
			cancel()
		} else {
			notes = undefined;
            newTodoFlag = false;
			console.log('adding todo')
		}
	}
    
</script>

<div class="NewTodo">
    <form method="POST" action="api/todo?/addTodoToDB" use:enhance={clearNotes}>
        <input placeholder="name" name="todoName"/>
        <div class="todo-input-field notes" data-placeholder="notes" bind:textContent={notes} contenteditable="true"></div>
        <input type="hidden" name="notes" bind:value={notes}/>
        <input type="date" name="dueDate">
        <select id="project-dropdown" name="projectID">
            {#each projectListData as project (project.id)}
                <option class="dropdown-option" value={project.id}>{project.projectName}</option>
            {/each}
        </select>
        <input type="hidden" name="userID" value={userData.id}>
        <button type="submit">SUBMIT</button>
    </form>
</div>

<style>
    .NewTodo {
        border: 2px solid black;
    }
    form {
        display: flex;
        flex-direction: column;
    }
</style>