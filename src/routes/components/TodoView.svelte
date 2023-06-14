<script>
    import NewTodo from './NewTodo.svelte';
    import TodoList from './TodoList.svelte';

    export let filteredTodoList

    let newTodoFlag = false;

</script>

<div class="TodoView">
    {#if !newTodoFlag}
    <ul>
        <li>
            <button class="todo" on:click={() => newTodoFlag = true}>New Todo</button>
        </li>
    </ul>
    {:else}
    <NewTodo bind:newTodoFlag/>
    {/if}

    <TodoList { filteredTodoList } bind:newTodoFlag/>
</div>

<style>
    .TodoView {
        border: 1px solid black;
    }
    ul {
		list-style-type: none;
		padding: 0;
		margin: 0;
	}
</style>