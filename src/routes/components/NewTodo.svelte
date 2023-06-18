<script>
    console.log('Component NewTodo');
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';

	$: projectListData = $page.data.projectList;
	$: userData = $page.data.userData

    export let newTodoFlag
    export let selectedTodo
    export let editTodoFlag

    const beforeSubmit = () => {
        console.log('adding todo')
            newTodoFlag = false;
            selectedTodo = -1;
		}

    const clickNewTodo = () => {
        newTodoFlag = true
        selectedTodo = -1;
        editTodoFlag = false;
    }

</script>

<div class="NewTodo">

    <ul >
        {#if !newTodoFlag}
        <li>
            <div class="todo-header" on:click={clickNewTodo}>New Todo</div>
        </li>
        {:else}
        
           
        <li >
            <form method="POST" action="testapi/todo?/addTodoToDB" use:enhance={beforeSubmit}>
            
                <div class="todo-header todo-header-input">
                    <input class="todo-name todo-input-field" placeholder="Name" name="todoName" autocomplete="off" autofocus required/>
                    <input class="todo-date todo-input-field" type="date" name="dueDate" required>
                    <button class="submit-button" type="submit">✔</button>
                </div>

                <div class="todo-data">
                    <textarea class="todo-input-field todo-notes" placeholder="Notes" name="notes"></textarea>
                    
                    <select class="project-dropdown" name="projectID" required>
                        {#each projectListData as project (project.id)}
                            <option class="dropdown-option" value={project.id}>{project.projectName}</option>
                        {/each}
                    </select>
                    <input type="hidden" name="userID" value={userData.id}>
                    <div class="padding">✔</div>
                </div>
            </form>
        </li>
        {/if}
    </ul>
</div>

<style>
    .NewTodo {
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
		font-size: 1.25rem;
		color: white;
	}
    .todo-header {
        display: flex;
        align-items: center;
        padding: 0.5rem 1rem;
        background-color: rgba(211, 211, 211, 0.2);
		color: greenyellow;
    }
    .todo-header-input {
        background-color: rgba(138, 43, 226, 0.7);
    }
    .todo-header:hover {
        background-color: rgba(138, 43, 226, 0.7);
    }
    .todo-name {
        flex: 1;
        color: yellow;
        font-size: 1.25rem;
        margin-right: 1rem;
    }
    .todo-date {
        color: white;
    }
    .todo-data {
        background-color: rgba(79, 183, 192, 0.7);
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 1rem;
        padding: 0.5rem 1rem;
        margin-bottom: 1rem;
    }
    .todo-notes {
        font-size: 1rem;
        color: white;
        flex: 1;
        margin-right: 1rem;
        padding: 0.25rem 0rem;
    }
    .padding {
        visibility:hidden;
        padding: 0rem 1rem;
        font-size: 1.5rem;
    }
    /* TODO INPUT */
    .todo-input-field {
        background-color: transparent;
        border: none;
        outline: none;
        text-shadow: 2px 2px 2px black;
        box-shadow: 0 0 10px #9ecaed;
    }

    /* SUBMIT BUTTON */
	.submit-button {
		border: none;
		outline: none;
        font-size: 1.5rem;
		background-color: transparent;
		color: white;
        padding: 0rem 1rem;
        font-weight: 800;
        text-shadow: 2px 2px 2px black;
	}
	.submit-button:hover {
		color: greenyellow;
	}

    /* DROPDOWN */
    .project-dropdown {
        padding: 0.25rem 0.5rem;
        border: none;
        background-color: transparent;
        font-size: 1rem;
        color: orange;
        text-shadow: 2px 2px 2px black;
        box-shadow: 0 0 10px #9ecaed;
    }
    option {
        color: white;
    }
    option:checked {
        color: yellow;
    }
</style>