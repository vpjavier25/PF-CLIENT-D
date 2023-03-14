import CardContainer from "../../Components/CardContainer/CardContainer";
import SearchBar from "../../Components/SearchBar/SearchBar";
import NavBar from "../../Components/NavBar/NavBar";

export default function Home (){
    return (
        <>
            <NavBar></NavBar>
            <SearchBar></SearchBar>
            <CardContainer></CardContainer>
        </>
    )
}