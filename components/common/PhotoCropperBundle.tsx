import React, { FC, useState } from "react";
import FileInput from "../common/FileInput";
import PhotoCropper from "./PhotoCropper";
import { Button } from "../ui/button";
import { IMAGE_CROP_ASPECT_RATIO } from "@/constants/common";
import { LucideCheck } from "lucide-react";

interface IPhotoCropperBundleProps {
  addPhotoHandler: (photo: string) => void;
  ratio?: number;
  lang: string;
  btnRatio?: boolean;
}

const PhotoCropperBundle: FC<IPhotoCropperBundleProps> = ({
  addPhotoHandler,
  ratio,
  lang,
  btnRatio = false,
}) => {
  // PHOTO CROPPING INITIAL STATES
  const [aspectRatio, setAspectRatio] = useState(ratio || 16 / 9);
  const [step, setStep] = useState("choose-photo");
  const [image, setImage] = useState("");
  const [croppedArea, setCroppedArea] = useState(null);

  // CALLBACK FUNCTION WHEN AN IMAGE IS SELECTED
  const photoSelector = (photo: any) => {
    setImage(photo);
    setStep("crop-photo");
  };

  // CALLBACK FUNCTION WHEN CROPPING IS DONE
  const onCropDone = (imgCroppedArea: any) => {
    // CREATE A CANVAS ELEMENT TO CROP THE IMAGE
    const convasEle = document.createElement("canvas");
    convasEle.width = imgCroppedArea.width;
    convasEle.height = imgCroppedArea.height;

    // CREATE A TWO DIMENSIONAL CONTEXT
    const context = convasEle.getContext("2d");

    // LOAD THE SELECTED IMAGE
    let imageObj1 = new Image();
    imageObj1.src = image;
    imageObj1.onload = () => {
      context?.drawImage(
        imageObj1,
        imgCroppedArea.x,
        imgCroppedArea.y,
        imgCroppedArea.width,
        imgCroppedArea.height,
        0,
        0,
        imgCroppedArea.width,
        imgCroppedArea.height
      );
      // CONVERT THE CANVAS CONTENT TO A DATA URL (JPEG FORMAT)
      const dataUrl = convasEle.toDataURL("image/jpeg");
      setImage(dataUrl);
      setStep("photo-preview");
    };
  };

  // CALLBACK FUNCTION WHEN CROPPING IS CANCELED
  const onCropCancel = () => {
    setImage("");
    setStep("choose-photo");
  };
  return (
    <div className="h-full w-full flex items-center justify-center">
      {step === "choose-photo" && (
        <div className="py-16">
          <FileInput photoSelector={photoSelector} lang={lang}></FileInput>
        </div>
      )}
      {step === "crop-photo" && (
        <div className=" flex flex-col w-full h-full">
          {/* PHOTO CROP MAIN CONTAINER */}
          <div className="w-full h-full">
            <div className="w-full h-full">
              <PhotoCropper
                setCroppedArea={setCroppedArea}
                aspectRatio={aspectRatio}
                image={image}
              />
            </div>
          </div>

          {/* CROP RATION BUTTON */}

          <div
            className={`absolute top-[80%] md:top-[70%] flex flex-row items-center left-1/2 -translate-x-1/2 overflow-x-auto w-40 md:w-3/4 scroll-hidden md:grid grid-cols-5 gap-2 border-2 border-primary/50 px-2 py-1 rounded-lg ${
              btnRatio || "opacity-50"
            }`}
          >
            {IMAGE_CROP_ASPECT_RATIO.length > 0 &&
              IMAGE_CROP_ASPECT_RATIO.map((ratioItem: any) => (
                <button
                  key={ratioItem.ratio}
                  className={`text-sm font-poppins font-medium leading-none ml-1 border-2 border-primary rounded-lg py-[1px] px-[2px] hover:bg-primary/20 ${
                    aspectRatio === ratioItem.ratio &&
                    "bg-primary hover:!bg-primary/90 text-primary-foreground"
                  }  ${btnRatio || "cursor-not-allowed pointer-events-none"}`}
                  onClick={() => setAspectRatio(ratioItem.ratio)}
                  type="button"
                >
                  {ratioItem.key}
                </button>
              ))}
          </div>

          <div className="flex items-center justify-center gap-1 md:gap-2 lg:gap-4 mt-24 lg:mt-12 w-full ">
            {/* BUTTON FOR CANCEL THE CROP */}
            <Button
              className={`${lang === "en" ? "font-poppins" : "font-anek"}`}
              onClick={() => onCropCancel()}
              type="button"
              size="rounded"
              variant="destructive"
            >
              {lang === "en" ? "Cancel" : "বাতিল করুন"}
            </Button>
            {/* BUTTON FOR CROPPING  */}
            <Button
              className={`${lang === "en" ? "font-poppins" : "font-anek"}`}
              onClick={() => {
                onCropDone(croppedArea);
              }}
              type="button"
              size="rounded"
              variant="default"
            >
              {lang === "en" ? " Crop" : "কাটুন"}
            </Button>
            {/* BUTTON FOR CONFIRMATION */}
            <Button
              className={`${lang === "en" ? "font-poppins" : "font-anek"}`}
              onClick={() => {
                addPhotoHandler(image);
                setStep("photo-preview-default");
              }}
              type="button"
              size="rounded"
              variant="default"
            >
              {lang === "en" ? "Default" : "ডিফল্ট"}
            </Button>
          </div>
        </div>
      )}
      {/* PHOTO PREVIEW  */}
      {(step === "photo-preview" || step === "photo-preview-default") && (
        <div>
          <div className="w-full h-full ">
            <img
              className={`rounded-md border-4 my-4 ${
                step === "photo-preview-default" && "w-full h-full"
              }
              ${aspectRatio === 1 / 1 && "w-[400px] h-[400px]"} 
              ${aspectRatio === 4 / 3 && "w-[400px] h-[300px]"} 
              ${aspectRatio === 3 / 2 && "w-[400px] h-[267px]"} 
              ${aspectRatio === 16 / 9 && "w-[400px] h-[225px]"}
              ${aspectRatio === 5 / 4 && "w-[400px] h-[320px]"}
              ${aspectRatio === 7 / 5 && "w-[400px] h-[286px]"}
              ${aspectRatio === 8 / 5 && "w-[400px] h-[250px]"}
              ${aspectRatio === 4 / 5 && "w-[320px] h-[400px]"}
              ${aspectRatio === 3 / 4 && "w-[300px] h-[400px]"}
              ${aspectRatio === 2 / 3 && "w-[267px] h-[400px]"}`}
              src={image}
              alt="preview photo"
            />
          </div>
          <div className="flex items-center justify-center gap-1 md:gap-2 lg:gap-4 mt-4">
            <Button
              className={`${lang === "en" ? "font-poppins" : "font-anek"}`}
              onClick={() => onCropCancel()}
              type="button"
              size="rounded"
              variant="destructive"
            >
              {lang === "en" ? "Cancel" : "বাতিল করুন"}
            </Button>

            <Button
              className={`${lang === "en" ? "font-poppins" : "font-anek"}`}
              onClick={() => {
                addPhotoHandler(image);
                setStep("done");
              }}
              type="button"
              size="rounded"
              variant="default"
            >
              {lang === "en" ? " Done" : "নিশ্চিত করুন"}
            </Button>
          </div>
        </div>
      )}

      {step === "done" && (
        <div className="flex items-center justify-center flex-col my-12">
          <span className="bg-accent w-24 h-24 rounded-full flex justify-center items-center">
            <LucideCheck className="w-16 h-16 text-foreground/70" />
          </span>
          <p
            className={`medium-16 mt-4 ${
              lang === "en" ? "font-poppins" : "font-anek"
            }`}
          >
            {lang === "en"
              ? "Photo has been cropped successfully"
              : "ফটোটি সফলভাবে কর্তন করা হয়েছে"}
          </p>
        </div>
      )}
    </div>
  );
};

export default PhotoCropperBundle;
