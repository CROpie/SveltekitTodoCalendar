<script>
    import { enhance } from '$app/forms';
	import { page } from '$app/stores';
    
    $: projectListData = $page.data.projectList;

    export let clickedDate;
    export let projectListData;
    export let newTodoFlag;

    let dropdownProjectID;
    let newTodo = {
        todoName: '',
        dueDate: clickedDate,
        notes: '',
        projectID: '',
    }

    const submitTodo = () => {
        newTodo.projectID = dropdownProjectID
        dispatch('submitTodo', newTodo)
        newTodoFlag = false;
        }

</script>

<form id="calendar-data-container">
    <div class="data-div">
        <div class="data-heading">Date: {clickedDate}</div>
    </div>

    <div class="data-div">
        <div class="data-heading">Name</div>
        <input class="data-input-field" required>
    </div>

    <div class="data-div">
        <div class="data-heading">Notes</div>
        <div class="data-input-field" contenteditable="true"></div>
    </div>

    <select id="project-dropdown">
        {#each projectListData as project}
            <option class="dropdown-option" value={project.id}>{project.projectName}</option>
        {/each}
    </select>

    <div id="submit-calendar-todo-container">
        <button id="submit-calendar-todo">✔</button>
    </div>
</form>

<style>
#calendar-data-container {
    border: 2px solid lime;
    width: 20vw;
    margin-right: 1rem;
}
.data-div {
    margin-bottom: 3rem;
    padding: 1rem;
}

.data-heading {
    color: yellow;
    margin-left: 1rem;
    font-size: 1.5rem;
}

.data-input-field {
    width: 100%;
    color: white;
    font-size: 1rem;
    padding-top: 0.5rem;
    text-shadow: 2px 2px 2px black;
    box-shadow: 0 0 10px #9ecaed;
    border-radius: 7px;
    margin-top: 0.5rem;
    padding: 0.5rem;
    background-color: transparent;
    border: 1px solid white;

}
#submit-calendar-todo-container {
    display: flex;
    justify-content: end;
}

#submit-calendar-todo {
    font-size: 2rem;
    outline: none;
    border: none;
    background-color: transparent;
    color: yellow;
    margin-right: 2rem;
}

#submit-calendar-todo:hover {
    color: green;
}




</style>