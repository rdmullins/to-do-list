// Imports go Here
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import InputArea from "./InputArea";

function App() {
    return (
        <div className="container">
            <Header />
            <InputArea />
        </div>
    )
};

export default App;