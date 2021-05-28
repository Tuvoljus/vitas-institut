import React, { Component } from 'react'

export class M1 extends Component {
  constructor(props) {
    super(props);

    this.state = { collapseShow: '' };
    handleClick = event => {

    if (this.props.onClick) {
      this.props.onClick(event);
      // this.setState({collapseShow: 'show'})
      }

    if (this.props.onCustomClick) {
      this.props.onCustomClick(event);
      this.setState({ collapseShow: 'show'})
    }
  }
    }

    render() {
        const { onCustomClick, ...props } = this.props;         
        return (
            <>
            <a {...props} onClick={this.handleClick} />
               
            <div className={`collapse ${this.state.collapseShow}`}>was anderes</div>
            </>            
        )
    }

    
}

export default M1


