<script>
    export let selectedTodo;
</script>

<div id="calendar-data-container">
    <div class="data-div">
        <div class="data-heading">Date: {selectedTodo.prettyDate}</div>
    </div>
    <div class="data-div">
        <div class="data-heading">Name</div>
        <div id="data-name" class="data">{selectedTodo.todoName}</div>
    </div>

    <div class="data-div">
        <div class="data-heading">Notes</div>
        <div id="data-notes" class="data">{selectedTodo.notes}</div>
    </div>
</div>

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

.data {
    color: white;
    font-size: 1rem;
    padding-top: 0.5rem;
}
</style>