<script>
    import { afterUpdate } from 'svelte';

    import CalendarNewTodo from './CalendarNewTodo.svelte';

    /* CALENDAR GRID */

    const monthList = ['Blank', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const dayOfWeekList = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

    const dateInfo = {
        todayDate: undefined,
        dayOfWeek: undefined,
        day: undefined,
        month: undefined,
        year: undefined,
    };
    const chosenDate = {
        day: undefined,
        month: undefined,
        year: undefined,
    }

    let numberOfBlanks;
    let daysInCurrentMonth;

    // setup
    function getDateInfo() {
        const todayDate = new Date();
        dateInfo.todayDate = todayDate;
        dateInfo.dayOfWeek = todayDate.getDay();
        dateInfo.day = todayDate.getDate();
        dateInfo.month = todayDate.getMonth() + 1;
        // dateInfo.month = 1;
        dateInfo.year = todayDate.getFullYear();

        // set the initial date of the calendar
        chosenDate.month = dateInfo.month;
        chosenDate.year = dateInfo.year;
    }
    function calculateBlanks() {
        const initialDay = new Date(`${chosenDate.month} 01 ${chosenDate.year}`);
        const initialDayOfWeek = initialDay.getDay();
        if (initialDayOfWeek === 0) {
            numberOfBlanks = 6;
        } else {
            numberOfBlanks = initialDayOfWeek - 1;
        }
    }
    function calculateDaysInCurrentMonth() {
        const daysInMonthNonLeapArray = ['0', '31', '28', '31', '30', '31', '30', '31', '31', '30', '31', '30', '31']
        daysInCurrentMonth = parseInt(daysInMonthNonLeapArray[chosenDate.month]);
    }

    getDateInfo()
    calculateBlanks()
    calculateDaysInCurrentMonth()

    /* TODOS */ 
    export let filteredTodoList

    let newTodoTile = -1;
    let selectedTodoID = -1;
    let clickedDate = '';

    let chosenMonthTodoList = []

    function filterTodosByMonth() {
        // due date is "YYYY-MM-DD"
        chosenMonthTodoList = filteredTodoList
            .filter((todo) => todo.dueDate.slice(5, 7) == chosenDate.month)
            .filter((todo) => todo.dueDate.slice(0, 4) == chosenDate.year);
    }

    function colourCodeTodos() {
        const projectIDSet = new Set()
        chosenMonthTodoList.forEach((todo) => {
            projectIDSet.add(todo.projectID)
        })
        const colourArray = [...projectIDSet]

        chosenMonthTodoList.forEach((todo) => {
            const index = colourArray.indexOf(todo.projectID)
            todo.colourCode = `projectColour${index}`
        })
    }

    /* BOUND EVENTS */
    function clickBlankArea() {
        newTodoTile = -1
        clickedDate = ''
        selectedTodoID = -1
    }

    function clickNewTodo(day) {
            selectedTodoID = -1
            const chosenDay = day.toString().padStart(2, '0');
            const chosenMonth = chosenDate.month.toString().padStart(2, '0');
            clickedDate = `${chosenDate.year}-${chosenMonth}-${chosenDay}`;
            newTodoTile = day;
    }

    function clickTodo(todoID) {
        // toggle not working for some reason ??
        // it's identical to the one in TodoList
        if (selectedTodoID === todoID) {
            selectedTodoID = -1;
        } else {
            selectedTodoID = todoID;
        }
        console.log("selectedTodoID: ", selectedTodoID)
        newTodoTile = -1
        clickedDate = ''
    }

    // change the month
    function clickPrevMonthBtn() {
        chosenDate.month -= 1;
        if (chosenDate.month === 0) {
            chosenDate.month = 12;
            chosenDate.year -= 1;
        }
        newTodoTile = -1
        clickedDate = ''
        selectedTodoID = -1
        calculateBlanks()
        calculateDaysInCurrentMonth()
        filterTodosByMonth()
        colourCodeTodos()

    }
    function clickNextMonthBtn() {
        chosenDate.month += 1;
        if (chosenDate.month === 13) {
            chosenDate.month = 1;
            chosenDate.year += 1;
        }
        newTodoTile = -1
        clickedDate = ''
        selectedTodoID = -1
        calculateBlanks()
        calculateDaysInCurrentMonth()
        filterTodosByMonth()
        colourCodeTodos()
    }
    
    afterUpdate(() => {
        console.log('**CalendarGrid afterUpdate**')
		filterTodosByMonth()
        colourCodeTodos()
	})

</script>


<div class="CalendarGrid">
    
    <div class="month-menu-container">
        <button class="menu-button" on:click={clickPrevMonthBtn}>⬅</button>
        <div id="month-menu-month" on:click|capture={clickBlankArea}>{monthList[chosenDate.month]} {chosenDate.year}</div>
        <button class="menu-button" on:click={clickNextMonthBtn}>➡</button>
    </div>

    {#each dayOfWeekList as dayOfWeek}
        <div class="dayOfWeek" on:click|capture={clickBlankArea}>{dayOfWeek}</div>
    {/each}
    
    {#each Array(numberOfBlanks) as _, index (index)}
        <div class='date blank' on:click|capture={clickBlankArea}></div>
    {/each}

    {#each Array(daysInCurrentMonth) as _, index (index)}
        
        <div class='date' class:todayDate={(index + 1 == dateInfo.day) && (chosenDate.month == dateInfo.month)} on:click|capture={() => clickNewTodo(index+1)}>{index + 1}

        {#each chosenMonthTodoList as todo (todo.id)}
            {#if todo.dueDate.slice(8, 10) == (index + 1)}
                <div class='calendar-todo {todo.colourCode}' on:click={() => clickTodo(todo.id)}>{todo.todoName}
                    {#if todo.id == selectedTodoID}
                        <span class="calendar-todo-data">{todo.notes}</span>
                    {/if}
                </div>
            {/if}
        {/each}

        {#if index + 1 == newTodoTile}
            <CalendarNewTodo { clickedDate } />
        {/if}
        
        </div>
    {/each}

</div>

<style>
    .CalendarGrid {
    height: 100%;
    margin: 0rem 1rem;
    border: 2px solid red;
    min-width: 700px;
    display: grid;
    grid-template-columns: repeat(7, clamp(100px, 14.28%, 100%));
    grid-template-rows: 50px 50px repeat(5, 150px);
    grid-auto-rows: 150px;
}

.month-menu-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    grid-column: 1/8;
}

.menu-button {
    background-color: transparent;
    font-size: 3rem;
    color: orange;
    padding: 0rem 2rem;
    text-shadow: 2px 2px 2px black;
    border: none;
}

#month-menu-month {
    color: yellow;
    font-size: 3rem;
    text-shadow: 2px 2px 2px black;
}

.menu-button:hover {
    color: blueviolet;
}
.date,
.dayOfWeek {
    color: white;
    text-shadow: 2px 2px 2px blue;

    background-color: none;
    padding: 0.5rem;
    min-width: 50px;
}

.dayOfWeek {
    font-size: 2rem;
    border: 1px solid white;
}

.date {
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    border: 1px dotted white;
    font-weight: 300;
}
.date.blank {
    border: none;
}
.calendar-todo {
    flex: 0;
    font-size: 0.75rem;

    color: black;

    border-radius: 0.25rem;
    background-color: lightgreen;

    padding: 0.1rem 0.5rem;
    cursor: pointer;

    color: white;
    text-shadow: 2px 2px 2px black;

    position: relative;
    display: inline-block;
}

.calendar-todo-data {
    width: 160px;
    text-align: center;
    border-radius: 0.25rem;
    padding: 0.5rem 0;
    position: absolute;
    z-index: 1;
    top: 125%;
    left: 50%;
    margin-left: -80px;
    background-color: rgba(79, 183, 192, 0.9);
    color: white;
    text-shadow: 2px 2px 2px black;
    border: 2px solid black;
}

.todayDate {
    color: greenyellow;
    border: 2px solid greenyellow;
}
.calendar-todo:hover {
    background-color: yellow;
}
.projectColour0 {
    background-color: red;
}
.projectColour1 {
    background-color: orange;
}



</style>