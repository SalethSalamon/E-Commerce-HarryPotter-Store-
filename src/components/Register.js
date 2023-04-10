import React from 'react'

function Register() {
    return (
        <div> 
             <div className="modal fade" id="reg-modal" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="modal-title"> Get the latest updates</h5>
                        <button className="btn-close" type="button" data-bs-dismiss="modal"></button>
                    </div>
                    <div className="modal-body">
                        <p>Register for Regular Updates for Prices & Offers! in Mail and Whatsapp</p>
                        <label htmlFor="modal-email" className="form-label">Your Email Address</label>
                        <input type="email" className="form-control" id="modal-email"
                            placeholder="e.g. harrypotter@example.com" />

                        <label htmlFor="modal-text" className="form-label mt-3">Your Whatsapp Number</label>
                        <input type="text" className="form-control" id="modal-text" placeholder="e.g. 1234567890" />
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        </div></div>
    )
}

export default Register