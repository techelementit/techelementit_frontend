import { FC } from "react";
import CardWrapper from "../wrapper/CardWrapper";
import { fontSwitcher } from "@/services/helper_functions/fontSwitcher";
import { Subheading } from "../typography/Subheading";
import { Heading } from "../typography/Heading";
import { Paragraph } from "../typography/Paragraph";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "../typography/Label";
import useCustomTranslator from "@/services/helper_functions/useCustomTranslator";
import { TestimonialsProps } from "@/constants/page_data/tesimonials";

interface ITestimonialCardProps {
  lang: string;
  className?: string;
  singleTestimonial: TestimonialsProps;
}

const TestimonialCard: FC<ITestimonialCardProps> = ({
  lang,
  className,
  singleTestimonial,
}) => {
  return (
    <CardWrapper
      className={cn(
        fontSwitcher(lang),
        "w-[400px] lg:w-[466px] p-6 lg:p-8 duration-300 transition-all border-transparent border hover:border-secondary group",
        className
      )}
      variant="secondary"
      blur="sm"
      rounded="xl"
    >
      <div className="flex items-center gap-x-[10px] lg:gap-x-[20px]">
        <Avatar className="size-[50px] lg:size-[71.472px]  duration-300 transition-all border-transparent border group-hover:border-secondary">
          <AvatarImage src={"../../../public/photo-2.jpg"} />
          <AvatarFallback>KW</AvatarFallback>
        </Avatar>
        <div className="w-8/12">
          <Heading className="leading-3 lg:leading-6 " size="h4">
            {singleTestimonial.username}
          </Heading>
          <Label size="sm">{singleTestimonial.business}</Label>
        </div>
      </div>
      <Paragraph size="sm" className="mt-2 lg:mt-5 leading-6">
        {singleTestimonial.quote}
      </Paragraph>
    </CardWrapper>
  );
};

export default TestimonialCard;
