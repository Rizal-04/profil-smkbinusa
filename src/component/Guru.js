import {Component} from 'react';
import * as Mui from '@material-ui/core';
import * as Micon from '@material-ui/icons';
import Carousel from 'react-material-ui-carousel';


class Guru extends Component{
       render(){
           return(
               <div align="center">
                <Mui.Container fixed>
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
                  <h1>Guru-Guru SMK BINUS SEMARANG</h1>
                    <table border="2" >
                        <tr>
                            <th  width="20" bgcolor="green" >No</th>
                            <th width="400"colspan="2" bgcolor="green" >Nama Guru</th>
                            <th width="400" bgcolor="green" >Jabatan</th>
                        </tr>
                        <tr>
                            <td bgcolor="#d3d3d3">1.</td>
                            <td  bgcolor="#d3d3d3"><img src="https://binusasmg.sch.id/wp-content/uploads/2020/04/Eka-225x300-1.jpg" width="100" height="121"/></td>
                            <td  bgcolor="#d3d3d3">Eka Aribawa,S.Pd.I</td>
                            <td bgcolor="#d3d3d3">Kepala Sekolah</td>
                        </tr>
                        <tr>
                            <td bgcolor="#d3d3d3">2.</td>
                            <td  bgcolor="#d3d3d3"><img src="https://binusasmg.sch.id/wp-content/uploads/2020/04/Septy-225x300-1.jpg" width="100" height="121"/></td>
                            <td  bgcolor="#d3d3d3">Septi Muslikhah</td>
                            <td bgcolor="#d3d3d3">Waka Kurikulum</td>
                        </tr>
                        <tr>
                            <td bgcolor="#d3d3d3">3.</td>
                            <td  bgcolor="#d3d3d3"><img src="https://binusasmg.sch.id/wp-content/uploads/2020/04/Ari-dwi-225x300-1.jpg" width="100" height="121"/></td>
                            <td  bgcolor="#d3d3d3">Ari Dwi Handoko,S.Pd</td>
                            <td bgcolor="#d3d3d3">Waka Kesiswaan</td>
                        </tr>
                        <tr>
                            <td bgcolor="#d3d3d3">4.</td>
                            <td  bgcolor="#d3d3d3"><img src="https://binusasmg.sch.id/wp-content/uploads/2020/04/Khusnul-225x300-1.jpg" width="100" height="121"/></td>
                            <td  bgcolor="#d3d3d3">Khusnul Khotima,S.Pd</td>
                            <td bgcolor="#d3d3d3">Waka Sarana dan Prasarana</td>
                        </tr>
                        <tr>
                            <td bgcolor="#d3d3d3">5.</td>
                            <td  bgcolor="#d3d3d3"><img src="https://binusasmg.sch.id/wp-content/uploads/2020/04/Askuriati-225x300-1.jpg" width="100" height="121"/></td>
                            <td  bgcolor="#d3d3d3">Askuriat,S.E</td>
                            <td bgcolor="#d3d3d3">Waka SDM</td>
                        </tr>
                        <tr>
                            <td bgcolor="#d3d3d3">7.</td>
                            <td  bgcolor="#d3d3d3"><img src="https://binusasmg.sch.id/wp-content/uploads/2020/04/Arga-225x300-1.jpg" width="100" height="121"/></td>
                            <td  bgcolor="#d3d3d3">Arga Dian SW,S.Kom</td>
                            <td bgcolor="#d3d3d3">K3 Teknik Komputer dan Jaringan</td>
                        </tr>
                        <tr>
                            <td bgcolor="#d3d3d3">8.</td>
                            <td  bgcolor="#d3d3d3"><img src="https://binusasmg.sch.id/wp-content/uploads/2020/09/linda-rotated.jpeg" width="100" height="121"/></td>
                            <td  bgcolor="#d3d3d3">Isti Malinda,S.Pd</td>
                            <td bgcolor="#d3d3d3">K3 Tata Busana</td>
                        </tr>
                        <tr>
                            <td bgcolor="#d3d3d3">9.</td>
                            <td  bgcolor="#d3d3d3"><img src="https://binusasmg.sch.id/wp-content/uploads/2020/09/wahyu-rotated.jpeg" width="100" height="121"/></td>
                            <td  bgcolor="#d3d3d3">Wahyu Ambikawati,S.Pd</td>
                            <td bgcolor="#d3d3d3">K3 Teknik Bisnis Sepeda Motor</td>
                        </tr>
                        <tr>
                            <td bgcolor="#d3d3d3">10.</td>
                            <td  bgcolor="#d3d3d3"><img src="https://binusasmg.sch.id/wp-content/uploads/2020/09/novita-rotated.jpeg" width="100" height="121"/></td>
                            <td  bgcolor="#d3d3d3">Novita Widyastutik,S.Pd</td>
                            <td bgcolor="#d3d3d3">K3 Akuntansi dan Keuangan Lembaga</td>
                        </tr>
                        <tr>
                            <td bgcolor="#d3d3d3">11.</td>
                            <td  bgcolor="#d3d3d3"><img src="https://binusasmg.sch.id/wp-content/uploads/2020/09/dian-rotated.jpeg" width="100" height="121"/></td>
                            <td  bgcolor="#d3d3d3">Dianing Ratri O,S.Pd</td>
                            <td bgcolor="#d3d3d3">Sekretaris Jurusan Teknik Komputer dan Jaringan</td>
                        </tr>
                        <tr>
                            <td bgcolor="#d3d3d3">12.</td>
                            <td  bgcolor="#d3d3d3"><img src="https://binusasmg.sch.id/wp-content/uploads/2020/09/soim-rotated.jpeg" width="100" height="121"/></td>
                            <td  bgcolor="#d3d3d3">Soimatun,S.Pd</td>
                            <td bgcolor="#d3d3d3">Sekretaris Jurusan Tata Busana</td>
                        </tr>
                        <tr>
                            <td bgcolor="#d3d3d3">13.</td>
                            <td  bgcolor="#d3d3d3"><img src="https://binusasmg.sch.id/wp-content/uploads/2020/09/Rabisan.jpg" width="100" height="121"/></td>
                            <td  bgcolor="#d3d3d3">Tri Rabisan,S.Pd</td>
                            <td bgcolor="#d3d3d3">Sekretaris Jurusan Teknik Bisnis Sepeda Motor</td>
                        </tr>
                        <tr>
                            <td bgcolor="#d3d3d3">14.</td>
                            <td  bgcolor="#d3d3d3"><img src="https://binusasmg.sch.id/wp-content/uploads/2020/09/vega-rotated.jpeg" width="100" height="121"/></td>
                            <td  bgcolor="#d3d3d3">Vega Nurmalita,S.Pd</td>
                            <td bgcolor="#d3d3d3">Sekretaris Jurusan Akuntansi dan Keuangan Lembaga</td>
                        </tr>
                        <tr>
                            <td bgcolor="#d3d3d3">15.</td>
                            <td  bgcolor="#d3d3d3"><img src="https://binusasmg.sch.id/wp-content/uploads/2020/09/taqi-rotated.jpeg" width="100" height="121"/></td>
                            <td  bgcolor="#d3d3d3">Taqius SA,S.Kom</td>
                            <td bgcolor="#d3d3d3">Ka. Lab Jurusan Teknik Komputer dan Jaringan</td>
                        </tr>
                        <tr>
                            <td bgcolor="#d3d3d3">16.</td>
                            <td  bgcolor="#d3d3d3"><img src="https://binusasmg.sch.id/wp-content/uploads/2020/09/aroem-rotated.jpeg" width="100" height="121"/></td>
                            <td  bgcolor="#d3d3d3">Aroem Santi L,S.Pd</td>
                            <td bgcolor="#d3d3d3">Ka. Lab Jurusan Tata Busana</td>
                        </tr>

                        <tr>
                            <td bgcolor="#d3d3d3">17.</td>
                            <td  bgcolor="#d3d3d3"><img src="https://binusasmg.sch.id/wp-content/uploads/2020/04/nono.jpg" width="100" height="121"/></td>
                            <td  bgcolor="#d3d3d3">Nonok Royin Wibowo</td>
                            <td bgcolor="#d3d3d3">Ka. Lab Sekretaris Jurusan Teknik Bisnis Sepeda Motor</td>
                        </tr>
                        <tr>
                            <td bgcolor="#d3d3d3">18.</td>
                            <td  bgcolor="#d3d3d3"><img src="https://binusasmg.sch.id/wp-content/uploads/2020/09/dandun-rotated.jpeg" width="100" height="121"/></td>
                            <td  bgcolor="#d3d3d3">Indah Noviani,S.Pd</td>
                            <td bgcolor="#d3d3d3">Guru Mapel Bahasa Indonesia</td>
                        </tr>
                        <tr>
                            <td bgcolor="#d3d3d3">19.</td>
                            <td  bgcolor="#d3d3d3"><img src="https://binusasmg.sch.id/wp-content/uploads/2020/09/ida-rotated.jpeg" width="100" height="121"/></td>
                            <td  bgcolor="#d3d3d3">Ida Fahru Roziyah,S.Pd</td>
                            <td bgcolor="#d3d3d3">Guru Mapel Bahasa Jawa</td>
                        </tr>
                        <tr>
                            <td bgcolor="#d3d3d3">20.</td>
                            <td  bgcolor="#d3d3d3"><img src="https://binusasmg.sch.id/wp-content/uploads/2020/09/dwi-rotated.jpeg" width="100" height="121"/></td>
                            <td  bgcolor="#d3d3d3">Indah Dwi Putri Banjarsari,S.Pd</td>
                            <td bgcolor="#d3d3d3">Guru Mapel Matematika</td>
                        </tr>
                        <tr>
                            <td bgcolor="#d3d3d3">21.</td>
                            <td  bgcolor="#d3d3d3"><img src="https://binusasmg.sch.id/wp-content/uploads/2020/09/arif-rotated.jpeg" width="100" height="121"/></td>
                            <td  bgcolor="#d3d3d3">Arif Adi Wijaya,S.Pd</td>
                            <td bgcolor="#d3d3d3">Guru Mapel Penjasorkes</td>
                        </tr>
                        <tr>
                            <td bgcolor="#d3d3d3">22.</td>
                            <td  bgcolor="#d3d3d3"><img src="https://binusasmg.sch.id/wp-content/uploads/2020/09/tito-rotated.jpeg" width="100" height="121"/></td>
                            <td  bgcolor="#d3d3d3">Tito Dwi Yulianto,S.Pd</td>
                            <td bgcolor="#d3d3d3">Guru Mapel Bahasa Inggris</td>
                        </tr>
                        <tr>
                            <td bgcolor="#d3d3d3">23.</td>
                            <td  bgcolor="#d3d3d3"><img src="https://binusasmg.sch.id/wp-content/uploads/2020/09/sholeh-rotated.jpeg" width="100" height="121"/></td>
                            <td  bgcolor="#d3d3d3">Muhammad Sholeh,S.Pd.I</td>
                            <td bgcolor="#d3d3d3">Guru Mapel Agama Islam</td>
                        </tr>
                        <tr>
                            <td bgcolor="#d3d3d3">24.</td>
                            <td  bgcolor="#d3d3d3"><img src="https://binusasmg.sch.id/wp-content/uploads/2020/09/ruroh-rotated.jpeg" width="100" height="121"/></td>
                            <td  bgcolor="#d3d3d3">Siti Masruroh,A.Md</td>
                            <td bgcolor="#d3d3d3">Guru Mapel Bahasa Jepang</td>
                        </tr>
                        <tr>
                            <td bgcolor="#d3d3d3">25.</td>
                            <td  bgcolor="#d3d3d3"><img src="https://binusasmg.sch.id/wp-content/uploads/2020/09/ruri-rotated.jpeg" width="100" height="121"/></td>
                            <td  bgcolor="#d3d3d3">Ruri Ayuning Lati,S.Pd</td>
                            <td bgcolor="#d3d3d3">Guru BK</td>
                        </tr>
                        <tr>
                            <td bgcolor="#d3d3d3">26.</td>
                            <td  bgcolor="#d3d3d3"><img src="https://binusasmg.sch.id/wp-content/uploads/2020/09/rufi-rotated.jpeg" width="100" height="121"/></td>
                            <td  bgcolor="#d3d3d3">Rufi Tri Irianti,S.Pd</td>
                            <td bgcolor="#d3d3d3">Guru Mapel Pendidikan Karakter</td>
                        </tr>
                    </table>
                   </Mui.Grid>
                  </Mui.Grid>
                </Mui.Container>
               </div>
           )
       }
}

export default Guru;