import PropTypes from "prop-types";

export function ConcertLocation({location}) {
    return (
        <p className="location">
            {location}
        </p>
    )
}

// I elected to save time by not implementing icons for date & location, but my likely implementation
// would involve a font-awesome subset: https://blog.fontawesome.com/introducing-subsetting-in-fa-kits/

ConcertLocation.propTypes = {
    location: PropTypes.string
};