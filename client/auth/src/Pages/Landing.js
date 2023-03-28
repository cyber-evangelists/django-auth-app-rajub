import React from 'react'
import axios from 'axios'
import { useState } from 'react';

const Landing = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/login/', { email, password });
      const { status, user, message } = response.data;

      if (status === 'success') {
        console.log('User authenticated:', user);
        // Handle successful authentication
      } else {
        console.error('Authentication error:', message);
        // Handle authentication error
      }
    } catch (error) {
      console.error('Request error:', error.message);
      // Handle request error
    }
  };
  return (
    <div>
      <header id="header">
        <div class="container-fluid">

          <div class="logo">
            <h1><a href="index.html">Cyber Evangalists</a></h1>


          </div>

          <button type="button" class="nav-toggle"><i class="bx bx-menu"></i></button>
          <nav class="nav-menu">
            <ul>
              <li class="active"><a href="#header" class="scrollto">Home</a></li>
              <li><a href="#about" class="scrollto">About Us</a></li>
              <li><a href="#why-us" class="scrollto">Why Us</a></li>
              <li class="drop-down"><a href="">Drop Down</a>
                <ul>
                  <li><a href="#">Drop Down 1</a></li>
                  <li class="drop-down"><a href="#">Drop Down 2</a>
                    <ul>
                      <li><a href="#">Deep Drop Down 1</a></li>
                      <li><a href="#">Deep Drop Down 2</a></li>
                      <li><a href="#">Deep Drop Down 3</a></li>
                      <li><a href="#">Deep Drop Down 4</a></li>
                      <li><a href="#">Deep Drop Down 5</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Drop Down 3</a></li>
                  <li><a href="#">Drop Down 4</a></li>
                  <li><a href="#">Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#contact" class="scrollto">Contact Us</a></li>
            </ul>
          </nav>

        </div>
      </header>

      <section id="hero">
        <div class="hero-container">
          <h1>Welcome to Cyber Evangalists</h1>
          <h2>Please, fill out the for below to be notified for the latest updates!</h2>

          <form onSubmit={handleSubmit}>
            <div class="row no-gutters">
              <div class="col-md-6 form-group pr-md-1">
                <input type="email" name="name" class="form-control" id="name" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div class="col-md-6 form-group pl-md-1">
                <input type="password" class="form-control" name="password" id="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </div>
            </div>

            <div class="my-3">
              <div class="loading">Loading</div>
              <div class="error-message"></div>
              <div class="sent-message">Your notification request was sent. Thank you!</div>
            </div>
            <div class="text-center"><button type="submit">Login!</button></div>
          </form>
        </div>
      </section>

      <main id="main">


        <section id="about" class="about">
          <div class="container">

            <div class="row">
              <div class="col-lg-6">
                <img src="assets/img/about-img.jpg" class="img-fluid" alt="" />
              </div>
              <div class="col-lg-6 pt-4 pt-lg-0">
                <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                <p class="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </p>
                <ul>
                  <li><i class="bx bx-check-double"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                  <li><i class="bx bx-check-double"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                  <li><i class="bx bx-check-double"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                </ul>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum
                </p>
              </div>
            </div>

          </div>
        </section>


        <section id="why-us" class="why-us section-bg">
          <div class="container">

            <div class="row">
              <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div class="card">
                  <img src="assets/img/why-us-1.jpg" class="card-img-top" alt="..." />
                  <div class="card-icon">
                    <i class="bx bx-book-reader"></i>
                  </div>
                  <div class="card-body">
                    <h5 class="card-title"><a href="">Our Mission</a></h5>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div class="card">
                  <img src="assets/img/why-us-2.jpg" class="card-img-top" alt="..." />
                  <div class="card-icon">
                    <i class="bx bx-calendar-edit"></i>
                  </div>
                  <div class="card-body">
                    <h5 class="card-title"><a href="">Our Plan</a></h5>
                    <p class="card-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div class="card">
                  <img src="assets/img/why-us-3.jpg" class="card-img-top" alt="..." />
                  <div class="card-icon">
                    <i class="bx bx-landscape"></i>
                  </div>
                  <div class="card-body">
                    <h5 class="card-title"><a href="">Our Vision</a></h5>
                    <p class="card-text">Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia magni dolores eos qui ratione voluptatem sequi nesciunt Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet. </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>


        <section class="faq">
          <div class="container">

            <div class="section-title">
              <h2>Frequenty Asked Questions</h2>
            </div>

            <ul class="faq-list">

              <li>
                <a data-bs-toggle="collapse" class="collapsed" data-bs-target="#faq1">Non consectetur a erat nam at lectus urna duis? <i class="bx bx-down-arrow-alt icon-show"></i><i class="bx bx-x icon-close"></i></a>
                <div id="faq1" class="collapse" data-bs-parent=".faq-list">
                  <p>
                    Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                  </p>
                </div>
              </li>

              <li>
                <a data-bs-toggle="collapse" data-bs-target="#faq2" class="collapsed">Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque? <i class="bx bx-down-arrow-alt icon-show"></i><i class="bx bx-x icon-close"></i></a>
                <div id="faq2" class="collapse" data-bs-parent=".faq-list">
                  <p>
                    Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                  </p>
                </div>
              </li>

              <li>
                <a data-bs-toggle="collapse" data-bs-target="#faq3" class="collapsed">Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi? <i class="bx bx-down-arrow-alt icon-show"></i><i class="bx bx-x icon-close"></i></a>
                <div id="faq3" class="collapse" data-bs-parent=".faq-list">
                  <p>
                    Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                  </p>
                </div>
              </li>

              <li>
                <a data-bs-toggle="collapse" data-bs-target="#faq4" class="collapsed">Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla? <i class="bx bx-down-arrow-alt icon-show"></i><i class="bx bx-x icon-close"></i></a>
                <div id="faq4" class="collapse" data-bs-parent=".faq-list">
                  <p>
                    Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                  </p>
                </div>
              </li>

              <li>
                <a data-bs-toggle="collapse" data-bs-target="#faq5" class="collapsed">Tempus quam pellentesque nec nam aliquam sem et tortor consequat? <i class="bx bx-down-arrow-alt icon-show"></i><i class="bx bx-x icon-close"></i></a>
                <div id="faq5" class="collapse" data-bs-parent=".faq-list">
                  <p>
                    Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in
                  </p>
                </div>
              </li>

              <li>
                <a data-bs-toggle="collapse" data-bs-target="#faq6" class="collapsed">Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor? <i class="bx bx-down-arrow-alt icon-show"></i><i class="bx bx-x icon-close"></i></a>
                <div id="faq6" class="collapse" data-bs-parent=".faq-list">
                  <p>
                    Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Nibh tellus molestie nunc non blandit massa enim nec.
                  </p>
                </div>
              </li>

            </ul>

          </div>
        </section>

        <section id="contact" class="contact section-bg">
          <div class="container">

            <div class="section-title">
              <h2>Contact Us</h2>
            </div>

            <div class="row justify-content-center">

              <div class="col-lg-3 col-md-5 mb-5 mb-md-0">


                <div class="social-links">
                  <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
                  <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
                  <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
                  <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
                </div>

              </div>

              <div class="col-lg-5 col-md-7">
                <form action="forms/contact.php" method="post" role="form" class="php-email-form">
                  <div class="form-group">
                    <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required />
                  </div>
                  <div class="form-group mt-3">
                    <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required />
                  </div>
                  <div class="form-group mt-3">
                    <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required />
                  </div>
                  <div class="form-group mt-3">
                    <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                  </div>
                  <div class="my-3">
                    <div class="loading">Loading</div>
                    <div class="error-message"></div>
                    <div class="sent-message">Your message has been sent. Thank you!</div>
                  </div>
                  <div class="text-center"><button type="submit">Send Message</button></div>
                </form>
              </div>

            </div>

          </div>
        </section>

      </main>



    </div>
  )
}

export default Landing