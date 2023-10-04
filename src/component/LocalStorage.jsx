import React from 'react'

const LokalStore = () => {
    const [input,setInput] = useState({})
    const [errors,setErrors]= useState({});
    const handleChange = (e) => {
      setInput({...input,[e.target.name]:e.target.value})
    };
    const validate =()=>{
      const erroor ={};
      if(input.name == ""){
        erroor.name =" name is required..."
      }
      if(input.email == ""){
        erroor.email =" email is required..."
      }
      return erroor;
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      setErrors(validate())
    }
    return (
      <center>
        <h1>Validate</h1>
        <form action="" onSubmit={handleSubmit}>
          <input type="text" name='name' placeholder='Enter Your Name' onChange={handleChange}/>
          <br />
          <span>{errors.name ? errors.name : ""}</span>
          <br />
          <input type="text" name='email' placeholder='Enter Your email' onChange={handleChange} />
          <br />
          <span>{errors.email ? errors.email : ""}</span>
          <br/>
          <button>Submit</button>
          <br/>
          <br/>
          {input.name}
          <br/>
  
          {input.email}
        </form>
      </center>
    )
}

export default LokalStore