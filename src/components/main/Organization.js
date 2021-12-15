import React from "react";
import osis from '../../assets/organization/osis.jpg';
import mpk from '../../assets/organization/mpk.png';
import pustel from '../../assets/organization/pustel.png'
import metic from '../../assets/organization/metic.jpeg';
import bdi from '../../assets/organization/bdi.png';
import comet from '../../assets/organization/comet.png';
import da from '../../assets/organization/da.png';
import mac from '../../assets/organization/mac.png';
import memo from '../../assets/organization/memo.png';
import palwaga from '../../assets/organization/palwaga.png';
import paskatema from '../../assets/organization/paskatema.png';
import pmr from '../../assets/organization/pmi.png';
import pmr1 from '../../assets/organization/pmi-1.png';
import tsbc from '../../assets/organization/tsbc.png';
import tscc from '../../assets/organization/tscc.png';
import tsfc from '../../assets/organization/tsfc.png';
import tsvc from '../../assets/organization/tsvc.jpg';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import bodyModalMPK from '../../assets/organization/modal-body.png';

import '../../css/Organization.css';


//Menggunakan penamaan yang cukup unik seperti cardd
//Agar tidak ada tabrakan styling dengan yang lain

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const items = [
  <div class="cardd" data-value="1">
    <div class="atas"></div>
    <div class="cardd-img">
      <img src={osis} alt="/" />
    </div>
    <div class="cardd-body">
      <h3>
        OSIS
      </h3>
      <p>
      Organisasi Siswa Intra Sekolah merupakan salah suatu organisasi
      yang dikelola oleh siswa siswi SMK Telkom Malang yang terpilih untuk menjadi pengurus OSIS. 
      </p>
      
      
      <span type="button" data-bs-toggle="modal" data-bs-target="#osisModal">
      learn more
      </span>

    </div>
  </div>,
  <div class="cardd" data-value="2">
    <div class="atas"></div>
    <div class="cardd-img">
      <img src={mpk} alt="/" />
    </div>
    <div class="cardd-body">
      <h3>
        MPK
      </h3>
      <p>
      Pergerakan era globalisasi dalam dunia pendidikan Indonesia memang sangat dibutuhkan 
      suatu demokrasi yang besar dalam lingkungan sekolah.
      </p>
      <span type="button" data-bs-toggle="modal" data-bs-target="#mpkModal">
      learn more
      </span>
    </div>
  </div>,
  <div class="cardd" data-value="3">
    <div class="atas"></div>
    <div class="cardd-img">
      <img class="pustel-img" src={pustel} alt="/" />
    </div>
    <div class="cardd-body">
      <h3>
        PUSTEL
      </h3>
      <p>
      Adalah sebuah organisasi pengurus perpustakaan yang bergerak di bidang pengetahuan 
      dan satu-satunya organisasi di SMK Telkom Malang yang dibawahi langsung oleh yayasan.
      </p>
      <span type="button" data-bs-toggle="modal" data-bs-target="#pustelModal">
      learn more
      </span>
    </div>
  </div>,
  <div class="cardd" data-value="4">
    <div class="atas"></div>
    <div class="cardd-img">
      <img class="metic-img" src={metic} alt="/" />
    </div>
    <div class="cardd-body">
      <h3>
        METIC
      </h3>
      <p>
      Metic adalah salah satu sub organisasi dari SMK Telkom Malang yang bergerak untuk edukasi
      khususnya di bidang Teknologi dan Informatika.
      </p>
      <span type="button" data-bs-toggle="modal" data-bs-target="#meticModal">
      learn more
      </span>
    </div>
  </div>,
  <div class="cardd" data-value="5">
    <div class="atas"></div>
    <div class="cardd-img">
      <img src={bdi} alt="/" />
    </div>
    <div class="cardd-body">
      <h3>
        BDI
      </h3>
      <p>
      BDI (Badan Dakwah Islam) SMK Telkom Malang merupakan salah satu Sub organisasi 
      yang bergerak pada bidang keagamaan.
      </p>
      <span type="button" data-bs-toggle="modal" data-bs-target="#bdiModal">
      learn more
      </span>
    </div>
  </div>,
  <div class="cardd" data-value="6">
    <div class="atas"></div>
    <div class="cardd-img">
      <img src={comet} alt="/" />
    </div>
    <div class="cardd-body">
      <h3>
        COMET
      </h3>
      <p>
      COMET (Community Of Moklet English Debaters) adalah sebuah sub-organ yang bergerak
       di bidang debat Bahasa Inggris.
      </p>
      <span type="button" data-bs-toggle="modal" data-bs-target="#cometModal">
      learn more
      </span>
    </div>
  </div>,
  <div class="cardd" data-value="7">
    <div class="atas"></div>
    <div class="cardd-img">
      <img src={memo} alt="/" />
    </div>
    <div class="cardd-body">
      <h3>
        MEMO
      </h3>
      <p>
      Media Moklet merupakan Sub-Organisasi SMK Telkom Malang yang bergerak di
      bidang Multimedia.
      </p>
      
      
      <span type="button" data-bs-toggle="modal" data-bs-target="#memoModal">
      learn more
      </span>

    </div>
  </div>,
  <div class="cardd" data-value="8">
    <div class="atas"></div>
    <div class="cardd-img">
      <img src={da} alt="/" />
    </div>
    <div class="cardd-body">
      <h3>
        Dewan Ambalan
      </h3>
      <p>
      Dewan Ambalan merupakan organisasi kepramukaan yang terdiri dari Pramuka Penegak.
      </p>
      <span type="button" data-bs-toggle="modal" data-bs-target="#daModal">
      learn more
      </span>
    </div>
  </div>,
  <div class="cardd" data-value="9">
    <div class="atas"></div>
    <div class="cardd-img">
      <img class="mac-img" src={mac} alt="/" />
    </div>
    <div class="cardd-body">
      <h3>
        MAC
      </h3>
      <p>
      MAC atau Moklet Art Club adalah sub organisasi yang bergerak di bidang kesenian.
      </p>
      <span type="button" data-bs-toggle="modal" data-bs-target="#macModal">
      learn more
      </span>
    </div>
  </div>,
  <div class="cardd" data-value="10">
    <div class="atas"></div>
    <div class="cardd-img">
      <img class="palwaga-img" src={palwaga} alt="/" />
    </div>
    <div class="cardd-body">
      <h3>
        PALWAGA
      </h3>
      <p>
      Pecinta alam wana arga atau yang biasa di sebut dengan Palwaga 
      merupakan sub-organisasi pecinta alam dari smk Telkom malang.
      </p>
      <span type="button" data-bs-toggle="modal" data-bs-target="#palwagaModal">
      learn more
      </span>
    </div>
  </div>,
  <div class="cardd" data-value="11">
    <div class="atas"></div>
    <div class="cardd-img">
      <img src={paskatema} alt="/" />
    </div>
    <div class="cardd-body">
      <h3>
        PASKATEMA
      </h3>
      <p>
      Paskatema adalah sub-organisasi paskibra dari SMK Telkom Malang yang bertugas 
      sebagai pengibar dan penurun bendera Merah Putih di lingkungan sekolah.
      </p>
      <span type="button" data-bs-toggle="modal" data-bs-target="#paskatemaModal">
      learn more
      </span>
    </div>
  </div>,
  <div class="cardd" data-value="12">
    <div class="atas"></div>
    <div class="cardd-img">
      <img class="pmr-img" src={pmr} alt="/" />
    </div>
    <div class="cardd-body">
      <h3>
        PMR
      </h3>
      <p>
      Palang Merah Remaja atau PMR adalah suatu organisasi binaan PMI yang berpusat di 
      sekolah-sekolah ataupun kelompok-kelompok masyarakat.
      </p>
      <span type="button" data-bs-toggle="modal" data-bs-target="#pmrModal">
      learn more
      </span>
    </div>
  </div>,
  <div class="cardd" data-value="13">
    <div class="atas"></div>
    <div class="cardd-img">
      <img class="tsbc-img" src={tsbc} alt="/" />
    </div>
    <div class="cardd-body">
      <h3>
        TSBC
      </h3>
      <p>
      TSBC adalah singkatan dari Telkom school Basketball Club yaitu salah satu sub 
      organisasi yang ada di Smk Telkom Malang dalam bidang olahraga basket.
      </p>
      <span type="button" data-bs-toggle="modal" data-bs-target="#tsbcModal">
      learn more
      </span>
    </div>
  </div>,
  <div class="cardd" data-value="14">
    <div class="atas"></div>
    <div class="cardd-img">
      <img class="tscc-img" src={tscc} alt="/" />
    </div>
    <div class="cardd-body">
      <h3>
        TSCC
      </h3>
      <p>
      TSCC adalah singkatan dari Telkom School Cycling Culub. 
      TSCC merupakan bagian dari sub organ yang ada pada SMK Telkom Malang.
      </p>
      <span type="button" data-bs-toggle="modal" data-bs-target="#tsccModal">
      learn more
      </span>
    </div>
  </div>,
  <div class="cardd" data-value="15">
    <div class="atas"></div>
    <div class="cardd-img">
      <img class="tsfc-img" src={tsfc} alt="/" />
    </div>
    <div class="cardd-body">
      <h3>
        TSFC
      </h3>
      <p>
      TSFC adalah kepanjangan dari Telkom School Futsal Club. 
      TSFC adalah sub-organisasi yang bergerak dibidang olahraga futsal.
      </p>
      <span type="button" data-bs-toggle="modal" data-bs-target="#tsfcModal">
      learn more
      </span>
    </div>
  </div>,
  <div class="cardd" data-value="16">
    <div class="atas"></div>
    <div class="cardd-img">
      <img class="tsvc-img" src={tsvc} alt="/" />
    </div>
    <div class="cardd-body">
      <h3>
        TSVC
      </h3>
      <p>
      TSVC atau Telkom Schools Volleyball Club adalah sub organisasi yang bergerak 
      dibidang olahraga yaitu bola voli.
      </p>
      <span type="button" data-bs-toggle="modal" data-bs-target="#tsvcModal">
      learn more
      </span>
    </div>
  </div>,
];

const Carousel = () => (
  <AliceCarousel
    mouseTracking enabled
    items={items}
    responsive={responsive}
    controlsStrategy="alternate"
    // autoPlay={true}
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

        <div class="modal fade" id="osisModal" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <img class="modal-logo" src={osis} alt=""></img>
                <h1>OSIS</h1>
                <p>Organisasi Siswa Intra Sekolah (OSIS) merupakan salah suatu organisasi yang berada di SMK Telkom Malang yang dikelola oleh siswa siswi SMK Telkom Malang yang terpilih untuk menjadi pengurus OSIS. Organisasi ini juga memiliki guru pembimbing dari guru yang dipilih oleh pihak sekolah. OSIS juga berfungsi sebagai wadah kegiatan para siswa,sebagai motivator,dan sebagai pembinaan siswa.  
                    Berikut adalah beberapa macam progja yang dilakukan oleh OSIS : <br />
                    1. Bulan Dana 
                      Bulan Dana adalah kegiatan galang dana yang dilakukan untuk kegiatan sosial. <br />
                    2. OSIS CUP
                      Kegiatan turnamen olah raga yang dilakukan antar kelas di SMK Telkom Malang. <br />
                    3. Peringatan Hari Kartini
                                Kegiatan untuk mengenang jasa Ibu Kartini yang 	memperjuangkan emansipasi wanita.<br />
                    4. MPLS
                      MPLS adalah kegiatan masa pengenalan lingkungan sekolah untuk melatih ketahanan mental,disiplin,dan mempererat tali persaudaraan.<br /> 
                    5. Peringatan Kemerdekaan
                                  Kegiatan memperingati hari kemerdekaan Indonesia dengan mengadakan lomba antar kelas di  SMK Telkom Malang.<br /> 	
                    6. Bulan Bahasa
                                  Bulan bahasa adalah kegiatan yang bertujuan untuk mengenang peristiwa Sumpah Pemuda yang didalamnya juga mengingatkan dengan bahasa persatuan yang  dilaksanakan pada bulan Oktober. <br />
                    7. Galasesa
                                  Kegiatan untuk merayakan kelulusan kelas 12 serta mengikat tali persaudaraan dengan Alumni SMK Telkom Malang dengan mengadakan event yang dilakukan pada malam hari seperti konser dan masih banyak lagi. <br />
                </p>

                {/* <img src={bodyModalMPK} alt=""></img> */}

                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <div class="modal-footer">
                
              </div> */}
              </div>
            </div>
          </div>
        </div>        
        <div class="modal fade" id="mpkModal" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <img class="modal-logo" src={mpk} alt=""></img>
                <h1>MPK</h1>
                <p>Pergerakan era globalisasi dalam dunia pendidikan Indonesia memang sangat dibutuhkan suatu demokrasi yang besar dalam lingkungan sekolah. Maka dari itu Majelis Perwakilan Kelas (MPK) cocok untuk mewujudkan suatu demokrasi besar tersebut. 

                        Majelis Perwakilan Kelas SMK Telkom Malang merupakan badan koordinasi dan pengawas segala kegiatan OSIS serta sebagai wadah aspirasi dan warga sekolah. Majelis Perwakilan Kelas berkedudukan tidak diatas, dibawah, ataupun setara dengan OSIS.

                        Anggota MPK merupakan perwakilan dari setiap kelas. Partisipasi anggotanya dalam organisasi disebut Anggota Perwakilan Kelas. Dimana masing-masing mewakili aspirasi suara dari seluruh warga kelas terkait yang diwakilkan. 

                        MPK menjadi wadah Siswa SMK TELKOM MALANG untuk belajar berorganisasi juga, karena di dalam berorganisasi kita bisa mendapat pengalaman dan wawasan baru yang secara tidak langsung diajarkan layaknya materi seperti sekolah pada biasanya, yang didalamnya sendiri memiliki beberapa Kegiatan Program Kerja yang dilakukan untuk melatih Leadership, Komunikasi, Teamwork dan banyak hal lainnya. Program Kerja di MPK sebagai berikut : <br />

                        1. PILKETOS (Pemilihan Ketua OSIS)
                        Pemilihan Ketua OSIS SMK Telkom guna melahirkan ketua (seorang pemimpin) yang dapat menjadi panutan dan mengayomi terhadap masyarakat yang dipimpinnya. Dipilih langsung oleh semua warga sekolah yang sebelumnya telah diseleksi oleh pihak internal MPK dan guru. <br />
                        
                        2. LPJ (Laporan Pertanggung Jawaban)
                        LPJ Besar.
                        Kegiatan pertanggungjawaban kinerja dari pihak Organisasi Siswa Intra Sekolah (OSIS) dan mengevaluasi kinerja OSIS agar kinerja maupun acara OSIS kedepannya diharapkan dapat lebih baik. 
                        LPJ Bulan Bahasa.
                        Kegiatan pertanggungjawaban kinerja dalam kegiatan "Bulan Bahasa" dari pihak Organisasi Siswa Intra Sekolah (OSIS) dan mengevaluasi kegiatan yang telah dilaksanakan sehingga menjadi acuan untuk kegiatan pada periode mendatang yang diharapkan agar menjadi lebih baik. <br />

                        3. SERTIJAB (Serah Terima Jabatan OSIS)
                        Kegiatan serah terima jabatan yang dilakukan oleh OSIS SMK Telkom Malang, guna untuk meneruskan visi misi pada pendahulunya, agar terwujud cita-cita serta harapan. Kegiatan ini selain merupakan upaya pembinaan anggota OSIS, juga untuk penyerahan tugas dari kepengurusan OSIS periode lama kepada kepengurusan OSIS periode baru. 
                </p>

                {/* <img src={bodyModalMPK} alt=""></img>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <div class="modal-footer">
                
              </div> */}
              </div>
            </div>
          </div>
        </div>
        <div class="modal fade" id="pustelModal" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <img class="modal-pustel" src={pustel}></img>
                <h1>PUSTEL</h1>
                <p>Adalah sebuah organisasi pengurus perpustakaan yang bergerak di bidang pengetahuan dan satu-satunya 
                  organisasi di SMK Telkom Malang yang dibawahi langsung oleh yayasan. Tugas pengurus pustel adalah mengelola 
                  perpustakaan, seperti mendata buku, melayani pengunjung perpustakaan, memperbarui mading setiap bulan, 
                  dan membuat event.
                </p>  

                {/* <img src={bodyModalMPK}></img>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <div class="modal-footer">
                
              </div> */}
              </div>
            </div>
          </div>
        </div>        
        <div class="modal fade" id="mpkModal" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <img class="modal-logo" src={mpk}></img>
                <h1>MPK</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                <img src={bodyModalMPK}></img>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <div class="modal-footer">
                
              </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal fade" id="meticModal" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <img class="modal-metic" src={metic}></img>
                <h1>METIC</h1>
                <p>Metic adalah salah satu sub organisasi dari SMK Telkom Malang yang bergerak untuk edukasi
khususnya di bidang Teknologi dan Informatika. Tidak hanya itu, Metic juga memiliki
berbagai kelas untuk mempelajari dan mengembangkan minat dan bakat siswa. Dalam
kepengurusan Metic terdapat beberapa bidang yaitu ketua, wakil ketua, sekertaris, bendahara,
humas, research and development, web developer, social media management dan technical
support. <br />

Kegiatan Metic Moklet bertujuan untuk memperkenalkan kepada kalian hal-hal berkaitan
dengan kegiatan Metic, kegiatan pembelajaran di Metic, materi pembelajaran pada saat forum
Metic, berbagi pengetahuan di bidang teknologi dan informatika, dan masih banyak lagi. <br />

Kelas di Metic yakni ada kelas Destkop Programming. Pada kelas ini kita akan belajar tentang
pemrograman dekstop, dimana kalian nantinya akan belajar menggunakan bahasa
pemrograman Java. <br />

Yang kedua ada kelas Web Design. Pada kelas ini kita akan belajar tentang pemrograman web,
dimana kalian nantinya akan belajar menggunakan bahasa pemrograman html, css, dan
javascript.<br />

Yang ketiga ada kelas Graphic Design. Pada kelas ini kita akan belajar tentang desain grafis,
dimana kalian nanti akan diajarkan bagaimana cara mendesain yang baik dan benar
menggunakan software Adobe Illustrator, Adobe Photoshop, dan Blender 3D.<br />

Yang keempat ada kelas Video Editing. Disini kita akan belajar tentang video editing, dimana
kalian akan diajarkan cara mengedit video agar hasil yang ditampilkan sangat baik. Disini
menggunakan software Adobe PremierPro dan Adobe After Effect.<br />

Yang kelima ada kelas Networking. Pada kelas ini kita akan belajar tentang networking.
</p>
                {/* <img src={bodyModalMPK}></img>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <div class="modal-footer">
                
              </div> */}
              </div>
            </div>
          </div>
        </div>        
        <div class="modal fade" id="bdiModal" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <img class="modal-logo" src={bdi}></img>
                <h1>BDI</h1>
                <p>BDI (Badan Dakwah Islam) SMK Telkom Malang merupakan salah satu Sub organisasi yang bergerak pada bidang keagamaan. BDI juga menjadi sarana bagi siswa siswi SMK Telkom Malang untuk mengembangkan bakatnya, karena BDI juga menaungi ekstrakurikuler Banjari dan Tapak Suci.

Berikut beberapa program kerja BDI SMK Telkom Malang :
<br />
1. Idul Adha
Kegiatan yang diselenggarakan oleh anggota BDI untuk memperingati hari raya Idul Adha. <br />

2. Peringatan Muharram
	Kegiatan yang diselenggarakan oleh anggota BDI untuk memperingati tahun baru Islam.<br />

3. Maulid Nabi
	Kegiatan yang diselenggarakan oleh anggota BDI untuk memperingati hari lahir Nabi Muhammad SAW.<br />

4. Isra' Mi'raj
Kegiatan untuk memperingati peristiwa perjalanan Nabi Muhammad SAW dalam satu malam.<br />

5. Pondok Ramadhan
	Kegiatan yang bertujuan untuk mengajak siswa siswi SMK Telkom Malang melakukan kegiatan positif selama bulan Ramadhan.<br />

6. BDI Menyapa dan Yasinan
	Pengajian rutin oleh pembina BDI yang diperuntukkan untuk umum dan warga SMK Telkom Malang.<br />
</p>
                {/* <img src={bodyModalMPK}></img>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <div class="modal-footer">
                
              </div> */}
              </div>
            </div>
          </div>
        </div>        
        <div class="modal fade" id="cometModal" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <img class="modal-logo" src={comet}></img>
                <h1>COMET</h1>
                <p>COMET (Community Of Moklet English Debaters) adalah sebuah sub-organ yang bergerak di bidang 
                  debat Bahasa Inggris. Di dalam COMET terdapat beberapa program dan kegiatan seperti forum rutin, 
                  sharing, Let's Change, English Day, English Talkshow dan sebagainya.
                </p>  
                {/* <img src={bodyModalMPK}></img>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <div class="modal-footer">
                
              </div> */}
              </div>
            </div>
          </div>
        </div>
        <div class="modal fade" id="daModal" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <img class="modal-logo" src={da}></img>
                <h1>DEWAN AMBALAN</h1>
                <p>Dewan Ambalan merupakan organisasi kepramukaan yang terdiri dari Pramuka Penegak. 
                  Tujuan dibentuknya Dewan Ambalan yaitu untuk memudahkan penghimpunan, pengelolaan, penggerakan 
                  dan pengarahan peserta didik dalam pelaksanaan kegiatan pramuka penegak untuk mencapai 
                  tujuannya di SMK Telkom Malang.
                </p>  
                {/* <img src={bodyModalMPK}></img>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <div class="modal-footer">
                
              </div> */}
              </div>
            </div>
          </div>
        </div>        
        <div class="modal fade" id="macModal" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <img class="modal-mac" src={mac}></img>
                <h1>MAC</h1>
                <p>MAC atau Moklet Art Club adalah sub organisasi yang bergerak di bidang kesenian. MAC dibagi menjadi 3 jurusan yaitu akustik, dance dan theater. Disini siswa dapat mengembangkan minat dan bakat dalam bidang seni. Di dalam jurusan akustik kalian bisa mengembangkan bakat dalam bidang music, dalam jurusan dance kalian bisa mengembangkan bakat dalam bidang seni tari modern, serta jurusan theater dimana kalian bisa mengembangkan bakat dalam bidang drama. Selain itu kalian juga bisa berlatih time management, memperluas relasi, menyalurkan kreatifitas dan kalian bisa bebas berekspresi. 
MAC juga mempunyai beberapa event rutin tahunan yaitu Bulan Bahasa, selain itu MAC juga mempunyai event-event lain seperti home band dan juga kolaborasi dengan organisasi dan sub-organ lainnya
</p>
                {/* <img src={bodyModalMPK}></img>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <div class="modal-footer">
                
              </div> */}
              </div>
            </div>
          </div>
        </div>
        <div class="modal fade" id="memoModal" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <img class="modal-logo" src={memo}></img>
                <h1>MEMO</h1>
                <p>Media Moklet merupakan Sub-Organisasi SMK Telkom Malang yang bergerak di
                  bidang Multimedia. Media Moklet mempunyai 3 jurusan, yaitu Desain yang akan
                  mempelajari bidang multimedia seperti membuat desain logo, poster, dll. Lalu Fotografi yang
                  akan mendalami teknik-teknik dalam Fotografi. Dan yang terakhir, Jurnalistik yang akan
                  mempelajari mengenai cara mewawancarai narasumber, serta melatih menjadi seorang
                  jurnalis. Di ketiga jurusan ini, kami dapat belajar bersama serta mengolah keterampilan yang
                  kami miliki. Di setiap tahunnya, kami memiliki acara tahunan yaitu Bulan Bahasa. Untuk
                  rutinitas setiap minggu, Media Moklet mengadakan forum bersama yaitu pada Hari Kamis
                  dan mempunyai beberapa media sosial, yaitu Instagram, Youtube, Twitter, Tumblr, dan
                  Spotify.
                </p>
                {/* <img src={bodyModalMPK}></img>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <div class="modal-footer">
                
              </div> */}
              </div>
            </div>
          </div>
        </div>        
        <div class="modal fade" id="palwagaModal" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <img class="modal-palwaga" src={palwaga}></img>
                <h1>PALWAGA</h1>
                <p>Pecinta alam wana arga atau yang biasa di sebut dengan Palwaga merupakan sub-organisasi 
                  pecinta alam dari smk Telkom malang. Di Palwaga terdapat beberapa program kerja serta kegiatan rutinan.
                  Sementara ini di Palwaga terdapat  program kerja yaitu pembuatan hidroponik
                </p>
 
                {/* <img src={bodyModalMPK}></img>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <div class="modal-footer">
                
              </div> */}
              </div>
            </div>
          </div>
        </div>
        <div class="modal fade" id="paskatemaModal" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <img class="modal-logo" src={paskatema}></img>
                <h1>PASKATEMA</h1>
                <p>Paskatema adalah sub-organisasi paskibra dari SMK Telkom Malang yang bertugas sebagai pengibar dan penurun bendera Merah Putih di lingkungan sekolah. Paskatema sendiri tidak hanya melakukan pengibaran dan penurunan bendera di lingkingan sekolah saja. Paskatema juga mengikuti berbagai macam lomba kreasi baris berbaris. Dalam kepengurusan Paskatema, terdapat beberapa bagian yakni ketua, wakil ketua, sekretaris, bendahara, dan 6 Sie, yakni pelatihan, logistik, keanggotaan, kesehatan, kedisiplinan, dan humas.
                    Kegiatan paskatema bertujuan untuk membentuk seorang Paskibra yang berintelektual tinggi dan terlatih baik fisik maupun mentalnya. Beberapa kegiatan tersebut antara lain: <br />
                    - Latihan Rutin
                    Kegiatan ini bertujuan untuk meningkatkan pemahaman tentang ilmu PBB dan juga meningkatkan kemampuan fisik. <br />
                    - Forum Rutin
                    Kegiatan ini bertujuan untuk menambah wawasan tentang ilmu kepaskibraan serta merekatkan hubungan persaudaraan antar sesama anggota.<br />
                    - Diklat
                    Diklat merupakan kegiatan penempuhan status bagi seorang Paskibra untuk naik ke tingkat status yang lebih tinggi.<br />
                    - Lomba Paskibra
                    Kegiatan yang bertujuan sebagai wadah untuk seorang Paskibra menunjukkan bakat dan kemampuannya.<br />
                </p>
                {/* <img src={bodyModalMPK}></img>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <div class="modal-footer">
                
              </div> */}
              </div>
            </div>
          </div>
        </div>        
        <div class="modal fade" id="pmrModal" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <img class="modal-pmr" src={pmr}></img>
                <h1>PMR</h1>
                <p>Palang Merah Remaja atau PMR adalah suatu organisasi binaan PMI yang berpusat di sekolah-sekolah 
                  ataupun kelompok-kelompok masyarakat yang bertujuan membangun dan mengembangkan karakter 
                  kepalangmerahan agar siap menjadi relawan PMI di masa depan. Di PMR, kami bertugas untuk 
                  membantu sesama yang membutuhkan pertolongan. Seperti jika ada teman yang pingsan, 
                  kami bertugas untuk menolong dan merawatnya. Juga teman-teman yang cedera ataupun sakit.
                   Selain itu, kami juga mengadakan forum atau pertemuan yang diadakan setiap minggunya. 
                   Baik secara daring maupun luring. Untuk membahas dan mempelajari materi-materi serta 
                   berbagai teori kepalang merahan. Tidak hanya membahas teori dan materi, disini kami 
                   juga akan mempraktekkan materi-materi kepalangmerahan yang sudah kami pelajari. 
                   Seperti pembalutan, bidai, pertolongan pertama, dan materi yang lainya. 
                   Selain itu, kami juga mengadakan pembahasan materi secara daring selama masa pandemi, 
                   serta quiz online yang seru dan menarik.
                   </p>
                {/* <img src={bodyModalMPK}></img>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <div class="modal-footer">
                
              </div> */}
              </div>
            </div>
          </div>
        </div>
        <div class="modal fade" id="tsbcModal" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <img class="modal-tsbc" src={tsbc}></img>
                <h1>TSBC</h1>
                <p>TSBC adalah singkatan dari Telkom school Basketball Club yaitu salah satu sub organisasi yang ada 
                  di Smk Telkom Malang dalam bidang olahraga. Dalam bidang olahraga basket ini yang dipelajari dalam 
                  basket: Pemain basket pemula perlu menguasai teknik dribbling atau menggiring bola terlebih dulu. 
                  Selain itu di basket belajar teknik teknik dasar yaitu: Dribbling,Shooting,Passing,Defense,Rebounding,Pivot
                  Dan ada teknik permainan yaitu fade away, hook shoot, jump shoot, crossover, slamdun. Menariknya dari tsbc kita bukan hanya 
                  belajar tentang bagaimana bermain bola basket dengan baik tp juga belajar menjadi pribadi yang disiplin, bertanggungjawab, 
                  berattitude, memiliki rasa sosial yg tinggi, dan juga menggajarkan kita tentang kerjasama tim.
                </p>
                {/* <img src={bodyModalMPK}></img>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <div class="modal-footer">
                
              </div> */}
              </div>
            </div>
          </div>
        </div>        
        <div class="modal fade" id="tsccModal" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <img class="modal-tscc" src={tscc}></img>
                <h1>TSCC</h1>
                <p>TSCC adalah singkatan dari Telkom School Cycling Culub. TSCC merupakan bagian dari sub organ 
                  yang ada pada SMK Telkom Malang. TSCC itu ngapain aja sih??? Di dalam TSCC kita biasanya bersepeda 
                  bersama setiap seminggu atau 2 minggu sekali, melakukan forum dengan ngopi dan ngobrol, dan mengikuti 
                  event yang ada di malang seperti FunBike. TSCC itu santai dan menyenangkan apalagi kalau kumpul bersama.
                </p>  
                {/* <img src={bodyModalMPK}></img>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <div class="modal-footer">
                
              </div> */}
              </div>
            </div>
          </div>
        </div>
        <div class="modal fade" id="tsfcModal" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <img class="modal-tsfc" src={tsfc}></img>
                <h1>TSFC</h1>
                <p>TSFC adalah kepanjangan dari Telkom School Futsal Club. TSFC adalah sub-organisasi yang bergerak 
                  dibidang olahraga futsal. TSFC adalah sub-organisasi yang mewadahi siswa-siswi SMK Telkom Malang yang 
                  mempunyai minat di bidang olahraga futsal.
                  Latihan rutin biasa dilakukan pada hari kamis dan sabtu guna melatih skill dari anggota TSFC.
                </p>  
                {/* <img src={bodyModalMPK}></img>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <div class="modal-footer">
                
              </div> */}
              </div>
            </div>
          </div>
        </div>        
        <div class="modal fade" id="tsvcModal" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <img class="modal-tsvc" src={tsvc}></img>
                <h1>TSVC</h1>
                <p>TSVC atau Telkom Schools Volleyball Club adalah sub organisasi yang bergerak dibidang olahraga 
                  yaitu bola voli. TSVC menjadi wadah untuk siswa siswi mengembangkan bakatnya maupun siswa siswi yang 
                  tertarik di bidang olahraga voli.
                </p>  
                {/* <img src={bodyModalMPK}></img>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <div class="modal-footer">
                
              </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
