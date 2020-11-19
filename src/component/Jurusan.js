import {Component} from 'react';
import * as Mui from '@material-ui/core';
import * as Micon from '@material-ui/icons';
import Carousel from 'react-material-ui-carousel';


class Jurusan extends Component{
       render(){
           return(
               <div>
                   <Mui.Container fixed>
                  <Mui.Grid container spacing={2}>
                  <Mui.Grid item xs={12}><hr/>
                  <main align="center">
                  <Mui.ButtonGroup size="large" color="primary" aria-label="large outlined primary button group">
                        <Mui.Button href="/" >Home</Mui.Button>
                        <Mui.Button href="/sejarah">Sejarah</Mui.Button>
                        <Mui.Button href="/guru">Guru</Mui.Button>
                        <Mui.Button href="/kepalasekolah">Kepala Sekolah</Mui.Button>
                        <Mui.Button href="/jurusan">Jurusan</Mui.Button>
                        <Mui.Button href="/alamat">Alamat</Mui.Button>
                  </Mui.ButtonGroup>
                  </main>
                  <main align="center">
                  <h1>Selamat datang di halamat terakhir</h1>
                 <p>Di SMK BINA NUSANTARA SEMARANG TERDAPAT 4 JURUSAN yaitu sebagai berikut:</p>
                 </main>
             </Mui.Grid>
                   <Mui.Grid item xs={6}>
                   <h1 align="center">Akutansi</h1><br/>
                   <p>Akuntansi merupakan kompetensi yg mempelajari proses mencatat,mengolah dan menyajikan data yg berkaitan dengan keuangan.Untuk jurusan akuntansi di SMK, siswa di berikan banyak teori mengeni akuntansi keuangan perusahaan jasa,akuntansi keuangan perusahaan dagang dan perpajakan. Selain itu,siswa jurusan akuntansi juga dibekali dengan komputerisasi akuntansi, misalnya menggunakan program MYOB yang dapat menjadi nilai plus untuk lulusan SMK jurusan akuntansi.</p>
                    </Mui.Grid>
                    <Mui.Grid item xs={6}>
                   <h3 align="center">Fasilitas</h3>
                   <ul>
                       <li>Bank Mini</li>
                       <li>Lab Computer</li>
                   </ul>
                   <main align="center">
                   <img src="/akutansi.jpeg" width="200" height="200"/>
                   <img src="/akutansi1.jpg" width="200" height="200"/>
                   </main>
                </Mui.Grid>
                
                <Mui.Grid item xs={6}>
                   <h1 align="center">TBSM</h1><br/>
                   <p>Tenik Bisnis Sepeda Motor adalah kompetensi yang mempelajari tentang perawatan, perbaikan, dan modifikasi sepeda motor.</p>
                    <p>Lulusannya mampu menjadi Teknisi yang berkarakter profesional, ahli dan terampil dalam melakukan perawatan dan perbaikan mesin sepeda motor, chasis, pemindahan tenaga, sistem kelistrikan sepeda motor, kreatif dalam modifikasi dan asesoris sepeda motor,merancang dan membuat produk yang berbasis welding (pengelasan), dan menguasai Otomotif Technology Computer mutakhir</p>
                    </Mui.Grid>
                    <Mui.Grid item xs={6}>
                   <h3 align="center">Fasilitas</h3>
                   <ul>
                       <li>bengkel berstandar Astra Honda(AHM)</li>
                   </ul>
                   <main align="center">
                   <img src="/tbsm.jpg" width="200" height="200"/>
                   <img src="/images.jpeg" width="200" height="200"/>
                   </main>
                </Mui.Grid>
                <Mui.Grid item xs={6}>
                   <h1 align="center">TKJ</h1><br/>
                   <p>Teknik komputer dan jaringan adalah kompetensi keahlian yg mempelajari tentang teknologi informasi dan jaringan. Di smk bina nusantara lulusannya mampu menjadi network engineer,software development dan juga bisa membuat film animasi .</p>
                    <p>Pembelajarannya menggunakan cyber class dan menggunakan peralatan yang canggih seperti IBD, VIRTUALISER, dan menggunakan piranti multimedia lainnya. Bekerja sama dengan Intel Education untuk menjamin kualitas pembelajaran sesuai dengan kebutuhan industri.</p>
                    </Mui.Grid>
                    <Mui.Grid item xs={6}>
                   <h3 align="center">Fasilitas</h3>
                   <ul>
                       <li>Gedung milik sendiri</li>
                       <li>Memiliki laboratorium canggih seperti laboratorium networking support</li>
                       <li>Laboratorium hardware, software dan laboratorium multimedia.</li>
                   </ul>
                   <main align="center">
                   <img src="/2.jpeg" width="200" height="200"/>
                   <img src="/4.jpeg" width="200" height="200"/>
                   </main>
                </Mui.Grid>
                <Mui.Grid item xs={6}>
                   <h1 align="center">TATA BUSANA</h1><br/>
                   <p>Tata Busana merupakan kompetensi yang mempelajari bagaimana mendesain busana yg sesuai dengan bentuk tubuh serta karakteristik model atau seseorang. Tidak hanya mendesain,tapi juga membuat pola hingga desain tersebut menjadi busana.</p>
                    <p>Lulusan TB dapat mendapat menjadi seorang desainer/perancang busana,dapat pula membuka usaha sendiri berupa butik/konveksi/tailor.</p>
                    </Mui.Grid>
                    <Mui.Grid item xs={6}>
                   <h3 align="center">Fasilitas</h3>
                   <ul>
                       <li>Mesin jahit industry</li>
                       <li>Lab Garmen</li>
                       <li>Peralatan Jahit yg berkualitas</li>
                       <li>Mesin pasang kancing</li>
                       <li>Mesin Obras</li>
                       <li>Mesin Lubang kancing</li>
                       <li>Boneka jahit</li>
                   </ul>
                   <main align="center">
                   <img src="/7.jpeg" width="200" height="200"/>
                   <img src="/8.jpeg" width="200" height="200"/>
                   </main>
                </Mui.Grid>
                  </Mui.Grid>
                  </Mui.Container>
               </div>
           )
       }
}

export default Jurusan;