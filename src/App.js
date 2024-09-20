import './App.css';
import Navbar from './components/Navbar';
import Content from './components/Content';

function App() {
  return (
    <div className="App">
      {/* Global Navbar */}
      <Navbar></Navbar>
      {/* Main Content */}
      <Content></Content>
      {/* Global Footer */}
    </div>

    
  );
}

export default App;
