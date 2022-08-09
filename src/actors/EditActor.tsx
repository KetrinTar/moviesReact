import ActorForm from "./ActorForm";

export default function editActor(){
    return(
        <>
        <h3>Edit Actor</h3>
        <ActorForm model={{name: 'Tom', dateOfBirth: new Date('1999-06-01T00:00:00'),
        biography: '#Something',
        pictureURL : 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Jennifer_Lawrence_in_2016.jpg/338px-Jennifer_Lawrence_in_2016.jpg'}} 
            onSubmit={values => console.log(values)}
        />
        </>
    )
}