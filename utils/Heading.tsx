import React, { FC } from "react";

interface IHeadingProps {
  title: string;
  description?: string;
  keywords?: string;
}

const Heading: FC<IHeadingProps> = ({ title, description, keywords }) => {
  return (
    <>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </>
  );
};

export default Heading;
