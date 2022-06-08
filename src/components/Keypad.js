const Keypad = () => {
    
    const handleKeypadChange = () => console.log('Entering password...') 

    return (
        <input onChange={handleKeypadChange} type="password"></input>
    )
}

export default Keypad
