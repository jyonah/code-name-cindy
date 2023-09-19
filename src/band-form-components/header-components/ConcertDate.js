import * as PropTypes from "prop-types";

export function ConcertDate({date}) {

    function formatDate(timestamp) {
        const date = new Date(timestamp);
        const options = { weekday: 'long', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }

    return <p className="date">{formatDate(date)}</p>;
}

// I elected to save time by not implementing icons for date & location, but my likely implementation
// would involve a font-awesome subset: https://blog.fontawesome.com/introducing-subsetting-in-fa-kits/

ConcertDate.propTypes = {date: PropTypes.number};