import Button from './button'
import FirstChild from './firstChild'


let some="data1"
function Parent(){
    return(
        <div>Parent
            <div><FirstChild />
            <div><Button data={some} color="red" title="HTML Tags"  /></div>
            </div>

        </div>
    )
}
export default Parent;