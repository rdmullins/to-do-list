// Imports go Here
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import InputArea from "./InputArea";
import Footer from "./Footer";
import View from "./View";

function App() {

    const [view, setView] = useState("Pending"); // Pending (default), Completed or All

    const ToDoList = [
        {
        text: "",
        isActive: false,
        created: "",
        updated: "",
        id: 0
    }];

    console.log(ToDoList);

    // Check local storage; if found, READ, if not, CREATE
    if (localStorage.length === 0) {
        localStorage.setItem("ToDo", []);
    };

    const [ToDo, setToDo] = useState(localStorage.getItem("ToDo"));

    console.log("ToDo is: ", ToDo);

    return (
        <div className="container">
            <Header />
            <InputArea ToDo={ToDo} setToDo={setToDo} />
            <View view={view} />
            <Footer view={view} setView={setView} />
        </div>
    )
};

export default App;