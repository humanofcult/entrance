import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import AdminPage from './components/AdminPage/AdminPage';
import {Space, Input, Button} from 'antd'

function logToReg()
{
  document.getElementById("log").style.display = "none";
  document.getElementById("reg").style.display = "block";
}

function regToLog()
{
  document.getElementById("log").style.display = "block";
  document.getElementById("reg").style.display = "none";
}



function App() {
  return (
    <div className="App">
      <div id='log'>
        <Login />
        <Button type="link" block onClick={logToReg}>
          don't have an account yet?!
        </Button>
      </div>
      <div id='reg'>
        <Registration/>
        <Button type="link" block onClick={regToLog}>
          have an account?!
        </Button>
      </div>
      <div id="admin">
        <AdminPage/>
      </div>

    </div>
  );
}

export default App;
