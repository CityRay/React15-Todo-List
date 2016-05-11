let actions = {
    addTodo: function(text) {
        return {
            type: "ADD_TODO",
            text: text
        }
    },
    completeTodo: function(id) {
        return {
            type: "COMPLETE_TODO",
            id: id
        }
    },
    delTodo: function(id) {
        return {
            type: "DEL_TODO",
            id: id
        }
    }
}

export default actions
//dispatch(addTodo('some text'))
