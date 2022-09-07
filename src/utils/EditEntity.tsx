import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { ReactElement } from "react-markdown/lib/react-markdown";
import { useHistory, useParams } from "react-router-dom";
import { urlGenres } from "../endpoints";
import GenreForm from "../genres/GenreForm";
import { genreCreationDTO } from "../genres/genres.model";
import DisplayErrors from "./DisplayErrors";
import Loading from "./Loading";

export default function EditEntity<TCreation, TRead>(props: editEntityProps<TCreation, TRead>){
    const {id} : any = useParams();
    const [entity, setEntity] = useState<TCreation>();
    const [errors, setErrors] = useState<string[]>([]);
    const history = useHistory();

    useEffect(() => {
        axios.get(`${props.url}/${id}`)
            .then((response: AxiosResponse<TRead>) => {
                setEntity(props.transform(response.data))
            })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    async function edit(entityToEdit:TCreation) {
        try{
            await axios.put(`${props.url}/${id}`, entityToEdit);
            history.push(props.indexURL);
        }
        catch(error){
            if(error && error.response){
                setErrors(error.response.data)
            }
        }
    }
    
    return (
        
    <>
        <h3>Edit {props.entityName}</h3>
        <DisplayErrors errors={errors} />
        {entity ? props.children(entity, edit) : <Loading />}
        </>
    )
}
    interface editEntityProps<TCreation, TRead>{
        url : string;
        transform(entity: TRead): TCreation;
        entityName: string;
        indexURL: string;
        children(entity: TCreation, edit: (entity: TCreation) => void): ReactElement;
    }

    EditEntity.defaultProps = {
        transform: (entity: any) => entity
    }
