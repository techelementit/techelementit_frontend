import React, { FC } from "react";
import SectionWrapper from "../common/wrapper/SectionWrapper";
import Image from "next/image";
import Logo from "../../public/tech_element_bd_logo.svg";
import { Label } from "../common/typography/Label";
import { Button } from "../ui/button";
import {
  LucideFacebook,
  LucideInstagram,
  LucideLinkedin,
  LucideTwitter,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import BlurEffect from "../common/effect/BlurEffect";
import useCustomTranslator from "@/services/helper_functions/useCustomTranslator";
import { cn } from "@/lib/utils";
import { fontSwitcher } from "@/services/helper_functions/fontSwitcher";

interface IFooterProps {
  lang: string;
}

const Footer: FC<IFooterProps> = ({ lang }) => {
  return (
    <footer className={cn(fontSwitcher(lang))}>
      <SectionWrapper className={cn(fontSwitcher, "relative my-0 lg:my-0")}>
        <BlurEffect
          align="left_bottom"
          variant="tertiary"
          blur="sm"
          size="sm"
        />
        <div className="py-[12px] md:py-[40] lg:py-[70px] flex flex-col md:flex-row w-full">
          <div className="flex w-full  md:w-1/2 flex-col">
            <Image
              src={Logo}
              alt="tech element bg logo"
              width={221}
              height={35}
            />
            <Label className="mb-6 md:mb-[40px] mt-[6px]" size="md">
              {useCustomTranslator(
                lang,
                " Get in Touch. We want to hear from you!",
                "আমাদের সাথে যোগাযোগ করুন! আমরা আপনার কথা শুনতে আগ্রহী।"
              )}
            </Label>
            <Label className="mb-20 md:mb-[212px]" size="sm">
              <a href="mailto:techelementbd@gmail.com">
                techelementbd@gmail.com
              </a>
            </Label>
            <Label className="hidden md:block" size="md">
              © 2024 All Right Reserved. | Tech Element BD.
            </Label>
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-start md:items-end">
            <div className="flex gap-x-20">
              <ul className="flex flex-col gap-y-5">
                <li>
                  <Label size="md">
                    {useCustomTranslator(lang, "Services", " সেবাসমূহ")}
                  </Label>
                </li>
                <li>
                  <Label size="md">
                    {useCustomTranslator(
                      lang,
                      "Case Studies",
                      "পদ্ধতিগত অধ্যয়ন"
                    )}
                  </Label>
                </li>
                <li>
                  <Label size="md">
                    {useCustomTranslator(lang, "Blog", "ব্লগ")}
                  </Label>
                </li>
                <li>
                  <Label size="md">
                    {useCustomTranslator(lang, "About Us", "আমাদের সম্পর্কে")}
                  </Label>
                </li>
              </ul>
            </div>
            <ul className="flex gap-x-5 mt-[50px]">
              <li>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button shape="circle" size="square">
                        <LucideFacebook className="size-[30px]" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <p>Facebook</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </li>
              <li>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button shape="circle" size="square">
                        <LucideTwitter className="size-[30px]" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <p>Twitter &#40;X&#41;</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </li>
              <li>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button shape="circle" size="square">
                        <LucideLinkedin className="size-[30px]" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <p>Linkedin</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </li>
              <li>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button shape="circle" size="square">
                        <LucideInstagram className="size-[30px]" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <p>Instagram</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </li>
            </ul>
          </div>
          <Label className="block md:hidden mt-12 -mb-12 md:mt-0" size="sm">
            © 2024 All Right Reserved. | Tech Element BD.
          </Label>
        </div>
      </SectionWrapper>
    </footer>
  );
};

export default Footer;
