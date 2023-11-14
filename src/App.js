import Costs from "./components/Cost/Costs";
import NewCost from "./components/NewCost/NewCost";
import {useState} from "react";

const INITIAL_COSTS = [
    {
        id: 1,
        date: new Date(2023, 10, 6),
        name: 'Marshall Speaker',
        amount: 269.99
    },
    {
        id: 2,
        date: new Date(2023, 10, 3),
        name: 'MacBook Pro 16 M1 pro 512 Gb',
        amount: 1999
    },
    {
        id: 3,
        date: new Date(2023, 10, 7),
        name: 'iPhone 14 Pro Max 256 Gb',
        amount: 1299
    }
];

function App() {
    const [costs, setCosts] = useState(INITIAL_COSTS);

    const deleteItemHandler = (id) => {
        setCosts(costs.filter(x => x.id !== id))
    }

    function costAddHandler(cost) {
        setCosts(prevCosts => {
            return [cost, ...prevCosts];
        });
    }

    return (
        <div>
            <NewCost onCostAdd={costAddHandler}/>
            <Costs costs={costs} onDeleteItem={deleteItemHandler}/>
        </div>
    );
}

export default App;
