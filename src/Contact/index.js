import { useState } from "react";
import ParticleBackground from "../ParticleBackground";
import "./contact.scss";


function Contact() {

  const [inputName, setInputName] = useState ('');
  const [inputEmail, setInputEmail] = useState ('');
  const [inputMessage, setInputMessage] = useState ('');

  const handleSubmit = (e) => {
    e.preventDefault();


  };


  
  return (
    <>
    <ParticleBackground />
    <div className="contact" id="contact">
      <div className="contact-container">
        <h1>Me Contacter</h1>
        <form 
          action=""  
          class="form-container"
          onSubmit={handleSubmit}
          >
          <div class="form-input">
            <input 
            type="text" 
            name="name" 
            id="name" 
            placeholder="Nom" 
            required
            value={inputName}
              onChange={(e) => {
                {setInputName(e.target.value)}
              }} 
            />
          </div>
          <div class="form-input">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
              value={inputEmail}
              onChange={(e) => {
                {setInputEmail(e.target.value)}
              }}
            />
          </div>
          <div class="form-input-text">
            <input
              type="text"
              name="text"
              id="text"
              placeholder="Écrivez votre message"
              required
              value={inputMessage}
              onChange={(e) => {
                {setInputMessage(e.target.value)}
              }}

            />
          </div>
          <div class="form-button">
            <input 
            className="send-form" 
            type="submit" 
            placeholder="Envoyer votre message!"
             />
          </div>
        </form>
      </div>
    </div>
    </>
  );
}

export default Contact;
