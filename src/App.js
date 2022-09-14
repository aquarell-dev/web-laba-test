import './App.css';

import VsuLogo from './assets/vsu-logo.png';
// import { FaFacebook, IoLogoFacebook, MdFacebook } from 'react-icons/all';
import { BsFacebook, BsInstagram, BsYoutube, BsTelegram } from 'react-icons/bs';

const socialMedia = [
  <BsFacebook size={25} />,
  <BsInstagram size={25} />,
  <BsYoutube size={25} />,
  <BsTelegram size={25} />
];

function App() {
  return (
    <div className="App">
      <div className="centered">
        <div className="card">
          <div className="content">
            <div className="heading">
              <img
                src={VsuLogo}
                alt="Vsu Logo"
                className="logo"
              />
              <span className="title">Воронежский гос. университет</span>
            </div>
            <div className="info">
              <div className="key_phrase">Поступай</div>
              <div className="social_media">
                {socialMedia.map((soc_media, idx) => (
                  <div key={idx} className='social_media_item'>
                    {soc_media}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div id="trapezoid">
            <div className="number">
              <p className="centered">00501</p>
            </div>
          </div>
          <div className="contacts__wrapper">
            <div className="contacts">
              <p>8 800 555 35-35</p>
              <p>vsu.ru</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
