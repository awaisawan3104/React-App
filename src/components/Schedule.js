import React from 'react'
import Header from './Header'
import './App.css';

const Schedule = () => (
  <div>
    <Header />
    
    <div className="section-default charity-form">
          <div className="container-fluid">
            <div className="content-stripe-heading"><h1>Connect Stripe</h1><p>Connect your Stripe account to Donaco. </p></div>
            <div className='sign-up'>
                  <div className='step-list'>
                      <div className='step done'><p>Register</p></div>
                      <div className='step current'><p>Charity details</p></div>
                      <div className='step'><p>Charity person details</p></div>
                      <div className='step'><p>Connect Stripe</p></div>    
                  </div>
              <div className='steps'>
              <form>
                <div className='step'></div>
                <div className='step active'>
                  <div className="login-form">
                    <div id="login">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <div className="form-input-box right-box">
                              <input type="text" id="name" className="form-control" required />
                              <label className="form-control-placeholder" for="name">Charity name</label>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <div className="form-input-box right-box">
                              <input type="text" id="charity-d" className="form-control" required />
                              <label className="form-control-placeholder" for="charity-id">Charity ID</label>
                            </div>  
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <div className="form-input-box right-box">
                              <textarea  type="text" id="msg-box" className="form-control" required rows="3" cols="40"></textarea>
                              <label className="form-control-placeholder" for="msg-box">Short description of what you do.</label>
                            </div>  
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='field next'> 
                      <button disabled  className="btn next-btn btn-primary">Next</button>
                  </div>
              </div>
              <div className='step'>
                <div className="login-form">
                  <div id="login">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <div className="form-input-box right-box">
                            <input type="text" id="name" class="form-control" required />
                            <label className="form-control-placeholder" for="name">Name</label>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <div className="form-input-box right-box">
                            <input type="text" id="role" className="form-control" required />
                            <label className="form-control-placeholder" for="role">Role</label>
                          </div>  
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <div className="form-input-box right-box">
                            <input type="text" id="Phone" className="form-control" required />
                            <label className="form-control-placeholder" for="Phone">Phone</label>
                          </div>  
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='field next'> 
                    <button disabled  className="btn pre-btn btn-primary">Previous</button>
                    <button disabled  className="btn next-btn btn-primary">Next</button>
                </div>
              </div>
              <div className='step last-box'>
                <div className='field next'>
                  <a href='' className='btn comp-btn btn-primary'>Connect with Stripe</a>
                </div>
              </div>
            </form> 
          </div>  
         </div>
      </div>
    </div>
  </div>
)

export default Schedule
