function Footer (props) {

    function handleRadioChange(viewChange) {
        props.setView(viewChange);
    }

    function handleClick(button) {
        console.log("You clicked the ", button, " button. That's gonna do something. Later.");
    }

    return (
        <div className="bg-dark text-light fixed-bottom p-4">
            <div className="row">
                <div className="col-6">

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
                            Pending
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
                            Completed
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
                            All
                        </label>
                    </div>

                </div>
                <div className="col-6">
                    <button type="button" className="btn-lg btn-danger" onClick={() => handleClick("Clear")}>Clear (Remove) Completed</button><br></br>
                    <button type="button" className="btn-lg btn-light" onClick={() => handleClick("Reset")}>Reset (Uncheck) Completed</button>
                </div>
            </div>
        </div>
    )

};

export default Footer;