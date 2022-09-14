import './App.css';

import VsuLogo from './assets/vsu-logo.png';
import { BsFacebook, BsInstagram, BsTelegram, BsYoutube } from 'react-icons/bs';

const socialMedia = [
  <BsFacebook size={32}/>,
  <BsInstagram size={32}/>,
  <BsYoutube size={32}/>,
  <BsTelegram size={32}/>
];

function App() {
  return (
    <div className="App">
      <div className="centered">
        <div className="card">
          <div id="trapezoid">
            <div className="number">
              <p className="centered">00501</p>
            </div>
          </div>
          <div className="content">
            <div className="heading">
              <img
                src={VsuLogo}
                alt="Vsu Logo"
                className="logo"
              />
              <div className="title">
                <p style={{ fontSize: "55px", fontWeight: 500, color: '#4f61b7' }}>ВГУ</p>
                <p style={{ color: '#b5605c', fontSize: "24px" }}>Semper in motu</p>
              </div>
            </div>
            <div className="info">
              <div className="key_phrase">Поступай к нам</div>
              <div className="social_media">
                {socialMedia.map((soc_media, idx) => (
                  <div
                    key={idx}
                    className="social_media_item"
                  >
                    {soc_media}
                  </div>
                ))}
              </div>
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
