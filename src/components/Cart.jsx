import React from 'react';
// import './App.css'; // Assuming you are putting your styles in App.css

const App = () => {
  return (
    <div>

      <section id="page-header" className="about-header">
        <h2>#let's_talk</h2>
        <p>Leave A MESSAGE, We love to hear from you!</p>
      </section>

      <section id="cart" className="section-p1">
        <table width="100%">
          <thead>
            <tr>
              <td>Remove</td>
              <td>Image</td>
              <td>Product</td>
              <td>Price</td>
              <td>Quantity</td>
              <td>Subtotal</td>
            </tr>
          </thead>
          <tbody>
            {['shirt6', 'shirt5', 'shirt3'].map((shirt, index) => (
              <tr key={index}>
                <td><i className="far fa-times-circle"></i><a href="#"></a></td>
                <td><img src={`images/${shirt}.jpeg`} alt="" /></td>
                <td>Cartoon Astronaut T-Shirts</td>
                <td>$118.19</td>
                <td><input type="number" value="1" /></td>
                <td>$118.19</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section id="cart-add" className="section-p1">
        <div id="coupon">
          <h3>Apply Coupon</h3>
          <div>
            <input type="text" placeholder="Enter Your Coupon" />
            <button className="normal">Apply</button>
          </div>
        </div>
        <div id="subtotal">
          <h3>Cart Totals</h3>
          <table>
            <tr>
              <td>Cart Subtotal</td>
              <td>$ 335</td>
            </tr>
            <tr>
              <td>Shipping</td>
              <td>Free</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>$ 335</td>
            </tr>
          </table>
          <button className="normal">Process to checkout</button>
        </div>
      </section>

    </div>
  );
};

export default App;
