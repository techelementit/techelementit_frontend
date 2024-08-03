import React, { FC, ReactNode } from "react";

interface ILabelInputErrorWrapperProps {
  children: ReactNode;
}

const LabelInputErrorWrapper: FC<ILabelInputErrorWrapperProps> = ({
  children,
}) => {
  return <div className="w-full my-1 ">{children}</div>;
};

export default LabelInputErrorWrapper;
