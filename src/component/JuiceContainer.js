import { connect } from 'react-redux'
import { buyJuices } from '../redux'

const JuiceContainer = (props) => {
  console.log(props)
  return (
    <div>
      <h2>Number of juices - {props.item}</h2>
      <button onClick={props.buyJuices}>Buy cake</button>
    </div>
  )
}

// provides additional information to props
const mapStateToProps = (state) => {
  return {
    item: state.juice.numOfJuices,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyJuices: () => dispatch(buyJuices()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(JuiceContainer)
