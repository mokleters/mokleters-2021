import React from "react";
import '../css/Blog.css'
import gambar1 from '../assets/blog/1.png'
import gambar2 from '../assets/blog/2.png'
import gambar3 from '../assets/blog/3.png'

export default class Blog extends React.Component {
  render() {
    return (
      <section id="blog">
        {/* <h1  className="b-example-divider mb-0">Blog section</h1> */}
        <div className="bg-dark-cs text-white py-7">
          <div className="container-fluid">
            <div className="text-center pb-4">
              <div className="varsity-text">ONLINE <span className="text-red">BLOG</span></div>
              <div class="row d-flex justify-content-center">
                <div class="border-bottom my-2 col-1"></div>
              </div>
              <p>Lorem Ipsum is simply dummy text of the printing and standard dummy </p>
            </div>
            <div className="row justify-content-center row-cols-md-4 row-cols-3">
              <div className="col nopadding m-2 hover">
                <div class="card bg-transparent border-0">
                    <a className="text-decoration-none text-white" href="#">
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
              <div className="col nopadding m-2 hover-active">
                <div class="card bg-transparent border-0">
                    <a className="text-decoration-none text-white" href="#">
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
              <div className="col nopadding m-2 hover">
                <div class="card bg-transparent border-0">
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
              <div className="col nopadding m-2 hover">
                <div class="card bg-transparent border-0">
                    <a className="text-decoration-none text-white" href="#">
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
              <div className="col nopadding m-2 hover">
                <div class="card bg-transparent border-0">
                    <a className="text-decoration-none text-white" href="#">
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
            </div>
            <div class="row d-flex justify-content-center mt-5">
              <a href="#blog" class="btn btn-danger col-5 col-md-4 col-lg-3 col-xl-2">Go To Blogs</a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
