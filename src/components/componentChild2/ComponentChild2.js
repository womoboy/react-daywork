import { useContext } from "react";
import { UserContext } from "../../App";

const ComponentChild2 = () => {
    const user = useContext(UserContext);

    return (  
        <div className="component-child-2">
            <div>this is componentChild 2</div>
            <div>{user}</div>
        </div>
    );
}
 
export default ComponentChild2;