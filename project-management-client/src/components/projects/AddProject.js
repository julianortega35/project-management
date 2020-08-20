//components/projects/AddProjects.js

import React, { Component } from 'react'
import axios from "axios";

//Comenzaremos construyendo el componente <AddProject />. Este componente mostrará el formulario y se encargará de su envío. 
// Al manejar el envío del formulario, nos referimos al uso de axios para llegar a una ruta back-end y entregar algunos datos enviados desde el frontend 
//(o simplemente podemos decir que los envió el usuario después de completar el formulario y enviarlo).


class AddProject extends Component {
    constructor (props) {
        super(props);
        this.state = { title: "", description: ""};
    }

   handleFormSubmit = event => {
       event.preventDefault();
       const title = this.state.title;
       const description = this.state.description;
       axios
        .post("http://localhost:4000/api/projects", { title, description })
        .then(()=>{
            this.props.getData();
            this.setState({ title: "", description:""});
        })
        .catch(error => console.log(error));
   }; 

   
   handleChange = event => {
       const {name, value} = event.target;
       this.setState({[name]: value});
   };

   render(){
       return(
           <div>
           <form onSubmit={this.handleFormSubmit}>
           <label>Title:</label>
           <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={e => this.handleChange(e)}
           />
           <label>description:</label>
           <textarea 
           name="description"
            value={this.state.description}
            onChange={e => this.handleChange(e)}
            />

            <input type="submit" value="Submit"/>
           </form>
           </div>
       );
   }   
}

export default AddProject;
