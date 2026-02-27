const {readTasks, writeTasks} = require("./fileHandler");

function addTask(title,description){
    const tasks = readTasks();

    const newTask = {

        id:tasks.length?tasks[tasks.length-1].id+1:1,
        title:title,
        description:description,
        status:"todo",
        createdAt:new Date(),
        updatedAt:new Date()
    };

    tasks.push(newTask);
    writeTasks(tasks);

    console.log("Tasks added Successfully");
    
}

function listTask(status){

    const tasks = readTasks();

    if(!tasks.length){
        console.log("📭 No tasks found.");
        return;
    }

    console.log("\n📋 Your Tasks:\n");

    switch(status) {
        case "todo":
        case "Done":
        case "in-Progress":
        case "Not-Done":
            const filtered = tasks.filter(t => t.status === status);
            if(!filtered.length){
                console.log(`No tasks with status: ${status}`);
                return;
            }
            filtered.forEach(task => {
                console.log(`${task.id}. ${task.title} [${task.status}]`);
            });
            break;

        default:
            // Show all tasks if no status or empty status provided
            tasks.forEach(task => {
                console.log(`${task.id}. ${task.title} [${task.status}]`);
            });
    }
    
    console.log("");
   

  
     
     
}

function updateTask(id,newTitle,newStatus){
    const tasks = readTasks();

    const task = tasks.find(t => t.id === parseInt(id));

    if(!tasks.length){
        console.log("No tasks found");
        
    }

    if(!newTitle){
        console.log("Provide New Title to Update ")
    }

    task.title = newTitle;
    task.updatedAt = new Date();
    task.status = newStatus;

    writeTasks(tasks);

}

function markInProgress(id){

    const tasks = readTasks();

    const task = tasks.find(t=>t.id === parseInt(id));

    if(!tasks.length){
        console.log("No tasks Found");
    }
    if(!task){
        console.log("Your Provided Id Task Not Found");
    }
    if(task.status === "in-Progress"){
        console.log("Already in Progess State")
    }

    task.status = "in-Progress";
    task.updatedAt=new Date();

    writeTasks(tasks);
}
function markDone(id){

    const tasks = readTasks();

    const task = tasks.find(t=>t.id === parseInt(id));

    if(!tasks.length){
        console.log("No tasks Found");
    }
    if(!task){
        console.log("Your Provided Id Task Not Found");
    }
    if(task.status === "Done"){
        console.log("Already Done")
    }

    task.status = "Done";
    task.updatedAt=new Date();

    writeTasks(tasks);
}




module.exports={addTask,listTask,updateTask,markInProgress,markDone};