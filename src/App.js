import logo from './logo.svg';
import './App.css';
import Conference from './Conference';
import Attends from './Attends';
import Myattend from './Myattend';
import Trailer from './Trailer';
import Companies from './Companies';
import Footer from './Footer';
import Header from './Header/Header';
import Newsletter from './Newsletter';
import Conference2 from './Conference-2.0';
import BookTicket from './BookTicket';

function App() {
  return (
    <div className="App">
      <Header/>
      <BookTicket/>
      <Conference/>
      <Attends/>
      <Myattend/>
      <Trailer/>
      <Companies/>
      <Conference2/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default App;
