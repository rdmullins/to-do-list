import { useState } from "react";

function InputArea(props) {

    const [ newItem, setNewItem ] = useState('');

    function addItem(value) {

        if (value.length === 0) {
            //alert("Tasks cannot be blank.");
            return;
        };

        let newTodos = [
            ...props.ToDo, { 
                text: value,
                isActive: true,
                display: true,
                created: Date.now(),
                updated: null,
                id: Date.now() }
        ]
        props.setToDo(newTodos);
        localStorage.setItem("ToDo", JSON.stringify(newTodos));
        props.setView("Pending");
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