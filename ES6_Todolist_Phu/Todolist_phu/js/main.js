import CallApi from "./callapi.js";
import Render from "./render.js";
import Mes from "./tasks.js"
const call = new CallApi("https://6388cedaa4bb27a7f7924897.mockapi.io/api/Todolist")
const render = new Render();

//Lấy danh sách từ Api xuống
const renderHTML = () => {
    call.callApiAll("Todolist", "GET", null)
    .then((response) => {
        render.todo(response.data, "todo")
        render.completed(response.data,"completed")
    })
    .catch((error) => { })
}
renderHTML()
window.renderHTML = renderHTML


//Add item
document.getElementById("addItem").onclick = () => {
    const value = document.getElementById("newTask").value;
    if (value === "") {
        alert("Nhập vào ô trống!")
        return
    }
    const mes = new Mes(value,false);
    call.callApiAll("Todolist", "POST", mes)
        .then(() => {
            renderHTML()
        })
}

//Delete item
const deleteToDo = (id) => {
    call.callApiAll(`Todolist/${id}`, "DELETE", null)
            .then(() => {
                renderHTML()
            })
}
window.deleteToDo = deleteToDo

//Done to do
const doneToDo = (id,message,todo) => {
    const mes = new Mes(message,todo);
    call.callApiAll(`Todolist/${id}`, "PUT", mes)
        .then(() => {
            renderHTML()
        })

}
window.doneToDo = doneToDo;

//Filter item
const filterAtoZ = () => {
    call.callApiAll("Todolist" ,"GET", null)
    .then((response) => {
        const array = response.data.sort((a,b) => a.mes.localeCompare(b.mes));
        // console.log(response.data.sort((a,b) => a.mes.localeCompare(b.mes)));
        render.todo(array, "todo");
        render.completed(array,"completed");
    })
    .catch((error) => { })
}
window.filterAtoZ = filterAtoZ


const filterZtoA = () => {
    call.callApiAll("Todolist" ,"GET", null)
    .then((response) => {
        const array = response.data.sort((a,b) => b.mes.localeCompare(a.mes));
        
        render.todo(array, "todo");
        render.completed(array,"completed");
    })
    .catch((error) => { })
}
window.filterZtoA = filterZtoA