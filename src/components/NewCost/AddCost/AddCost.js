import './AddCost.css';

function AddCost(props) {

    function showFormHandler() {
        props.onFormVisibility();
    }

    return (<div className={'add_cost cost-item'}>
        <div className={'add_cost__text'}>Any new expenses?</div>
        <button onClick={showFormHandler} className={'add_cost__button button button__add button__before'}>Add</button>
    </div>)
}

export default AddCost;