import React from "react";
// import "./style.css"; // Assuming the CSS file is present

const AboutUsPage = () => {
  return (
    <div>
      {/* Page Header Section */}
      <section id="page-header" className="about-header">
        <h2>#KnowUs</h2>
        <p>Lorem ipsum dolor sit amet consectetur</p>
      </section>

      {/* About Us Section */}
      <section id="about-head" className="section-p1">
        <img src="images1/3.jpg" alt="" />
        <div>
          <h2>Who We Are?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            temporibus error, quis soluta quaerat pariatur, laborum commodi
            numquam nisi optio sequi asperiores eum ullam provident ipsum velit
            officia tenetur facere! Magnam recusandae, hic ad atque sequi
            molestiae voluptatibus excepturi blanditiis accusantium libero,
            perferendis non magni eius corrupti, placeat similique soluta
            dignissimos repudiandae quaerat quidem. Quia nostrum eaque et quis
            doloribus.
          </p>
          <abbr title="">
            Create stunning images with as much or as little control as you like
            thanks to a choice of basic and creative modes
          </abbr>
          <br /><br />
          <marquee bgcolor="#ccc" loop="-1" scrollAmount="5" width="100%">
            Create stunning images with as much or as little control as you like
            thanks to a choice of basic and creative modes.
          </marquee>
        </div>
      </section>

      {/* App Video Section */}
      <section id="about-app" className="section-p1">
        <h1>Download Our <a href="#">App</a></h1>
        <div className="video">
          {/* <video autoplay muted loop>
            <source
              src="images/Prmovies-Pushpa_2_The_Rule_2024_.mkv.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video> */}
          
          <iframe  width="100%" height="600" src="https://www.youtube.com/embed/AXF4WhoDLus" title="Ecommerce -Video animation" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </section>

      {/* Features Section */}
      <section id="feature" className="section-p1">
        <div className="fe-box">
          <img src="images/feature.jpeg" alt="" />
          <h6>Free Shipping</h6>
        </div>
        <div className="fe-box">
          <img src="images/feature2.jpeg" alt="" />
          <h6>Online Order</h6>
        </div>
        <div className="fe-box">
          <img src="images/feature3.jpeg" alt="" />
          <h6>Save Mony</h6>
        </div>
        <div className="fe-box">
          <img src="images/feature4.jpeg" alt="" />
          <h6>Promotions</h6>
        </div>
        <div className="fe-box">
          <img src="images/feature.jpeg" alt="" />
          <h6>Happy Sell</h6>
        </div>
        <div className="fe-box">
          <img src="images/feature6.jpeg" alt="" />
          <h6>E24/7 Support</h6>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="section-p1 section-m1">
        <div className="newstext">
          <h4>Sign Up For Newsletters</h4>
          <p>
            Get E-mail updates about our latest shop and
            <span>special offers.</span>
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

export default AboutUsPage;
