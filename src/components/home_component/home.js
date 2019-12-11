import React from 'react'
import NavigationHeader from '../navigation_component/navigationHeader';

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <NavigationHeader />
        <h1>Home</h1>
      </div>
    )
  }
}
export default Home;