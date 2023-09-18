import {ConcertInfo} from "./info-components/ConcertInfo";
import {TicketsForm} from "./form-components/TicketsForm";
import {GracefulImage} from "./info-components/GracefulImage";
import {ConcertHeading} from "./header-components/ConcertHeading";
import {ConcertDate} from "./header-components/ConcertDate";
import {ConcertLocation} from "./header-components/ConcertLocation";
import {ConcertBlurb} from "./info-components/ConcertBlurb";
import {ConcertHeader} from "./header-components/ConcertHeader";
import {TicketsPicker} from "./form-components/TicketsPicker";
import {TicketsTotal} from "./form-components/TicketsTotal";
import {BuyerInfo} from "./form-components/BuyerInfo";
import {PaymentDetails} from "./form-components/PaymentDetails";
import {SubmitButton} from "./form-components/SubmitButton";

import {BandFormContext} from "./BandFormContext";
import {useEffect, useState} from "react";

function BandForm({ band }) {
    const [ formData, setFormData ] = useState({
        tickets: {},
        buyer: {},
        card: {}
    })
    useEffect(() => {
        console.log("formData", JSON.stringify(formData));
    }, [formData]);

    function convertCostDataToUSD(cost) {return cost/100}
    function calculateTotalCost(){
        let totalCost = 0

        for (let ticketType in formData.tickets) {
            if (formData.tickets.hasOwnProperty(ticketType)) {
                totalCost += formData.tickets[ticketType].cost
            }
        }
        return convertCostDataToUSD(totalCost)
    }

    let totalCost = calculateTotalCost()

    return (
        <BandFormContext.Provider value={{ formData, setFormData }}>
            <div>
                <ConcertHeader>
                    <ConcertHeading name={band.name}/>
                    <ConcertDate date={band.date}/>
                    <ConcertLocation location={band.location}/>
                </ConcertHeader>
                <ConcertInfo >
                    <GracefulImage
                        src={`${band.imgUrl}`}
                        alt={`${band.name} members posed in a group shot, each standing two feet from each other at a two thirds angle, glowering at the camera, arms crossed.`}
                        // An example of alt text, though in an ideal environment,
                        // I would advocate for alt text being kept as a property
                        // associated with the image.
                        height="200"
                        width="300"
                    />
                    <ConcertBlurb blurb={band.description_blurb} />
                </ConcertInfo>
                <TicketsForm>
                    <TicketsPicker ticketTypes={band.ticketTypes}/>
                    <TicketsTotal totalCost={totalCost}/>
                    <BuyerInfo/>
                    <PaymentDetails/>
                    <SubmitButton/>
                </TicketsForm>
            </div>
        </BandFormContext.Provider>
)}





export default BandForm;
