import {ConcertInfo} from "./ConcertInfo";
import {TicketsForm} from "./TicketsForm";
import {GracefulImage} from "./GracefulImage";
import {ConcertHeading} from "./ConcertHeading";
import {ConcertDate} from "./ConcertDate";
import {ConcertLocation} from "./ConcertLocation";
import {ConcertBlurb} from "./ConcertBlurb";
import {ConcertHeader} from "./ConcertHeader";
import {TicketsPicker} from "./TicketsPicker";
import {TicketsTotal} from "./TicketsTotal";


function BandForm({ band }) {
  return (
      <div>
          <ConcertHeader>
              <ConcertHeading name={band.name}/>
              <ConcertDate date={band.date}/>
              <ConcertLocation location={band.location} />
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
              <TicketsTotal/>
              {/*<BuyerInfo/>*/}
              {/*<PaymentDetails/>*/}
              {/*<Button/> /!*  Get Ticekts  *!/*/}
          </TicketsForm>
      </div>
  )
}

export default BandForm;
