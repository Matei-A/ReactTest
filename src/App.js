import './App.css';
import * as React from "react";


const { useState } = React;
const { useEffect } = React;



class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <img src="/logo192.png" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
    );
  }
}

export class MouseTracker extends React.Component {
  render() {
    return (
        <Mouse render={mouse => (
          <Cat mouse={mouse} />)
        } />
    );
  }
}

export class Mouse extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    return (
      <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
        {this.props.render(this.state)}
      </div>
    );
  }
}

export function Counter() {
  const [counter, setCounter] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${counter} times`;
  });

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <p>{counter}</p>
          <button onClick={() => {
            setCounter(counter + 1);
          }}>Increase Counter</button>
        </div>
      </header>
    </div>
  );
}

export default function App() {

  return (
    <>
      <MouseTracker/>

    </>
  );
}