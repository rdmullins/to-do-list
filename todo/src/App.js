// Imports go Here
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import InputArea from "./InputArea";
import Footer from "./Footer";
import View from "./View";

function App() {

    const [view, setView] = useState("Pending"); // Pending (default), Completed or All

    // Check local storage; if not found, CREATE
    if (localStorage.length === 0) {
        localStorage.setItem("ToDo", JSON.stringify([
            {
            text: "Initialize Local Storage",
            isActive: false,
            display: true,
            created: Date.now(),
            updated: "",
            id: Date.now()
        }
        ]));
    };

    // READ ToDo array from localStorage
    const [ToDo, setToDo] = useState(JSON.parse(localStorage.getItem(("ToDo"))));

    //console.log("ToDo is: ", ToDo);

    return (
        <div className="container">
            <Header />
            <InputArea ToDo={ToDo} setToDo={setToDo} view={view} setView={setView} />
            <View view={view} setView={setView} ToDo={ToDo} setToDo={setToDo} />
            <Footer view={view} setView={setView} ToDo={ToDo} setToDo={setToDo} />
        </div>
    )
};

export default App;