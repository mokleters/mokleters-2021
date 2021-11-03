import React from 'react';
// import img01 from './../images/01.png';
import img02 from './../images/02.svg';
// import img03 from './../images/03.png';
// import img04 from './../images/04.png';
// import img05 from './../images/05.png';
import tiktok from './../images/Tiktok.svg';
import twitter from './../images/Twitter.svg';
import instagram from './../images/Instagram.svg';
import youtube from './../images/Youtube.svg';
import './../css/stylesheet.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
                            <h1 class="font-weight-bold">MOKLET<span>ERS</span></h1>
                        </div>                    
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            
                            <button type="button" className="btn-explore rounded-pill">Explore</button>
                        </div>
                    </div>
                </div>
            </div>
        </hero>
            <div class="content-img container text-center text-md-start mt-5">
                {/* <!-- Grid row --> */}
                <div class="row mt-5">
                    <div class="col-lg-7 px-1 px-lg-5 h-100">
                        <div class="text h-300 align-items-left justify-content-left text-left">
                            <h2>Yuk Kenalan!</h2>
                            <h1 class="font-weight-bold">Mengenal <span>Mokleters</span> Lebih Jauh!</h1>                
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <div class="kotak-mengenal row mt-5"> {/*==============> ICON KOTAK SOSMED MENGENAL BELUM FIX <=================*/}
                                <div class="icon-mengenal col"><a href="/"><embed src={instagram} className="icon-social"></embed></a></div> {/*INGIN MENGGUNAKAN ICON DENGAN BOXICONS ATAU IMG ATAU?*/}
                                <div class="icon-mengenal col"><a href="/"><embed src={youtube} className="icon-social"></embed></a></div> 
                                <div class="icon-mengenal col"><a href="/"><embed src={twitter} className="icon-twitter"></embed></a></div> 
                                <div class="icon-mengenal col"><a href="/"><embed src={tiktok} className="icon-tiktok"></embed></a></div> 
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
            <div className="landing-blog">
            <div class="container px-4 px-lg-5 h-100">
                    <div class="row gx-4 gx-lg-5 h-300 align-items-center justify-content-center text-center">
                        <div class="col-lg-10 align-self-baseline">
                        <div class="align-self-end">
                            <h1 class="font-weight-bold">Yuk lihat juga <span>blog</span> yang sudah dibuat Mokleters!</h1>
                        </div>                    
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            
                            <button type="button" className="btn-blog rounded-pill">Yuk Lihat</button>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  );
}

export default Landing;
