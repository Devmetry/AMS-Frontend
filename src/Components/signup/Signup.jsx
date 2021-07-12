import React, { Component } from 'react';
import './signupStyles.css';

export default class Signup extends Component {



    constructor(props) {
        super(props);
        this.state={
            name : '',
            email :'',
            password :'',
            confpw :''
        }
    }
    

    onSubmitHandler = () => {
        alert(JSON.stringify(this.state))
        
        
    }

    onChangeHandler = (e) =>{

        const {name, value}= e.target;
   
        this.setState({
           [name] : value
           
       })
           
    }


    
    render() {
        return (
            <div className="signup-parent">
               
                <div className="signup-form">
                
                    <form onSubmit={this.onSubmitHandler}>
                        <div className="form-group">
                        <label htmlFor="exampleInputName1">Name</label>
                        <input name="name" type="name" onChange={this.onChangeHandler} className="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder="Enter name" value={this.state.name} />
                        </div>
                        
                        <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input name="email" type="email" onChange={this.onChangeHandler} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"  value={this.state.email}/>
                        </div>

                        <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input name="password" type="password" onChange={this.onChangeHandler} className="form-control" id="exampleInputPassword1" placeholder="Password"  value={this.state.password}/>
                        </div>
                        
                        <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Confirm Password</label>
                        <input name="confpw" type="password" onChange={this.onChangeHandler} className="form-control" id="exampleInputPassword1" placeholder="Password"  value={this.state.confpw}/>
                        </div>
                       

                        <button type="submit" className="btn submit-button">Submit</button>
                    </form>
                </div>
                <div className="signup-name">
                    <h1 className = "title-signup">SIGN-UP</h1>
                </div>
            </div>
        )
    }
}
