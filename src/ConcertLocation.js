import PropTypes from "prop-types";

export function ConcertLocation({location}) {
    return (
        <p className="location">
            {location}
        </p>
    )
}

ConcertLocation.propTypes = {
    location: PropTypes.string
};