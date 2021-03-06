import { css } from "@emotion/react";
import { media } from "@/styles";

function CheckItem({ check, ...props }) {
  const IconCheck = check.icon;

  return (
    <div css={checkItem} {...props}>
      <div className="icon">
        <IconCheck />
      </div>
      <div className="contents">
        <h6>{check.title}</h6>
        <p dangerouslySetInnerHTML={{ __html: check.description }}></p>
      </div>
    </div>
  );
}

const checkItem = css`
  display: flex;
  align-items: center;

  .icon {
    margin-right: 20px;

    svg {
      width: 40px;
    }
  }

  .contents {
    h6 {
      margin-bottom: 2px;
    }

    p {
      font-size: 14px;
    }
  }

  ${media.MD(css`
    .contents {
      br {
        display: none;
      }

      p {
        font-size: 13px;
      }
    }
  `)};
`;

export default CheckItem;
