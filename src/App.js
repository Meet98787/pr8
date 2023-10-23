// import logo from './logo.svg';
// import './App.css';
// import {Demo} from './component/Demo';
// import Demo2 from './component/Demo2';
// import FunctionDemo from './component/FunctionDemo';
import Topbar from './bootstap/Topbar';
import Header from './bootstap/Header';
import FunctionFilter from './component/FunctionFilter';
import Hero from './bootstap/Hero';
// import About from './bootstap/About';
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
import FormValid from './PR6/FormValid';
import Comment from './PR6/Comment';
import Curd from './component/test/PR7/Curd';
import Curdpr from './component/PR7/Curdpr';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nevbar from './component/Rutering/Nevbar';
import Home from './component/Rutering/Home';
import Students from './component/Rutering/Students';
import StudentDetail from './component/Rutering/StudentDetail';
import Page404 from './component/Rutering/Page404';
import EditStudent from './component/Rutering/EditStudent';
import AddStudent from './component/Rutering/AddStudent';
import Login from './component/Rutering/Login';
import Signup from './component/Rutering/Signup';
import { useEffect, useState } from 'react';
import Prectical from './component/test2/Prectical';






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
  const [activeUser ,setActiveUser]=useState(true)

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


    // <Timewatch/>
    // <FormValid/>
  
    // <Comment/>
    // <Comment/>
    // <Curd/>
    // <Curdpr/>
    // <>
    // <BrowserRouter>
    // <Nevbar activeUser={activeUser}/>
    // <Routes>
    //   <Route path="/" element={<Home/>}/>
    //   <Route path="/student" element={<Students/>}/>
    //   <Route path="/student/edit/:id" element={<EditStudent/>}/>
    //   <Route path="/student/view/:id" element={<StudentDetail/>}/>
    //   <Route path="/student/addstudent" element={<AddStudent/>}/>
    //   <Route path="/login" element={<Login activeUser={activeUser} setActiveUser={setActiveUser}/>}/>
    //   <Route path="/signup" element={<Signup/>}/>

    //   <Route path="*" element={<Page404/>}/>
    // </Routes>
    // </BrowserRouter>
    // </>
    <Prectical/>
  )




}

export default App;
