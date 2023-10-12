import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>EVETDESİN.COM</h1>
      <p>En Güzel ‘’Evet’’ lere ortak olmakla başlayan yolculuğumuz sizlerin de desteği ile büyümeye devam ediyor…
      </p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
         Bizimle İletişime Geçin
        </Button>
       
      </div>
    </div>
  );
}

export default HeroSection;
