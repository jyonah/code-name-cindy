import * as PropTypes from "prop-types";


export function ConcertInfo({ children }) {
    return(
        <div className='concert-info'>
            {children}
        </div>
    )
}

ConcertInfo.propTypes = { children: PropTypes.node};
