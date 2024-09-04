import React from 'react';
import './LandingPage.css';
import h1 from "../../assets/images/h2.svg"
import discs from "../../assets/images/discs.svg"
import  instruction from "../../assets/images/instructions.svg"
import photos from "../../assets/images/photos.svg"
import mockup from "../../assets/images/mockup.png"
import user1 from "../../assets/images/user1.png"
import user2 from "../../assets/images/user2.png"

export default function LandingPage() {
  return (
    <div className="container-fluid">

    <div className="container-fluid vh-100 d-flex">
      <div className="row flex-grow-1">
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center p-5">
          <h1 style={{fontSize:"60px", fontWeight:"bold"}}>Football<span style={{color:"#4b4bc8"}}> Connect 4</span> </h1>
          <p>Connect Discs by Answering Footall Trivia.</p>
          <button className='downloadBtn' onClick={() => window.location.href='https://footballconnect4.en.uptodown.com/android'}> Download Now</button>
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-center p-0">
          <img src={h1} className="img-fluid h-80 w-80" />
        </div>
      </div>
      
    </div>
    <div className="container-fluid vh-100 d-flex bg-light" >
      <div className="row flex-grow-1"> 
        <div className="col-md-6 d-flex justify-content-center align-items-center p-0">
          <img src={discs} className="img-fluid h-80 w-80" />
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center p-5">
          <h1 style={{fontSize:"60px", fontWeight:"bold"}}><span style={{color:"#4b4bc8"}}> Game Context</span> </h1>
          <p>Test your football knowledge by answering questions to strategically place your discs and connect four in a row. Play against friends or challenge yourself in solo mode and earn rewards</p>
          <p style={{fontSize:"13px"}}> <i>Play,Learn & Win</i></p>
        </div>
      </div>
    </div>

    <div className="container-fluid vh-100 d-flex bg-light" >
      <div className="row flex-grow-1"> 
      <div className="col-md-6 d-flex flex-column justify-content-center align-items-center p-5">
          <h1 style={{fontSize:"60px", fontWeight:"bold"}}><span style={{color:"#4b4bc8"}}> How It Works</span> </h1>
          <p>Connect four discs in a row – horizontally, vertically, or diagonally – to win the game. Use your knowledge and strategy to outsmart your opponent and secure victory</p>
          <p>Challenge friends or play solo to improve your knowledge and skills. Every game is an opportunity to learn and have fun</p>
          <p style={{fontSize:"13px"}}> <i>Play,Learn & Win</i></p>
          
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-right p-0">
          <img src={user2} className="img-fluid h-80 w-80" />
        </div>
       
      </div>
      
    </div>

    <div className="container-fluid vh-100 d-flex" >
      <div className="row flex-grow-1"> 
        <div className="col-md-6 d-flex justify-content-center align-items-center p-0">
          <img src={photos} className="img-fluid h-80 w-80" />
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center p-5">
          <h1 style={{fontSize:"50px", fontWeight:"bold"}}><span style={{color:"#4b4bc8"}}> Story Behind The App</span> </h1>
          <p>Inspired by our love for football and classic games, we created Football Connect 4 to bring fans together in a fun and educational way. Our goal is to provide a platform where football enthusiasts can challenge their knowledge and have a great time</p>
          <p style={{fontSize:"13px"}}> <i>Play,Learn & Win</i></p>
        </div>
      </div>
    </div>

    <div className="container-fluid vh-100 d-flex flex-column bg-light">
  <div className="row w-100">
    <div className="col-12 d-flex justify-content-center py-4">
    <h1 style={{fontSize:"50px", fontWeight:"bold"}}><span style={{color:"#4b4bc8"}}> User Reviews</span> </h1>
    </div>
  </div>
  <div className="row flex-grow-1">
    <div className="col-md-3 d-flex flex-column align-items-center p-5">
      <i>"I love how this game combines my passion for football with strategic gameplay! It's a perfect blend of fun and learning."</i>
      <p style={{fontSize:"13px"}}><i>Mark</i></p>
    </div>
    <div className="col-md-3 d-flex flex-column align-items-center p-5">
      <i>"Football Connect 4 is a must-have for football fans and puzzle lovers alike. It's challenging and engaging!"</i>
      <p style={{fontSize:"13px"}}><i>Osman R</i></p>
    </div>
    <div className="col-md-3 d-flex flex-column align-items-center p-5">
      <i>"I've been looking for a game that challenges my football knowledge, and Football Connect 4 does exactly that. Highly recommend."</i>
      <p style={{fontSize:"13px"}}><i>Mike V</i></p>
    </div>
    <div className="col-md-3 d-flex flex-column align-items-center p-5">
      <i>"A fantastic game that keeps me entertained and sharpens my football trivia skills. Great job!."</i>
      <p style={{fontSize:"13px"}}><i>Emily R</i></p>.
    </div>
    <div className="col-md-3 d-flex flex-column align-items-center p-5">
      <i>"This game is a brilliant mix of football and strategy. I've had so much fun playing it with friends!"</i>
      <p style={{fontSize:"13px"}}><i>Sophie M</i></p>
    </div>
    <div className="col-md-3 d-flex flex-column align-items-center p-5">
      <i>"A unique game that offers a refreshing take on football trivia. It's both challenging and addictive."</i>
      <p style={{fontSize:"13px"}}><i>Alex P</i></p>
    </div>
    <div className="col-md-3 d-flex flex-column align-items-center p-5">
      <i>"Football Connect 4 has quickly become my go-to game. It's educational, yet incredibly fun."</i>
      <p style={{fontSize:"13px"}}><i>David L</i></p>
    </div>
    <div className="col-md-3 d-flex flex-column align-items-center p-5">
      <i>"An excellent game for any football enthusiast. The trivia aspect adds an exciting twist to the classic Connect 4."</i>
      <p style={{fontSize:"13px"}}><i>Rachel T</i></p>
    </div>
</div>

  
</div>
<div className="row flex-grow-1">
    <div className="col-12 d-flex justify-content-center py-4 bg-dark text-white">
      <p>© 2024 Football Connect 4. All rights reserved</p>
  
    </div>
    <div className="col-12 justify-content-center  bg-dark text-white">
   <p> <a href="https://www.instagram.com/footballconnectfour/" target="_blank" >Instagram</a> </p>
   </div>
  </div>



    
    </div>
  );
}
