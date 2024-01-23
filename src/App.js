import logo from './logo.svg';
import './App.css';
import { Header1Component } from './headercomponents/header1.component';
import { Header2Component } from './headercomponents/header2.component';
import Navbar, { Header1MenuComponent } from './headercomponents/headermenu.component';

function App() {
  return (
    <div className="App">
   {/* <Header1Component></Header1Component>
   <Header2Component></Header2Component>
   <Header1MenuComponent></Header1MenuComponent> */}
   <Navbar></Navbar>
   <Header2Component></Header2Component>
    </div>
  );
}

export default App;
