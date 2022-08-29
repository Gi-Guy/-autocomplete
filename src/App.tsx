
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import './App.css';
import SearchBar from './SearchBar';
import SearchPage from './SearchPage';
import SearchResults from './SearchResults';


//<SearchBar />
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SearchPage />}/>
          <Route path='/SearchResults' element={<SearchResults />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;