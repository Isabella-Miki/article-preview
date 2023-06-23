import React from 'react';
import './App.scss'
import drawer from './Components/assets/drawers.jpg'
import womanAvatar from './Components/assets/avatar-michelle.jpg'
import ShareButton from './Components/ShareButton';

function App() {
  return (
    <div className='wrapper'>
      <div className='mainCard'>

        <img src={drawer} alt="drawer" className='drawer' />

        <div className='textSection'>
          <h1>Shift the overall look and feel by adding these wonderful touches to furniture in your home</h1>
          <p>Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I've got some simple tips to help you make any room feel complete</p>


          <div className='author'>
            <img src={womanAvatar} alt="" className='authorImg' />
            <div className='aboutAuthor'>

              <p className='name'>Michelle Appleton</p>
              <p className='date'>28 Jun 2020</p>
            </div>

            <ShareButton />
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
