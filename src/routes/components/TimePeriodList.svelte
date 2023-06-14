<script>

    export let selectedTimePeriod;

</script>
<div class="TimePeriodList">
    <ul>
        <li class="time-period-button-container" on:click={() => selectedTimePeriod = 'All'}>
            <div class="time-period" class:selected={selectedTimePeriod === 'All'}>All</div>
        </li>
        <li class="time-period-button-container" on:click={() => selectedTimePeriod = 'week'}>
            <div class="time-period" class:selected={selectedTimePeriod === 'week'}>7 Days</div>
        </li>
        <li class="time-period-button-container" on:click={() => selectedTimePeriod = 'day'}>
            <div class="time-period" class:selected={selectedTimePeriod === 'day'}>Today</div>
        </li>
        <li class="time-period-button-container" on:click={() => selectedTimePeriod = 'past'}>
            <div class="time-period" class:selected={selectedTimePeriod === 'past'}>Past</div>
        </li>
    </ul>
</div>

<style>
    ul {
		list-style-type: none;
		padding: 0;
		margin: 0;
    }
    .time-period-button-container {
        cursor: pointer;
    }
    .time-period-button-container:hover {
        background-color: blueviolet;
    }
    .selected {
        color: orange;
        font-weight: 800;
    }
</style>