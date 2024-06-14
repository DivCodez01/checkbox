const input = document.getElementsByTagName("input");
const button = document.querySelector("button");
const inputsValued = document.getElementsByTagName("div");

const todoElms = [
    {
        name: "make dinner",
        dueDate: "2022-12-22"
    },
    {
        name: "wash dishes",
        dueDate: "2023-05-17"
    }];

todoListElms(todoElms);

function todoListElms(todoList) {
    let todoListHtml = "";
    todoList.forEach((todo, index) => {
        const { name, dueDate } = todo;
        const html = `
                <div>${name}</div>
                <div>${dueDate}</div>
                <button class="delete-btn">Delete</button>
                `;
        todoListHtml += html;
    });

    inputsValued[1].innerHTML = todoListHtml;

    const deleteBtn = document.querySelectorAll(".delete-btn");
    Array.from(deleteBtn).forEach((btn, index) => {
        btn.addEventListener("click", (ev) => {
            todoList.splice(index, 1);
            todoListElms(todoElms)
        })
    })
}

button.addEventListener("click", (ev) => {
    let name = input[0].value;
    let dueDate = input[1].value;

    if (name && dueDate) {
        todoElms.push({ name, dueDate });
    }
    todoListElms(todoElms)

    input[0].value = "";
    dueDate = input[1].value = "";
})