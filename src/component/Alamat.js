import {Component} from 'react';
import * as Mui from '@material-ui/core';
import * as Micon from '@material-ui/icons';
import Carousel from 'react-material-ui-carousel';


class Alamat extends Component{
       render(){
           return(
               <div align="center" >
                  <Mui.Grid container spacing={2}>
                  <Mui.Grid item xs={12}><hr/>
                  <Mui.ButtonGroup size="large" color="primary" aria-label="large outlined primary button group">
                        <Mui.Button href="/" >Home</Mui.Button>
                        <Mui.Button href="/sejarah">Sejarah</Mui.Button>
                        <Mui.Button href="/guru">Guru</Mui.Button>
                        <Mui.Button href="/kepalasekolah">Kepala Sekolah</Mui.Button>
                        <Mui.Button href="/jurusan">Jurusan</Mui.Button>
                        <Mui.Button href="/alamat">Alamat</Mui.Button>
                  </Mui.ButtonGroup>
                  <h1>Selamat datang di Halaman alamat</h1>
                  <h3>Lokasi SEKOLAHAN SMK BINA NUSANTARA SEMARANG di bawah ini:</h3>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.285919478718!2d110.29925951421211!3d-6.9755538702419075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e705fdc0235654d%3A0x97b3afe1b2104e70!2sSMK%20Bina%20Nusantara%20Semarang!5e0!3m2!1sid!2sid!4v1605756694924!5m2!1sid!2sid" width="1000" height="750" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                   </Mui.Grid>
                  </Mui.Grid>

               </div>
           )
       }
}

export default Alamat;