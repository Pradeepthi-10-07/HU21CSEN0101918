export const addCart = (product) => {
    return {
        type :"ADDITEM",
        playload:TopNproducts

    }
}

export const delCart = (product) => {
    return {
        type:"DELITEM",
        playload:TopNproducts
    }
}