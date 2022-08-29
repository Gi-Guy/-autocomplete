import SearchBar from "./SearchBar";

const SearchPage: React.FC = () =>{

    return(
        <div className="container">
            <h1>LOOKING FOR AN EMPLOYEE?</h1>
            <h4 >click on the search bar to learn our suggetions</h4>
            <SearchBar />
        </div>
    );
};
export default SearchPage;