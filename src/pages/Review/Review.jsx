import React from "react";
import "./Review.css";
import Navbar from "../../components/Navbar";
import Announcement from "../../components/Announcement";
import Footer from "../../components/Footer";

//Order summary page
const Review = () => {
  return (
    <div>
      <Navbar />
      <Announcement />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Review Your Order</h1>
            <div className="row">
              <div className="col-md-6">
                <h3>Billing Address</h3>
                <p>
                  <strong>Le Duc Long</strong>
                  <br />
                  25 Nguyen Bieu, Ba Dinh, Ha Noi <br />
                  Hanoi, VN 100000
                  <br />
                  Vietnam
                </p>
                <h3>Payment Method</h3>
                <p>Visa ending in 11</p>
                <h3>Order Summary</h3>
                <p>
                  <strong>1 x</strong> The Witcher 3: Wild Hunt
                </p>
                <p>
                  <strong>Quantity:</strong> 1
                </p>
                <p>
                  <strong>Price:</strong> $19.99
                </p>
                <br />
                <hr />
                <br />
                <p>
                  <p>
                    <strong>1 x</strong> FIFA 22
                  </p>
                  <p>
                    <strong>Quantity:</strong> 1
                  </p>
                  <p>
                    <strong>Price:</strong> $29.99
                  </p>
                </p>
                <p>
                  <strong>Tax:</strong> $0.00
                </p>
                <br />
                <hr />
                <br />
                <p>
                  <strong>Total:</strong> $49.99
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    window.location.href = "/success";
                  }}
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Review;
