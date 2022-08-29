import {useLocation} from 'react-router-dom';
import { apiAddress } from './ApiAddress';
import SearchBar from './SearchBar';
import './SearchBar.css';

  interface CustomizedState {
    id: number,
    name: string,
    workTitle: string, 
    viewInfo: string,
  profilePictureName: string
  }

const SearchResults: React.FC = () =>{

    // Keeping the worker's id from Search bar selection.
    const location = useLocation();
    const state = location.state as CustomizedState;
    let workersArray: CustomizedState[] = []
    // Keeping state objects into array
    // Checking if state already has an array
    if(Array.isArray(state)){
      workersArray = state
    } else{// state object isn't an array list
        workersArray = [state]
    }
    return(
        <div className="container">
            <h1>SEARCH RESULTS</h1>
            <SearchBar />
            {workersArray && workersArray?.length===0 &&(
            <div className="body__item">"No Worker Found."</div>
          )}
            {workersArray?.length > 0 && workersArray?.map((worker,i) => {
                return(
                    <div className="body__item" key={i}>
                      <img width="50px" height="50px" src={apiAddress.ProfilePicture_URL + worker.profilePictureName}/>
                        <h3> {worker?.name}</h3>
                        <p>{worker.workTitle}</p>
                    </div>
                )
            })}
            

        </div>
    );

};
export default SearchResults;