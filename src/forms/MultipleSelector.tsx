import './MultipleSelector.css'

export default function MultipleSelector(props: multipleSelectorProps){
    function select(item: multipleSelectorModel){
        const selected = [...props.selected, item];
        const nonselected = props.nonselected.filter(value => value !== item);
        props.onChange(selected, nonselected);
    }
    function deselect(item: multipleSelectorModel){
        const nonselected = [...props.nonselected, item];
        const selected = props.selected.filter(value => value !== item);
        props.onChange(selected, nonselected);
    }
    function selectAll(){
        const selected = [...props.selected, ...props.nonselected];
        const nonselected: multipleSelectorModel[] = [];
        props.onChange(selected, nonselected);
    }
    function deselectAll(){
        const nonselected = [ ...props.nonselected, ...props.selected];
        const selected: multipleSelectorModel[] = [];
        props.onChange(selected, nonselected);
    }
    return(
        <div className="mb3">
            <label>{props.displayName}</label>
            <div className="multiple-selector">
            <ul>
                {props.nonselected.map(item => 
                    <li key={item.key} onClick={() => {select(item)}}>{item.value}</li>)}
            </ul>
            <div className="multiple-selector-buttons">
                <button type="button" onClick={selectAll}>{'>>'}</button>
                <button type="button" onClick={deselectAll}>{'<<'}</button>
            </div>
            <ul>
                {props.selected.map(item => 
                    <li key={item.key} onClick={() => {deselect(item)}}>{item.value}</li>)}
            </ul>
        </div>
        </div>
        
    )
}
interface multipleSelectorProps{
    displayName: string;
    selected:multipleSelectorModel[];
    nonselected: multipleSelectorModel[];
    onChange(selected: multipleSelectorModel[],
        nonselected: multipleSelectorModel[]) : void;
}
export interface multipleSelectorModel{
    key: number;
    value: string;
}