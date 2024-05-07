import { useEffect } from "react";
import { Card } from "../../components/card/Card";

export function Courses(){
    useEffect(()=>{
        document.title = "Courses"
      },[]);

    const courses = [
        {
            titolo: "Html & css",
            descrizione: "linguaggi di markup",
            descrizioneLunga: "L'HTML è un linguaggio di formattazione che descrive le modalità di impaginazione o visualizzazione grafica (layout) del contenuto, testuale e non, di una pagina web attraverso tag di formattazione. Il CSS è un linguaggio usato per definire la formattazione di documenti HTML, XHTML e XML, ad esempio i siti web e relative pagine web."

        },
        {
            titolo: "basi di dati",
            descrizione: "linguaggio di realizzarione e manipolazione di database",
            descrizioneLunga: "La progettazione delle basi di dati si basa sull'applicazione di tecniche formali in congiunzione a considerazioni pratiche derivate dalla natura dei dati stessi. In fase di progettazione si affrontano quindi problemi in materia di modellazione, rappresentazione, archiviazione e accesso ai dati, oltre che della loro sicurezza, privatezza ed integrità."

        }
    ]

    return (        
        <div className="row">
            {courses.map((course,key) => (
                <Card 
                    key={key}
                    titolo={course.titolo} 
                    sottotitolo={course.descrizione} 
                    body={course.descrizioneLunga}>
                </Card>

            ))}
        </div>        
    );
}