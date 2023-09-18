import PropTypes from "prop-types";

export function ConcertHeading({name}) {
    return <h1>{name}</h1>;
}

ConcertHeading.propTypes = {
    name: PropTypes.string
};