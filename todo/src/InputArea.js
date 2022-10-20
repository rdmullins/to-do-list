import { useState } from "react";

function InputArea(props) {

    const [ newItem, setNewItem ] = useState('');

    function addItem(value) {
        //console.log("Item entered is: ", value);
        //console.log("ToDo (coming in to the InputArea.addItem function: ", props.ToDo);
        console.log("Value of ToDo PRIOR to setter function: ", props.ToDo);
        console.log("Using setter function to add ", value);
        props.setToDo([
            ...props.ToDo, { 
                text: value,
                isActive: true,
                display: true,
                created: Date.now(),
                updated: null,
                id: Date.now() }
        ]);
        console.log("Value of state ToDo AFTER setter function: ", props.ToDo);
        console.log("Adding updated ToDo to localStorage.");
        localStorage.setItem("ToDo", JSON.stringify(props.ToDo));
    };

    return (
        <div className="row">
            <div className="input-group mb-3">
                <input 
                    type="text" 
                    className="form-control"
                    placeholder="Enter a New To-Do Item Here"  
                    onInput={(event) => setNewItem(event.target.value)}
                    value={newItem}
                >    
                </input>
                <button 
                    className="btn btn-outline-secondary"
                    type="button"
                    id="btnAddNewItem"
                    onClick={() => {
                        addItem(newItem);
                        setNewItem('')
                    }}>Add Item</button>
            </div>     
        </div>
    )
};

export default InputArea;