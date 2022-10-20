// Imports go Here
import React, { useState, useEffect } from "react";
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
            text: "",
            isActive: false,
            created: "",
            updated: "",
            id: 0
        }
        ]));
    };

    // READ ToDo array from localStorage
    const [ToDo, setToDo] = useState(JSON.parse(localStorage.getItem(("ToDo"))));

    //console.log("ToDo is: ", ToDo);

    return (
        <div className="container">
            <Header />
            <InputArea ToDo={ToDo} setToDo={setToDo} />
            <View view={view} ToDo={ToDo} />
            <Footer view={view} setView={setView} />
        </div>
    )
};

export default App;