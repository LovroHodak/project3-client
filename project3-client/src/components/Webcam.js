import React from "react";
import Webcam from "react-webcam";
import ReactDOM from 'react-dom';
 


const WebcamCapture = (props) => {
    const webcamRef = React.useRef(null);
    const [imgSrc, setImgSrc] = React.useState(null);
  
    const capture = React.useCallback(() => {
      const imageSrc = webcamRef.current.getScreenshot();
      setImgSrc(imageSrc);
    }, [webcamRef, setImgSrc]);
  
    return (
        <div>
          <Webcam
            style={{height: '222px', marginBottom: '10px'}}
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
          />
          <button onClick={capture} style={{marginBottom: '10px'}}>Capture photo</button>
          {imgSrc && (
              <div>
                <img
                  src={imgSrc} alt={'screenshot'}
                  style={{marginBottom: '10px'}}
                />
                <button onClick={props.onUpload} style={{marginBottom: '10px'}}>Doesn't work yet</button>
                <p>Copy image URL</p>
                <input value={imgSrc} style={{marginBottom: '10px'}}></input>
                
              </div>
          )}
          
        </div>
    );
  };
  
  ReactDOM.render(<WebcamCapture />, document.getElementById("root"));

  export default WebcamCapture
  
  // https://www.npmjs.com/package/react-webcam
  