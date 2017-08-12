import React from "react";
import styled from "styled-components";
import TabletOrDesktop from "./../common/Responsive/TabletOrDesktop";
import Info from "./Info";
import Help from "./Help";

const Footer = styled.footer`
  padding-top: 2rem;

  background-color: #f3f3f3;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 48rem) {
    flex-direction: row;
    margin-top: 1.25rem;
    padding-bottom: 1rem;
  }

  @media only screen and (min-width: 62rem) {
    margin-top: 2rem;
    padding-bottom: 4rem;
  }
`;

const Button = styled.button`
  padding: 0;
  margin-right: 1.5rem;
  margin-bottom: 1rem;
  align-self: left;

  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: .75rem;
  line-height: 1rem;
  color: #999;

  border-style: none;
  background-color: transparent;
`;

export default () => {
  return (
    <Footer>
      <TabletOrDesktop>
        <Info />
      </TabletOrDesktop>
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <ButtonsWrapper>
              <Button type="button">
                Shipping country: Russian Federation
              </Button>
              <Button type="button">Language: English</Button>
            </ButtonsWrapper>
          </div>
        </div>
      </div>
      <Help />
    </Footer>
  );
};
