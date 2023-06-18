<script>
    console.log('Component EditTodo');
	import { enhance } from '$app/forms';

    export let todo;
    export let editTodoFlag;

    const beforeSubmit = () => {
        editTodoFlag = -1
    }
</script>
    <li>
        <form method="POST" action="testapi/todo?/modifyTodoInDB" use:enhance={beforeSubmit}>
        <div class="todo-header {todo.dateFlag}">
            <input class="todo-name todo-input-field" name="todoName" type="text" value={todo.todoName} required>
            <input class="todo-date todo-input-field" name="dueDate" type="date" value={todo.dueDate} required>
        </div>

        <div class="todo-data">
            <textarea class="todo-notes todo-input-field" bind:value={todo.notes} name="notes"></textarea>
            <input name="todoID" type="hidden" value={todo.id}>
            <button class="submit-button" type="submit">✔</button>
        </div>
        </form>

    </li>
<style>
	li {
        margin-top: 1rem;
		cursor: pointer;
		text-shadow: 2px 2px 2px black;
		font-size: 1.25rem;
		color: white;
	}
    .todo-header {

        display: flex;
        align-items: center;
        padding: 0.5rem 1rem;
        background-color: rgba(138, 43, 226, 0.7);
		color: greenyellow;
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
</style>