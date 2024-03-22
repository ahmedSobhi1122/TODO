window.addEventListener('load',()=>{
    const form = document.querySelector("#new_task_form");
    const input = document.querySelector("#new_task_input");
    const listElement = document.querySelector("#Tasks");

    form.addEventListener('submit',(e)=>{
        e.preventDefault();

        
        const task = input.value;
        // console.log(task);

        if(!task){
            alert("Please Enter your task");
            return;
        }

        const taskElement = document.createElement("div");
        taskElement.classList.add("Task");

        const taskContent = document.createElement("div");
        taskContent.classList.add("Content");

        taskElement.appendChild(taskContent);
        // listElement.appendChild(taskElement);

        const taskInputElement = document.createElement("input");
        taskInputElement.classList.add("Text");
        taskInputElement.type = "text";
        taskInputElement.value = task;
        taskInputElement.setAttribute("readonly","readonly");

        taskContent.appendChild(taskInputElement);

        const taskActionElement = document.createElement("div");
        taskActionElement.classList.add("Action");
        
        const taskEditElement = document.createElement("button");
        taskEditElement.classList.add("Edit");
        taskEditElement.innerText = "Edit";

        const taskDeleteElement = document.createElement("button");
        taskDeleteElement.classList.add("Delete");
        taskDeleteElement.innerText = "Delete";

        taskActionElement.appendChild(taskEditElement);
        taskActionElement.appendChild(taskDeleteElement);

        taskElement.appendChild(taskActionElement);

        listElement.appendChild(taskElement);

        input.value = "";

        taskEditElement.addEventListener("click",()=>{
            console.log(taskEditElement.innerText.toLowerCase());
            if(taskEditElement.innerText.toLowerCase() == "edit"){
                taskEditElement.innerText = "Save";
                taskInputElement.removeAttribute("readonly");
                taskInputElement.focus();
            } else {
                taskEditElement.innerText = "Edit";
                taskInputElement.setAttribute("readonly","readonly");
            }
        });

        taskDeleteElement.addEventListener('click', (e) => {
			listElement.removeChild(taskElement);
		});

    });
});