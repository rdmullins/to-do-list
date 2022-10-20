import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Table(props) {

    function HandleCheck(id) {
        let intID = parseInt(id.target.value);
        let tempToDo = [...props.ToDo];
        let hold = props.ToDo.findIndex(item => (item.id===intID));

        if (id.target.checked) {
            tempToDo[hold].isActive = false;
        } else {
            tempToDo[hold].isActive = true;
       };

       props.setToDo(tempToDo);
       localStorage.setItem("ToDo", JSON.stringify(props.ToDo));
       //props.setView("Pending");
    }

    function HandleDelete(id) {
        let intID = parseInt(id.target.value);
        let tempToDo = [...props.ToDo];
        let hold = props.ToDo.findIndex(item => (item.id===intID));

        tempToDo[hold].display = false;

        props.setToDo(tempToDo);
        localStorage.setItem("ToDo", JSON.stringify(props.ToDo));
        //props.setView("Pending");
    }


    let pending = props.ToDo.filter(item => item.isActive && item.display).map(item => 
        <tr key={item.id}>
            <td className="col-1">
                <div className="form-check">
                    <input 
                        className="form-check-input" 
                        type="checkbox" 
                        value={item.id} 
                        onClick={HandleCheck}
                    />
                </div>
            </td>
            <td><span className="fw-bold">{item.text}</span></td>
            <td className="text-end col-1">
                <button 
                    type="button" 
                    className="btn btn-outline-danger"
                    value={item.id}
                    onClick={HandleDelete}
                >X</button>
            </td>
        </tr>);

    let completed = props.ToDo.filter(item => (!item.isActive && item.display)).map(item =>         
    <tr key={item.id}>
        <td className="col-1">
            <div className="form-check">
                <input 
                    className="form-check-input" 
                    type="checkbox" 
                    value={item.id}
                    onClick={HandleCheck} 
                    defaultChecked
                />
            </div>
        </td>
        <td><span className="text-decoration-line-through fst-italic">{item.text}</span></td>
        <td className="text-end col-1">
            <button 
                    type="button" 
                    className="btn btn-outline-danger"
                    value={item.id}
                    onClick={HandleDelete}
                >X</button>
        </td>
        </tr>);

    return (
        <table className = "table table-hover table-striped">
            <tbody>
                {(props.view === "Pending") && pending}
                {(props.view === "Completed") && completed}
                {(props.view === "All") && pending.concat(completed)}
            </tbody>
        </table>
    );
};

export default Table;