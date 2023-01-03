import Home from './Component/Home/home';
//import Profile from './Component/Profile/Profile';
import { Route} from "react-router-dom";
import Form from './Component/Form/Form'
import Detalle from './Component/detalle/detalle';
import{Container} from "@chakra-ui/react";
import Landing from './Component/landing/landing';
import HomeCart from './Component/ShoppingCart/HomeCart';
import Contact from './Component/contact/contact';
import Admin from './Component/admin/admin';
import Information from './Component/ShoppingCart/Information';
import Payment from './Component/ShoppingCart/Payment';
import Compra from './Component/compra/compra';
import HomeFilter from './Component/Home/homeFilte';

function App() {
  return (
    <Container background='#191E29' minH='100vh' maxW='100%' p={0} >
      <Route exact path="/" component={Landing} />
      <Route  path="/home" component={Home} />
      <Route path="/crear" component={Form}/>
      <Route path="/detalle/:id" component={Detalle} />
      <Route path="/Contact" component={Contact} />
      <Route path="/Admin" component={Admin} />
      <Route exact path="/checkout" component={HomeCart} />
      <Route exact path="/checkout/information" component={Information} />
      <Route exact path="/checkout/payment" component={Payment} />
      <Route path="/cursos" component={Compra} />
      <Route path="/homefilter" component={HomeFilter} />
      
    </Container>
)}

export default App;
