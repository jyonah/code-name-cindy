import * as PropTypes from "prop-types";

export function ConcertBlurb({blurb}) {
    const htmlBlurb = {
        __html: blurb
    }
    {/*  I was unsure what to make of the blurbs having their own
                 HTML tags in them. I chose to proceed like this for the
                 sake of proceeding with the exercise, but would question
                 and further investigate this in a typical situation. */}
    return (
        <div>
            <div
                className='concert-blurb'
                dangerouslySetInnerHTML={htmlBlurb}
            />
        </div>
    )

}

ConcertBlurb.propTypes = {
    blurb: PropTypes.any
};