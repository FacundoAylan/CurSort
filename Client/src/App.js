import Home from './Component/home/home';
//import Profile from './Component/Profile/Profile';
import { Route} from "react-router-dom";
import Form from './Component/Form/Form'
import Load from './Component/load/load'
import Detalle from './Component/detalle/detalle';

function App() {
  return (
    <>
      <Route exact path="/" component={Load} />
      <Route path="/home" component={Home} />
      <Route path="/crear" component={Form} />
      <Route path="/detalle/:id" component={Detalle} />
    </>
)}

export default App;
