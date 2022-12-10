import Home from './Component/Home/home';
//import Profile from './Component/Profile/Profile';
import { Route} from "react-router-dom";
import Form from './Component/Form/Form'
import Detalle from './Component/detalle/detalle';
import{Container} from "@chakra-ui/react";
import Landing from './Component/landing/landing';

function App() {
  return (
    <Container background='black' minH='100%' maxW='100%' p={0}>
      <Route exact path="/" component={Landing} />
      <Route  path="/home" component={Home} />
      <Route path="/crear" component={Form} />
      <Route path="/detalle/:id" component={Detalle} />

    </Container>
)}

export default App;
