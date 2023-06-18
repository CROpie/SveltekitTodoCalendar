<script>

    export let selectedTimePeriod;

</script>
<div class="TimePeriodList">
    <ul>
        <li on:click={() => selectedTimePeriod = 'All'}>
            <div class="list-item" class:selected={selectedTimePeriod === 'All'}>All</div>
        </li>
        <li on:click={() => selectedTimePeriod = 'week'}>
            <div class="list-item" class:selected={selectedTimePeriod === 'week'}>7 Days</div>
        </li>
        <li on:click={() => selectedTimePeriod = 'day'}>
            <div class="list-item" class:selected={selectedTimePeriod === 'day'}>Today</div>
        </li>
        <li on:click={() => selectedTimePeriod = 'past'}>
            <div class="list-item" class:selected={selectedTimePeriod === 'past'}>Past</div>
        </li>
    </ul>
</div>

<style>
	.TimePeriodList {
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