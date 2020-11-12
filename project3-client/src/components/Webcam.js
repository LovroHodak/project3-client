import React from "react";
import Webcam from "react-webcam";
import ReactDOM from 'react-dom';
 


const WebcamCapture = (props) => {
    const webcamRef = React.useRef(null);
    const [imgSrc, setImgSrc] = React.useState(null);
  
    const capture = React.useCallback(() => {
      const imageSrc = webcamRef.current.getScreenshot();
      console.log(webcamRef.current)
      props.onAdd(imageSrc)
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
          <button onClick={capture} style={{marginBottom: '10px'}}>
            Capture photo
          </button>
          {imgSrc && (
              <div>
                <a href={imgSrc} download >
                  <img
                    src={imgSrc} alt={'screenshot'}
                    style={{marginBottom: '10px'}}
                  />
                </a>
                <h5 style={{color: '#d64e25'}}><span style={{color: '#255ed6'}}>1.</span> Press on photo to download</h5>
                <h5 style={{color: '#d64e25'}}><span style={{color: '#255ed6'}}>2.</span> Choose file</h5>
                
                
              </div>
          )}
          
        </div>
    );
  };
  
  ReactDOM.render(<WebcamCapture />, document.getElementById("root"));

  export default WebcamCapture
  
  // https://www.npmjs.com/package/react-webcam
  