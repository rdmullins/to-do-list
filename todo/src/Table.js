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
    let completed = props.ToDo.filter(item => !(item.isActive)).map(item => <tr><td>Checkbox Here</td><td>{item.text}</td><td>Delete Button Here</td></tr>);
    let all = props.ToDo.map(item => <tr><td>Checkbox Here</td><td>{item.text}</td><td>Delete Button Here</td></tr>)
    //let pending = pendingItems.map(item => <tr>{item.text}</tr>);
    //let completed = completedItems.map(item => <tr>{item.text}</tr>);

    //console.log("pendingItems = ", pendingItems);
    console.log("Pending = ", pending);
    //console.log("completedItems = ", completedItems);
    console.log("Completed = ", completed);
    console.log("Props.view = ", props.view);

    return (
        <table className = "table table-bordered">
            {(props.view === "Pending") && pending}
            {(props.view === "Completed") && completed}
            {(props.view === "All") && all}
        </table>
    );
};

export default Table;
// {(props.view === "Pending") && <h1>Pending</h1>}
// {(props.view === "Completed") && <h1>Completed</h1>}
// {(props.view === "All") && <h1>All</h1>}