import { FC } from "react";
import CardWrapper from "../wrapper/CardWrapper";
import { fontSwitcher } from "@/services/helper_functions/fontSwitcher";
import { Heading } from "../typography/Heading";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "../typography/Label";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import {
  LucideBriefcase,
  LucideFacebook,
  LucideInstagram,
  LucideLinkedin,
  LucideTwitter,
} from "lucide-react";
import useCustomTranslator from "@/services/helper_functions/useCustomTranslator";
import { TeamMembersProps } from "@/constants/page_data/team";
import Link from "next/link";

interface ITeamMemberCardProps {
  lang: string;
  className?: string;
  key?: number | string;
  singleMember: TeamMembersProps;
}

const TeamMemberCard: FC<ITeamMemberCardProps> = ({
  lang,
  className,
  singleMember,
}) => {
  return (
    <CardWrapper
      className={cn(
        fontSwitcher(lang),
        " p-8 hover:bg-secondary/10 duration-300 transition-all border-transparent border hover:border-secondary group",
        className
      )}
      variant="secondary"
      blur="sm"
      rounded="xl"
    >
      <div className="flex flex-col items-center gap-y-[30px] relative">
        <Avatar className="size-[147px] duration-300 transition-all border-transparent border group-hover:border-secondary absolute -top-1/2 left-1/2 -translate-x-1/2 z-10">
          <AvatarImage src={"./photo-2.jpg"} />
          <AvatarFallback>KW</AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-center mt-[70px]">
          <Heading size="h4">
            {useCustomTranslator(
              lang,
              singleMember?.name?.en,
              singleMember?.name?.bn
            )}
          </Heading>
          <Label size="md">
            {useCustomTranslator(
              lang,
              singleMember?.position,
              singleMember?.position
            )}
          </Label>
        </div>
        <ul className="flex gap-x-5">
          {singleMember?.socialLinks?.facebook && (
            <li>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={singleMember?.socialLinks?.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button shape="pill" size="square">
                        <LucideFacebook className="size-[30px]" />
                      </Button>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="top">
                    <p>{useCustomTranslator(lang, "Facebook", "ফেইসবুক")}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </li>
          )}
          {singleMember?.socialLinks?.x && (
            <li>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={singleMember?.socialLinks?.x}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button shape="pill" size="square">
                        <LucideTwitter className="size-[30px]" />
                      </Button>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="top">
                    <p>{useCustomTranslator(lang, "Twitter(X)", "টুইটার")}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </li>
          )}

          {singleMember?.socialLinks?.linkedIn && (
            <li>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={singleMember?.socialLinks?.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button shape="pill" size="square">
                        <LucideLinkedin className="size-[30px]" />
                      </Button>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="top">
                    <p>{useCustomTranslator(lang, "LinkedIn", "লিংক্‌ডইন")}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </li>
          )}
          {singleMember?.socialLinks?.instagram && (
            <li>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={singleMember?.socialLinks?.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button shape="pill" size="square">
                        <LucideInstagram className="size-[30px]" />
                      </Button>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="top">
                    <p>
                      {useCustomTranslator(lang, "Instagram", "ইন্সটাগ্রাম")}
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </li>
          )}
          {singleMember?.socialLinks?.portfolio && (
            <li>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={singleMember?.socialLinks?.portfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button shape="pill" size="square">
                        <LucideBriefcase className="size-[30px]" />
                      </Button>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="top">
                    <p>{useCustomTranslator(lang, "Portfolio", "পোর্টফলিও")}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </li>
          )}
        </ul>
      </div>
    </CardWrapper>
  );
};

export default TeamMemberCard;
