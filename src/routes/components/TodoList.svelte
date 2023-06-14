<script>
    console.log('Component TodoList');
    import EditTodo from './EditTodo.svelte';

	import { enhance } from '$app/forms';
	import { page } from '$app/stores';

    export let filteredTodoList
    export let newTodoFlag

    let selectedTodo;
    let editTodoFlag;

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

</script>

<div class="TodoList">
    <ul>
    {#if filteredTodoList}
    {#each filteredTodoList as todo (todo.id)}

    {#if editTodoFlag === todo.id}
        <EditTodo { todo } bind:editTodoFlag/>
    {:else}

    <li>
        <div class="todo-heading {todo.dateFlag}" on:click={() => clickTodo(todo.id)}>
            <div>{todo.todoName}</div>
            <div>{todo.prettyDate}</div>
            <form class="delete-todo" method="POST" action="../api/todo?/removeTodoFromDB" use:enhance>
                <button type="submit">X</button>
            </form>
        </div>

        {#if selectedTodo === todo.id}
        <div class="todo-data">
            <div>{todo.notes}</div>
            <input name="todoID" type="hidden" value={todo.id}>
            <button type="submit" on:click={() => editTodoFlag = todo.id}>E</button>
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
		border: 1px solid black;
	}
	ul {
		list-style-type: none;
		padding: 0;
		margin: 0;
	}
    li {
        border: 1px solid black;
        margin-bottom: 0.5rem;
    }
	.todo-container {
        border: 1px solid purple;
		display: flex;
		justify-content: space-between;
	}
    .todo-heading,
    .todo-data {
        display: flex;
        justify-content: space-between;
    }
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
</style>