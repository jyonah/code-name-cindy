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
    // I included only one validation here, for the purposes of this exercise, but further validations & associated
    // error messages would include the form not being empty, address, CC, date, and CVV formatting being correct, as
    // well as any validations associated with payment - though I'm sure a lot of this would be handled out of the box
    // by the stripe implementations.

    return(
        <div className='submit-container'>
            <div className='error-message'>{error}</div>
            <button onClick={handleSubmit}>Get Tickets</button>
        </div>
    )
}