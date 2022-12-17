class Render {
    todo(array, id) {
        
        let content = "";
       
        // console.log(array);
        array.forEach(element => {
            if (!element.done) {
                
                content += `
                <div class="container-mes" >
            <p class="mes">${element.mes}</p>

            <div>

            <a name="" onclick="deleteToDo('${element.id}')" class="btn btn-primary" href="#" role="button"><i class="fa-solid fa-trash-can"></i></a>

            <a name="" onclick="doneToDo('${element.id}','${element.mes}',true)" class="btn btn-primary" href="#" role="button"><i class="fa-regular fa-circle-check"></i></a>

            </div>
            </div>
            
            `
            }
        });
        document.getElementById(id).innerHTML = content;
    }
    
    completed(array,id) {
        let content = "";
        array.forEach(element => {
            if (element.done) {

                content += `
                <div class="container-mes" >
            <p class="mes">${element.mes}</p>
            <div>

            <a name="" onclick="deleteToDo('${element.id}')" class="btn btn-primary" href="#" role="button"><i class="fa-solid fa-trash-can"></i></a>

            <a name="" onclick="doneToDo('${element.id}','${element.mes}',false)" class="btn btn-primary" href="#" role="button"><i class="fa-solid fa-circle-check" style="color:green"></i></a>
            
            </div>

            </div>
            
            `
            }
        });
        document.getElementById(id).innerHTML = content;
    }
}
export default Render