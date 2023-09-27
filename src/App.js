// import logo from './logo.svg';
// import './App.css';
// import {Demo} from './component/Demo';
// import Demo2 from './component/Demo2';
// import FunctionDemo from './component/FunctionDemo';
import Topbar from './bootstap/Topbar';
import Header from './bootstap/Header';
import FunctionFilter from './component/FunctionFilter';
import Hero from './bootstap/Hero';
import About from './bootstap/About';
import Services from './bootstap/Services';
import ListGroup from './bootstap/ListGroup';
import Slider from './bootstap/Slider';
import Footer from './bootstap/Footer';
import Contact from './bootstap/Contact';
import Gallery from './bootstap/Gallery';
import Reservation from './bootstap/Reservation';
import Menu from './bootstap/Menu';
import ProductCard from './component/test/ProductCard';
import ProductSearch from './component/test/ProductSearch';
import Testimonials from './bootstap/Testimonials';
import Chefs from './bootstap/Chefs';
import ProductList from './project4/ProductList';
import List from './component/List';
import UserefExa from './component/UserefExa';
import Timewatch from './component/Timewatch';






function App() {
  const products = [
    {
      name: "Nokia",
      price: "100$",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-1gO0Hwa_Bx3Y0xuu1vLaaIa_JIlaELdXpw&usqp=CAU"
  }, {
      name: "samsung",
      price: "200$",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6dVM7i3S2KKMX1jB1OsVFwMr03OSOG2JuPA&usqp=CAU"
  }, {
      name: "Vivo",
      price: "200$",
      img:"https://cdn1.smartprix.com/rx-ieBu50dsl-w1200-h1200/eBu50dsl.jpg"
  },
  {
      name: "Apple",
      price: "899$",
      img:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204"
  },
  {
      name: "LG",
      price: "400$",
      img:"https://i.gadgets360cdn.com/products/large/lg-wing-1-800x800-1600148741.jpg"
  },
  {
      name: "Mi",
      price: "999$",
      img:"https://cdn1.smartprix.com/rx-ijqsTjZRe-w1200-h1200/jqsTjZRe.jpg"
  }
    // Add more products here
  ];
  
  return (
    // fot bootstap project


    // <div>

    // <Topbar/>
    // <Header/>
    // <Hero/>
    // <About/>
    // <Services/>
    // <Menu/>
    // {/* <ListGroup/> */}
    // <Slider/>
    // <Reservation/>
    // <Testimonials/>
    // <Gallery/>
    // <Chefs/>
    // <Contact/>
    // <Footer/>              

    // </div>




      // for test
    // <ProductSearch products = {products}/>


    // for pr4
    // {/* <ProductSearch products = {products}/> */}
    // {/* <Pagination products = {products}/> */}
    // {/* <ProductList/> */}


    // {/* <ProductSearch/> */}


    // list
    // <List/>


    <Timewatch/>

  )




}

export default App;
