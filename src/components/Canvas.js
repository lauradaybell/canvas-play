import React, {Component} from "react";
import CanvasDraw from "react-canvas-draw";
import {withGetScreen} from 'react-getscreen'



class Canvas extends Component {
   constructor(props) {
        super(props)
        this.state = {
            height: 500,
            width: 500
        }
    }

    componentDidMount() {
        if (this.props.isMobile()) {
            this.setState({
                height: 250,
                width: 250
            })};
        if (this.props.isTablet()) {
            this.setState({
                height: 300,
                width: 300
            })
        }
    }

    render() {
        return(
            <CanvasDraw 
                canvasHeight={this.state.height}
                canvasWidth={this.state.width}/>
        )
    }
}

export default withGetScreen(Canvas)