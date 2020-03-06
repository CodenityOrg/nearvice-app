import React from 'react';
import { Link, Prompt } from 'react-router-dom'
import './Contact.css';

function Contact () {
  return (
    <div className="Contact">
      <h1>Contact</h1>
      <Link
        className="App-link"
        to="/"
      >
        Home page
      </Link>

      {
        <Prompt
          when={true}
          message="Are you sure you want to go to Home page?"
        />
      }
    </div>
  );
}

export default Contact;
