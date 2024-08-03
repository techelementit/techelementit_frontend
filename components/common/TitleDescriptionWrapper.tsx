import React, { FC } from "react";

interface ITitleDescriptionWrapperProps {
  title: string;
  description: string;
}

const TitleDescriptionWrapper: FC<ITitleDescriptionWrapperProps> = ({
  title,
  description,
}) => {
  return (
    <div className="w-full">
      <h5 className="heading-tertiary border-b-2 border-dotted">
        {title ? title : "Not found"}
      </h5>
      <p className="paragraph">{description ? description : "Not found"}</p>
    </div>
  );
};

export default TitleDescriptionWrapper;
