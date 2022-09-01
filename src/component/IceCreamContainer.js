import { connect } from 'react-redux'
import { buyIceCream } from '../redux'

const IceCreamContainer = (props) => {
  return (
    <div>
      <h2>Number of IceCreams - {props.numOfIceCream}</h2>
      <button onClick={props.buyIceCream}>Buy Icecreams</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    numOfIceCream: state.iceCream.numOfIceCream,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer)
