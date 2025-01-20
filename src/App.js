import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="navbar">
        <div className="navbar-content">
          <h2 className="app-name">edugigs</h2>
          <nav>
            <a href="/browse">Browse</a>
            <a href="/create">Create</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1>Student Freelancing</h1>
          <p>Created by students for students.</p>
          <button className="cta-button">Get Started</button>{" "}
          {/* TODO: Add functionality to navigate to the browse page */}
        </div>
      </section>
    </div>
  );
}

export default App;
