function Footer (props) {

    function handleRadioChange(viewChange) {
        props.setView(viewChange);
    }

    return (
        <div className="bg-dark text-light fixed-bottom p-4">
            <div className="row">
                <div className="col-4">

                    <div class="form-check">
                        <input 
                            class="form-check-input" 
                            type="radio" 
                            name="flexRadioDefault" 
                            id="pending" checked
                        />
                        <label 
                            class="form-check-label" 
                            for="pending"
                        >
                            Pending
                        </label>
                    </div>

                    <div class="form-check">
                        <input 
                            class="form-check-input" 
                            type="radio" 
                            name="flexRadioDefault" 
                            id="completed"
                        />
                        <label 
                            class="form-check-label" 
                            for="completed"
                        >
                            Completed
                        </label>
                    </div>  

                    <div class="form-check">
                        <input 
                            class="form-check-input" 
                            type="radio" 
                            name="flexRadioDefault" 
                            id="all"
                        />
                        <label 
                            class="form-check-label" 
                            for="all"
                        >
                            All
                        </label>
                    </div>

                </div>
            </div>
        </div>
    )

};

export default Footer;