
import './App.css';
import Planner from './Planner/Planner.tsx';
import Menu from './Menu/Menu.tsx';
import Header from './Header/Header.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";

function App() {
  // State for background, font color, and greeting message
  const [backgroundImage, setBackgroundImage] = useState('');
  const [fontColor, setFontColor] = useState('');
  const [greetingMessage, setGreetingMessage] = useState('');

  useEffect(() => {
    const setBackgroundAndGreeting = () => {
      const now = new Date();
      const hour = now.getHours();

      if (hour >= 6 && hour < 12) {
        setBackgroundImage('/images/bg2.png'); // Morning (6 AM to 12 PM)
        setFontColor('#333');
        setGreetingMessage("Good Morning, User");
      } else if (hour >= 12 && hour < 18) {
        setBackgroundImage('/images/bg2.png'); // Afternoon (12 PM to 6 PM)
        setFontColor('#333');
        setGreetingMessage("Good Afternoon, User");
      } else if (hour >= 18 && hour < 21) {
        setBackgroundImage('/images/bg.png'); // Evening (6 PM to 9 PM)
        setFontColor('#fff');
        setGreetingMessage("Good Evening, User");
      } else {
        setBackgroundImage('/images/bg.png'); // Night (9 PM to 6 AM)
        setFontColor('#fff');
        setGreetingMessage("Good Night, User");
      }

      // Optionally set document body styles directly
      document.body.style.backgroundImage = `url(${backgroundImage})`;
      document.body.style.color = fontColor;
    };

    setBackgroundAndGreeting(); // Call the function when the component mounts
  }, [backgroundImage, fontColor]);


  return (
    <div className="App">
      <header>
        <Menu />
        <Header greeting={greetingMessage} />
        <Planner />
      </header>
    </div>
  );
}

export default App;
