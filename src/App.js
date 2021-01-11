import './App.css';

//Internal Components
import HomeComponent from './components/home';

//Installed Components
import { Route, Link, Switch } from 'react-router-dom';
//Bootstrap
import { Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <h1>INTERVIEW TRACKING SYSTEM</h1>
      <HomeComponent></HomeComponent>
        <Button href="#">Link</Button> <Button type="submit">Button</Button>{' '}
        <Button as="input" type="button" value="Input" />{' '}
        <Button as="input" type="submit" value="Submit" />{' '}
        <Button as="input" type="reset" value="Reset" />
    </div>
  );
}

export default App;
