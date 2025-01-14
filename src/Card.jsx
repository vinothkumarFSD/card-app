import React from "react";

const Card = () => {
    return (
        <section className="pricing py-5">
            <div className="container">
                <div className="row">
                    {/* first column */}
                    <div className="col-lg-4">
                        <div className="card mb-5 mb-lg-0">
                            <div className="card-body">
                                <h5 className="card-title text-muted text-uppercase text-center">Free</h5>
                                <h6 className="card-price text-center">$0<span className="period">/month</span></h6>
                                <hr />
                                <ul className="fa-ul">
                                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Single User</li>
                                    <li><span className="fa-li"><i className="fas fa-check"></i></span>5GB Storage</li>
                                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Public Projects</li>
                                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Community Access</li>
                                    <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Unlimited Private Projects</li>
                                    <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Dedicated Phone Support</li>
                                    <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Free Subdomain</li>
                                    <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Monthly Status Reports</li>
                                </ul>
                                <div className="d-grid text-center">
                                    <a href="#" className="btn btn-primary btn-block text-uppercase">Button</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* second column */}
                    <div className="col-lg-4">
                        <div className="card mb-5 mb-lg-0">
                            <div className="card-body">
                                <h5 className="card-title text-muted text-uppercase text-center">Plus</h5>
                                <h6 className="card-price text-center">$9<span className="period">/month</span></h6>
                                <hr />
                                <ul className="fa-ul">
                                    <li><span className="fa-li"><i className="fas fa-check"></i></span>5 User</li>
                                    <li><span className="fa-li"><i className="fas fa-check"></i></span>50GB Storage</li>
                                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Public Projects</li>
                                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Community Access</li>
                                    <li><span className="fa-li"><i className="fas fa-times"></i></span>Unlimited Private Projects</li>
                                    <li><span className="fa-li"><i className="fas fa-times"></i></span>Dedicated Phone Support</li>
                                    <li><span className="fa-li"><i className="fas fa-times"></i></span>Free Subdomain</li>
                                    <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Monthly Status Reports</li>
                                </ul>
                                <div className="d-grid text-center">
                                    <a href="#" className="btn btn-primary btn-block text-uppercase">Button</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* third column */}
                    <div className="col-lg-4">
                        <div className="card mb-5 mb-lg-0">
                            <div className="card-body">
                                <h5 className="card-title text-muted text-uppercase text-center">Pro</h5>
                                <h6 className="card-price text-center">$49<span className="period">/month</span></h6>
                                <hr />
                                <ul className="fa-ul">
                                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited User</li>
                                    <li><span className="fa-li"><i className="fas fa-check"></i></span>150GB Storage</li>
                                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Public Projects</li>
                                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Community Access</li>
                                    <li><span className="fa-li"><i className="fas fa-times"></i></span>Unlimited Private Projects</li>
                                    <li><span className="fa-li"><i className="fas fa-times"></i></span>Dedicated Phone Support</li>
                                    <li><span className="fa-li"><i className="fas fa-times"></i></span>Unlimited Free Subdomain</li>
                                    <li><span className="fa-li"><i className="fas fa-times"></i></span>Monthly Status Reports</li>
                                </ul>
                                <div className="d-grid text-center">
                                    <a href="#" className="btn btn-primary btn-block text-uppercase">Button</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Card; 