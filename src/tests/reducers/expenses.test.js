import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';


test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };

    const state = expensesReducer(expenses,action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-2'
    };

    const state = expensesReducer(expenses,action);
    expect(state).toEqual([expenses[0], expenses[1], expenses[2]]);
});

test('should add new expense', () => {
    const myExpense = {
        id: '109',
        description: 'my new description',
        note: 'my new note',
        amount: 1234,
        createdAt: moment(1)
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense: myExpense
    };

    const state = expensesReducer(expenses,action);
    expect(state).toEqual([...expenses, myExpense]);
});

test('should edit an expense', () => {
    const amount = 122000;
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            amount
        }
    }
 
    const state = expensesReducer(expenses, action);
    expect(state[1].amount).toBe(amount);
});

test('should not edit an expense if id not found', () => {
    const amount = 122000;
    const action = {
        type: 'EDIT_EXPENSE',
        id: '234324',
        updates: {
            amount
        }
    }
 
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});



