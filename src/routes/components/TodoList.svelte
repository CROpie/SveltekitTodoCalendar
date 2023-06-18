<script>
    console.log('Component TodoList');
    import EditTodo from './EditTodo.svelte';

	import { enhance } from '$app/forms';

    export let filteredTodoList
    export let newTodoFlag
    export let selectedTodo;
    export let editTodoFlag;

    const clickTodo = (todoID) => {
        // clicking an open todo will close it
        // otherwise, open it
        if (selectedTodo === todoID) {
            selectedTodo = -1
        } else {
            selectedTodo = todoID;
        }
        // close new todo if open
        newTodoFlag = false;
        // close edit if open
        editTodoFlag = -1;
    }
    function stopProp() {
        // do nothing, just want to use on:click|stopPropigation
    }

</script>

<div class="TodoList">
    <ul>
    {#if filteredTodoList}
    {#each filteredTodoList as todo (todo.id)}

        {#if editTodoFlag === todo.id}
            <EditTodo { todo } bind:editTodoFlag />
        {:else}

            <li>
                <div class="todo-header" class:selected={selectedTodo === todo.id} on:click={() => clickTodo(todo.id)} >
                    <div class="todo-name">{todo.todoName}</div>
                    <div class={todo.dateFlag}>{todo.prettyDate} </div>
                    <form method="POST" action="../testapi/todo?/removeTodoFromDB" use:enhance>
                        <button class="del-button" type="submit" on:click|stopPropagation={stopProp}>✘</button>
                        <input type="hidden" name="todoID" value={todo.id}>
                    </form>
                </div>

                {#if selectedTodo === todo.id}
                    <div class="todo-data">
                        <div class="todo-notes">{todo.notes}</div>
                        <input name="todoID" type="hidden" value={todo.id}>
                        <button class="edit-button" type="submit" on:click={() => editTodoFlag = todo.id}>E</button>
                    </div>
                {/if}
            </li>
        {/if}
        
    {/each}
    {/if}
    </ul>
</div>

<style>
    .TodoList {
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
		font-size: 1rem;
		color: white;
        margin-top: 1rem;
	}
    .todo-header {
        display: flex;
        justify-content: end;
        align-items: center;
        padding: 0.5rem 1rem;
        background-color: rgba(211, 211, 211, 0.2);
    }
    .todo-header:hover {
        background-color: rgba(138, 43, 226, 0.7);
    }
    .todo-name {
        flex: 1;
        color: yellow;
        font-size: 1.25rem;
    }
    .todo-data {
        background-color: rgba(79, 183, 192, 0.7);
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 1rem;
        margin-bottom: 1rem;
        padding: 0.5rem 1rem;
    }
    .todo-notes {
        word-wrap: break-word;
        white-space: pre-wrap;
    }
    .selected {
        background-color: rgba(138, 43, 226, 0.7);
    }

    /* DUEDATE COLOURS */
    .today {
		color: red;
	}
	.tomorrow {
		color: orange;
	}
	.dayaftertomorrow {
		color: green;
	}
	.past {
		color: grey
	}

    /* DELETE BUTTON EDIT BUTTON */
	.del-button,
    .edit-button {
		border: none;
		outline: none;
        font-size: 1.5rem;
        visibility: hidden;
		background-color: transparent;
		color: white;
        padding: 0rem 1rem;
        font-weight: 800;
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

	.edit-button:hover {
		color: purple;
	}
    li:hover .edit-button,
    .edit-button:hover {
    visibility: visible;
	cursor: crosshair;
    }
</style>