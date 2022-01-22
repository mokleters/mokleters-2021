import React from "react";

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../../css/Organization.css';

import dataImages from '../../assets/organization';

import OrganizationData from '../../data/Organizations_data.json';
const data = JSON.parse(JSON.stringify(OrganizationData.Organization));

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const Carousel = () => (
  <AliceCarousel
    mouseTracking enabled
    items={data.map((item, i) => (
      <div class="cardd" data-value={i}>
        <div class="atas"></div>
        <div class="cardd-img">
          <img src={dataImages[item.image]} alt="/" />
        </div>
        <div class="cardd-body">
          <h3>
            {item.name}
          </h3>
          <p>
            {item.details}
          </p>
          <span type="button" data-bs-toggle="modal" data-bs-target={"#modal-" + i}>
            learn more
          </span>
        </div>
      </div>
    ))}
    responsive={responsive}
    controlsStrategy="alternate"
    autoPlay={true}
    autoPlayInterval={5000}
    infinite={true}
  />
);

export default class Organization extends React.Component {
  render() {
    return (
      <section id="organization">
        <div className="orga text-center pb-4">
          <h5>Check Out Our</h5>
          <div className="varsity-text text-red mb-5">ORGANIZATIONS</div>
        </div>
        <div class="containerr">
          <Carousel />
          <div class="backgroundd">
          </div>
        </div>
        {data.map((item, i) => (
            <div class="modal fade" id={"modal-"+i} tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-scrollable">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <img class="modal-logo" src={dataImages[item.image]} alt=""></img>
                    <h1>{item.name}</h1>
                    <div dangerouslySetInnerHTML={{__html:item.modal.details}}></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </section>
    );
  }
}