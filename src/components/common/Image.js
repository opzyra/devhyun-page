import PropTypes from "prop-types";
import { css } from "@emotion/react";

import NextImage from "next/image";

Image.propTypes = {
  src: PropTypes.object.isRequired,
  alt: PropTypes.string,
  center: PropTypes.bool,
};

function Image({
  center,
  src,
  width,
  height,
  layout,
  loader,
  quality,
  priority,
  loading,
  lazyBoundary,
  placeholder,
  blurDataURL,
  unoptimized,
  objectFit,
  objectPosition,
  onLoadingComplete,
  ...props
}) {
  return (
    <div css={image({ center })} className="image" {...props}>
      <NextImage
        src={src}
        width={width}
        height={height}
        layout={layout}
        loader={loader}
        quality={quality}
        priority={priority}
        loading={loading}
        lazyBoundary={lazyBoundary}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        unoptimized={unoptimized}
        objectFit={objectFit}
        objectPosition={objectPosition}
        onLoadingComplete={onLoadingComplete}
      />
    </div>
  );
}

const image = ({ center }) => css`
  ${center &&
  css`
    margin: 0 auto;
  `}
`;

export default Image;
