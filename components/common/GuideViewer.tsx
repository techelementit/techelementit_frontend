import { digitConverter } from "@/utils/HelperFunctions";
import React, { FC } from "react";

interface IGuideViewerProps {
  lang: string;
  guideSteps: any;
  heading: string;
}

const GuideViewer: FC<IGuideViewerProps> = ({ lang, guideSteps, heading }) => {
  return (
    <div>
      {heading && <h5 className="font-semibold text-base">{heading || ""}</h5>}
      {guideSteps.length > 0 && (
        <ul>
          {guideSteps.map((step: any, index: number) => (
            <li key={index}>
              <span>
                <span className="font-semibold pr-1">
                  {lang === "en"
                    ? `Step ${index + 1}:`
                    : `ধাপ ${digitConverter(index + 1, lang)}ঃ`}
                </span>
                {step[lang]}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GuideViewer;
