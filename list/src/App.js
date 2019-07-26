import React, { Component } from 'react';
import './App.css';
import './css/style.css';


class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      userName : '',
      firstName : '',
      lastName : '',
      orders : []
    }
  }


  clickHandler = (event) => {
    event.preventDefault();
    const {orders,userName,firstName,lastName} = this.state;
    
    this.setState({
      orders : [...orders,{textU :userName , id : new Date().getTime(),textF :firstName,textL :lastName }],    
      userName : '',
      firstName : '',
      lastName : '',
    });

    

  }

  changeHandler = ({target}) => {
    
    this.setState({[target.name] : target.value});
  }


  deleteHandler = id => ()=> {
    const {orders} = this.state;
    const idx = orders.findIndex(userName=>userName.id === id);
    orders.splice(idx,1);
    this.setState({orders});
  }

  render(){
    return(

      <div  style = {{display:'flex', alignItems : 'center' , flexDirection :'column'}}>
        <h1>keep list</h1>

        <form style = {{display:'flex'}} onSubmit ={this.clickHandler} >
          <input type = 'text' value = {this.state.userName} onChange = {this.changeHandler} name = 'userName' placeholder = 'userName' />
          <input type = 'text' value = {this.state.firstName}  onChange = {this.changeHandler} name = 'firstName' placeholder = 'First Name' />
          <input type = 'text' value = {this.state.lastName} onChange = {this.changeHandler} name = 'lastName' placeholder = 'Last Name' />
{/*        
          <input type = 'text' value = {this.state.order} onChange = {this.changeHandler} name = 'Sex'  /> */}
       
          <button type="submit" >ADD</button><br/>
      
        </form>
      
       
        
        {this.state.orders.map((item,index) =><div style = {{display:'flex', justifyContent : 'center' }} >
            <span>{item.textU}</span>
            <span>{item.textF}</span>
            <span>{item.textL}</span>
            <span>
              {item.texts}
              <input type="checkbox" defaultChecked={item.texts}  />
            </span>
            <button onClick={this.deleteHandler(item.id)} >X</button>
          </div>
        
                
              
               
                )   } 
            
             
       
        
         
       
      </div>




    );
  }



}

export default App;