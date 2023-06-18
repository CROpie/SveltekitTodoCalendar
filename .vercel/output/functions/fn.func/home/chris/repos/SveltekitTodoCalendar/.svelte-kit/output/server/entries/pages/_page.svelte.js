import { c as create_ssr_component, b as subscribe, f as each, e as escape, d as add_attribute, v as validate_component, g as null_to_empty } from "../../chunks/index2.js";
import "devalue";
import { p as page } from "../../chunks/stores.js";
const ViewList_svelte_svelte_type_style_lang = "";
const css$8 = {
  code: ".ViewList.svelte-1p5rxjr{margin-top:1rem;padding:0rem 1rem}ul.svelte-1p5rxjr{list-style-type:none;padding:0;margin:0}li.svelte-1p5rxjr{cursor:pointer;text-shadow:2px 2px 2px black;font-size:1.5rem;color:white;border-radius:1rem;padding:0rem 1rem}li.svelte-1p5rxjr:hover{background-color:rgba(138, 43, 226, 0.7)}.selected.svelte-1p5rxjr{color:orange}",
  map: null
};
const ViewList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { selectedView } = $$props;
  if ($$props.selectedView === void 0 && $$bindings.selectedView && selectedView !== void 0)
    $$bindings.selectedView(selectedView);
  $$result.css.add(css$8);
  return `<div class="ViewList svelte-1p5rxjr"><ul class="svelte-1p5rxjr"><li class="svelte-1p5rxjr"><div class="${["list-item svelte-1p5rxjr", selectedView === "List" ? "selected" : ""].join(" ").trim()}">List View</div></li>
        <li class="svelte-1p5rxjr"><div class="${["list-item svelte-1p5rxjr", selectedView === "Calendar" ? "selected" : ""].join(" ").trim()}">Calendar View</div></li></ul>
</div>`;
});
const TimePeriodList_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: ".TimePeriodList.svelte-g5xsu0{margin-top:1rem;padding:0rem 1rem}ul.svelte-g5xsu0{list-style-type:none;padding:0;margin:0}li.svelte-g5xsu0{cursor:pointer;text-shadow:2px 2px 2px black;font-size:1.5rem;color:white;border-radius:1rem;padding:0rem 1rem}li.svelte-g5xsu0:hover{background-color:rgba(138, 43, 226, 0.7)}.selected.svelte-g5xsu0{color:orange}",
  map: null
};
const TimePeriodList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { selectedTimePeriod } = $$props;
  if ($$props.selectedTimePeriod === void 0 && $$bindings.selectedTimePeriod && selectedTimePeriod !== void 0)
    $$bindings.selectedTimePeriod(selectedTimePeriod);
  $$result.css.add(css$7);
  return `<div class="TimePeriodList svelte-g5xsu0"><ul class="svelte-g5xsu0"><li class="svelte-g5xsu0"><div class="${["list-item svelte-g5xsu0", selectedTimePeriod === "All" ? "selected" : ""].join(" ").trim()}">All</div></li>
        <li class="svelte-g5xsu0"><div class="${["list-item svelte-g5xsu0", selectedTimePeriod === "week" ? "selected" : ""].join(" ").trim()}">7 Days</div></li>
        <li class="svelte-g5xsu0"><div class="${["list-item svelte-g5xsu0", selectedTimePeriod === "day" ? "selected" : ""].join(" ").trim()}">Today</div></li>
        <li class="svelte-g5xsu0"><div class="${["list-item svelte-g5xsu0", selectedTimePeriod === "past" ? "selected" : ""].join(" ").trim()}">Past</div></li></ul>
</div>`;
});
const ProjectList_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: ".ProjectList.svelte-1uk5buv.svelte-1uk5buv{margin-top:1rem;padding:0rem 1rem}ul.svelte-1uk5buv.svelte-1uk5buv{list-style-type:none;padding:0;margin:0}li.svelte-1uk5buv.svelte-1uk5buv{cursor:pointer;text-shadow:2px 2px 2px black;font-size:1.5rem;color:white;border-radius:1rem;padding:0rem 1rem}li.svelte-1uk5buv.svelte-1uk5buv:hover{background-color:rgba(138, 43, 226, 0.7)}.form-container.svelte-1uk5buv.svelte-1uk5buv{display:flex;justify-content:space-between}.selected.svelte-1uk5buv.svelte-1uk5buv{color:orange}.del-button.svelte-1uk5buv.svelte-1uk5buv{border:none;outline:none;font-size:1.5rem;visibility:hidden;background-color:transparent;color:white;text-shadow:2px 2px 2px black}.del-button.svelte-1uk5buv.svelte-1uk5buv:hover{color:red}li.svelte-1uk5buv:hover .del-button.svelte-1uk5buv,.del-button.svelte-1uk5buv.svelte-1uk5buv:hover{visibility:visible;cursor:crosshair}.project-input-field.svelte-1uk5buv.svelte-1uk5buv{outline:none;border:none;background-color:transparent;color:white;text-shadow:2px 2px 2px black;font-size:1.5rem;max-width:100%;box-shadow:0 0 10px #9ecaed}.list-new-project.svelte-1uk5buv.svelte-1uk5buv{margin-bottom:1rem}.list-new-project-container.svelte-1uk5buv.svelte-1uk5buv:hover{background-color:transparent}.list-new-project.svelte-1uk5buv.svelte-1uk5buv{margin-top:2rem;color:greenyellow}",
  map: null
};
const ProjectList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let projectListData;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  console.log("Component ProjectList");
  let { selectedProjectID } = $$props;
  if ($$props.selectedProjectID === void 0 && $$bindings.selectedProjectID && selectedProjectID !== void 0)
    $$bindings.selectedProjectID(selectedProjectID);
  $$result.css.add(css$6);
  projectListData = $page.data.projectList;
  $page.data.userData;
  $$unsubscribe_page();
  return `<div class="ProjectList svelte-1uk5buv"><ul class="svelte-1uk5buv"><li class="svelte-1uk5buv"><div class="${["list-item svelte-1uk5buv", selectedProjectID === -1 ? "selected" : ""].join(" ").trim()}">All</div></li>

		${projectListData ? `${each(projectListData, (project) => {
    return `<li class="svelte-1uk5buv"><form class="form-container svelte-1uk5buv" method="POST" action="../testapi/project?/removeProjectFromDB"><div class="${[
      "list-item svelte-1uk5buv",
      selectedProjectID === project.id ? "selected" : ""
    ].join(" ").trim()}">${escape(project.projectName)}</div>
				<input name="projectID" type="hidden"${add_attribute("value", project.id, 0)}>
				<button class="del-button svelte-1uk5buv" type="submit">✘</button></form>
        </li>`;
  })}` : ``}
    
		${``}

		<li class="list-new-project svelte-1uk5buv"><div class="list-item"><div class="new-project-button">New Project</div></div></li></ul>
</div>`;
});
const NewTodo_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".NewTodo.svelte-c4zf67{margin-top:1rem;padding:0rem 1rem}ul.svelte-c4zf67{list-style-type:none;padding:0;margin:0}li.svelte-c4zf67{cursor:pointer;text-shadow:2px 2px 2px black;font-size:1.25rem;color:white}.todo-header.svelte-c4zf67{display:flex;align-items:center;padding:0.5rem 1rem;background-color:rgba(211, 211, 211, 0.2);color:greenyellow}.todo-header-input.svelte-c4zf67{background-color:rgba(138, 43, 226, 0.7)}.todo-header.svelte-c4zf67:hover{background-color:rgba(138, 43, 226, 0.7)}.todo-name.svelte-c4zf67{flex:1;color:yellow;font-size:1.25rem;margin-right:1rem}.todo-date.svelte-c4zf67{color:white}.todo-data.svelte-c4zf67{background-color:rgba(79, 183, 192, 0.7);display:flex;justify-content:space-between;align-items:center;font-size:1rem;padding:0.5rem 1rem;margin-bottom:1rem}.todo-notes.svelte-c4zf67{font-size:1rem;color:white;flex:1;margin-right:1rem;padding:0.25rem 0rem}.padding.svelte-c4zf67{visibility:hidden;padding:0rem 1rem;font-size:1.5rem}.todo-input-field.svelte-c4zf67{background-color:transparent;border:none;outline:none;text-shadow:2px 2px 2px black;box-shadow:0 0 10px #9ecaed}.submit-button.svelte-c4zf67{border:none;outline:none;font-size:1.5rem;background-color:transparent;color:white;padding:0rem 1rem;font-weight:800;text-shadow:2px 2px 2px black}.submit-button.svelte-c4zf67:hover{color:greenyellow}.project-dropdown.svelte-c4zf67{padding:0.25rem 0.5rem;border:none;background-color:transparent;font-size:1rem;color:orange;text-shadow:2px 2px 2px black;box-shadow:0 0 10px #9ecaed}option.svelte-c4zf67{color:white}option.svelte-c4zf67:checked{color:yellow}",
  map: null
};
const NewTodo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let projectListData;
  let userData;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  console.log("Component NewTodo");
  let { newTodoFlag } = $$props;
  let { selectedTodo } = $$props;
  let { editTodoFlag } = $$props;
  if ($$props.newTodoFlag === void 0 && $$bindings.newTodoFlag && newTodoFlag !== void 0)
    $$bindings.newTodoFlag(newTodoFlag);
  if ($$props.selectedTodo === void 0 && $$bindings.selectedTodo && selectedTodo !== void 0)
    $$bindings.selectedTodo(selectedTodo);
  if ($$props.editTodoFlag === void 0 && $$bindings.editTodoFlag && editTodoFlag !== void 0)
    $$bindings.editTodoFlag(editTodoFlag);
  $$result.css.add(css$5);
  projectListData = $page.data.projectList;
  userData = $page.data.userData;
  $$unsubscribe_page();
  return `<div class="NewTodo svelte-c4zf67"><ul class="svelte-c4zf67">${!newTodoFlag ? `<li class="svelte-c4zf67"><div class="todo-header svelte-c4zf67">New Todo</div></li>` : `<li class="svelte-c4zf67"><form method="POST" action="testapi/todo?/addTodoToDB"><div class="todo-header todo-header-input svelte-c4zf67"><input class="todo-name todo-input-field svelte-c4zf67" placeholder="Name" name="todoName" autocomplete="off" autofocus required>
                    <input class="todo-date todo-input-field svelte-c4zf67" type="date" name="dueDate" required>
                    <button class="submit-button svelte-c4zf67" type="submit">✔</button></div>

                <div class="todo-data svelte-c4zf67"><textarea class="todo-input-field todo-notes svelte-c4zf67" placeholder="Notes" name="notes"></textarea>
                    
                    <select class="project-dropdown svelte-c4zf67" name="projectID" required>${each(projectListData, (project) => {
    return `<option class="dropdown-option svelte-c4zf67"${add_attribute("value", project.id, 0)}>${escape(project.projectName)}</option>`;
  })}</select>
                    <input type="hidden" name="userID"${add_attribute("value", userData.id, 0)}>
                    <div class="padding svelte-c4zf67">✔</div></div></form></li>`}</ul>
</div>`;
});
const EditTodo_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "li.svelte-13z6ril{margin-top:1rem;cursor:pointer;text-shadow:2px 2px 2px black;font-size:1.25rem;color:white}.todo-header.svelte-13z6ril{display:flex;align-items:center;padding:0.5rem 1rem;background-color:rgba(138, 43, 226, 0.7);color:greenyellow}.todo-name.svelte-13z6ril{flex:1;color:yellow;font-size:1.25rem;margin-right:1rem}.todo-date.svelte-13z6ril{color:white}.todo-data.svelte-13z6ril{background-color:rgba(79, 183, 192, 0.7);display:flex;justify-content:space-between;align-items:center;font-size:1rem;padding:0.5rem 1rem;margin-bottom:1rem}.todo-notes.svelte-13z6ril{font-size:1rem;color:white;flex:1;margin-right:1rem;padding:0.25rem 0rem}.padding.svelte-13z6ril{visibility:hidden;padding:0rem 1rem;font-size:1.5rem}.todo-input-field.svelte-13z6ril{background-color:transparent;border:none;outline:none;text-shadow:2px 2px 2px black;box-shadow:0 0 10px #9ecaed}.submit-button.svelte-13z6ril{border:none;outline:none;font-size:1.5rem;background-color:transparent;color:white;padding:0rem 1rem;font-weight:800;text-shadow:2px 2px 2px black}.submit-button.svelte-13z6ril:hover{color:greenyellow}",
  map: null
};
const EditTodo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  console.log("Component EditTodo");
  let { todo } = $$props;
  let { editTodoFlag } = $$props;
  if ($$props.todo === void 0 && $$bindings.todo && todo !== void 0)
    $$bindings.todo(todo);
  if ($$props.editTodoFlag === void 0 && $$bindings.editTodoFlag && editTodoFlag !== void 0)
    $$bindings.editTodoFlag(editTodoFlag);
  $$result.css.add(css$4);
  return `<li class="svelte-13z6ril"><form method="POST" action="testapi/todo?/modifyTodoInDB"><div class="${"todo-header " + escape(todo.dateFlag, true) + " svelte-13z6ril"}"><input class="todo-name todo-input-field svelte-13z6ril" name="todoName" type="text"${add_attribute("value", todo.todoName, 0)} required>
            <input class="todo-date todo-input-field svelte-13z6ril" name="dueDate" type="date"${add_attribute("value", todo.dueDate, 0)} required></div>

        <div class="todo-data svelte-13z6ril"><textarea class="todo-notes todo-input-field svelte-13z6ril" name="notes">${todo.notes || ""}</textarea>
            <input name="todoID" type="hidden"${add_attribute("value", todo.id, 0)}>
            <button class="submit-button svelte-13z6ril" type="submit">✔</button></div></form>

    </li>`;
});
const TodoList_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".TodoList.svelte-1318ojv.svelte-1318ojv{margin-top:1rem;padding:0rem 1rem}ul.svelte-1318ojv.svelte-1318ojv{list-style-type:none;padding:0;margin:0}li.svelte-1318ojv.svelte-1318ojv{cursor:pointer;text-shadow:2px 2px 2px black;font-size:1rem;color:white;margin-top:1rem}.todo-header.svelte-1318ojv.svelte-1318ojv{display:flex;justify-content:end;align-items:center;padding:0.5rem 1rem;background-color:rgba(211, 211, 211, 0.2)}.todo-header.svelte-1318ojv.svelte-1318ojv:hover{background-color:rgba(138, 43, 226, 0.7)}.todo-name.svelte-1318ojv.svelte-1318ojv{flex:1;color:yellow;font-size:1.25rem}.todo-data.svelte-1318ojv.svelte-1318ojv{background-color:rgba(79, 183, 192, 0.7);display:flex;justify-content:space-between;align-items:center;font-size:1rem;margin-bottom:1rem;padding:0.5rem 1rem}.todo-notes.svelte-1318ojv.svelte-1318ojv{word-wrap:break-word;white-space:pre-wrap}.selected.svelte-1318ojv.svelte-1318ojv{background-color:rgba(138, 43, 226, 0.7)}.today.svelte-1318ojv.svelte-1318ojv{color:red}.tomorrow.svelte-1318ojv.svelte-1318ojv{color:orange}.dayaftertomorrow.svelte-1318ojv.svelte-1318ojv{color:green}.past.svelte-1318ojv.svelte-1318ojv{color:grey\n	}.del-button.svelte-1318ojv.svelte-1318ojv,.edit-button.svelte-1318ojv.svelte-1318ojv{border:none;outline:none;font-size:1.5rem;visibility:hidden;background-color:transparent;color:white;padding:0rem 1rem;font-weight:800;text-shadow:2px 2px 2px black}.del-button.svelte-1318ojv.svelte-1318ojv:hover{color:red}li.svelte-1318ojv:hover .del-button.svelte-1318ojv,.del-button.svelte-1318ojv.svelte-1318ojv:hover{visibility:visible;cursor:crosshair}.edit-button.svelte-1318ojv.svelte-1318ojv:hover{color:purple}li.svelte-1318ojv:hover .edit-button.svelte-1318ojv,.edit-button.svelte-1318ojv.svelte-1318ojv:hover{visibility:visible;cursor:crosshair}",
  map: null
};
const TodoList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  console.log("Component TodoList");
  let { filteredTodoList } = $$props;
  let { newTodoFlag } = $$props;
  let { selectedTodo } = $$props;
  let { editTodoFlag } = $$props;
  if ($$props.filteredTodoList === void 0 && $$bindings.filteredTodoList && filteredTodoList !== void 0)
    $$bindings.filteredTodoList(filteredTodoList);
  if ($$props.newTodoFlag === void 0 && $$bindings.newTodoFlag && newTodoFlag !== void 0)
    $$bindings.newTodoFlag(newTodoFlag);
  if ($$props.selectedTodo === void 0 && $$bindings.selectedTodo && selectedTodo !== void 0)
    $$bindings.selectedTodo(selectedTodo);
  if ($$props.editTodoFlag === void 0 && $$bindings.editTodoFlag && editTodoFlag !== void 0)
    $$bindings.editTodoFlag(editTodoFlag);
  $$result.css.add(css$3);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="TodoList svelte-1318ojv"><ul class="svelte-1318ojv">${filteredTodoList ? `${each(filteredTodoList, (todo) => {
      return `${editTodoFlag === todo.id ? `${validate_component(EditTodo, "EditTodo").$$render(
        $$result,
        { todo, editTodoFlag },
        {
          editTodoFlag: ($$value) => {
            editTodoFlag = $$value;
            $$settled = false;
          }
        },
        {}
      )}` : `<li class="svelte-1318ojv"><div class="${[
        "todo-header svelte-1318ojv",
        selectedTodo === todo.id ? "selected" : ""
      ].join(" ").trim()}"><div class="todo-name svelte-1318ojv">${escape(todo.todoName)}</div>
                    <div class="${escape(null_to_empty(todo.dateFlag), true) + " svelte-1318ojv"}">${escape(todo.prettyDate)}</div>
                    <form method="POST" action="../testapi/todo?/removeTodoFromDB"><button class="del-button svelte-1318ojv" type="submit">✘</button>
                        <input type="hidden" name="todoID"${add_attribute("value", todo.id, 0)}>
                    </form></div>

                ${selectedTodo === todo.id ? `<div class="todo-data svelte-1318ojv"><div class="todo-notes svelte-1318ojv">${escape(todo.notes)}</div>
                        <input name="todoID" type="hidden"${add_attribute("value", todo.id, 0)}>
                        <button class="edit-button svelte-1318ojv" type="submit">E</button>
                    </div>` : ``}
            </li>`}`;
    })}` : ``}</ul>
</div>`;
  } while (!$$settled);
  return $$rendered;
});
const TodoView = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { filteredTodoList } = $$props;
  let newTodoFlag = false;
  let selectedTodo = -1;
  let editTodoFlag = false;
  if ($$props.filteredTodoList === void 0 && $$bindings.filteredTodoList && filteredTodoList !== void 0)
    $$bindings.filteredTodoList(filteredTodoList);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="TodoView">${validate_component(NewTodo, "NewTodo").$$render(
      $$result,
      { newTodoFlag, selectedTodo, editTodoFlag },
      {
        newTodoFlag: ($$value) => {
          newTodoFlag = $$value;
          $$settled = false;
        },
        selectedTodo: ($$value) => {
          selectedTodo = $$value;
          $$settled = false;
        },
        editTodoFlag: ($$value) => {
          editTodoFlag = $$value;
          $$settled = false;
        }
      },
      {}
    )}

    ${validate_component(TodoList, "TodoList").$$render(
      $$result,
      {
        filteredTodoList,
        newTodoFlag,
        selectedTodo,
        editTodoFlag
      },
      {
        newTodoFlag: ($$value) => {
          newTodoFlag = $$value;
          $$settled = false;
        },
        selectedTodo: ($$value) => {
          selectedTodo = $$value;
          $$settled = false;
        },
        editTodoFlag: ($$value) => {
          editTodoFlag = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>`;
  } while (!$$settled);
  return $$rendered;
});
const CalendarNewTodo_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".popup.svelte-11n8i2c.svelte-11n8i2c{position:relative;display:inline-block}.popup.svelte-11n8i2c .popuptext.svelte-11n8i2c{text-align:center;border-radius:0.25rem;padding:0.5rem 0;position:absolute;z-index:1;left:45%;bottom:-8rem;margin-left:-80px;display:flex;flex-direction:column;align-items:center;gap:0.5rem;background-color:rgba(0, 0, 0, 0.5);border-radius:1rem;padding-top:1rem}.todo-input-field.svelte-11n8i2c.svelte-11n8i2c{margin:0 1rem;font-size:0.75rem;border:none;outline:none;text-shadow:2px 2px 2px black;box-shadow:0 0 10px #9ecaed;color:white}.todo-input-field.svelte-11n8i2c.svelte-11n8i2c:placeholder-shown{color:white}.name.svelte-11n8i2c.svelte-11n8i2c{background-color:blueviolet;padding-bottom:0.5rem;color:yellow}.notes.svelte-11n8i2c.svelte-11n8i2c{background-color:rgba(79, 183, 192, 0.9)}.submit-button.svelte-11n8i2c.svelte-11n8i2c{border:none;outline:none;font-size:1rem;background-color:transparent;color:greenyellow;padding:0rem 1rem;font-weight:800;text-shadow:2px 2px 2px black}.submit-button.svelte-11n8i2c.svelte-11n8i2c:hover{color:blueviolet}.project-dropdown.svelte-11n8i2c.svelte-11n8i2c{padding:0.25rem 0.5rem;border:none;font-size:1rem;color:orange;text-shadow:2px 2px 2px black;box-shadow:0 0 10px #9ecaed;width:83%;background-color:rgba(79, 183, 192, 0.9)}option.svelte-11n8i2c.svelte-11n8i2c{color:white}option.svelte-11n8i2c.svelte-11n8i2c:checked{color:yellow}",
  map: null
};
const CalendarNewTodo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let projectListData;
  let userData;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { clickedDate } = $$props;
  if ($$props.clickedDate === void 0 && $$bindings.clickedDate && clickedDate !== void 0)
    $$bindings.clickedDate(clickedDate);
  $$result.css.add(css$2);
  projectListData = $page.data.projectList;
  userData = $page.data.userData;
  $$unsubscribe_page();
  return `<form class="calendar-todo popup svelte-11n8i2c" method="POST" action="testapi/todo?/addTodoToDB"><div class="popuptext svelte-11n8i2c"><input class="todo-input-field name svelte-11n8i2c" name="todoName" placeholder="Name" autocomplete="off" autofocus required>
            <textarea class="todo-input-field notes svelte-11n8i2c" name="notes" placeholder="Notes"></textarea>
            <select class="project-dropdown svelte-11n8i2c" name="projectID" required>${each(projectListData, (project) => {
    return `<option class="dropdown-option svelte-11n8i2c"${add_attribute("value", project.id, 0)}>${escape(project.projectName)}</option>`;
  })}</select>
            <input type="hidden" name="userID"${add_attribute("value", userData.id, 0)}>
            <input type="hidden" name="dueDate"${add_attribute("value", clickedDate, 0)}>
            <button type="submit" class="submit-button svelte-11n8i2c">✔</button></div>
</form>`;
});
const CalendarView_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".CalendarGrid.svelte-1cbqgvb{height:100%;margin:0rem 1rem;border:2px solid red;min-width:700px;display:grid;grid-template-columns:repeat(7, clamp(100px, 14.28%, 100%));grid-template-rows:50px 50px repeat(5, 150px);grid-auto-rows:150px}.month-menu-container.svelte-1cbqgvb{display:flex;justify-content:space-between;align-items:center;grid-column:1/8}.menu-button.svelte-1cbqgvb{background-color:transparent;font-size:3rem;color:orange;padding:0rem 2rem;text-shadow:2px 2px 2px black;border:none}#month-menu-month.svelte-1cbqgvb{color:yellow;font-size:3rem;text-shadow:2px 2px 2px black}.menu-button.svelte-1cbqgvb:hover{color:blueviolet}.date.svelte-1cbqgvb,.dayOfWeek.svelte-1cbqgvb{color:white;text-shadow:2px 2px 2px blue;background-color:none;padding:0.5rem;min-width:50px}.dayOfWeek.svelte-1cbqgvb{font-size:2rem;border:1px solid white}.date.svelte-1cbqgvb{font-size:1rem;display:flex;flex-direction:column;gap:0.25rem;border:1px dotted white;font-weight:300}.date.blank.svelte-1cbqgvb{border:none}.calendar-todo.svelte-1cbqgvb{flex:0;font-size:0.75rem;color:black;border-radius:0.25rem;background-color:lightgreen;padding:0.1rem 0.5rem;cursor:pointer;color:white;text-shadow:2px 2px 2px black;position:relative;display:inline-block}.calendar-todo-data.svelte-1cbqgvb{width:160px;text-align:center;border-radius:0.25rem;padding:0.5rem 0;position:absolute;z-index:1;top:125%;left:50%;margin-left:-80px;background-color:rgba(79, 183, 192, 0.9);color:white;text-shadow:2px 2px 2px black;border:2px solid black}.todayDate.svelte-1cbqgvb{color:greenyellow;border:2px solid greenyellow}.calendar-todo.svelte-1cbqgvb:hover{background-color:yellow}.projectColour0.svelte-1cbqgvb{background-color:red}.projectColour1.svelte-1cbqgvb{background-color:orange}",
  map: null
};
const CalendarView = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const monthList = [
    "Blank",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const dayOfWeekList = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const dateInfo = {
    todayDate: void 0,
    dayOfWeek: void 0,
    day: void 0,
    month: void 0,
    year: void 0
  };
  const chosenDate = {
    day: void 0,
    month: void 0,
    year: void 0
  };
  let numberOfBlanks;
  let daysInCurrentMonth;
  function getDateInfo() {
    const todayDate = /* @__PURE__ */ new Date();
    dateInfo.todayDate = todayDate;
    dateInfo.dayOfWeek = todayDate.getDay();
    dateInfo.day = todayDate.getDate();
    dateInfo.month = todayDate.getMonth() + 1;
    dateInfo.year = todayDate.getFullYear();
    chosenDate.month = dateInfo.month;
    chosenDate.year = dateInfo.year;
  }
  function calculateBlanks() {
    const initialDay = /* @__PURE__ */ new Date(`${chosenDate.month} 01 ${chosenDate.year}`);
    const initialDayOfWeek = initialDay.getDay();
    if (initialDayOfWeek === 0) {
      numberOfBlanks = 6;
    } else {
      numberOfBlanks = initialDayOfWeek - 1;
    }
  }
  function calculateDaysInCurrentMonth() {
    const daysInMonthNonLeapArray = ["0", "31", "28", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31"];
    daysInCurrentMonth = parseInt(daysInMonthNonLeapArray[chosenDate.month]);
  }
  getDateInfo();
  calculateBlanks();
  calculateDaysInCurrentMonth();
  let { filteredTodoList } = $$props;
  let newTodoTile = -1;
  let selectedTodoID = -1;
  let clickedDate = "";
  let chosenMonthTodoList = [];
  if ($$props.filteredTodoList === void 0 && $$bindings.filteredTodoList && filteredTodoList !== void 0)
    $$bindings.filteredTodoList(filteredTodoList);
  $$result.css.add(css$1);
  return `<div class="CalendarGrid svelte-1cbqgvb"><div class="month-menu-container svelte-1cbqgvb"><button class="menu-button svelte-1cbqgvb">⬅</button>
        <div id="month-menu-month" class="svelte-1cbqgvb">${escape(monthList[chosenDate.month])} ${escape(chosenDate.year)}</div>
        <button class="menu-button svelte-1cbqgvb">➡</button></div>

    ${each(dayOfWeekList, (dayOfWeek) => {
    return `<div class="dayOfWeek svelte-1cbqgvb">${escape(dayOfWeek)}</div>`;
  })}
    
    ${each(Array(numberOfBlanks), (_, index) => {
    return `<div class="date blank svelte-1cbqgvb"></div>`;
  })}

    ${each(Array(daysInCurrentMonth), (_, index) => {
    return `<div class="${[
      "date svelte-1cbqgvb",
      index + 1 == dateInfo.day && chosenDate.month == dateInfo.month ? "todayDate" : ""
    ].join(" ").trim()}">${escape(index + 1)}

        ${each(chosenMonthTodoList, (todo) => {
      return `${todo.dueDate.slice(8, 10) == index + 1 ? `<div class="${"calendar-todo " + escape(todo.colourCode, true) + " svelte-1cbqgvb"}">${escape(todo.todoName)}
                    ${todo.id == selectedTodoID ? `<span class="calendar-todo-data svelte-1cbqgvb">${escape(todo.notes)}</span>` : ``}
                </div>` : ``}`;
    })}

        ${index + 1 == newTodoTile ? `${validate_component(CalendarNewTodo, "CalendarNewTodo").$$render($$result, { clickedDate }, {}, {})}` : ``}
        
        </div>`;
  })}

</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".full-container.svelte-1d8cv7f{display:grid;grid-template-columns:250px 1fr}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  console.log("/ +page.svelte");
  let { data } = $$props;
  let selectedView = "List";
  let selectedTimePeriod = "All";
  let selectedProjectID = -1;
  let filteredTodoList = [];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    data.todoList;
    $$rendered = `<div class="full-container svelte-1d8cv7f"><div class="side-panel">${validate_component(ViewList, "ViewList").$$render(
      $$result,
      { selectedView },
      {
        selectedView: ($$value) => {
          selectedView = $$value;
          $$settled = false;
        }
      },
      {}
    )}
		${validate_component(TimePeriodList, "TimePeriodList").$$render(
      $$result,
      { selectedTimePeriod },
      {
        selectedTimePeriod: ($$value) => {
          selectedTimePeriod = $$value;
          $$settled = false;
        }
      },
      {}
    )}
		${validate_component(ProjectList, "ProjectList").$$render(
      $$result,
      { selectedProjectID },
      {
        selectedProjectID: ($$value) => {
          selectedProjectID = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>
	<div class="view-container">${selectedView === "List" ? `${validate_component(TodoView, "TodoView").$$render($$result, { filteredTodoList }, {}, {})}` : `${selectedView === "Calendar" ? `${validate_component(CalendarView, "CalendarView").$$render($$result, { filteredTodoList }, {}, {})}` : ``}`}</div>
</div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
