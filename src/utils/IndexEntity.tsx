import axios, { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { ReactElement } from "react-markdown/lib/react-markdown";
import { Link } from "react-router-dom";
import Button from "./Button";
import customConfirm from "./customConfirm";
import GenericList from "./GenericList";
import Pagination from "./Pagination";
import RecordsPerPageSelect from "./RecordsPerPageSelect";

export default function IndexEntity<T>(props: indexEntityProps<T>){
    const [entities, setEntityes] = useState<T[]>();
    const[totalAmountOfPages, setTotalAmountOfPages] = useState(0);
    const [recordsPerPage, setRecordsPerPage] = useState(5);
    const[page, setPage] = useState(1);

    useEffect(() => {
        loadData();
    }, [page, recordsPerPage]);

    function loadData(){
        axios.get(props.url, {
            params: {page, recordsPerPage}
        })
            .then((response: AxiosResponse<T[]>) => {
                const totalAmountOfRecords = 
                    parseInt(response.headers['totalamountofrecords'], 10);
                    setTotalAmountOfPages(Math.ceil(totalAmountOfRecords/ recordsPerPage));
                    setEntityes(response.data);
            })
    }

    async function deleteEntity(id: number){
        try{
            await axios.delete(`${props.url}/${id}`);
            loadData();
        } catch (error) {
            const err = error as AxiosError
            console.log(err.response?.data)            
        }
    }

    const buttons = (editUrl: string, id: number) => <>
    <Link className="btn btn-success"
      to={editUrl}>Edit</Link>
    <Button onClick={() => customConfirm(() => deleteEntity(id))} 
    className="btn btn-danger">Delete</Button>
    </>

    return (
        <>
        <h3>{props.title}</h3>

        <RecordsPerPageSelect onChange={amountOfRecords => {
            setPage(1);
            setRecordsPerPage(amountOfRecords);
        }} />       
        <Link className="btn btn-primary" to={props.createUrl}>
            Create {props.entityName}
        </Link>
        <GenericList list={entities}>
            <table className="table table-striped">
                {props.children(entities!, buttons)}
            </table>            
        </GenericList>

        <Pagination currentPage={page} totalAmountOfPages={totalAmountOfPages}
            onChange={newPage => setPage(newPage)}
            />
        </>
    )
}
 interface indexEntityProps<T>{
    url: string;
    title: string;
    createUrl: string;
    entityName: string;
    children(entityes : T[], buttons: (editUrl: string, id: number) => ReactElement): ReactElement;
 }

