let todos = [];
let option = prompt("¿Que desea hacer?");

while(option !== "quit"){
    
    if(option === "new"){
        let newTodo = prompt("escribe la tarea que deseas agregar");
        todos.push(newTodo);
        console.log(`"${newTodo}" fue agregado a la lista`);
    } 
    else if(option === "list"){
        console.log("***************");
        for(let i = 0; i < todos.length; i++){
            console.log(`${i}: ${todos[i]}`);
        }
        console.log("***************");
    }

    else if(option === "delete"){
        let deleteIndex = parseInt(prompt("escribe el índice del elemento que deseas eliminar"));
        while(!deleteIndex  || (deleteIndex < 0 || deleteIndex >= todos.length)){
            deleteIndex = parseInt(prompt("solo números, y que estén dentro del rango, porfa"));
        }
        console.log(`El elemento "${todos[deleteIndex]}" ha sido eliminado`);
        todos.splice(deleteIndex, 1);
    }
    option = prompt("¿Qué desea hacer?");

}
alert("Nos vemos!");