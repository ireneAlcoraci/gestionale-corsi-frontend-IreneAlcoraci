export async function getAllUsers(){

    const response = await fetch("URL",{
        mode:"cors",
        method:"GET"
    });

    return await response.json();
}

export async function post(){
    const jsonBody = JSON.stringify(obj);

    const response = await fetch("",{
        mode: "cors",
        method: "POST",
        body: jsonBody,
        headers:{
            "Autorization": token
        }
    })
}