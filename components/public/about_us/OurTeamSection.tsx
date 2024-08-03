import TeamMemberCard from "@/components/common/cards/TeamMemberCard";
import { Heading } from "@/components/common/typography/Heading";
import SectionWrapper from "@/components/common/wrapper/SectionWrapper";
import { teamMembers, TeamMembersProps } from "@/constants/page_data/team";
import useCustomTranslator from "@/services/helper_functions/useCustomTranslator";
import { TemplateContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import React, { FC } from "react";

interface IOurTeamSectionProps {
  lang: string;
}

const OurTeamSection: FC<IOurTeamSectionProps> = ({ lang }) => {
  return (
    <SectionWrapper>
      <Heading gradient="secondary" size="h3">
        {useCustomTranslator(lang, "Our Experts", "আমাদের বিশেষজ্ঞরা ")}
      </Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[100px] gap-[30px] w-full mt-[140px]">
        {teamMembers?.length > 0 &&
          teamMembers.map((singeMember: TeamMembersProps) => (
            <TeamMemberCard
              key={singeMember.id}
              singleMember={singeMember}
              lang={lang}
            />
          ))}
      </div>
    </SectionWrapper>
  );
};

export default OurTeamSection;
