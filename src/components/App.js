import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogContainer from './HogContainer'
import Filter from './Filter'

class App extends Component {
  state = {
    hogs: []
  }

  componentDidMount(){
      this.setState({
        hogs: hogs
        //TODO:filtered states
      })
  }

  order = (value) => {
    if (value === "name"){
      let hogsCopy = [...this.state.hogs]
      let sortedHogs = hogsCopy.sort((hog1, hog2) => {
        let x = hog1.name
        let y = hog2.name
        return x < y ? -1 : x > y ? 1 : 0;
      })
      this.setState({
        hogs: sortedHogs
      })
    }
    else if (value === "weight"){
      let hogsCopy = [...this.state.hogs]
      let sortedHogs = hogsCopy.sort((hog1, hog2) => {
        let x = hog1['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
        let y = hog2['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
        return x < y ? -1 : x > y ? 1 : 0;
      })
      this.setState({
        hogs: sortedHogs
      })
    }

  }

  greased = (value) => {
    let hogsCopy = [...this.state.hogs]
    console.log(hogsCopy)

    if (value === "greased"){
      this.setState({
        hogs: hogs
      })

      let filtedHogs = hogsCopy.filter(hog => {
        return hog.greased === true
      })

      this.setState({
        hogs: filtedHogs
      }, () => {
        this.state.hogs = hogs})
    }
    else if (value === "notGreased"){
      this.setState({
        hogs: hogs
      })
      let filteredHogs = hogsCopy.filter(hog => {
        return hog.greased === false
      })
      // debugger
      console.log(filteredHogs)
      this.setState({
        hogs: filteredHogs
      }, () => {
        this.state.hogs = hogs})
    }
    else {

      this.setState({
        hogs: hogs
      })
    }

  }

  render() {
    return (
      <div className="App">
          < Nav />
          < Filter order={this.order} greased={this.greased}/>
          < HogContainer hogs={this.state.hogs}/>
      </div>
    )
  }
}

export default App;
