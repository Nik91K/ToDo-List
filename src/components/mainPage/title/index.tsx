import './index.css'
import { ChildrenType } from '../../../types/componentTypes.ts'

const Title = (props: ChildrenType) => {
    return (
        <div>
            <h2 className='title-text'>Todo List</h2>
            { props.children }
        </div>
    )
}

export default Title
