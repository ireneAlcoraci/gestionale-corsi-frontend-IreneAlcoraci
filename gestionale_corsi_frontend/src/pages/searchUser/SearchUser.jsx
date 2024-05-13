import { useEffect } from "react";
import { SearchUserForm } from "../../components/searchUserForm/SearchUserForm";

export function SearchUser(){
    useEffect(() => {
        document.title = "Search User";
    }, []);

    return(
        <div>
            <SearchUserForm />
        </div>
    );
}   