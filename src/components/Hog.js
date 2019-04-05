import React from 'react'


class Hog extends React.Component {
  state = {
    clicked: false
  }

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render(){
    const nameFormatted = (name) => {
      let newName = name.toLowerCase().split(" ").join("_")
      return require(`../hog-imgs/${newName}.jpg`)
    }

    return (

      <div>
        <h1>{this.props.hog.name}</h1>
        <img src={nameFormatted(this.props.hog.name)} alt={this.props.hog.name} onClick={this.handleClick}/>
        {this.state.clicked ? <h2>{this.props.hog.specialty} <h3>{this.props.hog.greased ? <h3>Greased</h3> : <h3>Not Greased</h3>}</h3><h3>Weight: {this.props.hog["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]}</h3> <h3>Highest Medal Achieved: {this.props.hog["highest medal achieved"]}</h3> </h2>: ''}

      </div>
    )
  }
}

export default Hog;
