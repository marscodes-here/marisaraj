import './App.css';

function App() {
  return (
    <div className="container">
      <nav className="navbar">
        <a href='https://www.linkedin.com/in/marisaraj/' target='_blank' rel='noreferrer' className="nav-link">Conta<br/>ct Me/</a>
      </nav>

      <div className="content-row">
        <div className="name-block">
          <h1>Marisa</h1>
          <h2>Raj.</h2>
        </div>

        <div className="bio-block">
          <p>
          I'm a Software Engineer with over 3 years of experience building scalable solutions across Telecom, FinTech, and EV sectors. 
          <br></br>
          I started out in frontend development with React, gradually expanded into backend work using Go and Python, and eventually embraced DevOps to ensure smoother, more reliable deployments. 
          <br/>   
          I enjoy working closely with stakeholders to turn complex business needs into practical, maintainable software.
          <br></br>
          At the core, I love solving real-world problems, learning new things, and building software that actually makes a difference.
          </p>
        </div>
      </div>

      <img src="/assets/komodo_dragon.png" alt="Komodo Sketch" className="komodo-background" />
    </div>
  );
}

export default App;
