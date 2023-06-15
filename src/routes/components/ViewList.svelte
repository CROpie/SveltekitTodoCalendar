<script>
    export let selectedView
</script>

<div class="ViewList">
    <ul>
        <li class="view-option-container" on:click={() => selectedView = 'List'}>
            <div class="view-option" class:selected={selectedView === 'List'}>List View</div>
        </li>
        <li class="view-option-container" on:click={() => selectedView = 'Calendar'}>
            <div class="view-option" class:selected={selectedView === 'Calendar'}>Calendar View</div>
        </li>
    </ul>
</div>

<style>
    ul {
		list-style-type: none;
		padding: 0;
		margin: 0;
    }
    .view-option-container {
        cursor: pointer;
    }
    .view-option-container:hover {
        background-color: blueviolet;
    }
    .selected {
        color: orange;
        font-weight: 800;
    }
</style>