import { useDispatch } from 'react-redux'
import { modalAction } from '../store/slices/ModalSlice'
import "./modal.scss"
import {IState as Props} from "../../typescript"

interface IState {
    content : Props["content"]
}

const Modal:React.FC = () => {

  const dispatch = useDispatch()

  const closeToggle = () => {
    dispatch(modalAction.toggle())
  }

  return (
    <div className="myModal active">
        <div className='myModalContent' onClick={(e) => e.stopPropagation()}>
               <h1>Anvar</h1>
        </div>
    </div>
  )
}

export default Modal