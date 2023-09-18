import * as PropTypes from "prop-types";

export function ConcertHeader({children}) {
    return (
        <div className='concert-header'>
            {children}
        </div>
    )
}

ConcertHeader.propTypes = {children: PropTypes.node};