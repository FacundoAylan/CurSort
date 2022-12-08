import Home from './Component/Home/home';
//import Profile from './Component/Profile/Profile';
import { Route} from "react-router-dom";
import Form from './Component/Form/Form'
import Detalle from './Component/detalle/detalle';
import{Container} from "@chakra-ui/react";

function App() {
  return (
    <Container background='gray' maxW='100%' p={0}>
      <Route exact path="/" component={Home} />
      <Route path="/crear" component={Form} />
      <Route path="/detalle/:id" component={Detalle} />

    </Container>
)}

export default App;
