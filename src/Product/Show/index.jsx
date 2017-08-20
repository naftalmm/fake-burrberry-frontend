import React from 'react';
import { Xs, MdLg, Lg } from '../../common/Responsive';
import SectionHeader from '../../common/SectionHeader';
import Card from './Card';
import Description from '../Description';
import Photo from './Photo';
import Delivery from '../../Delivery/';
import Accordion from '../Accordion/';
import Recommended from '../../Recommended/';
import RecommendedMore from '../../Recommended/RecommendedMore';
import Gallery from './Gallery';

const { PUBLIC_URL } = process.env;
export default () =>
  (<div>
    <Card
      backgroundColor="#d4bdad"
      title="Long Cotton Gabardine Car Coat"
      priceValue={100000}
      priceCurrency="RUB"
      vendorCode="39428531"
    />

    <Xs>
      <Accordion />
    </Xs>
    <MdLg>
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-4">
            <SectionHeader>DESCRIPTION</SectionHeader>
            <Description />
          </div>
          <Lg>
            <div className="col-lg-8">
              <Photo
                srcSet={`${PUBLIC_URL}/img/bitmap_5@2x.jpg 600w, ${PUBLIC_URL}/img/bitmap_5@3x.jpg 900w`}
                src={`${PUBLIC_URL}/img/bitmap_5.jpg`}
                alt="Product photo"
              />
            </div>
          </Lg>
        </div>
        <Lg>
          <Gallery />
        </Lg>
        <div className="row">
          <div className="col-md-12">
            <Delivery />
          </div>
        </div>
      </div>
    </MdLg>

    <Recommended />
    <Xs>
      <RecommendedMore />
    </Xs>
  </div>);
