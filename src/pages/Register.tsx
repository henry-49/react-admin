import React, { Component, SyntheticEvent } from 'react'
import "../Login.css";

 class Register extends Component {

   first_name = '';
   last_name = '';
   email = '';
   password = '';
   password_confirm = '';
   
    submit = (e: SyntheticEvent) => {
      e.preventDefault();

      console.log({
        first_name : this.first_name,
        last_name : this.last_name,
        email : this.email,
        password : this.password,
        password_confirm : this.password_confirm,
      })
    }

  render() {
    return (
      <div className="register">
    <main className="form-signin">
      <form onSubmit={this.submit}>
        
        <h1 className="h3 mb-3 fw-normal">Please Register</h1>

        <div className="form-floating mb-2">
        <label htmlFor="floatingInput">First Name</label>
          <input type="text" className="form-control" placeholder="First Name" required
          onChange={(e) => this.first_name = e.target.value}
          />
        </div>
        <div className="form-floating mb-2">
        <label htmlFor="floatingInput">Last Name</label>
          <input type="text" className="form-control" placeholder="Last Name" required
          onChange={(e) => this.last_name = e.target.value}
          />
        </div>
        <div className="form-floating mb-2">
        <label htmlFor="floatingInput">Email address</label>
          <input type="email" className="form-control" placeholder="name@example.com" required
            onChange={(e) => this.email= e.target.value}
          />
        </div>
        <div className="form-floating">
          <label htmlFor="floatingPassword">Password</label>
            <input type="password" className="form-control" placeholder="Password" required 
              onChange={(e) => this.password = e.target.value}
            />  
        </div>
        <div className="form-floating">
          <label htmlFor="floatingPassword">Password Confirm</label>
            <input type="password" className="form-control" placeholder="PasswordConfirm" required
            onChange={(e) => this.password_confirm = e.target.value}
            />  
        </div>

        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
      </form>
</main>
      </div>
    )
  }
}

export default Register;