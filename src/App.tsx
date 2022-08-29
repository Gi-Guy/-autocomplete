
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import './App.css';
import SearchPage from './Components/SearchPage';
import SearchResults from './Components/SearchResults';

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