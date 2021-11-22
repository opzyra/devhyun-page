import PropTypes from "prop-types";
import { css } from "@emotion/react";

import NextImage from "next/image";

Image.propTypes = {};

function Image({ src, alt, center }) {
  return (
    <div css={imageStyle({ center })} className="image">
      <NextImage src={src} alt={alt} layout="fill" />
    </div>
  );
}

const imageStyle = ({ center }) => css`
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
