function InputArea() {

    let newItem = "";

    function addItem(value) {
        console.log("Item entered is: ", value);
        
    }

    return (
        <div className="row">
            <div className="input-group mb-3">
                <input 
                    type="text" 
                    className="form-control"
                    placeholder="Enter a New To-Do Item Here"  
                    onInput={(event) => (newItem = event.target.value)}
                >    
                </input>
                <button 
                    className="btn btn-outline-secondary"
                    type="button"
                    id="btnAddNewItem"
                    onClick={() => addItem(newItem)}>Add Item</button>
            </div>     
        </div>
    )
};

export default InputArea;