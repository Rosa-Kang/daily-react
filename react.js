// / - [x] Binder and toggle function
    
// Note that you have to wrap the object literal in parentheses, otherwise JavaScript thinks it's a block of code.
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    // Change code below this line
    this.toggleVisibility = this.toggleVisibility.bind(this)
    // Change code above this line
  }
  // Change code below this line : !! Note that you have to wrap the object literal in parentheses, otherwise JavaScript thinks it's a block of code.
toggleVisibility(){
  this.setState(state=> ({
    visibility: !state.visibility
  }));
}
  // Change code above this line
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>
          Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
}

// - [x] Simple Counter

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    // Change code below this line
    this.increment=this.increment.bind(this);
    this.decrement=this.decrement.bind(this);
    this.reset=this.reset.bind(this);
    // Change code above this line
  }
  // Change code below this line
    increment(){
      this.setState(state=>({
        count: state.count+1
      }));
    }
    decrement(){
      this.setState(state=>({
        count: state.count-1
      }));
    }
    reset(){
      this.setState({count: 0});
    }
  // Change code above this line
  render() {
    return (
      <div>
        <button className='inc' onClick={this.increment}>Increment!</button>
        <button className='dec' onClick={this.decrement}>Decrement!</button>
        <button className='reset' onClick={this.reset}>Reset</button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
};


// - [x] Controlled Form
// You also must call event.preventDefaul () in the submit handler, to prevent the default form submit behavior which will refresh the web pae. 
    
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit(event) {
    event.preventDefault()
    this.setState({
      submit: this.state.input
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.input}
            onChange={this.handleChange} />
          <button type='submit'>Submit!</button>
        </form>
        <h1>{this.state.submit}</h1>
      </div>
    );
  }
};

// - [x] Pass a Callback as Props

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }
  render() {
    return (
       <div>
        <GetInput input={this.state.inputValue} handleChange={this.handleChange}/>
        <RenderInput input={this.state.inputValue}/>
       </div>
    );
  }
};

class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        <input
          value={this.props.input}
          onChange={this.props.handleChange}/>
      </div>
    );
  }
};

class RenderInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Input Render:</h3>
        <p>{this.props.input}</p>
      </div>
    );
  }
};


// Use the Lifecycle Method componentDidMount
// There is a mock API call in componentDidMount(). It sets state after 2.5 seconds to simulate calling a server to retrieve data.
// The best practice with React is to place API calls or any calls to your server in the lifecycle method componentDidMount()

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUsers: null
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        activeUsers: 1273
      });
    }, 2500);
  }
  render() {
    return (
      <div>
        <h1>Active Users: {this.state.activeUsers}</h1>
      </div>
    );
  }
}

// Add Event Listeners

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
 
 
  componentDidMount() {
      document.addEventListener('keydown', this.handleKeyPress);
  }
  componentWillUnmount() {
document.removeEventListener('keydown', this.handleKeyPress);
  }
 
 
  handleEnter() {
    this.setState((state) => ({
      message: state.message + 'You pressed the enter key! '
    }));
  }
  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.handleEnter();
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
};

// JSX Inline Styles
// JSX elements use the style attribute, but because of the way JSX is transpiled, you can't set the value to a string. Instead, you set it equal to a JavaScript object. Here's an example:
<div style={{ color: "yellow", fontSize: 16 }}>Mellow Yellow</div>

//As a rule, any hyphenated style properties are written using camel case in JSX.
// A large set of styles can be assigned in a style object as a constant to keep your code organized
const styles = {
    color: "purple",
    fontSize: 40,
    border: "2px solid purple"
}


class Colorful extends React.Component {
  render() {
    
    return (
      <div style={styles}>Style Me!</div>
    );
    
  }
};


// Use && for a More Concise Conditional
// If you write a lot of else if statements to return slightly different UIs, you may repeat code which leaves room for error.
// Instead, you can use the && logical operator to perform conditional logic in a more concise way.
class MyComponent extends React.Component {
render() {
    return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
         {this.state.display && <h1>Displayed!</h1>}
         
       </div>
    );
}
};

// Use a Ternary Expression for Conditional Rendering
render(){
    return (
        <div>
            { (!this.state.userAge)? buttonOne :
            (this.state.userAge>=18)? buttonTwo: buttonThree
            }
        </div>
    )
}


// Use Array.map() to Dynamically Render Elements
const items = this.state.toDoList.map(li => <li>{li}</li>);

// Give Sibling Elements a Unique Key Attribute
render() {
    const usersOnline = this.state.users.filter(user=> user.online);
    const renderOnline = usersOnline.map((online,i) => <li key={i}>{online.username}</li>)
    return (
      <div>
        <h1>Current Online Users:</h1>
        <ul>{renderOnline}</ul>
      </div>
    );
}
  
// Render React on the Server with renderToString
ReactDOMServer.renderToString(<App/>)
