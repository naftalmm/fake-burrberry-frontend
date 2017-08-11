import React from "react";
import styled from "styled-components";
import AccordeonPane from "./AccordeonPane";
import Description from "./../Product/Description";
import Delivery from "./../Delivery/";
export default () => {
  const LastAccordeonPane = styled(AccordeonPane)`
    border-bottom: solid 1px #c6c6c6;
  `;

  return (
    <section>
      <AccordeonPane
        headerName="DESCRIPTION"
        headerIsHiddenOnTablet={false}
        isOpened={true}
        children={<Description />}
      />
      <LastAccordeonPane
        headerName="DELIVERY"
        headerIsHiddenOnTablet={true}
        isOpened={false}
        children={<Delivery />}
      />
    </section>
  );
};
