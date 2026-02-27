const {addTask,listTask, updateTask, markInProgress, markDone, listProgress} = require("./tasksController")

const command = process.argv[2]


switch (command) {
    case "add":
        const title = process.argv[3];
        const description = process.argv[4]
        if(!title || !description){
            console.log("Please Provide Title with Description");
        }
        else{
            addTask(title,description)
        }
        
        break;

    case "list":
        const listStatus = process.argv[3];
        listTask(listStatus);
        break;
    
    case "update":
        const id = process.argv[3]
        const newTitle = process.argv[4]
        const status = process.argv[5]

        updateTask(id,newTitle,status)

        break;

    case "mark-in-progress":
        const progressId = process.argv[3];
        markInProgress(progressId);
        break;

    case "mark-done":
        const doneId = process.argv[3];
        markDone(doneId);
        break;   


    default:
        break;
}