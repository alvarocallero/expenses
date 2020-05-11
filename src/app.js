import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss'
import 'normalize.css/normalize.css';
import configureStore from './store/configureStore';
import AppRouter, {history} from './routers/AppRouter';
import {addExpense} from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';
import { Provider } from 'react-redux';
import 'react-dates/lib/css/_datepicker.css';
import {firebase} from './firebase/firebase';
import {login, logout} from './actions/auth';


const store = configureStore();
store.dispatch(addExpense({description: 'Water bill', amount: 4500}));
store.dispatch(addExpense({description: 'Gas bill', createdAt: 1000}));
store.dispatch(addExpense({description: 'Rent', amount: 109500}));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid));
        if (history.location.pathname === '/') {
            history.push('/dashboard')    
        }
    } else {
        store.dispatch(logout())
        history.push('/')
    }
})