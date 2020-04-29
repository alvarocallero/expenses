import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses'

export const ExpenseList = (props) => (
    <div>
        {
            props.expenses.length === 0 ? (
                <p>No expenses</p>
            ) : (
                props.expenses.map((expense) => {
                    return < ExpenseListItem key={expense.id} {...expense}/>
                })
            )
        }
    </div>
);
 
const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};
//connect(things to grab from the store, component to pass the data grabbed from the store)
export default connect (mapStateToProps)(ExpenseList);

