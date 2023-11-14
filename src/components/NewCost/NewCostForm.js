import './NewCostForm.css';
import {useState} from "react";

function NewCostForm(props) {

    const [inputName, setInputName] = useState('');
    const [inputAmount, setInputAmount] = useState('');
    const [inputDate, setInputDate] = useState('');

    function nameChangeHandler(event) {
        setInputName(event.target.value);
    }

    function amountChangeHandler(event) {
        setInputAmount(event.target.value);
    }

    function dateChangeHandler(event) {
        setInputDate(event.target.value);
    }

    function submitHandler(event) {
        event.preventDefault();
        const costData = {
            id: Math.random() * 10,
            name: inputName,
            amount: inputAmount,
            date: new Date(inputDate)
        };
        props.onSaveCostData(costData);
        setInputName('');
        setInputAmount('');
        setInputDate('');
        props.onCancelSubmitForm();
    }


    return (
        <form className={'cost_form cost-item'} onSubmit={submitHandler}>
            <div className={'form_row'}>
                <label className={'form_row__label'}>Name</label>
                <input className={'form_row__input'} type={'text'} maxLength={30} minLength={1}
                       placeholder={'What did you buy'}
                       onChange={nameChangeHandler} value={inputName}/>
            </div>
            <div className={'form_row'}>
                <label className={'form_row__label'}>Price</label>
                <input className={'form_row__input'} type={'number'} min={0.01} step={0.01}
                       placeholder={'How much spend?'}
                       onChange={amountChangeHandler} value={inputAmount}/>
            </div>
            <div className={'form_row'}>
                <label className={'form_row__label'}>Date</label>
                <input className={'form_row__input'} type={'date'} min={'2018-01-01'} max={'2030-01-01'}
                       onChange={dateChangeHandler} value={inputDate}/>
            </div>
            <div className={'buttons_row'}>
                <button className={'button button__form button__before button__add'}>Add</button>
                <button type={'button'} onClick={props.onCancelSubmitForm}
                        className={'button button__form button__before button__cancel'}>Cancel
                </button>
            </div>
        </form>
    );
}

export default NewCostForm;