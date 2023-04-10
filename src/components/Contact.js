import React from 'react'

function Contact() {
  return (
    <div>
         <section id="contact">
        <div className="container-lg">
            <div className="text-center">
                <h2>Get in Touch</h2>
                <p className="lead">Question to ask? Fill out the form to contact directly</p>
            </div>

            <div className="row justify-content-center my-5">
                <div className="col-lg-6">
                    <form>
                        <label htmlFor="email" className="form-label">Email address</label>
                        <div className="mb-4 input-group">
                            <span className="input-group-text"><i className="bi bi-envelope-fill"></i></span>
                            <input type="email" className="form-control" id="email"
                                placeholder="e.g. harypotter@example.com" required/>
                        </div>

                        <label htmlFor="name" className="form-label">Name</label>
                        <div className="mb-4 input-group">
                            <span className="input-group-text"><i className="bi bi-person-fill"></i></span>
                            <input type="text" className="form-control" id="name" placeholder="e.g. harrypotter"/>
                        </div>

                        <label htmlFor="subject" className="form-label">What is your Question about ?</label>
                        <div className="mb-4 input-group">
                            <span className="input-group-text"><i className="bi bi-chat-right-dots-fill"></i></span>
                            <select className="form-select" id="subject" defaultValue={'DEFAULT'}>
                                <option value="DEFAULT" disabled>Pricing Query</option>
                                <option value="content">Content Query</option>
                                <option value="other">Other Query</option>
                            </select>
                        </div>

                        <div className="form-floating mb-4 mt-5">
                            <textarea id="query" className="form-control"></textarea>
                            <label htmlFor="query" className="form-label">Your Query</label>
                        </div>

                        <div className="mb-4 text-center">
                            <button type="button" className="btn btn-secondary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}
export default Contact;