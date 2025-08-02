import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Info() {
  return (
      <header>
        <img src="../src/assets/dog.webp" alt="dog" width="320" height="400" />
        <h1>Laura Smith</h1>
        <p>Frontend Developer</p>
        <p>
          <a href="">laurawebsite</a>
        </p>
        <div className="linked-button">
          <a href="" className="fa fa-envelope">
            Email
          </a>
          <a href="" className="fa fa-linkedin-square">
            Linkedin
          </a>
        </div>
      </header>
  );
}

export default Info;
