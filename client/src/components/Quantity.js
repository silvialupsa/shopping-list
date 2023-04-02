const units = ["ounce", "pound", "gram", "kilogram", "liter", "milliliter", "gallon", "quart", "pint", "cup", "tablespoon", "teaspoon", "count"]
const Quantity = (props) => {
    const decrementCallBack = props.decrement
    const value = props.value
    const incrementCallBack = props.increment
    const handleSelectChange = props.handleSelectChange
    return (
        <div id="quantityContainer">
            <button onClick={decrementCallBack}>-</button>
            <p id="quantityValue">{value}</p>
            <button onClick={incrementCallBack}>+</button>
            <select id="unit-select" onChange={handleSelectChange} >
                {units.map((unit) => (
                    <option key={unit} value={unit}>{unit}</option>
                ))}
            </select>
        </div>
    )

}

export default Quantity;