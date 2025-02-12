import React from 'react';
// import './App.css';  // Make sure to adjust the path for your CSS file.



const PageHeader = () => {
    return (
        <section id="page-header">
            <h2>#stayhome</h2>
            <p>Save more with coupons & up to 70% off!</p>
        </section>
    );
}

const Product = ({ imgSrc, productName, price, rating }) => {
    return (
        <div className="pro">
            <img height="400px" src={imgSrc} alt="" />
            <div className="des">
                <span>adidas</span>
                <h5>{productName}</h5>
                <div className="star">
                    {[...Array(rating)].map((_, i) => (
                        <i key={i} className="fas fa-star"></i>
                    ))}
                </div>
                <h4>{price}</h4>
            </div>
            <a href="#"><i className="fas fa-shopping-cart cart"></i></a>
        </div>
    );
}

const ProductList = () => {
    const products = [
        { imgSrc: "images1/home21.jpg", productName: "Cartoon Astronaut T-Shirts", price: "$78", rating: 5 },
        { imgSrc: "images1/home22.jpg", productName: "Cartoon Astronaut T-Shirts", price: "$78", rating: 5 },
        { imgSrc: "images1/home23.jpg", productName: "Cartoon Astronaut T-Shirts", price: "$78", rating: 5 },
        { imgSrc: "images1/home24.jpg", productName: "Cartoon Astronaut T-Shirts", price: "$78", rating: 5 },
        { imgSrc: "images1/home25.jpg", productName: "Cartoon Astronaut T-Shirts", price: "$78", rating: 5 },
        { imgSrc: "images1/home26.jpg", productName: "Cartoon Astronaut T-Shirts", price: "$78", rating: 5 },
        { imgSrc: "images1/home27.jpg", productName: "Cartoon Astronaut T-Shirts", price: "$78", rating: 5 },
        { imgSrc: "images1/home28.jpg", productName: "Cartoon Astronaut T-Shirts", price: "$78", rating: 5 },
        // Add more products as needed
    ];

    return (
        <section id="product1" className="section-p1">
            <div className="pro-container">
                {products.map((product, index) => (
                    <Product key={index} {...product} />
                ))}
            </div>
        </section>
    );
}

const Pagination = () => {
    return (
        <section id="pagination" className="section-p1">
            <a href="#">1</a>
            <a href="#">2</a>
            <a href="#"><i className="fas fa-arrow-right"></i></a>
        </section>
    );
}

const Newsletter = () => {
    return (
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
    );
}



const App = () => {
    return (
        <div>
            <PageHeader />
            <ProductList />
            <Pagination />
            <Newsletter />
        </div>
    );
}

export default App;
