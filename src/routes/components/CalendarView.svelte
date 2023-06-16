<script>
    import CalendarGrid from './CalendarGrid.svelte'
    import CalendarData from './CalendarData.svelte'
    import CalendarNewTodo from './CalendarNewTodo.svelte'

    export let filteredTodoList

    let newTodoFlag = false;
    let clickedDate = ''

    // init as a blank todo
    // will switch between clicked todos and blank fields, to reset the displayed data in CalendarData
    let selectedTodo = {
        username: "",
        todoName: "",
        dueDate: "",
        notes: "",
        projectID: -1,
        id: -1,
    }
</script>


<div class="CalendarView">
    <CalendarGrid { filteredTodoList } bind:selectedTodo bind:newTodoFlag bind:clickedDate />
{#if !newTodoFlag}
    <CalendarData bind:selectedTodo/>
{:else}
    <CalendarNewTodo bind:clickedDate bind:newTodoFlag on:submitTodo/>
{/if}
 </div>

<style>
    .CalendarView {
        display: grid;
        grid-template-columns: 1fr 300px;
    }
</style>