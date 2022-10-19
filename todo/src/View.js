import Table from "./Table";

function View(props) {
    return (
        <>
        <div className="row">
            <div className="col text-center">
                {(props.view === "Pending") && <h1>Pending</h1>}
                {(props.view === "Completed") && <h1>Completed</h1>}
                {(props.view === "All") && <h1>All</h1>}
            </div>
        </div>
        <div className="row">
            <Table view={props.view} />
        </div>
        </>
    )
};

export default View;