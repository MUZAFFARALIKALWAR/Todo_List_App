#! /usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"

let todoList:string [] = []
 let condition = true
                        console.log(chalk.yellowBright`\t<<<================================================================================>>>\n`);

console.log(chalk.greenBright.bold`\n\t<<<========= Wellcome to Muzaffar Ali Kalwar________Updated Todo-List App =========>>>\n `);
console.log(chalk.yellowBright`\t<<<================================================================================>>>\n\n`);

// start todo list advance
let main = async () => {
    while(condition){
    let option = await inquirer.prompt
    (
        [
            {
                type:"list",
                name:"choices",
                message:chalk.greenBright(" Choose an option:"),
                
                choices:["Add Task","Delete Task","Update Task","View Todo List","Exit"]
            }
        ]
    )
    if(option.choices === "Add Task"){
        await addTask();
    }
    else if(option.choices === "Delete Task"){
        await deleteTask();
    }
    else if(option.choices === "Update Task"){
        await UpdateTask()
    }
    else if(option.choices === "View Todo List"){
          await viewTask();
    }else if(option.choices === "Exit"){
        console.log(chalk.red("******GOOD BYE*****"));
        
        condition = false;
    }
}
}






//01 add task options to the list of options available 
let addTask = async () => {
    let newTask = await inquirer.prompt
    (
        [
            {
                type:"task",
                name:"task",
                message:chalk.yellowBright("Enter your New Task :"),
            }
        ]
    );
    todoList.push(newTask.task);
    console.log(chalk.greenBright(newTask.task,": Task added successfully in Todo List"));

}



  
  //2 view task list for current task list
  let viewTask = async () => {
      console.log(chalk.yellowBright`\n <=======YOUR TODO LIST ==========>\n`);
    todoList.forEach((Task,index)=> {
        console.log(chalk.greenBright(index + 1, Task));
        
        
    });
      


  }


// delete task from tasks list
  let deleteTask = async()=>{
    await viewTask();
   let indexnumber = await inquirer.prompt
   (
    [
        {
            type:"number",
            name:"index",
            message:chalk.greenBright("\nEnter the index number of the task you want to delete :"),
        }
    ]
   );
   let deletedTask = todoList.splice(indexnumber.index -1,1)
   console.log(chalk.yellowBright(deletedTask, ": Task deleted successfully from Todo-List"));
   
  }
// updat task
 
 let UpdateTask = async ()=>{
    await viewTask();
    let Update_Task = await inquirer.prompt
    (
        [
            {
                type:"number",
                name:"index",
                message:chalk.greenBright("Enter the index number of the task you want to update :")
            },
            {
                type:"input",
                name:"new_task",
                message:chalk.greenBright("Enter the new task name :"),
            }
        ]
    );
    todoList[Update_Task.index -1] = Update_Task.new_task
    console.log(chalk.greenBright("Task at index number",Update_Task.index ," updated Successfully [for updated list check View todo list]"));
    
 }

main();

























// while(condition){
//    let addTask = await inquirer.prompt(
//     [
//         {
//             type:"input",
//             name:"task",
//             message:chalk.greenBright("Enter your new task"),
//         }
//     ]
//    );
//    todoList.push(addTask.task)
// console.log(chalk.yellowBright(addTask.task," Task added in Todo_List successfully"));
//          let addMore = await inquirer.prompt([
//             {
//                 type:"confirm",
//                 name:"more",
//                 message:chalk.yellowBright("do you went to add more task"),
//                 default : "false"
//             }
//          ]);
//          condition = addMore.more
         
  




// }
// console.log(chalk.greenBright("your updated todo List :"),todoList);
