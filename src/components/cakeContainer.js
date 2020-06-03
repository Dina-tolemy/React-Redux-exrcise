import React from "react";

const CakeContainer = () => {
  return (
    <div>
      <h2>Number of cakes</h2>
      <button>Buy cakes</button>
    </div>
  );
};

const mapStateToProps= state=>{
  return{
    numOfCake: state.numOfCake
  }
}

const mapDispatchToProps=dispatch=>{
  return{
    buyCake:()=>dispatch(buyCake())
  }
}
export default CakeContainer;
