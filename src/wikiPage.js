import { useParams } from "react-router-dom"
import "./WikiPage.css";

function WikiPage(){
    const {searchQuery} = useParams();
    return(
        <div className="container">
            <h1>{searchQuery}</h1>
            <div className="article-container">
                <h2>내용이 없습니다.</h2>
            </div>
        </div>
    )
}
export default WikiPage;