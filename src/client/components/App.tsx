import React, { useState, useEffect } from "react";

interface AppProps {
    // Define the props for the component here
}

export default function App(props: AppProps) {

    
    //change page to client
    function CustomersClickHandler() {
        fetch("/clients", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
    }

    return (
        <>
            <h1>Hello World</h1>
            <p>This is the app</p>
            <button
                onClick={() => {
                    CustomersClickHandler();
                }}
            >
                Customer
            </button>
        </>
    );
}
