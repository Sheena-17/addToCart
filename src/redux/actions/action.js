export const ADD = (item) =>{
    return {
        type:"ADD_CART",
        payload:item
    }
}
export const DEL = (id) =>{
    console.log("ID is ",id);
    return {
        type: "RMV_CART",
        payload: id
    }
}

// Remove Individual Item................................

export const REMOVE = (item) =>{
    return {
        type : "RMV_ONE",
        payload: item
    }
}