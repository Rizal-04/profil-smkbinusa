import {Component} from 'react';
import * as Mui from '@material-ui/core';
import * as Micon from '@material-ui/icons';
import Carousel from 'react-material-ui-carousel';


class Home extends Component{
       render(){
           return(
               <div align="center">
                  <Mui.Grid container spacing={2}>
                  <Mui.Grid item xs={12}>
                  <Mui.ButtonGroup size="large" color="primary" bgColor="blue" aria-label="large outlined primary button group">
                        <Mui.Button href="/" >Home</Mui.Button>
                        <Mui.Button href="/sejarah">Sejarah</Mui.Button>
                        <Mui.Button href="/guru">Guru</Mui.Button>
                        <Mui.Button href="/kepalasekolah">Kepala Sekolah</Mui.Button>
                        <Mui.Button href="/jurusan">Jurusan</Mui.Button>
                        <Mui.Button href="/alamat">Alamat</Mui.Button>
                  </Mui.ButtonGroup>
                  <h1>Selamat datang di SMK BINA NUSANTARA SEMARANG</h1><hr/>
                  <Carousel>
                       <img src="/3.jpg" width="90%" height="500"/>
                       <img src="/1.jpg" width="90%" height="500"/>
                       <img src="/2.jpg" width="90%" height="500"/>
                   </Carousel>
                   </Mui.Grid>
                  </Mui.Grid>

               </div>
           )
       }
}

export default Home;