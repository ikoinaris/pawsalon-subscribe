import React, { Component } from "react";
import "./styles.css";
import image from "./image.jpg"

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      error: false
    };
  }

  handleChange(value) {
    this.setState({
      email: value,
      error: false
    });
  }

  handleSubmit() {
    const { email } = this.state;
    const error = !/^[A-Za-z0-9._%+-]{1,64}@(?:[A-Za-z0-9-]{1,63}\.){1,125}[A-Za-z]{2,63}$/.test(
      email
    );

    if (error) {
      this.setState({ error });
    } else {
      console.log(email);
    }
  }

  render() {
    const { email, error } = this.state;

    return (
    <div class="subscribe-form">
      <div class="left">
        <img alt="" src={image} width="100%" />
      </div>
      <div class="right">
        <h2>Subscribe to our newsletter</h2>
        <p2>
            Lorem ipsum text about why you should subscribe to our newsletter blabla. Lorem ipsum text about why you should subscribe to our newsletter blabla.
        </p2>
        <div class="form">
          <div class="input">{/*
            <label for="name">Name:</label>
            <input type="text" id="name" />*/}
            <label for="email">Email:</label>{/*
            <input type="email" id="email" placeholder="example@mail.com" />*/}
            <input
              className={error ? "error" : ""}
              type="text"
              placeholder="example@mail.com"
              value={email}
              onChange={e => {
                this.handleChange(e.target.value);
              }}
            />
          </div>
          <div class="button">
            <button onClick={() => {
                this.handleSubmit();
              }}>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
        /*
      <div className="App">
        <section>
          <h1>Newsletter form with React</h1>
          <p>How to handle single field and a button with pure React.</p>

          <div>
            <input
              className={error ? "error" : ""}
              type="text"
              placeholder="Your email"
              value={email}
              onChange={e => {
                this.handleChange(e.target.value);
              }}
            />
            <button
              onClick={() => {
                this.handleSubmit();
              }}
            >
              Submit
            </button>
          </div>
        </section>
      </div>*/
    );
  }
}
