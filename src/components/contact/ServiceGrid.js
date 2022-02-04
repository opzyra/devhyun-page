import { css } from "@emotion/react";

import ServiceItem from "./ServiceItem";

function ServiceGrid({ services, register }) {
  return (
    <div css={serviceGrid}>
      {services.map((service, index) => (
        <ServiceItem
          css={serviceItem}
          service={service}
          key={index}
          register={register}
        />
      ))}
    </div>
  );
}

const serviceGrid = css`
  display: flex;
  margin: -8px;
`;

const serviceItem = css`
  width: 25%;
  margin: 8px;
`;

export default ServiceGrid;
