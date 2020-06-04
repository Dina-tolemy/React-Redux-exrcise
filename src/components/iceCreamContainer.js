import React from "react";
import { buyIceCream } from '../Redux'
import {connect} from 'react-redux'

const IceContainer = (props) => {
  return (
    <div>
      <h2>Number of Ice cream ={props.numOfIcecream}</h2>
      <button onClick={props.buyIceCream}>Buy Ice Cream</button>
    </div>
  );
};

const mapStateToProps= state=>{
  return{
    numOfIcecream: state.iceCream.numOfIcecream
  }
}

const mapDispatchToProps=dispatch=>{
  return{
    buyIceCream:()=>dispatch(buyIceCream())
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (IceContainer);