import React from 'react'
import Hog from './Hog'


class HogContainer extends React.Component {
  render(){
    // console.log(this.props);
    let hogCard = this.props.hogs.map(eachHog => {
      return < Hog hog={eachHog} />
    })




    return (
      <div>
        {hogCard}
      </div>
    )
  }
}

export default HogContainer;
