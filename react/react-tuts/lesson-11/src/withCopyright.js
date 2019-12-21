import React, { Component } from 'react'

const withCopyright = (YourComponent) => {
  return class WithCopyright extends Component {
    render() {
      return (
        <>
          <YourComponent {...this.props} />
          <div>&copy; 2019 &emsp;千锋教育</div>
        </>
      )
    }
  }  
}

export default withCopyright