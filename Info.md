
#React
###Components
```
class TodoInput extends Component {
    constructor(props, context) {
        super(props, context)
        this.onSubmit = this.onSubmit.bind(this)
    }

    shouldComponentUpdate() {
        // component has no props or state change so it is safe to just return `false`
        return true
    }

    onSubmit(event) {
        event.preventDefault()
        dosomething...
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="Type something..."
                        ref="todoInput"
                    />
                    <input type="submit" value="SEND" />
                </form>
            </div>
        )
    }
}

TodoInput.propTypes = {
    addTodo: React.PropTypes.func
}
export default TodoInput
```

###Static Components
```
// Stateless Functional Components
const App = (props) => {
    return (
        <div>
            <h1>Todo List</h1>
            <UserInfo actions={props.actions} user={props.user} />
            <br />
            <TodoInput addTodo={props.actions.addTodo} />
            <TodoList actions={props.actions} todos={props.todos} />
        </div>
    )
}
```
- [Stateless Functions](http://facebook.github.io/react/docs/reusable-components.html#stateless-functions)
- [Stateless React components](https://toddmotto.com/stateless-react-components/)
- [9 things every React.js beginner should know](https://camjackson.net/post/9-things-every-reactjs-beginner-should-know)

#Redux
Acionts > stores > reducers

###3 Principles
- Immutable Store
- Actions trigger changes
- Reducers return updated state

###Action Creators
- Represent user intent
- Must have a type
```
addTodo: function addTodo(text) {
    return {
        type: ADD_TODO,
        text
    }
},
```
[actions](https://github.com/CityRay/React15-Todo-List/blob/master/redux/actions/index.js)

###Creating Redux Store
One Store. Multiple Reducers.
- dispatch
- subscribe
```
import { createStore } from 'redux'
```
[store](https://github.com/CityRay/React15-Todo-List/blob/master/redux/store.js)

### Immutability
To Change state, return a new object
```
Object.assign({}, state, {role: 'amdin'})
```
[Reducer](https://github.com/CityRay/React15-Todo-List/blob/master/redux/reducers/todoReducer.js#L24)

### Connected Redux Store
- mapStateToProps: What state should I expose as props
- mapDispatchToProps: What actions do I want on props
```
function mapStateToProps(state) {
    return state
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
```
[connect](https://github.com/CityRay/React15-Todo-List/blob/master/components/App.js#L45)
