import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Section from './components/scetion'
import Footer from './components/footer'

function App() {
  return (
    <div class="Page">
        <Header/>
        <Section menuPageText='Hi this is the menu page text' />
        <Footer/>
    </div>
  );
}

export default App;
