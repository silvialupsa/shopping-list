const Quantity = (props) => {
    const decrementCallBack = props.decrement
    const value = props.value
    const incrementCallBack = props.increment
    return (
        <div id="quantityContainer">
            <button onClick={decrementCallBack}>-</button>
            <p id="quantityValue">{value}</p>
            <button onClick={incrementCallBack}>+</button>
        </div>
    )

}

export default Quantity;