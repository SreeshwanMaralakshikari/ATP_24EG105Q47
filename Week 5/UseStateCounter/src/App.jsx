import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import UsersList from './components/UsersList';
import Counter from './components/Counter';

function App()
{
  //state
  //return react element
  return(
      <div>
        <Navbar />
        
        <Counter/>
        
        <div className="">
          <UsersList/>
        </div>


        <Footer/>
      </div>
  );
}

export default App;