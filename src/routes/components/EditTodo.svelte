<script>
    console.log('Component EditTodo');
	import { enhance } from '$app/forms';

    export let todo;
    export let editTodoFlag;

    const resetEditFlag = () => {
        editTodoFlag = -1
    }
</script>

<li>
    <p>Editing...</p>
    <form method="POST" action="api/todo?/modifyTodoInDB" use:enhance={resetEditFlag}>
    <div class="todo-heading {todo.dateFlag}">
        <input name="todoName" type="text" value={todo.todoName} required>
        <input name="dueDate" type="date" value={todo.dueDate} required>
    </div>

    <div class="todo-data">
        <div bind:textContent={todo.notes} contenteditable="true"></div>
        <input name="todoID" type="hidden" value={todo.id}>
        <input name="notes" type="hidden" value={todo.notes}> 
        <!-- <input type="hidden" value={todo.userID}>
        <input type="hidden" value={todo.projectID}> -->
        <button type="submit">Submit</button>
    </div>
    </form>

</li>
