import {Component} from 'react';
import * as Mui from '@material-ui/core';
import * as Micon from '@material-ui/icons';
import Carousel from 'react-material-ui-carousel';


class Kepalasekolah extends Component{
       render(){
           return(
               <div>
                   <Mui.Container fixed>
                  <Mui.Grid container spacing={2}>
                  <Mui.Grid item xs={12}><hr/>
                  <main align="center">
                  <Mui.ButtonGroup  align="center" size="large" color="primary" aria-label="large outlined primary button group">
                        <Mui.Button href="/" >Home</Mui.Button>
                        <Mui.Button href="/sejarah">Sejarah</Mui.Button>
                        <Mui.Button href="/guru">Guru</Mui.Button>
                        <Mui.Button href="/kepalasekolah">Kepala Sekolah</Mui.Button>
                        <Mui.Button href="/jurusan">Jurusan</Mui.Button>
                        <Mui.Button href="/alamat">Alamat</Mui.Button>
                  </Mui.ButtonGroup>
                  </main>
                  <h1 align="center">Kepala sekolah BINA NUSANTARA SEMARANG</h1>
                   <main align="center">
                       <img src="https://binusasmg.sch.id/wp-content/uploads/2020/04/Eka-225x300-1.jpg" width="250" height="250" />
                   </main><br/>
                   <p>السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ</p>
                   <p>Alhamdulillahirobbil’alamin puji syukur kepada Allah SWT atas ridho Nya web SMK Bina Nusantara Semarang dapat tersusun dengan baik. Shalawat dan Salam Tercurah kepada Nabi Muhammad SAW yang kita tunggu pertolongannya di Yaumul Qiyamah kelak.</p>
                   <p>SMK Bina Nusantara mempunyai visi untuk menjadi salah satu SMK swasta di Kota Semarang yang tidak hanya dapat dihitung keanggotaannya namun juga diperhitungkan keberadaannya. Terbukti dengan usaha peningkatan kualitas yang dibuktikan dengan kelengkapan sarana prasarana yang menunjang pembelajaran dan pelatihan ketrampilan siswa secara maksimal. Didukung dengan tenaga pendidik dan kependidikan yang berkompeten di bidangnya untuk kemajuan ketrampilan dan karakter siswa-siswanya.</p>
                   <p>Dari bidang Kurikulum, SMK Bina Nusantara telah berhasil melaksanakan program link and match dengan Industri  sesuai dengan kompetensi keahlian yang kami miliki. Salah satunya adalah dilaksanakannya kelas Industri yang bekerjasama dengan Astra Honda Motor, Intel Education, PT. Telkom, Excellent Computer dan PT. Apparel One Indonesia, PT. Alfaria Trijaya Tbk dan juga Santren Koding.</p>
                   <p>Dari bidang Kesiswaan, SMK Bina Nusantara menerapkan metode pembinaan yang bertujuan untuk peningkatan karakter siswa untuk menjadi sumber daya yang kompetitif dan berakhlakul karimah.</p>
                   <p>BKK Mitra Binusa adalah organisasi legal yang secara khusus memasarkan lulusan untuk dapat disalurkan di Industri, dan secara umum membantu warga lingkungan sekitar atas informasi lowongan pekerjaan yang ada. Kami berharap dengan adanya website ini dapat memberikan informasi atas keberadaan SMK Bina Nusantara Semarang.</p>
                   <p>وَعَلَيْكُمْ السَّلاَمُ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ</p>
                   </Mui.Grid>
                  </Mui.Grid>
                  </Mui.Container>
               </div>
           )
       }
}

export default Kepalasekolah;