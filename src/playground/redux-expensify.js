import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//Expenses


//Filters






// Get visible expenses


//Filter reducers




//Store creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
)

store.subscribe(() =>{
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

//Actions on expenses
const e1 = store.dispatch(addExpense({description: 'Rent', amount: 1000, createdAt: -2100}));
const e2 = store.dispatch(addExpense({description: 'Cofee', amount: 500, createdAt: -1000}));
// store.dispatch(removeExpense({ id: e2.expense.id}));
// store.dispatch(editExpense(e1.expense.id, { amount: 5000 }));

//Actions on filters
//store.dispatch(setTextFilter('cofee'));
store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1001));



// const demoState = {
//     expenses: [{
//         id: 'poasidf',
//         description:'January Rent',
//         note: 'This was the final paument for that address',
//         amount: 54500,
//         createdAt: 0
//     }],
//     filters: {
//         text: 'rent',
//         sortBy: 'amount',
//         startDate: undefined,
//         endDate: undefined
//     }
// }
