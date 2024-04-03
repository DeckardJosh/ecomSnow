import React from 'react';
import { Link } from 'react-router-dom';
import "./AdminLogin.css";

export default function AdminLogin() {
  return (
    <>
        <div className="admin_login_wrapper">
            <h1 className='admin_login_header'>Login:</h1>
            <form className='admin_login_form'>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <div className="form_buttons">
                    <Link to="/admin" className='btn btn-dark btn-md mt-5 me-4'>Login</Link>
                    <Link to="/" className='btn btn-danger btn-md mt-5'>Cancel</Link>
                </div>
            </form>
            <p>For the sake of this demonstration please just press login, no username or password is necessary.</p>
        </div>
    </>
  );
};
