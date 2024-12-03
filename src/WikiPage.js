import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import "./WikiPage.css";

function WikiPage(){
    const {searchQuery} = useParams();
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/api/bulids/${searchQuery}`);
                if (response.ok) {
                    const myData = await response.json();
                    setData(myData);
                }else {
                    const errorMessage = await response.json();
                    setError(errorMessage.message);
                }
            } catch(error){
                setError("데이터를 가져오는데 오류가 발생하였습니다.");
            }
        };
        fetchData();
    }, [searchQuery])
    return(
        <div className="container">
            <h1>{searchQuery}</h1>
            <div className="article-container">
                {error ? (
                    <p>{error}</p>
                ) : data ? (
                    <div>
                        <p>종류: {data.카테고리}</p>
                        <p>빌드 이름: {data.빌드이름}</p>
                        <p>가방 정보: {data.가방정보.가방1}</p>
                        <p>가방 정보: {data.가방정보.가방2}</p>
                        <p>가방 정보: {data.가방정보.가방3}</p>
                    </div>
                ) : (
                    <p>데이터를 로드 중입니다.</p>
                )}
            </div>
        </div>
    )
}
export default WikiPage;
