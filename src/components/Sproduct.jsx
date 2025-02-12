import React, { useState } from 'react';
// import './App.css'; // Assuming you have the necessary styles in a separate file.

function App() {
  const [mainImage, setMainImage] = useState("images/cloths8.jpeg");

  const changeImage = (imgSrc) => {
    setMainImage(imgSrc);
  };

  const products = [
    { img: "images/cloths8.jpeg", brand: "adidas", title: "Cartoon Astronaut T-Shirts", price: "$78" },
    { img: "images/cloths1.jpeg", brand: "adidas", title: "Cartoon Astronaut T-Shirts", price: "$78" },
    { img: "images/cloths2.jpeg", brand: "adidas", title: "Cartoon Astronaut T-Shirts", price: "$78" },
    { img: "images/cloths3.jpeg", brand: "adidas", title: "Cartoon Astronaut T-Shirts", price: "$78" }
  ];

  return (
    <div>

      {/* Product Details */}
      <section id="prodetails" className="section-p1">
        <div className="single-pro-image">
          <img src={mainImage} width="100%" id="MainImg" alt="" />
          <div className="small-img-group">
            <div className="small-img-col" onClick={() => changeImage("images/shirt1.jpeg")}>
              <img src="images/shirt1.jpeg" width="100%" className="small-img" alt="" />
            </div>
            <div className="small-img-col" onClick={() => changeImage("images/shirt2.jpeg")}>
              <img src="images/shirt2.jpeg" width="100%" className="small-img" alt="" />
            </div>
            <div className="small-img-col" onClick={() => changeImage("images/shirt3.jpeg")}>
              <img src="images/shirt3.jpeg" width="100%" className="small-img" alt="" />
            </div>
            <div className="small-img-col" onClick={() => changeImage("images/shirt4.jpeg")}>
              <img src="images/shirt4.jpeg" width="100%" className="small-img" alt="" />
            </div>
          </div>
        </div>

        <div className="single-pro-details">
          <h6>Home / T-shirt</h6>
          <h4>Men's Fashion T Shirt</h4>
          <h2>$139.00</h2>
          <select>
            <option>Select Size</option>
            <option>XL</option>
            <option>XXL</option>
            <option>Small</option>
            <option>Large</option>
          </select>
          <input type="number" value="1" />
          <button className="normal">Add To Cart</button>
          <h4>Product Details</h4>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, sequi quaerat quisquam rem aut quia blanditiis a molestias...</span>
        </div>
      </section>

      {/* Product List */}
      <section id="product1" className="section-p1">
        <h2>New Arrivals</h2>
        <p>Summer Collection New Modern Design</p>
        <div className="pro-container">
          {products.map((product, index) => (
            <div key={index} className="pro">
              <img src={product.img} alt={product.title} />
              <div className="des">
                <span>{product.brand}</span>
                <h5>{product.title}</h5>
                <div className="star">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <h4>{product.price}</h4>
              </div>
              <a href="#"><i className="fas fa-shopping-cart cart"></i></a>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section id="newsletter" className="section-p1 section-m1">
        <div className="newstext">
          <h4>Sign Up For Newsletters</h4>
          <p>Get E-mail updates about our latest shop and <span>special offers.</span></p>
        </div>
        <div className="form">
          <input type="text" placeholder="Your email address" />
          <button className="normal">Sign Up</button>
        </div>
      </section>

    </div>
  );
}

export default App;
