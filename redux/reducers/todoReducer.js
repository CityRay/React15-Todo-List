function getId(todos) {
    return todos.reduce((maxId, todo) => {
        return Math.max(todo.id, maxId)
    }, -1) + 1
}

// reducers 的功能就是針對這個唯一的 Store 內的 State 的部分內容進行更新
// Reducer 接收舊 state 與 action 並回傳一個新的 state
let todoReducer = function(todos = [], action) {
    switch (action.type) {
        case 'ADD_TODO':
            console.log(todos)
            return [{
                    text: action.text,
                    completed: false,
                    id: getId(todos)
                }, ...todos]

        case 'COMPLETE_TODO':
            return todos.map((todo) => {
                    return todo.id === action.id ?
                        Object.assign({}, todo, {completed: !todo.completed}) : todo
                })

        case 'DEL_TODO':
            return todos.filter((todo) => {
                    return todo.id !== action.id
                })
        default:
            return todos;
    }
}

export default todoReducer
