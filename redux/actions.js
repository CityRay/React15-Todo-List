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
    createNewUserId: function(min = 1, max = 100) {
        // do some async server call
        // onSuccess: dispatch({ type:... })
        return {
            type: "CREATE_USER_ID",
            id: Math.floor(Math.random() * (max - min)) + min
        }
    },
    createNewUserIdIfOdd: function() {
        return (dispatch, getState) => {
            const { user } = getState()

            if (user.memberId % 2 === 0){
                return
            }
            dispatch(actions.createNewUserId())
        }
    },
    createNewUserIdAsync: function() {
        return (dispatch) => {
            // something can do example below
            // $.get('url', {
            //     success: (res) => {
            //         dispatch(actions.createNewUserId())
            //     }
            // })

            setTimeout(() => {
                dispatch(actions.createNewUserId())
            }, 2000)
        }
    }
}

export default actions
//dispatch(addTodo('some text'))
