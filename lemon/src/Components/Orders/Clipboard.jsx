import React, { useState, useEffect, useRef } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

function Clipboard() {
  const [imageUrl, setImageUrl] = useState(null);
  const [cropper, setCropper] = useState(null);
  const cropperRef = useRef(null);

  const handlePaste = (e) => {
    const clipboardData = e.clipboardData || window.clipboardData;
    const imageFile = clipboardData.items[0].getAsFile();

    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      setImageUrl(fileReader.result);
    };
    fileReader.readAsDataURL(imageFile);
  };

  const handleCrop = () => {
    const imageElement= cropperRef?.current;
    const cropper= imageElement?.cropper;
    if (typeof cropper.getCroppedCanvas() === "undefined") {
        console.log('not cropping image')
      return;
    }
    setImageUrl(cropper.getCroppedCanvas().toDataURL());
    // setCropper(cropper.getCroppedCanvas().toBlob())
    cropper.getCroppedCanvas().toBlob((blob) => {
        setCropper(blob)
      });
  };

  const onCrop = () => {
    const imageElement = cropperRef?.current;
    const cropper = imageElement?.cropper;
    setCropper(cropper.getCroppedCanvas().toBlob());
  };


  

  return (
    <div
      onPaste={handlePaste}
      className="w-full h-full bg-blue-300 rounded-md p-2"
    >
      {imageUrl && (
        <Cropper
          src={imageUrl}
          ref = {cropperRef}
        //   guides={false}
    //   crop={onCrop}
        //   ref={(cropper) => {
        //     setCropper(cropper);
        //   }}
        className='object-fill w-full h-full'
        />
      )}
      <button onClick={handleCrop}>Crop</button>
    </div>
  );
}

export default Clipboard;
