import { useParams } from "react-router-dom"

function WikiPage(){
    const {param} = useParams();
    return(
        <div className="container">
            <h1>위키 정보가 들어갈 곳 입니다.</h1>
            <div>{param}</div>
        </div>
    )
}
export default WikiPage;