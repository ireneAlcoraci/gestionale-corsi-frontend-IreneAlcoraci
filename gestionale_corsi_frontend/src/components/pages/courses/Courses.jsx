import { useEffect } from "react";
import { Card } from "../../card/Card";

export function Courses(){
    useEffect(()=>{
        document.title = "Courses"
      },[]);

    const courses = [
        {
            title: "Analisi",
            sottotitolo: "analisi matematica",
            body: "corso di matematica di base della durata di 5 settimane"

        },
        {
            title: "fisica",
            sottotitolo: "fisica uno",
            body: "corso di fisica di base della durata di 4 settimane"

        }
    ]

    return (        
        <div className="row">
            {courses.map((course,key) => (
                <Card 
                    key={key}
                    titolo={course.title} 
                    sottotitolo={course.sottotitolo} 
                    body={course.body}>
                </Card>

            ))}
        </div>        
    );
}