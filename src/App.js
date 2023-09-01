// import logo from './logo.svg';
// import './App.css';
// import {Demo} from './component/Demo';
// import Demo2 from './component/Demo2';
// import FunctionDemo from './component/FunctionDemo';
import FunctionFilter from './component/FunctionFilter';





function App() {
  const data ={
    name:'meet', lastname:'lakhani'
  }
  return (
    <div>
    {/* <Demo {...data}/> */}
    {/* <Demo2/> */}
    {/* <FunctionDemo/> */}
    <FunctionFilter/>

    </div>
  )


}

export default App;
