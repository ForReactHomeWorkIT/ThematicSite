import React, {Component} from 'react';
import '../App.css';

const renderList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const getContent = renderList.map((g_img, index) => (
    <img key={index} src={require("../../public/" + g_img + ".jpg")} alt="img"/>
))

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.handleCLick = this.handleCLick.bind(this);
        this.state = {
            showElement: false,
        };
    }
    handleCLick(e) {
        this.setState({
            showElement: true,
        })
        this.event = e.target;
    }

    render() {

        return (
            <div className="Gallery">

                {this.state.handleCLick &&
                <div className="photo">{this.event}</div>
                }
                <div onClick={(e) => this.handleCLick(e)}
                     className="photo">{getContent}{getContent}{getContent}{getContent}</div>
            </div>
        )
    }
}

export default Gallery;

