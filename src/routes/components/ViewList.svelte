<script>
    export let selectedView
</script>

<div class="ViewList">
    <ul>
        <li on:click={() => selectedView = 'List'}>
            <div class="list-item" class:selected={selectedView === 'List'}>List View</div>
        </li>
        <li on:click={() => selectedView = 'Calendar'}>
            <div class="list-item" class:selected={selectedView === 'Calendar'}>Calendar View</div>
        </li>
    </ul>
</div>

<style>
	.ViewList {
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
		font-size: 1.5rem;
		color: white;
		border-radius: 1rem;
		padding: 0rem 1rem;
	}
    li:hover {
        background-color: rgba(138, 43, 226, 0.7);
    }
    .selected {
        color: orange;
    }
</style>