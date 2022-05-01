import Footer from './components/Footer';
import Header from './components/Header';
import TaskManager from './components/TaskManager';
import './Todo.css'

function App() {
  return (
    <div className="App">
       <Header/>
       <TaskManager/>
       <Footer/>
    </div>
  );
}

export default App;
