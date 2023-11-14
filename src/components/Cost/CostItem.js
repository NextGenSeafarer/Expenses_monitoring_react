import './CostItem.css';
import {useState} from "react";
import Modal from "../UI/Modal";

function CostItem(props) {
    const [name, setName] = useState(props.name);
    const [price, setPrice] = useState(props.amount);
    const [disabled, setDisabled] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const changeNameHandler = (event) => {
        setName(event.target.value)
    }
    const changePriceHandler = (event) => {
        setPrice(event.target.value)
    }

    const changeItemHandler = (event) => {
        event.target.classList.toggle('button__add')
        setDisabled(!disabled);
    }
    const deleteItemHandler = () => {
        setShowModal(!showModal);
    }
    const deleteConfirmedHandler = () => {
        props.onDeleteItem(props.id);
    }

    const modalItem = {
        modalHeader: 'Delete ' + props.name + '?',
        modalText: 'You can\'t undo the action',
        modalFirstButton: 'Delete',
        modalSecondButton: 'Cancel',
    }

    return (
        <div className='cost-item'>
            {showModal &&
                <Modal {...modalItem} onModalActive={deleteItemHandler} onDeleteConfirmation={deleteConfirmedHandler}/>}
            {showModal ? document.body.classList.add('modal--active') : document.body.classList.remove('modal--active')}
            <div className={'cost-item__date'}>{props.date.toLocaleString().substring(0, 10)}</div>
            <div className='cost-item__description'>
                <input onChange={changeNameHandler} className={'cost-item__name'} value={name} type={'text'}
                       disabled={disabled}></input>
                <span className={'cost-item__currency'}>$<input onChange={changePriceHandler}
                                                                className={'cost-item__price'} value={price}
                                                                type={'number'}
                                                                step={0.01} disabled={disabled}></input></span>
                <button onClick={changeItemHandler}
                        className={'button button__before button-change'}>{disabled ? 'Change item' : 'Save changes'}
                </button>
                <button onClick={deleteItemHandler} className={'button button__before button-delete'}>Delete item
                </button>
            </div>
        </div>
    );
}

export default CostItem;