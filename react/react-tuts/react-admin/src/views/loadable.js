// 这个文件只是用于解释react-loadable原理用。当然可以无缝切换
import React, { Component } from 'react'

const Loadable = ({
  loader,
  loading: Loading
}) => {
  return class LoadableComponent extends Component {
    state = {
      LoadedComponent: null
    }
    componentDidMount() {
      // import('./Dashboard')
      loader()
        .then(resp => {
          this.setState({
            LoadedComponent: resp.default
          })
        })
    }
    render() {
      const {
        LoadedComponent
      } = this.state
      return (
        LoadedComponent
        ?
        <LoadedComponent />
        :
        <Loading />
      )
    }
  }  
}
export default Loadable