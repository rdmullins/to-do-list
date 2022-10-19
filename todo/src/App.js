// Imports go Here
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import InputArea from "./InputArea";
import Footer from "./Footer";

function App() {

    const [view, setView] = useState("Pending"); // Pending (default), Completed or All

    // Check local storage; if found, READ, if not, CREATE
    if (localStorage.length == 0) {
        localStorage.setItem("ToDo", []);
    };

    const [ToDo, setToDo] = useState(localStorage.getItem("ToDo"));

    return (
        <div className="container">
            <Header />
            <InputArea />
            <Footer />
        </div>
    )
};

export default App;