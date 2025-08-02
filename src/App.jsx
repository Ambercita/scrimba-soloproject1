import { Fragment, useState } from "react";
import "./App.css";
import "./index.css";
import Info from "../components/Info";
import About from "../components/About";
import Interest from "../components/Interests"
import Footer from "../components/Footer";
function App() {
  return (
    <Fragment className="user-card">
      <Info />
      <About />
      <Interest />
      <Footer />
    </Fragment>
  );
}

/*
import ProfileCard from '../components/ProfileCard'

function App() {
  return (
     <ProfileCard
  name="Javi A. Torres"
  title="Software Engineer"
  handle="javicodes"
  status="Online"
  contactText="Contact Me"
  avatarUrl="../src/assets/dog.webp"
  showUserInfo={true}
  enableTilt={true}
  enableMobileTilt={false}
  onContactClick={() => console.log('Contact clicked')}
/>
  )
}
*/

export default App;
