import React, { FC, useRef } from "react";
import { Button } from "../ui/button";

interface IFileInputProps {
  photoSelector: (photo: any) => void;
  lang: string;
}

const FileInput: FC<IFileInputProps> = ({ photoSelector, lang }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  // Handle the change event when a file is selected
  const handleOnChange = (event: any) => {
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = function () {
        photoSelector(reader?.result);
      };
    }
  };
  const onChooseImg = () => {
    inputRef?.current?.click();
  };
  return (
    <div>
      {/* Hidden the input element */}
      <input
        accept="image/*"
        type="file"
        name="file"
        id="file"
        onChange={handleOnChange}
        className="hidden"
        ref={inputRef}
      />
      {/* Button to trigger the file input dialog */}
      <Button
        className={`${lang === "en" ? "font-poppins" : "font-anek"}`}
        onClick={onChooseImg}
        type="button"
        variant="default"
        size="rounded"
      >
        {lang === "en" ? "Choose Photo" : "ছবি নির্বাচন করুন"}
      </Button>
    </div>
  );
};

export default FileInput;
