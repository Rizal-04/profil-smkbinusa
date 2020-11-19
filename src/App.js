import './App.css';
import {BrowserRouter, Switch, Link} from 'react-router-dom';
import Home from './component/Home';
import Sejarah from './component/Sejarah';
import Guru from './component/Guru';
import Alamat from './component/Alamat';
import Kepalasekolah from './component/Kepalasekolah';
import Jurusan from './component/Jurusan';


function App() {
  return (
     <BrowserRouter>
          <Switch>
              <Link path="/" exact component={Home} />
              <Link path="/sejarah" exact component={Sejarah} />
              <Link path="/guru" exact component={Guru} />
              <Link path="/alamat" exact component={Alamat} />
              <Link path="/kepalasekolah" exact component={Kepalasekolah} />
              <Link path="/jurusan" exact component={Jurusan} />
          </Switch>
     </BrowserRouter>
  );
}

export default App;