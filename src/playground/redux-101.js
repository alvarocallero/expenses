import { createStore } from 'redux'

// Store<State, Action> -> State

//Action generators - functions that return action objects
const incrementCount = ({ incrementBy = 1 }  = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 }  = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const resetCount = () => ({
    type: 'RESET'
});

const setCount = ({ count }  = {}) => ({
    type: 'SET',
    count
})

const store = createStore((state = { count:0 }, action) => {  
    switch (action.type) {
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1 
            return {
                count: state.count + incrementBy
            }
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1 
            return {
                count: state.count - decrementBy
            }
        case 'RESET':
            return {
                count: 0
            }
        case 'SET':
            return {
                count: action.count
            }
        default:
            return state;
    }
});

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount());
store.dispatch(incrementCount());


store.dispatch(decrementCount({decrementBy:10}));



store.dispatch(resetCount());
store.dispatch(setCount({count:22}));
store.dispatch(setCount({count:24}));
