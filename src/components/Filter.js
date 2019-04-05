import React from 'react'

class Filter extends React.Component {
  render(){
    // console.log(this.props.order('name'))
    return (
      <div>
        <form>
          <input type="radio" name="order" onClick={() => this.props.order('name')}/>Name<br/>
          <input type="radio" name="order" onClick={() => this.props.order('weight')}/>Weight<br/>
        </form>
        <form>
          <input type="radio" name="greased" onClick={() => this.props.greased('greased')}/>Greased<br/>
          <input type="radio" name="greased" onClick={() => this.props.greased('notGreased')}/>Not Greased<br/>
        </form>
      </div>
    )
  }
}
export default Filter;
