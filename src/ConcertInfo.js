import * as PropTypes from "prop-types";
import {GracefulImage} from "./GracefulImage";


export function ConcertInfo(concertInfo) {

    return(
        <div>
            <h1>{concertInfo.name}</h1>
            <ul>
                <li>
                    <p className="date">{formatDate(concertInfo.date)}</p>
                </li>
                <li>
                    <p className="location">{concertInfo.location}</p>
                </li>
            </ul>
            <GracefulImage
                src="{band.imageUrl}"
                alt={`${band.name} members posed in a group shot, each standing two feet from each other at a two thirds angle, glowering at the camera, arms crossed.`}
                //An example of alt text, though in an ideal environment, I would advocate for alt text being kept as a property associated with the image.
                height="600"
                width="600"
            />
            <div className="band-image" dangerouslySetInnerHTML={band.decription_blurb}/>
        </div>
    )
}

ConcertInfo.propTypes = {band: PropTypes.any};
