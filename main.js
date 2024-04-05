#! /usr/bin/env node
import inquirer from "inquirer";
let todoList = [];
let conditions = true;
//simple todo list
// while(condition)
// {
//     let todoquestions= await inquirer.prompt([
//     {
//         name:"firstQuestion",
//         type:"input",
//         message:"What would you like to add in your todos?"
//     },
//     {
//         name:'secondQuestion',
//         type:"confirm",
//         message:'Would you like to add more in your todos?',
//         default:"true"
//     }
// ]);
// todos.push(todoquestions.firstQuestion);
// console.log(todos);
// condition = todoquestions.secondQuestion
// }
//upgraded and new todo list
let main = async () => {
    while (conditions) {
        let option = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: "select an option you want to do:",
                choices: ["Add Task", "Delete Task", "update Task", "view Todo-List", "Exit"],
            },
        ]);
        //options
        if (option.choice === "Add Task") {
            await addTask();
        }
        else if (option.choice === "Delete Task") {
            await deleteTask();
        }
        else if (option.choice === "view Todo-List") {
            await viewTask();
        }
        else if (option.choice === "Exit") {
            conditions = false;
        }
        ;
    }
};
//function to add new task to the list
let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter your new task:"
        }
    ]);
    todoList.push(newTask.task);
    console.log(`${newTask.task} task added successfully in Todo-List`);
};
//function to view all ToDo_List tasks
let viewTask = () => {
    console.log("your Todo-List:");
    todoList.forEach((task, index) => {
        console.log(`${index}, ${task}`);
    });
};
//function to delete task from the list
let deleteTask = async () => {
    await viewTask();
    let taskIndex = await inquirer.prompt([
        {
            name: "Index",
            type: "number",
            message: "Enter the index of the task you want to delete:"
        }
    ]);
    let deleteTask = todoList.splice(taskIndex.index, 1);
    console.log(`\n${deleteTask} this task has been deleted successfully from your todo-List\n`);
};
main();
