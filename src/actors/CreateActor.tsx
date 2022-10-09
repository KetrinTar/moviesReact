import axios, { AxiosError } from "axios";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { urlActors } from "../endpoints";
import DisplayErrors from "../utils/DisplayErrors";
import { converActorToFormData } from "../utils/formDataUtils";
import ActorForm from "./ActorForm";
import { actorCreationDTO } from "./actors.model";

export default function CreateActor(){

    const [errors, setErrors] = useState<string[]>([]);
    const history = useHistory();
    async function create(actor:actorCreationDTO) {
        try{
            const formData = converActorToFormData(actor);
            console.log(formData.values);
            await axios({
                method: 'post',
                url:urlActors,
                data: formData,
                headers: {'Content-Type': 'multipart/form-data'}
            });
            history.push('/actors');
        } catch (error) {
            const err = error as AxiosError
            setErrors(err.response?.data)            
        }
    }

    return(
        <>
        <h3>Create Actor</h3>
        <DisplayErrors errors={errors} />
        <ActorForm model={{name: '', dateOfBirth: undefined}} 
            onSubmit={async values => await create(values)}
        />
        </>
    )
}