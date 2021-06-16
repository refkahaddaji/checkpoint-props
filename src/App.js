import pic from './profile/pic.svg';
import './App.css';
import Profile from './profile/Profile';


function App() {
  const handleName = fullName => alert(fullName);
  let bioValue=` 
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
  laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
  voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
  on proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
  
  return (
    <div className="App">
      
        
      <Profile fullName="Refka HADDAJI" bio={bioValue} profession="full-stack developer" handleName={handleName} >
        <img style={{width:"600px", height:"300px"}} src={pic} />
      
      </Profile>
      
    </div>
  );
}

export default App;
