import { Toaster } from 'react-hot-toast';
import './App.css'
import RegForm from './components/RegForm'
import RegForm2 from './components/RegForm2'
import TestForm from './components/TestForm';

function App() {
  
  function errorCallback(error) {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        console.error("User denied the request for Geolocation."); 
        break;
      case error.POSITION_UNAVAILABLE:
        console.error("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        console.error("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        console.error("An unknown error occurred.");
        break;
      default:
        console.error("An error occurred:", error.message);
    }
  }
  

  return (
    <div className='App'>
      {/* <RegForm /> */}
      <RegForm2 />
      {/* <TestForm /> */}

      <Toaster />
      
    </div>
  )
}

export default App
