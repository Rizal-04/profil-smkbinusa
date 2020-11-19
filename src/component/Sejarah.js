import {Component} from 'react';
import * as Mui from '@material-ui/core';
import * as Micon from '@material-ui/icons';
import Carousel from 'react-material-ui-carousel';


class Sejarah extends Component{
       render(){
           return(
               <div >
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
                  <h1>Selamat datang di Halaman sejarah</h1>
                       <img src="/4.jpg" />
                   </main>
                   </Mui.Grid>
                   <Mui.Grid item xs={6}>
                     <p align="center">Sejarah</p><br/>
                     <p>SMK BINA NUSANTARA SEMARANG adalah sekolah menenengah kejuruan yang berdiri pada tanggal 18 mei 2010 dibawah Yayasan Bina Nusantara yang di ketuai Drs.Sugiyono,M.M dan Sugiyarto,S.Kom, M.M.</p>
                     <p>SMK BINA NUSANTARA SEMARANG beralamat di jl.Kemantren No.5 wonosari Ngaliyan Semarang. Dengan luas lokasi  4004 m2, sarana dan prasarana yang memadai, suasana belajar yang nyaman karena berada di tengah perkamampungan masyarakat yang jauh dari kebisingan.</p>
                     <p>Jumlah siswa SMK BINA NUSANTARA mengalami peningkatan dari tahun ketahun. Mayoritas siswa berasal dari lingkungan sekitar, Kota Semarang, dan luar Semarang. Siswa berasal dari keluarga dengan perekonomian menengah kebawah.</p>
                    </Mui.Grid>
                    <Mui.Grid item xs={6}>
                    <p align="center">Tujuan SMK BINA NUSANTARA</p><br/>
                    <p>1. Mempersiapkan tamatan yang memiliki kepribadian dan berakhlak mulia sebagai tenaga kerja tingkat menengah yang kompeten sesuai program keahlian pilihannya</p>
                    <p>2. Membekali peserta didik untuk berkarir, mandiri yang mampu beradaptasi dilingkungan kerja sesuai bidangnya dan mampu menghadapi perubahan yang terjadi di masyarakat.</p>
                    <p>3. Membekali peserta didik sikap profesional untuk mengembangkan diri dan mampu berkompetisi di tingkat nasional, regional dan internasional.</p>
                  </Mui.Grid>
                    <div align="center">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/5rvO2cpzZZM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                  </Mui.Grid>
                </Mui.Container>
               </div>
           )
       }
}

export default Sejarah;