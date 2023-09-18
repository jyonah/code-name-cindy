import {useState} from "react";

export function TicketsTotal({totalCost}) {

    return (
        <div>
            <h2>TOTAL</h2>
            <h2>${totalCost}</h2>
        </div>
    );
}