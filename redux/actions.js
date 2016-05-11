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
    },
    createNewUserId: function(min, max) {
        return {
            type: "CREATE_USER_ID",
            id: Math.floor(Math.random() * (max - min)) + min
        }
    }
}

export default actions
//dispatch(addTodo('some text'))
