const actions = {
    addTodo: function addTodo(text) {
        return {
            type: 'ADD_TODO',
            text
        }
    },
    completeTodo: function completeTodo(id) {
        return {
            type: 'COMPLETE_TODO',
            id
        }
    },
    delTodo: function delTodo(id) {
        return {
            type: 'DEL_TODO',
            id
        }
    },
    createNewUserId: function createNewUserId(min = 1, max = 100) {
        // do some async server call
        // onSuccess: dispatch({ type:... })
        return {
            type: 'CREATE_USER_ID',
            id: Math.floor(Math.random() * (max - min)) + min
        }
    },
    createNewUserIdIfOdd: function createNewUserIdIfOdd() {
        return (dispatch, getState) => {
            const { user } = getState()

            if (user.memberId % 2 === 0) {
                return
            }
            dispatch(actions.createNewUserId())
        }
    },
    createNewUserIdAsync: function createNewUserIdAsync() {
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
// dispatch(addTodo('some text'))
