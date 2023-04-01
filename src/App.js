import { useState } from 'react';
import QRcode from 'react-qr-code'
import QRCodeLink from 'qrcode'
import './App.css';

function App() {
  const[link, setLink]= useState('')
  const [qrcodeLink, setQrcodeLink] = useState('')

function handleGenerate(Link_url){
  QRCodeLink.toDataURL(Link_url,{
    width: 600,
    margin: 3,
  }, function (err, url){
    setQrcodeLink(url);
  })
}

function handleQrcode(e){
  setLink(e.target.value);
  handleGenerate(e.target.value);
}

  return (
    <div className="container">
      <QRcode value= {link}/>

      <input 
      className='input'
      placeholder='Digite seu link'
      value={link}
      onChange={ (e) => handleQrcode(e)}/>

      <a
        className='Dload' 
        href={qrcodeLink} 
        download={`qrcode.png`}
        >Baixar QRcode</a>

    </div>
  );
}

export default App;
