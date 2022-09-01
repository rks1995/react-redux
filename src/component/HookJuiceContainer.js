import { useSelector, useDispatch } from 'react-redux'
import { buyJuices } from '../redux'

const HookJuiceContainer = () => {
  const numOfJuices = useSelector((state) => state.juice.numOfJuices)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Number of Juices-{numOfJuices}</h1>
      <button onClick={() => dispatch(buyJuices())}>Buy Juices</button>
    </div>
  )
}
export default HookJuiceContainer
