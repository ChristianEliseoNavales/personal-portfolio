function App() {
  return (
    <>
  <header className="header" id="home">
    <div className="container">
      <ul className="social-icons pt-3">
        <li className="social-item">
          <a className="social-link text-light" target="_blank" href="https://web.facebook.com/christianeliseo.isip">
            <i className="ti-facebook" aria-hidden="true" />
          </a>
        </li>
        <li className="social-item">
          <a className="social-link text-light" target="_blank" href="mailto:cenavalesisip@gmail.com">
            <i className="ti-google" aria-hidden="true" />
          </a>
        </li>
        <li className="social-item">
          <a className="social-link text-light" target="_blank" href="https://github.com/ChristianEliseoNavales">
            <i className="ti-github" aria-hidden="true" />
          </a>
        </li>
      </ul>
      <div className="header-content">
        <h4 className="header-subtitle">Hello, I am</h4>
        <h1 className="header-title">Christian Navales</h1>
        <h6 className="header-mono">BS Information Systems 3</h6>
        <a href="assets/downloadable/APPDEV1-RESUME.pdf" download>
          <button className="btn btn-primary btn-rounded">
            <i className="ti-printer pr-2" />
            Download Resume
          </button>
        </a>

      </div>
    </div>
  </header>
  <nav
    className="navbar sticky-top navbar-expand-lg navbar-light bg-white"
    data-spy="affix"
    data-offset-top={510}
  >
    <div className="container">
      <button
        className="navbar-toggler ml-auto"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div
        className="collapse mt-sm-20 navbar-collapse"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a href="#home" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#resume" className="nav-link">
              Resume
            </a>
          </li>
        </ul>
        <ul className="navbar-nav brand">
          <img src="assets/imgs/avatar1.jpg" alt="" className="brand-img" />
          <li className="brand-txt">
            <h5 className="brand-title">Christian Navales</h5>
            <div className="brand-subtitle">BS Information Systems 3</div>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a href="#skills" className="nav-link">
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a href="#portfolio" className="nav-link">
              Projects
            </a>
          </li>
          <li className="nav-item last-item">
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div className="container-fluid">
    <div id="about" className="row about-section">
      <div className="col-lg-4 about-card">
        <h3 className="font-weight-light">Who am I ?</h3>
        <span className="line mb-5" />
        <h5 className="mb-3">
          A BS Information System Student at La Verdad Christian College!
        </h5>
        <p className="mt-20">
          Enthusiastic Information Systems undergraduate with a strong foundation in software development, coding, and web technologies. I seek to leverage my academic background and technical skills in a challenging role at CGI, contributing to innovative projects and further developing my professional abilities.
        </p>
      </div>
      <div className="col-lg-4 about-card">
        <h3 className="font-weight-light">Personal Info</h3>
        <span className="line mb-5" />
        <ul className="mt40 info list-unstyled">
          <li>
            <span>Birthdate</span> : 04/07/2003
          </li>
          <li>
            <span>Email</span> : cenavalesisip@gmail.com
          </li>
          <li>
            <span>Phone</span> : +(63) 960 417 4887
          </li>
          <li>
            <span>GitHub</span> : ChristianEliseoNavales
          </li>
          <li>
            <span>Address</span> : ADD St., Samapaloc, Apalit, Pampanga.
          </li>
        </ul>
        <ul className="social-icons pt-3">
          <li className="social-item">
            <a className="social-link" target="_blank" href="https://web.facebook.com/christianeliseo.isip">
              <i className="ti-facebook" aria-hidden="true" />
            </a>
          </li>
          <li className="social-item">
            <a className="social-link" target="_blank" href="mailto:cenavalesisip@gmail.com">
              <i className="ti-google" aria-hidden="true" />
            </a>
          </li>
          <li className="social-item">
            <a className="social-link" target="_blank" href="https://github.com/ChristianEliseoNavales">
              <i className="ti-github" aria-hidden="true" />
            </a>
          </li>
        </ul>
      </div>
      <div className="col-lg-4 about-card">
        <h3 className="font-weight-light">My Core Values</h3>
        <span className="line mb-5" />
        <div className="row">
          <div className="col-1 text-danger pt-1">
            <i className="ti-widget icon-lg" />
          </div>
          <div className="col-10 ml-auto mr-3">
            <h6>Integrity</h6>
            <p className="subtitle"> Upholding honesty and strong moral principles in all actions.</p>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-1 text-danger pt-1">
            <i className="ti-paint-bucket icon-lg" />
          </div>
          <div className="col-10 ml-auto mr-3">
            <h6>Empathy</h6>
            <p className="subtitle">Understanding and valuing the feelings and perspectives of others.</p>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-1 text-danger pt-1">
            <i className="ti-stats-up icon-lg" />
          </div>
          <div className="col-10 ml-auto mr-3">
            <h6>Respect</h6>
            <p className="subtitle">Treating others with dignity and recognizing their worth.</p>
            <hr />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*Resume Section*/}
  <section className="section" id="resume">
    <div className="container">
      <h2 className="mb-5">
        <span className="text-danger">My</span> Resume
      </h2>
      <div className="row">
        <div className="col-md-6 col-lg-4">
          <div className="card">
            <div className="card-header">
              <div className="mt-2">
                <h4>Certifications</h4>
                <span className="line" />
              </div>
            </div>
            <div className="card-body">
              <h6 className="title text-danger">2023-2024</h6>
              <p>President's Lister</p>
              <p className="subtitle">
                La Verdad Christian College <br />
                B.S in Information Systems 2nd Year
              </p>
              <hr />
              <h6 className="title text-danger">2022 - 2023</h6>
              <p>President's Lister</p>
              <p className="subtitle">
                La Verdad Christian College <br />
                B.S in Information Systems 1st Year
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="card">
            <div className="card-header">
              <div className="mt-2">
                <h4>Education</h4>
                <span className="line" />
              </div>
            </div>
            <div className="card-body">
              <h6 className="title text-danger">2022 - Present</h6>
              <p>B.S Information Systems</p>
              <p className="subtitle">
                La Verdad Christian College <br />
                McArthur Highway, Sampaloc, Apalit, Pampanga.
              </p>
              <hr />
              <h6 className="title text-danger">2021 - 2022</h6>
              <p>Senior Highschool Graduate</p>
              <p className="subtitle">
                La Verdad Christian School <br />
                McArthur Highway, Sampaloc, Apalit, Pampanga.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="card">
            <div className="card-header">
              <div className="mt-2">
                <h4>Leadership</h4>
                <span className="line" />
              </div>
            </div>
            <div className="card-body">
              <h6 className="title text-danger">2024 - Present</h6>
              <p>Vice President of Internal Affairs</p>
              <p className="subtitle">
                Association of ICT Majors Club <br />
                La Verdad Christian College.
              </p>
              <hr />
              <h6 className="title text-danger">2019 - 2020</h6>
              <p>Lieutenant Colonel</p>
              <p className="subtitle">
                Executive Offier of CAT Officers Batch 2019-2020 <br />
                La Verdad Christian School.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="section bg-dark text-center" id="skills">
    <div className="container">
          <div className="row justify-content-center pb-5">
            <div className="col-md-12 heading-section text-center ftco-animate">
              <h1 className="big big-2"><span className="text-danger">My</span> Skills</h1>
              <p className="skill-intro">
                I have a diverse skill set in web design and development, complemented by strong interpersonal skills for effective collaboration and communication.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 animate-box">
              <div className="progress-wrap ftco-animate">
                <h3>HTML</h3>
                <div className="progress mb-3">
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "95%" }}
                    aria-valuenow={50}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 animate-box">
              <div className="progress-wrap ftco-animate">
                <h3>Leadership</h3>
                <div className="progress mb-3">
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "93%" }}
                    aria-valuenow={50}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 animate-box">
              <div className="progress-wrap ftco-animate">
                <h3>CSS</h3>
                <div className="progress mb-3">
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "90%" }}
                    aria-valuenow={50}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 animate-box">
              <div className="progress-wrap ftco-animate">
                <h3>Communication</h3>
                <div className="progress mb-3">
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "95%" }}
                    aria-valuenow={50}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 animate-box">
              <div className="progress-wrap ftco-animate">
                <h3>JavaScript/JSX</h3>
                <div className="progress mb-3">
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "75%" }}
                    aria-valuenow={50}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 animate-box">
              <div className="progress-wrap ftco-animate">
                <h3>Collaboration</h3>
                <div className="progress mb-3">
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "90%" }}
                    aria-valuenow={50}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
  {/* Portfolio Section */}
  <section className="section bg-custom-gray" id="portfolio">
  <div className="container">
    <h1 className="mb-5">
      <span className="text-danger">My</span> Projects
    </h1>
    <div className="portfolio">
      <div className="filters">
      </div>
      <div className="portfolio-container">
        <div className="col-md-6 col-lg-4 web new">
          <div className="portfolio-item">
            <img
              src="assets/imgs/web-1.png"
              className="img-fluid"
              alt="Download free bootstrap 4 admin dashboard, free bootstrap 4 templates"
            />
            <div className="content-holder">
              <a className="img-popup" href="assets/imgs/web-1.png" />
              <div className="text-holder">
                <h6 className="title">Responsive Website for CIM</h6>
                <p className="project-detail">
                  Developed and redesigned a school website using HTML, CSS, and JavaScript.
                </p>
                <a
                  href="https://drive.google.com/drive/folders/14aj_cmqezjsb76wxoLhAMTca1EGcYMuo" 
                  className="btn btn-preview btn-rounded"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Preview
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 web new">
          <div className="portfolio-item">
            <img
              src="assets/imgs/web-2.png"
              className="img-fluid"
              alt="Download free bootstrap 4 admin dashboard, free bootstrap 4 templates"
            />
            <div className="content-holder">
              <a className="img-popup" href="assets/imgs/web-2.png" />
              <div className="text-holder">
                <h6 className="title">Titans Mobile Hi-Fi Prototype</h6>
                <p className="project-detail">
                  Designed a responsive mobile application that applies a high-fidelity prototyping method using Figma.
                </p>
                <a
                  href="https://www.figma.com/design/BAuUr0bFWlk333vyQ5K50y/SADD?node-id=0-1&t=PwD9WKtqlpfrUITS-1" 
                  className="btn btn-preview btn-rounded"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Preview
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 advertising new">
          <div className="portfolio-item">
            <img
              src="assets/imgs/advertising-2.png"
              className="img-fluid"
              alt="Download free bootstrap 4 admin dashboard, free bootstrap 4 templates"
            />
            <div className="content-holder">
              <a className="img-popup" href="assets/imgs/advertising-2.png" />
              <div className="text-holder">
                <h6 className="title">Web Application Development 2</h6>
                <p className="project-detail">
                  PHP Application that retrieving data from the database using PHP PDO!
                </p>
                <a
                  href="https://github.com/ChristianEliseoIsip/webapp2-final-project"
                  className="btn btn-preview btn-rounded"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Preview
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </section>

  {/* End of portfolio section */}
  <div className="section contact" id="contact">
    <div id="map" className="map" />
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="contact-form-card">
            <h4 className="contact-title">Send a message</h4>
            <form action="">
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Name *"
                  required=""
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="email"
                  placeholder="Email *"
                  required=""
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  placeholder="Message *"
                  rows={7}
                  required=""
                  defaultValue={""}
                />
              </div>
              <div className="form-group ">
                <button type="submit" className="form-control btn btn-primary">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="contact-info-card">
            <h4 className="contact-title">Get in touch</h4>
            <div className="row mb-2">
              <div className="col-1 pt-1 mr-1">
                <i className="ti-mobile icon-md" />
              </div>
              <div className="col-10 ">
                <h6 className="d-inline">
                  Phone : <br />{" "}
                  <span className="text-muted">+(63) 960 417 4887</span>
                </h6>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-1 pt-1 mr-1">
                <i className="ti-map-alt icon-md" />
              </div>
              <div className="col-10">
                <h6 className="d-inline">
                  Address :<br />{" "}
                  <span className="text-muted">
                    ADD St,. Sampaloc, Apalit, Pampanga.
                  </span>
                </h6>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-1 pt-1 mr-1">
                <i className="ti-envelope icon-md" />
              </div>
              <div className="col-10">
                <h6 className="d-inline">
                  Email :<br />{" "}
                  <span className="text-muted">cenavalesisip@gmail.com</span>
                </h6>
              </div>
            </div>
            <ul className="social-icons pt-4">
              <li className="social-item">
                <a className="social-link text-dark" target="_blank" href="https://web.facebook.com/christianeliseo.isip">
                  <i className="ti-facebook" aria-hidden="true" />
                </a>
              </li>
              <li className="social-item">
                <a className="social-link text-dark" target="_blank" href="mailto:cenavalesisip@gmail.com">
                  <i className="ti-google" aria-hidden="true" />
                </a>
              </li>
              <li className="social-item">
                <a className="social-link text-dark" target="_blank" href="https://github.com/ChristianEliseoNavales">
                  <i className="ti-github" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer className="footer py-3">
    <div className="container">
      <p className="small mb-0 text-light">
        © Created With <i className="ti-heart text-danger" /> By{" "}
        <a href="http://devcrud.com" target="_blank">
          <span
            className="text-danger"
            title="Bootstrap 4 Themes and Dashboards"
          >
            DevCRUD
          </span>
        </a>
      </p>
    </div>
  </footer>
</>


  )
}

export default App
