const todoList = [];

        renderTodo();

        function renderTodo(){
            let todoListHtml = '';
            for (let i = 0;i<todoList.length;i++){
                const todo = todoList[i];
                const html = `<p>${todo}</p>`;
                todoListHtml +=html
            }
            console.log(todoListHtml);

            document.querySelector('.js-todo').innerHTML = todoListHtml;
        }
        

        function addTodo(){
            const input = document.querySelector('.input-js');

            const name = input.value;
            todoList.push(name);
            console.log(todoList);

            input.value = '';
            renderTodo();
        }