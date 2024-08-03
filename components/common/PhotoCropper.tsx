import React, { FC, useState } from "react";
import Cropper from "react-easy-crop";

interface IPhotoCropperProps {
  image: string;
  setCroppedArea: (croppedArea: any) => void;
  aspectRatio: number;
}

const PhotoCropper: FC<IPhotoCropperProps> = ({
  image,
  aspectRatio,
  setCroppedArea,
}) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  const onCropComplete = (croppedArea: any, croppedAreaPixels: any) => {
    setCroppedArea(croppedAreaPixels);
  };

  return (
    <div className="w-full h-[280px] md:h-[300px] lg:h-[400px] flex flex-col items-center justify-center xs:scale-80 sm:scale-100">
      {/* PHOTO CROPPER COMPONENT */}
      <Cropper
        minZoom={-1}
        maxZoom={100}
        objectFit="horizontal-cover"
        image={image}
        aspect={aspectRatio}
        crop={crop}
        zoom={zoom}
        zoomSpeed={0.2}
        onCropChange={setCrop}
        onZoomChange={setZoom}
        onCropComplete={onCropComplete}
        style={{
          containerStyle: {
            borderRadius: "5px",
            margin: "35px auto 0px",
            width: "95%",
            height: "70%",
          },
        }}
      />
    </div>
  );
};

export default PhotoCropper;
