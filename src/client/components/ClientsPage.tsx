import React from "react";

interface Props {
    // Define the props interface here
}

export default function ClientsPage(props: Props) {
    function HandlerHome() {
        fetch("/", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        console.log("home");
    }
    console.log("home");
    return (
        <>
            <h1>Clients</h1>
            <p>This is the clients page</p>
            <button onClick={() => {HandlerHome()}}>Home</button>
        </>
    );
}