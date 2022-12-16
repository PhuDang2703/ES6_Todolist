export default class RenderHTML{
    Todo(array, id){
        let content = "";
        array.forEach(element => {
            content += `
            <div class="container-task" >
            <p class="mes">${element.tasks}</p>
            <div>
            <a name="" onclick="deleteToDo('${element.id}')" class="btn btn-primary" href="#" role="button"><i class="fa-solid fa-trash-can"></i></a>
            <a name="" onclick="doneToDo('${element.id}','${element.mes}',true)" class="btn btn-primary" href="#" role="button"><i class="fa-regular fa-circle-check"></i></a>
            </div>
            </div>
            `
        });

        document.getElementById(id).innerHTML = content;
    }

    Complete(array, id){
        let content = "";
        array.forEach(element => {
            content += `
            <div class="container-task">
            <p class="mes">${element.tasks}</p>
            <div>
            <a name="" onclick="deleteToDo('${element.id}')" class="btn btn-primary" href="#" role="button"><i class="fa-solid fa-trash-can"></i></a>
            <a name="" onclick="doneToDo('${element.id}','${element.mes}',false)" class="btn btn-primary" href="#" role="button"><i class="fa-regular fa-circle-check"></i></a>
            </div>
            </div>
            `
        });

        document.getElementById(id).innerHTML = content;
    }
}