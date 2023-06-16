<script>
	console.log('/ +page.svelte');
	import { afterUpdate } from 'svelte';

    import ViewList from './components/ViewList.svelte';
	import TimePeriodList from './components/TimePeriodList.svelte';
	import ProjectList from './components/ProjectList.svelte';
	import TodoView from './components/TodoView.svelte';
    import CalendarView from './components/CalendarView.svelte';
	export let data;

	$: todoListData = data.todoList

    let selectedView = 'List'
    let selectedTimePeriod = 'All'
	let selectedProjectID = -1;

	let filteredTodoList = []

	// Apply special strings and colours to certain dates, change the date format
	function getDateObjects() {
  
        // const today = new Date('2023-12-01')
        // can test by changing the date above, newDateFromInterval works for any interval - positive as well as negative
        // by works: it correctly rounds up or down to the correct date

        const today = new Date()
        let todayObj = {
            year: today.getFullYear(),
            month: today.getMonth(),
            date: today.getDate(),

        }
        let tomorrowObj = newDateFromInterval(todayObj, 1)
        let dayAfterTomorrowObj = newDateFromInterval(todayObj, 2)

        let todayString = dateObjToString(todayObj)
        let tomorrowString = dateObjToString(tomorrowObj)
        let dayAfterTomorrowString = dateObjToString(dayAfterTomorrowObj)
        return { todayString, tomorrowString, dayAfterTomorrowString }
    }
    function newDateFromInterval(dateObj, interval) {
        let newDateObj = structuredClone(dateObj)
        newDateObj.date = parseInt(newDateObj.date) + interval
        const newDate = new Date(newDateObj.year, newDateObj.month, newDateObj.date)

        let roundedNewDateObj = {
            year: newDate.getFullYear(),
            month: newDate.getMonth(),
            date: newDate.getDate(),
        }
        return roundedNewDateObj
    }
    function dateObjToString(dateObj) {
        let month2dec = (parseInt(dateObj.month) + 1).toString().padStart(2, 0)
        let date2dec = (parseInt(dateObj.date)).toString().padStart(2, 0)
        const dateString = `${dateObj.year}-${month2dec}-${date2dec}`
        return dateString
    }
    function prettifyDate() {
        // (colour comes from using todo.dateFlag as a class in Todo.svelte)
        // old: grey with date as Month DD, YYYY
        // today: red with 'today'
        // tomorrow: orange with 'tomorrow'
        // day after tomorrow: green with 'day after tomorrow'
        // future: black with date as Month DD, YYYY
        if (!filteredTodoList) {
            return
        }
        const dateObjects = getDateObjects()

        filteredTodoList.forEach((todo) => {
            if (todo.dueDate == dateObjects.todayString) {
                todo.prettyDate = "Today"
                todo.dateFlag = "today"
            } else if (todo.dueDate == dateObjects.tomorrowString) {
                todo.prettyDate = "Tomorrow"
                todo.dateFlag = "tomorrow"
            } else if (todo.dueDate == dateObjects.dayAfterTomorrowString) {
                todo.prettyDate = "Day After Tomorrow"
                todo.dateFlag = "dayaftertomorrow"
            } else if (todo.dueDate < dateObjects.todayString) {
                let date = new Date(todo.dueDate)
                let dateString = new Intl.DateTimeFormat('en', { dateStyle: 'long' }).format(date)
                todo.prettyDate = dateString
                todo.dateFlag = "past"
            } else {
                let date = new Date(todo.dueDate)
                let dateString = new Intl.DateTimeFormat('en', { dateStyle: 'long' }).format(date)
                todo.prettyDate = dateString
            }
        })
    }
	function filterByDate() {
        // get strings for today's date and a date a week from today
		const today = new Date()
		let todayObj = {
            year: today.getFullYear(),
            month: today.getMonth(),
            date: today.getDate(),

        }
        const todayFormatted = dateObjToString(newDateFromInterval(todayObj, 0));
        const oneWeekFormatted = dateObjToString(newDateFromInterval(todayObj, 7));

        if (selectedTimePeriod === 'week') {
            filteredTodoList = filteredTodoList.filter((todo) => {
                if (todo.dueDate < oneWeekFormatted && todo.dueDate >= todayFormatted) {
                    return true;
                }
            });
        } else if (selectedTimePeriod === 'day') {
            filteredTodoList = filteredTodoList.filter((todo) => {
                if (todo.dueDate == todayFormatted) {
                    return true;
                }
            });
        } else if (selectedTimePeriod === 'past') {
            filteredTodoList = filteredTodoList.filter((todo) => {
                if (todo.dueDate < todayFormatted) {
                    return true;
                }
            });
        }
    }
	// filter the todos by selected project and selected time period
	function filterTodoList() {
        // first, filter by project
        if (selectedProjectID == -1) {
            filteredTodoList = todoListData;
        } else {
            filteredTodoList = todoListData.filter((todo) => todo.projectID == selectedProjectID)
        }
		filterByDate()
    }
	// sort the filtered todos by date
	function sortTodosByDate() {
        filteredTodoList = filteredTodoList.sort((a, b) =>
            a.dueDate > b.dueDate ? 1 : -1
        );
    }

	afterUpdate(() => {
		console.log("** / +page.svelte afterUpdate **")
		filterTodoList()
		prettifyDate()
		sortTodosByDate()
	})


</script>

<div class="full-container">
	<div class="side-panel">
        <ViewList bind:selectedView />
		<TimePeriodList bind:selectedTimePeriod />
		<ProjectList bind:selectedProjectID />
	</div>
	<div class="view-container">
        {#if selectedView === 'List'}
            <TodoView { filteredTodoList }/>
        {:else if selectedView === 'Calendar'}
            <CalendarView { filteredTodoList } />
        {/if}
    </div>
</div>

<style>
	.full-container {
		display: grid;
		grid-template-columns: 300px 1fr;
        border: 2px solid black;
        height: 90vh;
	}
	.side-panel {
		border: 2px solid black;

        background-image: url($lib/images/3359732.jpg);
		background-size: 100% 100%;
		background-color: grey;
	}
    .view-container {
        background-image: url($lib/images/3626461.jpg);
        background-size: cover;
		background-repeat: no-repeat;
		background-attachment: fixed;
		background-position: 200px;
		background-color: grey;
    }
</style>