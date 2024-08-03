import {
  LucideBriefcase,
  LucideGitBranchPlus,
  LucideMonitorDot,
  LucideMonitorSmartphone,
  LucideMove3D,
  LucideSchool,
  LucideTicket,
  LucideUserPlus2,
} from "lucide-react";

export type ServicesDataProps = {
  id: number;
  icon: any;
  heading: {
    en: string;
    bn: string;
  };
  subHeading: {
    en: string;
    bn: string;
  };
  paragraph: {
    en: string;
    bn: string;
  };
};

export const servicesData: ServicesDataProps[] = [
  {
    id: 1,
    icon: LucideMonitorSmartphone,
    heading: {
      en: "E-commerce Website Development Services",
      bn: "ই-কমার্স ওয়েবসাইট ডেভেলপমেন্ট সেবা",
    },
    subHeading: {
      en: "Build robust and scalable online stores",
      bn: "শক্তিশালী এবং মাপযোগ্য অনলাইন স্টোর তৈরি করুন",
    },
    paragraph: {
      en: "Tech Element IT specializes in the development of sophisticated e-commerce platforms tailored to meet the unique needs of your business. Our services include the integration of secure payment gateways, user-friendly navigation, and responsive designs to ensure a seamless shopping experience for your customers. Our e-commerce solutions are designed to enhance customer engagement and drive sales growth.",
      bn: "টেক এলিমেন্ট আইটি শক্তিশালী এবং অত্যাধুনিক ই-কমার্স প্ল্যাটফর্ম তৈরি করতে বিশেষজ্ঞ যা আপনার ব্যবসার অনন্য চাহিদা পূরণ করতে উপযুক্ত। আমাদের পরিষেবাগুলির মধ্যে রয়েছে নিরাপদ পেমেন্ট গেটওয়ে, ব্যবহারকারী-বান্ধব নেভিগেশন এবং প্রতিক্রিয়াশীল ডিজাইন যা আপনার গ্রাহকদের জন্য একটি নিরবচ্ছিন্ন কেনাকাটার অভিজ্ঞতা নিশ্চিত করে। আমাদের ই-কমার্স সমাধানগুলি গ্রাহক সম্পৃক্ততা বৃদ্ধি এবং বিক্রয় বৃদ্ধির জন্য ডিজাইন করা হয়েছে।",
    },
  },
  {
    id: 2,
    icon: LucideSchool,
    heading: {
      en: "Comprehensive School Management System Solutions",
      bn: "সমগ্র স্কুল ম্যানেজমেন্ট সিস্টেম সমাধান",
    },
    subHeading: {
      en: "Streamline and optimize school operations",
      bn: "স্কুল পরিচালনা সহজ এবং অনুকূল করুন",
    },
    paragraph: {
      en: "At Tech Element IT, we provide advanced school management systems designed to streamline administrative tasks and enhance the overall efficiency of educational institutions. Our solutions encompass student information management, attendance tracking, grade reporting, and scheduling. These systems are designed to facilitate seamless communication between teachers, students, and parents, ensuring a cohesive educational environment.",
      bn: "টেক এলিমেন্ট আইটিতে আমরা উন্নত স্কুল ম্যানেজমেন্ট সিস্টেম প্রদান করি যা প্রশাসনিক কাজগুলি সহজতর এবং শিক্ষাপ্রতিষ্ঠানগুলির সামগ্রিক দক্ষতা বৃদ্ধি করতে ডিজাইন করা হয়েছে। আমাদের সমাধানগুলির মধ্যে রয়েছে ছাত্র তথ্য ব্যবস্থাপনা, উপস্থিতি ট্র্যাকিং, গ্রেড রিপোর্টিং এবং সময়সূচী। এই সিস্টেমগুলি শিক্ষকদের, ছাত্রদের এবং অভিভাবকদের মধ্যে মসৃণ যোগাযোগ সহজতর করতে ডিজাইন করা হয়েছে, যা একটি সুনির্দিষ্ট শিক্ষাগত পরিবেশ নিশ্চিত করে।",
    },
  },
  {
    id: 3,
    icon: LucideMonitorDot,
    heading: {
      en: "Advanced Point of Sale (POS) Systems",
      bn: "উন্নত পয়েন্ট অফ সেল (POS) সিস্টেম",
    },
    subHeading: {
      en: "Enhance transaction efficiency and inventory management",
      bn: "লেনদেনের দক্ষতা এবং ইনভেন্টরি পরিচালনা উন্নত করুন",
    },
    paragraph: {
      en: "Tech Element IT offers state-of-the-art POS systems that facilitate efficient transaction processing, comprehensive inventory management, and effective customer relationship management. Our POS solutions are customized to meet the specific needs of retail businesses, restaurants, and service providers, ensuring smooth and seamless operations.",
      bn: "টেক এলিমেন্ট আইটি অত্যাধুনিক POS সিস্টেম প্রদান করে যা দক্ষ লেনদেন প্রক্রিয়াকরণ, সমগ্র ইনভেন্টরি ব্যবস্থাপনা এবং কার্যকর গ্রাহক সম্পর্ক পরিচালনা সহজতর করে। আমাদের POS সমাধানগুলি খুচরা ব্যবসা, রেস্তোরাঁ এবং পরিষেবা প্রদানকারীদের নির্দিষ্ট চাহিদা পূরণের জন্য কাস্টমাইজ করা হয়েছে, যা মসৃণ এবং নিরবচ্ছিন্ন কার্যক্রম নিশ্চিত করে।",
    },
  },
  {
    id: 4,
    icon: LucideTicket,
    heading: {
      en: "Comprehensive Online Ticketing Solutions",
      bn: "সমগ্র অনলাইন টিকিটিং সমাধান",
    },
    subHeading: {
      en: "Simplify and streamline ticket booking processes",
      bn: "টিকিট বুকিং প্রক্রিয়া সহজ এবং সরলীকৃত করুন",
    },
    paragraph: {
      en: "Tech Element IT's online ticketing solutions are designed to simplify the ticket booking process for events, transportation, and attractions. Our systems ensure a seamless experience for both providers and customers, featuring secure payment processing, user-friendly interfaces, and efficient management of bookings and cancellations.",
      bn: "টেক এলিমেন্ট আইটির অনলাইন টিকিটিং সমাধানগুলি ইভেন্ট, পরিবহন এবং আকর্ষণগুলির জন্য টিকিট বুকিং প্রক্রিয়া সহজ করার জন্য ডিজাইন করা হয়েছে। আমাদের সিস্টেমগুলি প্রদানকারী এবং গ্রাহকদের জন্য একটি নিরবচ্ছিন্ন অভিজ্ঞতা নিশ্চিত করে, যার মধ্যে রয়েছে নিরাপদ পেমেন্ট প্রক্রিয়াকরণ, ব্যবহারকারী-বান্ধব ইন্টারফেস এবং বুকিং এবং বাতিলের দক্ষ ব্যবস্থাপনা।",
    },
  },
  {
    id: 5,
    icon: LucideUserPlus2,
    heading: {
      en: "Custom Personal and Professional Websites",
      bn: "কাস্টম ব্যক্তিগত এবং পেশাদার ওয়েবসাইট",
    },
    subHeading: {
      en: "Showcase your personal brand and achievements",
      bn: "আপনার ব্যক্তিগত ব্র্যান্ড এবং অর্জনগুলি প্রদর্শন করুন",
    },
    paragraph: {
      en: "Tech Element IT creates bespoke personal and professional websites that highlight your unique skills, portfolio, and accomplishments. Our designs are tailored to reflect your personal style and professional aspirations, providing a platform to share your story and connect with your audience in a meaningful way.",
      bn: "টেক এলিমেন্ট আইটি কাস্টম ব্যক্তিগত এবং পেশাদার ওয়েবসাইট তৈরি করে যা আপনার অনন্য দক্ষতা, পোর্টফোলিও এবং সাফল্যগুলি প্রদর্শন করে। আমাদের ডিজাইনগুলি আপনার ব্যক্তিগত শৈলী এবং পেশাদার আকাঙ্ক্ষাগুলি প্রতিফলিত করতে কাস্টমাইজ করা হয়েছে, যা আপনার গল্পটি শেয়ার করতে এবং অর্থবহ উপায়ে আপনার দর্শকদের সাথে সংযোগ করতে একটি প্ল্যাটফর্ম প্রদান করে।",
    },
  },
  {
    id: 6,
    icon: LucideBriefcase,
    heading: {
      en: "Professional Portfolio Website Development",
      bn: "পেশাদার পোর্টফোলিও ওয়েবসাইট ডেভেলপমেন্ট",
    },
    subHeading: {
      en: "Display your work and attract potential clients",
      bn: "আপনার কাজ প্রদর্শন করুন এবং সম্ভাব্য ক্লায়েন্টদের আকৃষ্ট করুন",
    },
    paragraph: {
      en: "Tech Element IT specializes in creating professional portfolio websites that showcase your projects, skills, and achievements in an organized and visually appealing manner. Designed to attract potential clients and employers, these websites are fully customizable to suit your unique style and professional requirements.",
      bn: "টেক এলিমেন্ট আইটি পেশাদার পোর্টফোলিও ওয়েবসাইট তৈরি করতে বিশেষজ্ঞ যা আপনার প্রকল্পগুলি, দক্ষতা এবং অর্জনগুলি সংগঠিত এবং চাক্ষুষভাবে আকর্ষণীয় উপায়ে প্রদর্শন করে। সম্ভাব্য ক্লায়েন্ট এবং নিয়োগকর্তাদের আকৃষ্ট করার জন্য ডিজাইন করা হয়েছে, এই ওয়েবসাইটগুলি আপনার অনন্য শৈলী এবং পেশাদার প্রয়োজনগুলি পূরণ করতে সম্পূর্ণরূপে কাস্টমাইজযোগ্য।",
    },
  },
  {
    id: 7,
    icon: LucideMove3D,
    heading: {
      en: "Expert UX/UI Design Services",
      bn: "বিশেষজ্ঞ UX/UI ডিজাইন সেবা",
    },
    subHeading: {
      en: "Create intuitive and user-friendly interfaces",
      bn: "স্বজ্ঞাত এবং ব্যবহারকারী-বান্ধব ইন্টারফেস তৈরি করুন",
    },
    paragraph: {
      en: "At Tech Element IT, we offer expert UX/UI design services that focus on creating intuitive and engaging user interfaces. Our designs prioritize usability, accessibility, and visual appeal to enhance the overall user experience, ensuring that your digital products are both functional and enjoyable to use.",
      bn: "টেক এলিমেন্ট আইটিতে, আমরা বিশেষজ্ঞ UX/UI ডিজাইন সেবা প্রদান করি যা স্বজ্ঞাত এবং আকর্ষক ব্যবহারকারী ইন্টারফেস তৈরি করার উপর ফোকাস করে। আমাদের ডিজাইনগুলি ব্যবহারযোগ্যতা, অ্যাক্সেসযোগ্যতা এবং চাক্ষুষ আকর্ষণের উপর অগ্রাধিকার দেয় যাতে সামগ্রিক ব্যবহারকারীর অভিজ্ঞতা উন্নত হয়, নিশ্চিত করে যে আপনার ডিজিটাল পণ্যগুলি উভয়ই কার্যকরী এবং ব্যবহার করার জন্য আনন্দদায়ক।",
    },
  },
  {
    id: 8,
    icon: LucideGitBranchPlus,
    heading: {
      en: "Reliable and Secure Hosting Services",
      bn: "বিশ্বস্ত এবং নিরাপদ হোস্টিং সেবা",
    },
    subHeading: {
      en: "Ensure your website is always online and secure",
      bn: "আপনার ওয়েবসাইট সর্বদা অনলাইনে এবং নিরাপদে রাখুন",
    },
    paragraph: {
      en: "Tech Element IT offers reliable hosting services designed to keep your website fast, secure, and accessible at all times. Our hosting solutions include regular backups, robust security measures, and 24/7 support to ensure your website remains operational without any interruptions.",
      bn: "টেক এলিমেন্ট আইটি বিশ্বস্ত হোস্টিং সেবা প্রদান করে যা আপনার ওয়েবসাইটকে দ্রুত, নিরাপদ এবং সর্বদা প্রবেশযোগ্য রাখার জন্য ডিজাইন করা হয়েছে। আমাদের হোস্টিং সমাধানগুলির মধ্যে রয়েছে নিয়মিত ব্যাকআপ, শক্তিশালী নিরাপত্তা ব্যবস্থা এবং 24/7 সমর্থন যা আপনার ওয়েবসাইটকে কোনো বাধা ছাড়াই সচল রাখে।",
    },
  },
];
