import Home from './Component/home/home';
//import Profile from './Component/Profile/Profile';
import { Route} from "react-router-dom";
import Form from './Component/Form/Form'
import Load from './Component/load/load'
import Detalle from './Component/detalle/detalle';
import Profile from './Component/Profile/Profile';

function App() {
  return (
    <>
      <Route path="/" component={Load} />
      <Route path="/home" component={Home} />
      <Route path="/crear" component={Form} />
      <Route path="/detalle" component={Detalle} />
      <Route path="/disable/" component={Profile}/>
    </>
)}

export default App;
