import { useState } from "react";

function InputArea(props) {

    const [ newItem, setNewItem ] = useState('');

    function addItem(value) {
        props.setToDo([
            ...props.ToDo, { 
                text: value,
                isActive: true,
                display: true,
                created: Date.now(),
                updated: null,
                id: Date.now() }
        ]);
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