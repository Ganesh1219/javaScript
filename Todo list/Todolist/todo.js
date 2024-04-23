const todoList = [
    {name:'ganesh',dueDate:'20-05-2022'},
    {name:'gowtham',dueDate:'12-02-2024'}
];

renderTodo();

function renderTodo(){
    let todoListHtml = '';
    
    for (let i = 0;i<todoList.length;i++){
        const todoObject = todoList[i];
        //const name = todoObject.name;
        //const dueDate = todoObject.dueDate;
        const { name,dueDate } = todoObject;
        const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button onClick="
            todoList.splice(${i},1);
            renderTodo();
        " class="delete-todo">Delete</button> 
        `;
        todoListHtml +=html
    }
    

    document.querySelector('.js-todo').innerHTML = todoListHtml;
}


function addTodo(){
    const input = document.querySelector('.input-js');

    const name = input.value;

    const dateInputElement = document.querySelector('.js-date');
    const dueDate = dateInputElement.value;

    todoList.push({
        //name:name,
        //dueDate:dueDate
        name,
        dueDate
    });
    

    input.value = '';
    renderTodo();
}