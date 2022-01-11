import React, {useState} from "react"; 
import "./Contact.css";


const Contact = () => {
    const [values,setValues] = useState ({
        name : "",
        email : "",
        number : ""
    });

    const {name,email,number} = values;

    const onSubmit = () => {
        //
    }

    const handleChange = name => event =>{
        //
    }

    const createContactForm = () => (
      
        <div className="container-fluid p-5" >
        <div className="jumbotron bg-light text-black text-center py-5 px-1 ">
        <h1 className="display-4 p-2">Contact Us</h1>
        <p className="lead p-2">Contact Us Here!</p>
        <div className="row">
        <div className="col-md-6 offset-sm-3 ">
          
          <form>
          <div className="form-group">
              <label className="text-black">Name</label>
              <input
                onChange={handleChange("name")}
                value={name}
                className="form-control"
                type="name"
              />
            </div>
            <div className="form-group">
              <label className="text-black">Email</label>
              <input
                onChange={handleChange("email")}
                value={email}
                className="form-control"
                type="email"
              />
            </div>

            <div className="form-group">
              <label className="text-black">Number</label>
              <input
                onChange={handleChange("number")}
                value={number}
                className="form-control"
                type="number"
              />
            </div>
            <button onClick={onSubmit} className="btn btn-success btn-block ">
              Submit
            </button>
          </form>
        </div>
      </div>
      </div>
      </div>
      );        
    
    return(
      <div>
      {createContactForm()}
      </div>
    )
    
}

export default Contact;
