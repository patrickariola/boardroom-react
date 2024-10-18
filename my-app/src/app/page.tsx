'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './style.css';

const TopMenu = () => {
  return (
    <div className="px-0 justify-content-center pb-2" id="topMenu">
      <div className="navbar navbar-expand-lg bg-light bg-gradient fixed-top">
        <div className="container">
          <ul className="nav justify-content-start">
            <li>
              <a style={{ marginLeft: '50px' }} className="navbar-brand" href="#">
                <i id='sigma1' className="bi bi-instagram"></i>
              </a>
             
            </li>
          </ul>
          <ul className="nav justify-content-center">
            <li>
              <a href="#">
                <img
                  src='https://i.postimg.cc/5trTH5Gh/boardroom-logo.png'
                  alt="The Bodardroom Logo"
                  width="70"
                  style={{ marginRight: '8px' }}
                  
                />
              </a>
            </li>
          </ul>
          <ul className="nav justify-content-end fixed">
            <li>
              <a href="#">
                <button className="btn btn-dark" style={{ marginRight: '60px' }}>Menu</button>
                
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const CenteredLogo = () => {
  return (
    <div className="centered-logo d-flex justify-content-center" style = {{ paddingTop: '5rem' }}>
      <img
        src="https://i.postimg.cc/5trTH5Gh/boardroom-logo.png"
        alt="The Boardroom Logo"
        width="800"
        height="500"
      />
    </div>
  );
};

const BottomFooter = () => {
  return (
    <footer className="mt-auto bg-light">
      <div className="container">
        <div className="row">
          <div className="col">
            <h3>Hours</h3>
            <p>
              Wednesday - Thursday 5pm – 10pm<br />
              Friday - Saturday 5pm – 11pm<br />
              Sunday Brunch 10am - 2pm
            </p>
          </div>
          <div className="col">
            <h3>Stay Connected</h3>
            <u>Instagram</u><br />
            <u>Contact</u><br />
            <u>Gift Cards</u><br />
            <u>Reservations</u>
          </div>
          <div className="col"></div>
          <div className="col">
            <h3>THE BOARDROOM</h3>
            <p>
              44 Kainehe St.<br />
              Kailua, HI 96734<br />
              <br />
              (808)807-5640
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main component
export default function Home() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <TopMenu />
      <CenteredLogo />
      <BottomFooter />
    </div>
  );
}