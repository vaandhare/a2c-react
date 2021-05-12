import './App.css';
import Feed from './Feed/Feed';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Widgets from './Widgets/Widgets';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="appContent">
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
    </div>
  );
}

export default App;
