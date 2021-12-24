import PropTypes from "prop-types";
import { css } from "@emotion/react";

import NextImage from "next/image";

Image.propTypes = {
  src: PropTypes.object.isRequired,
  alt: PropTypes.string,
  center: PropTypes.bool,
};

function Image({ src, alt, center, ...props }) {
  return (
    <div css={image({ center })} className="image" {...props}>
      <NextImage src={src} alt={alt} layout="fill" />
    </div>
  );
}

const image = ({ center }) => css`
  ${center &&
  css`
    margin: 0 auto;
  `}

  & > div {
    position: unset !important;
  }

  img {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
  }
`;

export default Image;
