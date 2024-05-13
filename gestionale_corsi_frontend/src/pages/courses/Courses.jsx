import { useEffect } from "react";
import { useState } from "react";
import { Card } from "../../components/card/Card";
import { getCorsesList } from "../../service/RESTService";
import Cookies from "js-cookie";

export function Courses(){
       
    useEffect(()=>{
        document.title = "Courses";
        handleChange();
      },[]);

    const [courseListData, setCourseListData] = useState([]);

    const handleChange = async () => {
        const courseList = await getCorsesList(Cookies.get("token"));
        setCourseListData(courseList);
    }
    return (        
        <div className="row">
            {courseListData.map((course,key) => (
                <Card 
                    key={key}
                    titolo={course.nomeCorso} 
                    sottotitolo={course.descrizioneBreve} 
                    body={course.descrizioneCompleta}
                    durata={course.durata}>
                   
                </Card>

            ))}
        </div>        
    );
}