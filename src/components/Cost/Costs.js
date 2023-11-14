import './Costs.css';
import CostItem from "./CostItem";
import CostFilter from "./CostFilter";
import {useState} from "react";


function Costs(props) {

    const [selectedYear, setSelectedYear] = useState('2023');

    function changeSelectHandler(year) {
        setSelectedYear(year);
    }

    const filteredCost = () => {
        return props.costs.filter(element => element.date.getFullYear().toString() === selectedYear)
            .map(cost => <CostItem key={cost.id}
                                   id = {cost.id}
                                   date={cost.date}
                                   name={cost.name}
                                   amount={cost.amount}
                                   onDeleteItem={props.onDeleteItem}/>)
    }


    return (
        <div>
            <CostFilter year={selectedYear} onChangeSelection={changeSelectHandler}/>
            <div className={'costs'}>
                {
                    filteredCost().length === 0 ? <p>No Data for the {selectedYear}</p> : ''
                }
                {
                    filteredCost()
                }
            </div>
        </div>
    )
}

export default Costs;