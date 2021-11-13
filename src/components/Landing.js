import React from "react";
import img01 from "./../images/01.svg";
import img02 from "./../images/02.svg";
import img03 from "./../images/03.svg";
import img04 from "./../images/04.svg";
import img05 from "./../images/05.svg";
import tiktok from "./../images/Tiktok.png";
import twitter from "./../images/Twitter.png";
import instagram from "./../images/Instagram.png";
import youtube from "./../images/Youtube.png";
import line from "./../images/line-alt.png";
import "./../css/stylesheet.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Landing() {
  return (
    <div className="header">
      {/* Hero */}
      <hero>
        <div className="hero">
          <div class="container px-4 px-lg-5 h-100">
            <div class="row gx-4 gx-lg-5 h-300 align-items-center justify-content-center text-center">
              <div class="col-lg-8 align-self-baseline">
                <p className="subtitle">Dari Mokleter Untuk Mokleters</p>
                <div class="align-self-end">
                  <h1 class="font-weight-bold">
                    MOKLET<span>ERS</span>
                  </h1>
                </div>
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <button type="button" className="btn-explore rounded-pill">
                  Explore
                </button>
              </div>
            </div>
          </div>
        </div>
      </hero>
      {/* ===== Yuk Kenalan ===== */}
      <div class="content-img container text-center text-md-start mt-5">
        {/* <!-- Grid row --> */}
        <div class="row mt-5">
          <div class="col-lg-7 h-100">
            <div class="text h-300 align-items-left justify-content-left text-left">
              <h2>Yuk Kenalan!</h2>
              <h1 class="font-weight-bold">
                Mengenal <span>Mokleters</span> Lebih Jauh!
              </h1>
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div class="kotak-mengenal row mt-5">
                {" "}
                {/*==============> ICON KOTAK SOSMED MENGENAL BELUM FIX <=================*/}
                <div class="icon-mengenal col-2 px-4 py-3">
                  <a href="/">
                    <img src={instagram} className="img-fluid" />
                  </a>
                </div>{" "}
                {/*INGIN MENGGUNAKAN ICON DENGAN BOXICONS ATAU IMG ATAU?*/}
                <div class="icon-mengenal col-2 px-3 py-2">
                  <a href="/">
                    <img src={youtube} className="img-fluid" />
                  </a>
                </div>
                <div class="icon-mengenal col-2 px-3 py-3">
                  <a href="/">
                    <img src={twitter} className="img-fluid" />
                  </a>
                </div>
                <div class="icon-mengenal col-2 px-4 py-3">
                  <a href="/">
                    <img src={tiktok} className="img-fluid" />
                  </a>
                </div>
                <div className="icon-line">
                  <div className="line">
                    <img src={line} className="img-fluid" />
                  </div>
                </div>
              </div>
              {/* ===========> GARIS WARNA WARNI BELUM <============*/}
            </div>
          </div>
          <div class="col-lg-5 mx-auto">
            {/* <!-- Links --> */}
            <embed src={img02} className="imgKenalan" alt="img"></embed>
          </div>
          {/* <!-- Grid column -->*/}
        </div>
        {/* <!-- Grid row --> */}
      </div>

      {/* ====== VIDEO ====== */}
      <div class="content-img container text-center text-md-start mt-5">
        {/* <!-- Grid row --> */}
        <div class="row mt-5">
          <div class="col-lg-6 px-1 px-lg-5 h-100">
            <div class="embed-responsive embed-responsive-16by9">
              <iframe
                title="video-perkenalan"
                class="video-perkenalan embed-responsive-item"
                src="https://www.youtube.com/embed/7d_fT2wM0Sc"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div class="col-lg-5 mx-auto">
            {/* <!-- Links --> */}
            <div class="text h-300 align-items-left justify-content-left text-left">
              <h2>Yuk lihat!</h2>
              <h1 class="font-weight-bold">
                Video <span>Profile</span> Mokleters
              </h1>
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <button type="button" className="btn-blog rounded-pill">
                Yuk Lihat
              </button>
            </div>
          </div>
          {/* <!-- Grid column -->*/}
        </div>
        {/* <!-- Grid row --> */}
      </div>

      {/* ======= TOKO ONLINE ==== */}
      <div class="content-img container text-center text-md-start mt-5">
        {/* <!-- Grid row --> */}
        <div class="row mt-5">
          <div class="col-lg-6 px-1 px-lg-5 h-100">
            <div class="text h-300 align-items-left justify-content-left text-left">
              <h2>Toko Online</h2>
              <h1 class="font-weight-bold">
                Kita juga ada <span>Toko Online</span> lho!
              </h1>
              <p>
                {" "}
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button type="button" className="btn-blog rounded-pill">
                Yuk Lihat
              </button>
            </div>
          </div>
          <div class="col-lg-5 mx-auto">
            {/* <!-- Links --> */}
            <embed
              src={img05}
              className="imgKenalan"
              width="600px"
              height="600px"
              alt="img"
            ></embed>
          </div>
          {/* <!-- Grid column -->*/}
        </div>
        {/* <!-- Grid row --> */}
      </div>

      {/* ====== BERGABUNG ====== */}
      <div class="content-img container text-center text-md-start mt-5">
        {/* <!-- Grid row --> */}
        <div class="bergabung row mt-5">
          <div class="col-lg-6 px-1 px-lg-5 h-100">
            <div class="kotak-bergabung row mt-3">
              <div class="box-bergabung col">
                <embed src={img01} className="img-bergabung"></embed>
                <h2>Bergabunglah bersama</h2>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
              <div class="box-bergabung col">
                <embed src={img02} className="img-bergabung"></embed>
                <h2>Bergabunglah bersama</h2>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
              <div class="box-bergabung col">
                <embed src={img03} className="img-bergabung"></embed>
                <h2>Bergabunglah bersama</h2>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
              <div class="box-bergabung col">
                <embed src={img04} className="img-bergabung"></embed>
                <h2>Bergabunglah bersama</h2>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </div>
          </div>
          <div className="bergabung-title col-lg-5 mx-auto">
            {/* <!-- Links --> */}
            <div class="text h-300 align-items-left justify-content-left text-left">
              <h2>Join Us!</h2>
              <h1 class="font-weight-bold">
                <span>Yuk! Bergabung</span> Dengan Kami
              </h1>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut.
              </p>
              <button type="button" className="btn-blog rounded-pill">
                Yuk Lihat
              </button>
            </div>
          </div>
          {/* <!-- Grid column -->*/}
        </div>
        {/* <!-- Grid row --> */}
      </div>

      {/* ========= BLOG ========= */}
      <div className="landing-blog">
        <div class="container px-4 px-lg-5 h-100">
          <div class="row gx-4 gx-lg-5 h-300 align-items-center justify-content-center text-center">
            <div class="col-lg-10 align-self-baseline">
              <div class="align-self-end">
                <h1 class="font-weight-bold">
                  Yuk lihat juga <span>blog</span> yang sudah dibuat Mokleters!
                </h1>
              </div>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <button type="button" className="btn-blog rounded-pill">
                Yuk Lihat
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="big-img align-items-center justify-content-center text-center">
        <embed
          src={img01}
          className="img-kenalan"
          width="1100px"
          height="1100px"
          alt="img"
        ></embed>
      </div>
    </div>
  );
}

export default Landing;
