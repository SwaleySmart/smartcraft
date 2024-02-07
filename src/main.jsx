import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import ContentColumns  from "./components/ContentColumns.jsx";

import BeautifulUi from './assets/beautiful-ui.png'
import Wireframe from './assets/wireframe.png'

// Supports weights 100-900
import '@fontsource-variable/inter';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Hero />
      <ContentColumns
          reverse={false}
          heading={"Beautiful hand crafted web applications from a 20 year industry veteran."}
          imageSrc={BeautifulUi}
          text={"I've been in the web development industry for 20 years. Through a blend of creativity and technical skills, I've navigated the ever-evolving digital landscape. Whether it's crafting user-friendly interfaces or diving into the latest development framework, my goal is to keep things functional and visually appealing. In this two-decade journey, I've learned, adapted, and continue to explore new horizons in the dynamic world of design and development."}></ContentColumns>
      <ContentColumns
          padding={"py-20"}
          reverse={true}
          heading={"Let’s take a deep dive into your digital product’s user journey."}
          imageSrc={Wireframe}
          text={"UX design is a discipline aimed at optimizing user satisfaction and usability in product experiences. It involves researching, prototyping, and testing to understand and meet user needs. The goal is to create seamless, enjoyable interactions that align with both user expectations and business objectives. UX design is a collaborative process that considers the entire user journey, emphasizing user-centric solutions for digital or physical products."}></ContentColumns>
  </React.StrictMode>
)
