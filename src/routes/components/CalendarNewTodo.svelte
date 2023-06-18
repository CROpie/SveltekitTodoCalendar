<script>
    import { enhance } from '$app/forms';
	import { page } from '$app/stores';
    
    $: projectListData = $page.data.projectList;
    $: userData = $page.data.userData

    export let clickedDate;

</script>
<form class='calendar-todo popup' method="POST" action="testapi/todo?/addTodoToDB" use:enhance>
        <div class="popuptext">
            <input class="todo-input-field name" name="todoName" placeholder="Name" autocomplete="off" autofocus required>
            <textarea class="todo-input-field notes" name="notes" placeholder="Notes"></textarea>
            <select class="project-dropdown" name="projectID" required>
                {#each projectListData as project (project.id)}
                    <option class="dropdown-option" value={project.id}>{project.projectName}</option>
                {/each}
            </select>
            <input type="hidden" name="userID" value={userData.id}>
            <input type="hidden" name="dueDate" value={clickedDate}>
            <button type="submit" class="submit-button">✔</button>
            
        </div>
</form>

<style>
.popup {
    position: relative;
    display: inline-block;
}
.popup .popuptext {
    text-align: center;
    border-radius: 0.25rem;
    padding: 0.5rem 0;
    position: absolute;
    z-index: 1;
    left: 45%;
    bottom: -8rem;
    margin-left: -80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;

    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 1rem;
    padding-top: 1rem;
}
.todo-input-field {
    margin: 0 1rem;
    font-size: 0.75rem;
    border: none;
    outline: none;
    text-shadow: 2px 2px 2px black;
    box-shadow: 0 0 10px #9ecaed;
    color: white;
}
.todo-input-field:placeholder-shown {
    color: white;
}
.name {
    background-color: blueviolet;
    padding-bottom: 0.5rem;
    color: yellow;
}
.notes {
    background-color: rgba(79, 183, 192, 0.9);
}
    /* SUBMIT BUTTON */
	.submit-button {
		border: none;
		outline: none;
        font-size: 1rem;
		background-color: transparent;
		color: greenyellow;
        padding: 0rem 1rem;
        font-weight: 800;
        text-shadow: 2px 2px 2px black;
	}
	.submit-button:hover {
		color: blueviolet;
	}
    /* DROPDOWN */
    .project-dropdown {
        padding: 0.25rem 0.5rem;
        border: none;

        font-size: 1rem;
        color: orange;
        text-shadow: 2px 2px 2px black;
        box-shadow: 0 0 10px #9ecaed;
        width: 83%;
        background-color: rgba(79, 183, 192, 0.9);
    }
    option {
        color: white;
    }
    option:checked {
        color: yellow;
    }
</style>