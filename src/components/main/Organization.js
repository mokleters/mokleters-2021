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
  <>
    <AliceCarousel
      mouseTracking
      responsive={responsive}
      controlsStrategy="responsive"
      autoPlay={true}
      autoPlayInterval={5000}
      infinite={true}
      items={data.map((item, i) => (
        <div class="card-cstm" data-value={i}>
          <div class="">
            <img class="mx-auto d-block p-2" src={dataImages[item.image]} alt="/" width="150rem" height="200rem"/>
          </div>
          <div class="card-cstm-body text-center">
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
    />
    {/* Modal */}
    {data.map((item, i) => (
      <div class="modal fade" id={"modal-" + i} tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <img class="mx-auto d-block mb-3" width="200rem" src={dataImages[item.image]} alt="" />
              <h1>{item.name}</h1>
              <div dangerouslySetInnerHTML={{ __html: item.modal.details }}></div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </>
);

export default class Organization extends React.Component {
  render() {
    return (
      <section id="organization" className="py-5">
        <div className="text-center py-5">
          <h5>Check Out Our</h5>
          <div className="varsity-text text-red display-2">ORGANIZATIONS</div>
        </div>
        <Carousel />
      </section>
    );
  }
}