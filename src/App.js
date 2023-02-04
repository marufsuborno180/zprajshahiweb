import logo from './logo.svg';
// Style files
import "../src/assets/scss/style.css"
import {Routes,Route} from 'react-router-dom'
// Components
import Home from './pages/Home';
import Notice from './pages/Notice';
import News from './pages/news';
import History from './pages/History';
import Discribe from './pages/Discribe';
import NoticView from './pages/NoticView';
import OneView from './pages/OneView';
import Citigen from './pages/Citigen';
import Straps from './pages/Straps';
import Member from './pages/Member';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.js';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/notice' element={<Notice/>} />
        <Route path='/notice/details/:id' element={<NoticView/>} />
        <Route path='/news' element={<News/>} />
        <Route path='/history' element={<History/>} />
        <Route path='/letsView' element={<OneView/>} />
        <Route path='/discribe' element={<Discribe/>} />
        <Route path='/citigen' element={<Citigen/>} />
        <Route path='/kmkc' element={<Straps/>} />
        <Route path='/member' element={<Member/>} />
        <Route path='/*' element={<Home/>} />
      </Routes>
    </>
  );
}

export default App;
