const units = ["ounce", "pound", "gram", "kilogram", "liter", "milliliter", "gallon", "quart", "pint", "cup", "tablespoon", "teaspoon", "count"]
const Quantity = (props) => {
    const decrementCallBack = props.decrement
    const value = props.value
    const incrementCallBack = props.increment
    const handleSelectChange = props.handleSelectChange
    const onChangeCallback = props.onChangeCallback
    return (
        <div id="quantityContainer">
            <button className="itemFromQuantity" id="decrement" onClick={decrementCallBack}>-</button>
            <input className="itemFromQuantity" id="quantityValue" value={value} onChange={onChangeCallback} />
            <button className="itemFromQuantity" id="increment" onClick={incrementCallBack}>+</button>
            <select className="itemFromQuantity" id="unit-select" onChange={handleSelectChange} >
                {units.map((unit) => (
                    <option key={unit} value={unit}>{unit}</option>
                ))}
            </select>
        </div>
    )

}

export default Quantity;