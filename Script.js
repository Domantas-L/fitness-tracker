
let TodayMockData = [
    {
        Done: true,
        id: 1,
        name: "Open github",
        Start: "12:45",
        End: "14:45"
    },
    {
        Done: false,
        id: 2,
        name: "Close github",
        Start: "14:45",
        End: "14:50"
    },
];
const form_overlay = document.querySelector("#form-overlay");
const task_form = document.querySelector("#task_form");
const form_open_btn = document.querySelector("#open-form-btn");
const form_close_btn = document.querySelector("#Close-form-btn");
const Add_new_list = document.querySelector("#Board");

form_open_btn.addEventListener("click",() =>{
    form_overlay.classList.remove("hidden");
});



form_close_btn.addEventListener("click",()=>
{
    form_overlay.classList.add("hidden");
    task_form.reset();
});
function AddTodayTask(task)
{
    const newData = {
    id: Date.now(),
    name: document.querySelector("#Task_name").value,
    Start: document.querySelector("#Task_Start_time").value,
    End: document.querySelector("#Task_End_time").value,
    Done: false
    };
    TodayMockData.push(newData);
    return newData;
}
task_form.addEventListener("submit",(event)=>
{
    event.preventDefault();

   AddTodayTask(
    {
    name: document.querySelector("#Task_name").value,
    Start: document.querySelector("#Task_Start_time").value,
    End: document.querySelector("#Task_End_time").value
    }
   );

    RenderTodayTask();

    form_overlay.classList.add("hidden");
    task_form.reset();
});

function getTodayTask()
{
    if (TodayMockData.length === 0) {
        console.log("The list is empty")
        return [];
    }
    return TodayMockData;
}
RenderTodayTask();

function RenderTodayTask() {
    const today_list = document.querySelector("#Today-List");
    if (TodayMockData.length == 0) {
        today_list.innerHTML = "<li><p>Nothing was added yet</p></li>";
        return;
    }
    today_list.innerHTML = TodayMockData.map(w =>
    `<li class="list-item">
      <label for=" task-check-box">
            <input type="checkbox" class="List-checkbox" id="Task-${w.id}" ${w.Done ? "checked" : ""}>
        </label>
         <div class="List-task-text">
            <span> ${w.name}</span>
        </div>
        <div class="List-task-text">
            <span> ${w.Start}</span>
        </div>
        <div class="List-task-text">
            <span> ${w.End}</span>
        </div>
    <div class="List-btn-display">
        <button class="List-btn">Update</button>
        <button class="List-btn">Delete</button>
    </div>
    </li>`
    ).join("");
    console.log("This works");
}

RenderTodayTask();
