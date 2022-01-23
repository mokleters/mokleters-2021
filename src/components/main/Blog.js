import React from "react";
import '../../css/Blog.css'
import gambar1 from '../../assets/blog/1.png'
import gambar2 from '../../assets/blog/2.png'
import gambar3 from '../../assets/blog/3.png'

export default class Blog extends React.Component {
  render() {
    return (
      <section id="blog">
        <div className="text-white py-7">
          <div class="jumbotron d-flex align-items-center min-vh-100">
            <div class="container-fluid">
              <div className="text-center pb-4">
                <h5>Check Out Our</h5>
                <div className="varsity-text text-red mb-5">ONLINE BLOG</div>
              </div>
              <div className="row justify-content-center row-cols-md-4 row-cols">
                <div className="hover col nopadding">
                  <div class="card bg-dark-cs border-0">
                      <a className="text-decoration-none text-white" href="#footer">
                        <img src={gambar1} class="card-img-top" alt=""/>
                      </a>
                      <div class="card-body">
                          <p class="card-text mb-2"><a className="text-decoration-none text-white" href="#"><small class="text-red">IT</small></a></p>
                        
                        <a className="text-decoration-none text-white" href="#">
                          <h5 class="card-title">The Best 3 Social Media Analytics Tools For Competitor Analysis</h5>
                        </a>
                        <p class="card-text border-top pt-2"><small class="text-secondary">18 November 2021</small></p>
                      </div>
                  </div>
                </div>
                <div className="hover col nopadding">
                  <div class="card bg-dark-cs border-0">
                      <a className="text-decoration-none text-white" href="#olshop">
                        <img src={gambar2} class="card-img-top" alt=""/>
                      </a>
                      <div class="card-body">
                          <p class="card-text mb-2"><a className="text-decoration-none text-white" href="#"><small class="text-red">Social</small></a></p>
                        
                        <a className="text-decoration-none text-white" href="#">
                          <h5 class="card-title">The Best 3 Social Media Analytics Tools For Competitor Analysis</h5>
                        </a>
                        <p class="card-text border-top pt-2"><small class="text-secondary">18 November 2021</small></p>
                      </div>
                  </div>
                </div>
                <div className="hover col nopadding">
                  <div class="card bg-dark-cs border-0">
                      <a className="text-decoration-none text-white" href="#">
                        <img src={gambar3} class="card-img-top" alt=""/>
                      </a>
                      <div class="card-body">
                          <p class="card-text mb-2"><a className="text-decoration-none text-white" href="#"><small class="text-red">Education</small></a></p>
                        
                        <a className="text-decoration-none text-white" href="#">
                          <h5 class="card-title">The Best 3 Social Media Analytics Tools For Competitor Analysis</h5>
                        </a>
                        <p class="card-text border-top pt-2"><small class="text-secondary">18 November 2021</small></p>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
