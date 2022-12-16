import CallApi from './callApi.js';
import Tasks from './tasks.js';
import RenderHTML from './renderHTML.js'

//Global
const call = new CallApi("https://6388cedaa4bb27a7f7924897.mockapi.io/api/Todolist");
const renderHTML = new RenderHTML();

//Lấy danh sách từ Api xuống
const getListItem = () => {
    call.getItemByIdApi()
    .then((result) => {
        console.log(result)
        renderHTML.Todo(result, "todo");
        renderHTML.Complete(result, "completed");
    })
    .catch(error => {
        console.log(error)
    })
}
getListItem();
window.getListItem = getListItem


//Add item
document.getElementById("addItem").onclick = () => {
let value = document.getElementById("newTask").value;
if(value ===""){
alert('Vui lòng nhập hoạt động!!');
};
const task = new Tasks(value, false);
call.addItemApi(task)
.then((result) => {
    getListItem();
})

}

//Delete item


//Update item


//Done


//Filter item

