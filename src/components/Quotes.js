import React from "react";
// import '../css/Footers.css';
import badge from "../assets/quotes/badge.png";

export default class Quotes extends React.Component {
  render() {
    return (
      <>
        {/* <h1 className="b-example-divider mb-0">Footer section</h1> */}
        <div class="bg-dark-cs">
          <div class="quotes px-4 py-5 text-center">
            <div class="py-5 mt-5">
              <img src={badge} class="quotes-badge" alt="badge" />
              <div
                id="carouselExampleFade"
                class="carousel slide carousel-fade mt-4 fs-5 mb-4 text-white mx-auto"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active" data-bs-interval="10000">
                    <p class="text-white">“Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.”</p>
                    <p class="text-desc-footer">- Lorem Ipsum 1 -</p>
                  </div>
                  <div class="carousel-item" data-bs-interval="10000">
                    <p class="text-white">“Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.”</p>
                    <p class="text-desc-footer">- Lorem Ipsum 2 -</p>
                  </div>
                  <div class="carousel-item" data-bs-interval="10000">
                    <p class="text-white">“It has survived not only five centuries, but also the 
                    leap into electronic typesetting, remaining essentially unchanged.”</p>
                    <p class="text-desc-footer">- Lorem Ipsum 3 -</p>
                  </div>
                </div>
                {/* <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleFade"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    />
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleFade"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    />
                    <span class="visually-hidden">Next</span>
                  </button> */}
              </div>
              <div class="col-lg-3 mx-auto px-4">
                {/* <p class="fs-5 mb-4 text-white mt-4">
                  “Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.”
                </p> */}
                {/* <h1 class="text-desc-footer">- Lorem Ipsum -</h1> */}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}