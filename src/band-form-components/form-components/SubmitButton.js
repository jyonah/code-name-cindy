import {useBandFormContext} from "../BandFormContext";
import {useState} from "react";

export function SubmitButton() {
    const { formData } = useBandFormContext()
    const[error, setError] = useState("")

    function validTicketCount(){
        let ticketsTotal = 0

        for (let ticketType in formData.tickets) {
            if (formData.tickets.hasOwnProperty(ticketType)) {
                ticketsTotal += formData.tickets[ticketType].count
            }
        }

        return ticketsTotal > 0
    }

    function handleSubmit() {
        if(validTicketCount()) {
            console.log("Submitting form data", formData)
        } else {
            console.error("User submitted without selecting tickets")
            setError("Buying zero tickets does nothing for anybody 😜")
        }
    }

    return(
        <div className='submit-container'>
            <div className='error-message'>{error}</div>
            <button onClick={handleSubmit}>Get Tickets</button>
        </div>
    )
}