import {useState} from "react";

export function TicketsTotal({totalCost}) {

    return (
        <div className='flex-total'>
            <h2>TOTAL</h2>
            <h2 className='slight-bold'>${totalCost}</h2>
        </div>
    );
}