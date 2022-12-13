function Footer (props) {

    function handleRadioChange(viewChange) {
        props.setView(viewChange);
    }

    function handleClick(button) {
        let tempToDo = [...props.ToDo];
        tempToDo.forEach(item => {
            if (button==="Clear" && !item.isActive && item.display) {
                item.display = false;
            };
            if (button==="Reset" && !item.isActive && item.display) {
                item.isActive = true;
            };
            if (button==="Complete All" && item.isActive && item.display) {
                item.isActive = false;
            };
        });
        props.setToDo(tempToDo);
        localStorage.setItem("ToDo", JSON.stringify(props.ToDo));

    }

    return (
        <div className="bg-dark text-light sticky-bottom p-4">
            <div className="row">
                <div className="col-8">

                    <div className="form-check">
                        <input 
                            className="form-check-input" 
                            type="radio" 
                            name="flexRadioDefault" 
                            id="Pending" defaultChecked
                            onClick={() => {handleRadioChange("Pending")}}
                        />
                        <label 
                            className="form-check-label" 
                            htmlFor="Pending"
                        >
                            Pending (
                                {props.ToDo.filter(item => item.isActive && item.display).length}
                            )
                        </label>
                    </div>

                    <div className="form-check">
                        <input 
                            className="form-check-input" 
                            type="radio" 
                            name="flexRadioDefault" 
                            id="Completed"
                            onClick={() => {handleRadioChange("Completed")}}
                        />
                        <label 
                            className="form-check-label" 
                            htmlFor="Completed"
                        >
                            Completed (
                                {props.ToDo.filter(item => !item.isActive && item.display).length}
                            )
                        </label>
                    </div>  

                    <div className="form-check">
                        <input 
                            className="form-check-input" 
                            type="radio" 
                            name="flexRadioDefault" 
                            id="All"
                            onClick={() => {handleRadioChange("All")}}
                        />
                        <label 
                            className="form-check-label" 
                            htmlFor="All"
                        >
                            All (
                                {props.ToDo.filter(item => item.display).length}
                            )
                        </label>
                    </div>

                </div>
                <div className="col-4">
                    <button type="button" className="btn-lg btn-danger" onClick={() => handleClick("Clear")}>Clear (Remove) Completed</button><br></br>
                    <button type="button" className="btn-lg btn-light" onClick={() => handleClick("Reset")}>Reset (Uncheck) Completed</button><br></br>
                    <button type="button" className="btn-lg btn-light" onClick={() => handleClick("Complete All")}>Mark All Completed</button>
                </div>
            </div>
        </div>
    )

};

export default Footer;