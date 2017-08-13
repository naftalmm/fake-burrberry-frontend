import React from "react";
import styled from "styled-components";
import AccordionPane from "./AccordionPane";
import Description from "../../Product/Description";
import Delivery from "../../Delivery/index";

const LastAccordionPane = styled(AccordionPane)`
    border-bottom: solid 1px #c6c6c6;
`;

export default () => {
  return (
    <section>
      <AccordionPane
        headerName="DESCRIPTION"
        isOpened={true}
        content={<Description />}
      />
      <LastAccordionPane
        headerName="DELIVERY"
        isOpened={false}
        content={<Delivery />}
      />
    </section>
  );
};
