import { ReactElement } from "react";
import Loading from "./Loading";

export default function GenericList(props: GenericListProps){
        if(!props.list){
            if(props.loadingUI){
                return <Loading />
                //return props.loadingUI;
            }
            return <Loading />
        } else if(props.list.length === 0){
            if(props.emptyListUI){
                return props.emptyListUI;
            }
            return <>The are no el to disp</>
        } else{
            return props.children;
        }
}
interface GenericListProps{
    list: any;
    loadingUI?: ReactElement;
    emptyListUI? : ReactElement;
    children: ReactElement;
}