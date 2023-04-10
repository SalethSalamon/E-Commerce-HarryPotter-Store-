import React from 'react'

function Footer() {
  return (
    <div>
        <section className="footer bg-light ">
        <div className="container">
            <div className="text-center">
                <h2>Stay in the Loop</h2>
                <p className="lead">Get the latest updates as they happen...</p>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-8 text-center">
                    <p className="text-muted my-4">

                    </p>
                    <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#reg-modal">
                        Register for Updates
                    </button>
                </div>
            </div>
        </div>
    </section>

    </div>
  )
}

export default Footer