import React from 'react';
// import './style.css';

const BlogPage = () => {
  return (
    <div>
      <section id="page-header" className="blog-header">
        <h2>#readmore</h2>
        <p>Read all case studies about our products!</p>
      </section>

      <section id="blog">
        <div className="blog-box">
          <div className="blog-img">
            <img src="images1/blog21.jpg" alt="" />
          </div>
          <div className="blog-details">
            <h4>The Cotton- Jercsey Zip up Hoodie</h4>
            <p>
              Kickstarter man braid godard ciloring book. raclette waistcoat
              selfies yrwolf charteuse hexagon irony godard...
            </p>
            <a href="#">CONTINUE READING</a>
          </div>
          <h1>13/01</h1>
        </div>

        <div className="blog-box">
          <div className="blog-img">
            <img src="images1/blog22.jpg" alt="" />
          </div>
          <div className="blog-details">
            <h4>The Cotton- Jercsey Zip up Hoodie</h4>
            <p>
              Kickstarter man braid godard ciloring book. raclette waistcoat
              selfies yrwolf charteuse hexagon irony godard...
            </p>
            <a href="#">CONTINUE READING</a>
          </div>
          <h1>13/01</h1>
        </div>

        <div className="blog-box">
          <div className="blog-img">
            <img src="images1/blog23.jpg" alt="" />
          </div>
          <div className="blog-details">
            <h4>The Cotton- Jercsey Zip up Hoodie</h4>
            <p>
              Kickstarter man braid godard ciloring book. raclette waistcoat
              selfies yrwolf charteuse hexagon irony godard...
            </p>
            <a href="#">CONTINUE READING</a>
          </div>
          <h1>13/01</h1>
        </div>

        <div className="blog-box">
          <div className="blog-img">
            <img src="images1/blog26.jpg" alt="" />
          </div>
          <div className="blog-details">
            <h4>The Cotton- Jercsey Zip up Hoodie</h4>
            <p>
              Kickstarter man braid godard ciloring book. raclette waistcoat
              selfies yrwolf charteuse hexagon irony godard...
            </p>
            <a href="#">CONTINUE READING</a>
          </div>
          <h1>13/01</h1>
        </div>

        <div className="blog-box">
          <div className="blog-img">
            <img src="images1/blog25.jpg" alt="" />
          </div>
          <div className="blog-details">
            <h4>The Cotton- Jercsey Zip up Hoodie</h4>
            <p>
              Kickstarter man braid godard ciloring book. raclette waistcoat
              selfies yrwolf charteuse hexagon irony godard...
            </p>
            <a href="#">CONTINUE READING</a>
          </div>
          <h1>13/01</h1>
        </div>
      </section>

      <section id="pagination" className="section-p1">
        <a href="#">1</a>
        <a href="#">2</a>
        <a href="#">
          <i className="fas fa-arrow-right"></i>
        </a>
      </section>

      <section id="newsletter" className="section-p1 section-m1">
        <div className="newstext">
          <h4>Sign Up For Newsletters</h4>
          <p>
            Get E-mail updates about our latest shop and <span>special offers.</span>
          </p>
        </div>
        <div className="form">
          <input type="text" placeholder="Your email address" />
          <button className="normal">Sign Up</button>
        </div>
      </section>

  
    </div>
  );
};

export default BlogPage;
