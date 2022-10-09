import { urlActors } from "../endpoints";
import EditEntity from "../utils/EditEntity";
import ActorForm from "./ActorForm";
import { actorCreationDTO, actorDTO } from "./actors.model";

export default function editActor(){
    return(
        <EditEntity<actorCreationDTO, actorDTO> 
        url={urlActors} indexURL="/actors" entityName="Actor"
        >
            {(entity, edit) => 
            <ActorForm model={entity}
            onSubmit={async values => await edit(values)}
            />
            }
        </EditEntity>
    )
}