<script>
    import NewTodo from './NewTodo.svelte';
    import TodoList from './TodoList.svelte';

    export let filteredTodoList

    let newTodoFlag = false;
    let selectedTodo = -1;
    let editTodoFlag = false;

</script>

<div class="TodoView">

    <NewTodo bind:newTodoFlag bind:selectedTodo bind:editTodoFlag/>

    <TodoList { filteredTodoList } bind:newTodoFlag bind:selectedTodo bind:editTodoFlag/>

</div>