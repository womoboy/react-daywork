import ComponentChild2 from "../componentChild2/ComponentChild2";

const ComponentChild1 = () => {
    return (  
        <div className="component-child-1">
            <div>this is componentChild 1</div>
            <ComponentChild2 />
        </div>
    );
}
 
export default ComponentChild1;