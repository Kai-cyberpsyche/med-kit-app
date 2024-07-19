import './App.css'
import Nav from './Nav.jsx'
import logo from './assets/health.svg'
import Card from './Card.jsx'
import medPic from './assets/medicine.svg'
import docPic from './assets/doctor.svg'
import remiPic from './assets/inform.svg'
import monitorPic from './assets/monitor.svg'
import emergencyPic from './assets/emergency.svg'
import infoPic from './assets/info.svg'

function App() {
  let loggedin = false;
  if(loggedin)
    return (
      <>
      <Nav />
      <Card id='logo' title='Health Assistant' pic={logo}/>
      <br/>
      <div className='Function-Buttons'>
      <Card title='Smart Med-Kit' pic={medPic}/>
      <Card title='Online Diagnosis' pic={docPic}/>
      <Card title='Emergency' pic={emergencyPic}/>
      </div>

      <div className='Function-Buttons'>
      <Card title='Medication Reminder' pic={remiPic}/>
      <Card title='Health Monitor' pic={monitorPic}/>
      <Card title='Personal Information' pic={infoPic}/>
      </div>

      </>
    )
  else
    return (
      <form method="POST" action="index.php">
        <label>Username:</label>
        <br/>
        <input type="text" name="username"></input>
        <br/>
        <label>Password:</label>
        <br/>
        <input type="password" name="password"></input>
        <br/>
        <input type="submit" value="Login"></input>
        <br/>
      </form>
    );

}

export default App
