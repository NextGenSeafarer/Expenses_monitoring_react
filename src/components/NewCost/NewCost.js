import './NewCost.css';
import NewCostForm from "./NewCostForm";
import AddCost from "./AddCost/AddCost";
import {useState} from "react";

function NewCost(props) {
    function saveCostDataHandler(inputCostData) {
        props.onCostAdd(inputCostData);
    }

    const [isFormVisible, setFormVisible] = useState(true);

    function formVisibilityHandler() {
        setFormVisible(false);
    }

    function cancelFormSubmitHandler() {
        setFormVisible(true)
    }

    return (
        <div className={'new__cost'}>
            {isFormVisible && <AddCost onFormVisibility={formVisibilityHandler}/>}
            {!isFormVisible && <NewCostForm onSaveCostData={saveCostDataHandler}
                                            onCancelSubmitForm={cancelFormSubmitHandler}/>}
        </div>
    );
}

export default NewCost;