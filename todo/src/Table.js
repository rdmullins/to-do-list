import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Table(props) {

    let pending = props.ToDo.filter(item => item.isActive).map(item => 
        <tr>
            <td>
                <div className="form-check">
                    <input 
                        class="form-check-input" 
                        type="checkbox" 
                        value="" 
                    />
                </div>
            </td>
            <td>{item.text}</td>
            <td>
                <button type="button" className="btn btn-outline-danger">X</button>
            </td>
        </tr>);
    let completed = props.ToDo.filter(item => !(item.isActive)).map(item =>         
    <tr>
        <td>
            <div className="form-check">
                <input 
                    class="form-check-input" 
                    type="checkbox" 
                    value="" 
                    checked
                />
            </div>
        </td>
        <td><span className="text-decoration-line-through">{item.text}</span></td>
        <td>
            <button type="button" className="btn btn-outline-danger">X</button>
        </td>
        </tr>);

    return (
        <table className = "table table-bordered">
            {(props.view === "Pending") && pending}
            {(props.view === "Completed") && completed}
            {(props.view === "All") && pending.concat(completed)}
        </table>
    );
};

export default Table;