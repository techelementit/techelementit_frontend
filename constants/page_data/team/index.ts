export type TeamMembersProps = {
  id: number;
  name: {
    en: string;
    bn: string;
  };
  position: string;
  avatar: string;
  status: "active" | "inactive";
  socialLinks: {
    portfolio: string;
    facebook: string;
    linkedIn: string;
    instagram: string;
    x: string;
  };
};
export const teamMembers: TeamMembersProps[] = [
  {
    id: 1,
    name: {
      en: "Md Rasel Hossain",
      bn: "মো রাসেল হোসেন",
    },
    position: "CEO",
    status: "active",
    avatar: "",
    socialLinks: {
      portfolio: "",
      facebook: "",
      linkedIn: "https://www.linkedin.com/in/md-rasel-7a4a79307/",
      instagram: "",
      x: "",
    },
  },
  {
    id: 2,
    name: {
      en: "Md Kamrul Islam",
      bn: "মো কামরুল ইসলাম",
    },
    position: "Full-stack Web Developer",
    avatar: "",
    status: "active",
    socialLinks: {
      portfolio: "",
      facebook: "https://www.facebook.com/profile.php?id=100007248463813",
      linkedIn: "https://www.linkedin.com/in/kamrul-islam-dev/",
      instagram: "",
      x: "",
    },
  },
  {
    id: 3,
    name: {
      en: "Md Rifat Hossain",
      bn: "মো রিফাত হোসেন",
    },
    position: "Full-stack Web Developer",
    avatar: "",
    status: "inactive",
    socialLinks: {
      portfolio: "https://mdrifat-dev-portfolio.netlify.app/",
      facebook: "https://www.facebook.com/developerrifatt",
      linkedIn: "https://www.linkedin.com/in/developerrifat/",
      instagram: "",
      x: "",
    },
  },
  {
    id: 4,
    name: {
      en: "Md Anamul Hassan",
      bn: "মো এনামুল হাসান",
    },
    position: "Full-stack Web Developer",
    status: "active",
    avatar: "",
    socialLinks: {
      portfolio: "https://anamul-hassan-web.web.app/",
      facebook: "https://www.facebook.com/itsanamulhassan/",
      linkedIn: "https://www.linkedin.com/in/anamulhassan/",
      instagram: "",
      x: "",
    },
  },
];
