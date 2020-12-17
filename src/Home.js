import React from "react";
import Cropper from "cropperjs";
import "cropperjs/dist/cropper.min.css";
import "./Home.css";
import { auth } from "./firebase";
export default class ImageCropper extends React.Component {
  constructor() {
    super();
    this.state = {
      imageDestination: "",
    };
    this.imageElement = React.createRef();
  }
  componentDidMount() {
    const cropper = new Cropper(this.imageElement.current, {
      zoomable: true,
      zoomOnWheel: false,
      scalable: true,
      aspectRatio: 1,
      crop: () => {
        const canvas = cropper.getCroppedCanvas();
        this.setState({ imageDestination: canvas.toDataURL("image/png") });
      },
    });
  }

  handleSignOut() {
    auth.signOut();
  }
  render() {
    return (
      <div>
        <div className="img-container">
          <img ref={this.imageElement} src={this.props.src} alt="" />
        </div>

        <img className="img-preview" src={this.state.imageDestination} alt="" />
        <button className="btn" onClick={this.handleSignOut}>
          SignOut
        </button>
      </div>
    );
  }
}
