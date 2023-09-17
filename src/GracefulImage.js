import * as PropTypes from "prop-types";

export function GracefulImage({src, alt, width, height}) {
    const handleError = (e) => {
        e.target.onerror = null;
        e.target.src = '';
        e.target.style.backgroundColor = '#f0f0f0';
    }

    return (
        <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            onError={handleError}
            style={{ display: 'block', width, height, lineHeight}}
        />
    )
}

GracefullImage.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string
}
