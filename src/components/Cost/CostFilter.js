import './CostFilter.css'

function CostFilter(props) {

    function selectHandler(event) {
        props.onChangeSelection(event.target.value);
    }


    return (
        <div className={'cost_filter'}>
            Select year
            <select className={'cost_filter__select'} onChange={selectHandler} value={props.year}>
                <option className={'cost_filter__option'}>2021</option>
                <option className={'cost_filter__option'}>2022</option>
                <option className={'cost_filter__option'}>2023</option>
            </select>
        </div>
    );
}

export default CostFilter;