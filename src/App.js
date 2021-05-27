import { Switch,Route  } from 'react-router-dom';

import  Home from './Components/Home';
import  About from './Components/About';
import  Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
const App=()=>{
  return (
  <>
      <Navbar/>
       <Switch>
          <Route exact path='/' component={Home}  />
          <Route  path='/about' component={About}  />
          <Route  path='/contact' component={Contact}  />
       </Switch>
       <Footer/>
  </>
  );
}

export default App;
