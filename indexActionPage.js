export const addTodo = (data)=>{
    return{
        type : "ADD",
        payload : {
            id : new Date().getTime.toString(),
            data : data
        }
    }
}

export const deleteTodo=()=>{
    return{
        type : "DELETE"   
    }  
}

export const removeTodo=()=>{
    return{
        type : "REMOVEALL"   
    }
}