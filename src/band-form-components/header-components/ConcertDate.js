import * as PropTypes from "prop-types";

export function ConcertDate({date}) {

    function formatDate(timestamp) {
        const date = new Date(timestamp);
        const options = { weekday: 'long', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }

    return <p className="date">{formatDate(date)}</p>;
}

ConcertDate.propTypes = {date: PropTypes.number};