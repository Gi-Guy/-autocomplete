
import React, { useState } from 'react';
import {apiAddress} from './ApiAddress';
import './SearchBar.css';
import { useNavigate } from 'react-router-dom';

const SearchBar: React.FC = (props) =>{
    
      const [workers, setWorkers] = useState<{  id: number, 
                                            name: string,
                                            workTitle: string, 
                                            viewInfo: string,
                                          profilePictureName: string}[]>([])
  const [text, setText] = useState('');
  const navigate = useNavigate();

   // onChange search bar handler
   /** This handler will be called when user tayping input value in the search bar */
 const onChangeHandler = (text: React.SetStateAction<string>) =>{
    setText(text)
    if(text.length === 0)
      getWorkersList('')
  
    if(text.length>=2)
         getWorkersList(text)
   }
   
   // onClick search bar handler
      /** This handler will be called when user pressed on the search bar itself */
   const onClickHandler = () =>{
    // If search bar is empty then call full workers list
    if(!text){
          getWorkersList('')
    }
   }
   /** This handler will be called when user pressed on a worker in the list */
   // const onWorkerClickHandler = (text: React.SetStateAction<string>) =>{
   const onWorkerSearchkHandler = (id: any) =>{
    navigate('/SearchResults', {state: id})
    
   }

   /** This handler will be called if user pressed enter in the searching bar */
   const onEnterPress = (e:any) =>{
        if(e.key === 'Enter')
        onWorkerSearchkHandler(workers)
   }
   /**
    * This function will send a request to the api
    */
   function getWorkersList(str: any): void{
    fetch(apiAddress.API_URL + str, {
        method: "GET"
      })
          .then((response) => response.json())
          .then((data) => {
              setWorkers(data);
          })
          .catch((err) => {
            setWorkers([])
            console.log(err.message);
          });
   }

    return (
        <div className="container">
          <input type = "text" 
          className="col-md-5 input" 
          style={{marginTop: 10}}
          placeholder="Search Worker by name or work title"
          onChange={e=>onChangeHandler(e.target.value)}
          onClick={e=>onClickHandler()}
          onKeyDown={e=>onEnterPress(e)}
          onBlur={()=>{
            setTimeout(()=> {
                
                setWorkers([])
                setText('')
            }, 100);
          }}
          value = {text}
          /><button disabled={!text} 
          onClick={e=>onWorkerSearchkHandler(workers)}>search</button>

          <div className="scrollable-div2"> 
          {workers && workers?.length===0 && text.length > 0 &&(
            <div className="body__item">"No Worker Found."</div>
          )}
            {workers?.length > 0 && workers?.map((worker,i) => {
                return(
                    <div className="body__item" key={i} onClick={e=>onWorkerSearchkHandler(worker)}>
                        <img width="60px" height="60px" src={apiAddress.ProfilePicture_URL + worker.profilePictureName}/>
                        <h3> {worker?.name}</h3>
                        <p>{worker.workTitle}</p>
                    </div>
                )
            })}
          </div>
        </div>
      );
};
export default SearchBar;
