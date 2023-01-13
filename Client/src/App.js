import Home from './Component/Home/home';
//import Profile from './Component/Profile/Profile';
import { HashRouter, Route, Switch} from "react-router-dom";
//import Form from './Component/Form/Form'
import CreateCourse from './Component/admin/CreateCourse/CreateCourse'
import Detalle from './Component/detalle/detalle';
import{Container} from "@chakra-ui/react";
import Landing from './Component/landing/landing';
import HomeCart from './Component/ShoppingCart/HomeCart';
import Contact from './Component/contact/contact';
import Admin from './Component/admin/admin';
import Information from './Component/ShoppingCart/Information';
import Payment from './Component/ShoppingCart/Payment';
import Compra from './Component/compra/compra';
import HomeFilter from './Component/Home/homeFilter';
import project from './Component/landing/project/project';
import ProfileEdit from './Component/Profile/profileEdit';
import MyCourses from './Component/mycourses/Mycourses';
import editCourse from './Component/admin/editCourse/editCourse';

function App() {
  return (
    <Container background='#191E29' minH='100vh' maxW='100%' p={0} >
      <Route exact path="/" component={Landing} />
      <Route  path="/home" component={Home} />
      <Route path="/crear" component={CreateCourse}/>
      <Route path="/detalle/:id" component={Detalle} />
      <Route path="/Contact" component={Contact} />
      <Route path="/Admin" component={Admin} />
      <Route exact path="/checkout" component={HomeCart} />
      <Route exact path="/checkout/information" component={Information} />
      <Route exact path="/checkout/payment" component={Payment} />
      <Route path="/course" component={Compra} />
      <Route path="/homefilter" component={HomeFilter} />
      <Route path ="/project" component={project}/>
      <Route path ='/editprofile' component={ProfileEdit}/>
      <Route path ='/mycourses' component={MyCourses}/>
      <Route path ="/editcourse/:id" component={editCourse}/>
    </Container>
)}

export default App;

