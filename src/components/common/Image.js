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
  container,
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
    <div
      css={image({ center, container, width, height })}
      className="image"
      {...props}
    >
      <NextImage
        src={src}
        width={!container && width}
        height={!container && height}
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

const image = ({ center, container, width, height }) => css`
  ${center &&
  css`
    margin: 0 auto;
  `}

  ${container &&
  css`
    ${width &&
    css`
      width: ${width}px;
    `}

    ${height &&
    css`
      height: ${height}px;
    `}
  `}
`;

export default Image;
