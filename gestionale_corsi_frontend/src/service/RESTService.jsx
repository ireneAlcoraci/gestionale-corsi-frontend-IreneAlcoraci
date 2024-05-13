export async function userLogin(obj) {
    const jsonBody = JSON.stringify(obj);

    const response = await fetch("http://localhost:8080/api/utente/login", {
        mode: "cors",
        method: "POST",
        body: jsonBody,
        headers: {
            "Content-Type": "application/json",

        }
    })

    if(response.ok){
        return await response.json();
    }else{
        return "";
    }

   
}

export async function userLogout(token) {

    const response = await fetch("http://localhost:8080/api/utente/logout", {
        mode: "cors",
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    });

    return response;
}

export async function userRegistration(obj) {

    try {
        const jsonBody = JSON.stringify(obj);

        const response = await fetch("http://localhost:8080/api/utente/registra", {
            mode: "cors",
            method: "POST",
            body: jsonBody,
            headers: {
                "Content-Type": "application/json",

            }
        })

        if (response.ok) {
            return await response.json();
        } else {
            return "";
        }
    } catch (error) {
        throw new Error(`Errore in fase di registrazione catch`);
    }
}

export async function getAllUsers() {

    const response = await fetch("http://localhost:8080/api/utente/getAll", {
        mode: "cors",
        method: "GET"
    });

 
    return await response.json();
}

export async function getCorsesList(token) {
    const bearer = "Bearer " + token;
    const response = await fetch("http://localhost:8080/api/corso/corsi", {
        mode: "cors",
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": bearer
        }
    });

    if(response.ok){
        
        return await response.json();
     
    }

}


export async function updateUser(obj) {
    const jsonBody = JSON.stringify(obj);

    const response = await fetch("http://localhost:8080/api/utente/update", {
        mode: "cors",
        method: "PUT",
        body: jsonBody,
        headers: {
            "Content-Type": "application/json",

        }
    })

    if(response.ok){
        return await response.json();
    }else{
        return "";
    }

   
}

export async function deleteUser(email) {

    const response = await fetch(`http://localhost:8080/api/utente/delete/${email}`, {
        mode: "cors",
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        
        }
    });

    return response;
}

export async function findUserByEmail(email) {

    const response = await fetch(`http://localhost:8080/api/utente/find?email=${email}`, {
        mode: "cors",
        method: "GET",
        headers: {
            "Content-Type": "application/json",
           
        }
    });

    return await response.json();
}