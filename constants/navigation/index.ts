import {
  LucideActivitySquare,
  LucideAirplay,
  LucideBadgeDollarSign,
  LucideBadgeInfo,
  LucideBarChart4,
  LucideBarChartBig,
  LucideBarChartHorizontal,
  LucideBike,
  LucideBookCopy,
  LucideBookOpenCheck,
  LucideCalendarDays,
  LucideCalendarMinus,
  LucideClipboardList,
  LucideClock10,
  LucideCreditCard,
  LucideCross,
  LucideCrown,
  LucideDumbbell,
  LucideFileOutput,
  LucideFileSpreadsheet,
  LucideFileText,
  LucideGoal,
  LucideGrid,
  LucideHistory,
  LucideImage,
  LucideInspect,
  LucideLayoutDashboard,
  LucideLayoutList,
  LucideLifeBuoy,
  LucideListChecks,
  LucideListOrdered,
  LucideListPlus,
  LucideListTree,
  LucideLogOut,
  LucideNewspaper,
  LucidePlusCircle,
  LucideRemoveFormatting,
  LucideScreenShare,
  LucideScrollText,
  LucideShieldQuestion,
  LucideShirt,
  LucideSquareEqual,
  LucideSquareStack,
  LucideStrikethrough,
  LucideTestTubes,
  LucideTimer,
  LucideUser,
  LucideUserCheck,
  LucideUserCircle,
  LucideUserCog2,
  LucideUserSquare2,
  LucideUsers2,
} from "lucide-react";

import { FaFolder, FaVideo, FaCircleInfo, FaChartPie } from "react-icons/fa6";

// NAVIGATION LINKS
//-------------------------
interface INavigation_links {
  icon?: any;
  href: string;
  key: string;
  label: {
    en: string;
    bn: string;
  };
  sublinks?: INavigation_links[];
}
export const NAVIGATION_LINKS: INavigation_links[] = [
  {
    icon: "",
    label: { bn: "আমাদের সম্পর্কে", en: "About" },
    key: "about",
    href: "about",
    sublinks: [
      {
        icon: LucideBadgeInfo,
        label: { bn: "আমাদের সম্পর্কে", en: "About Us" },
        key: "about_us",
        href: "about_us",
      },
      {
        icon: LucideUser,
        label: { bn: "প্রতিষ্ঠাতা", en: "Founder" },
        key: "founder",
        href: "founder",
      },
      {
        icon: LucideHistory,
        label: { bn: "ইতিহাস", en: "History" },
        key: "history",
        href: "history",
      },
      {
        icon: LucideGoal,
        label: { bn: "আমাদের লক্ষ্য", en: "Our Vision" },
        key: "our_vision",
        href: "our_vision",
      },
      {
        icon: LucideCrown,
        label: { bn: "আমাদের সাফল্য", en: "Achievements" },
        key: "achievements",
        href: "achievements",
      },
      {
        icon: LucideUsers2,
        label: { bn: "ম্যানেজিং কমিটি", en: "Managing Committee" },
        key: "managing_committee",
        href: "managing_committee",
      },
      {
        icon: LucideUserSquare2,
        label: { bn: "প্রশাসনিক কর্মকর্তাবৃন্দ", en: "Administrator" },
        key: "administrator",
        href: "administrator",
      },
    ],
  },
  {
    icon: "",
    label: { bn: "একাডেমিক", en: "Academic" },
    key: "academic",
    href: "academic",
    sublinks: [
      {
        icon: LucideTimer,
        label: { bn: "ক্লাসের সময়", en: "Class Schedule" },
        key: "class_schedule",
        href: "class_schedule",
      },
      {
        icon: LucideUserCheck,
        label: { bn: "শিক্ষকমণ্ডলী", en: "Our Teachers" },
        key: "our_teachers",
        href: "our_teachers",
      },
      {
        icon: LucideUserCog2,
        label: { bn: "কর্মচারীবৃন্দ", en: "Our Staffs" },
        key: "our_staffs",
        href: "our_staffs",
      },
      {
        icon: LucideStrikethrough,
        label: { bn: "শিক্ষাগ্রহণ নীতিমালা", en: "Academic Roles" },
        key: "academic_roles",
        href: "academic_roles",
      },
      {
        icon: LucideCalendarDays,
        label: { bn: "শিক্ষাগ্রহণ পঞ্জিকা", en: "Academic Calendar" },
        key: "academic_calender",
        href: "academic_calender",
      },
      {
        icon: LucideCalendarMinus,
        label: { bn: "ছুটি ব্যবস্থাপনা", en: "Leave Information" },
        key: "leave_information",
        href: "leave_information",
      },
    ],
  },
  {
    icon: "",
    label: { bn: "ভর্তি", en: "Admission" },
    key: "admission",
    href: "admission",
    sublinks: [
      {
        icon: LucideNewspaper,
        label: { bn: "অনলাইন ভর্তি আবেদন", en: "Online Admission" },
        key: "online_admission",
        href: "online_admission",
      },
      {
        icon: LucideShieldQuestion,
        label: { bn: "কেন আমরা?", en: "Why Us?" },
        key: "why_us",
        href: "why_us",
      },

      {
        icon: LucideSquareStack,
        label: { bn: "কিভাবে আবেদন করবেন?", en: "How to Apply?" },
        key: "how_to_apply",
        href: "how_to_apply",
      },

      {
        icon: LucideRemoveFormatting,
        label: { bn: "ভর্তি নীতিমালা", en: "Admission Policy" },
        key: "admission_policy",
        href: "admission_policy",
      },
      {
        icon: LucideSquareEqual,
        label: { bn: "নিবন্ধন পদ্ধতি", en: "Registration System" },
        key: "registration_system",
        href: "registration_system",
      },
    ],
  },
  {
    icon: "",
    label: { bn: "শিক্ষার্থী", en: "Student" },
    key: "student",
    href: "student",
    sublinks: [
      {
        icon: LucideClipboardList,
        label: { bn: "শিক্ষার্থীদের তালিকা", en: "Student List" },
        key: "student_list",
        href: "student_list",
      },
      {
        icon: LucideBadgeDollarSign,
        label: { bn: "বেতন কাঠামো", en: "Tution Fees" },
        key: "tution_fees",
        href: "tution_fees",
      },
      {
        icon: LucideActivitySquare,
        label: { bn: "দৈনন্দিন কার্যক্রম", en: "Daily Activities" },
        key: "daily_activities",
        href: "daily_activities",
      },
      {
        icon: LucideShirt,
        label: { bn: "শিক্ষার্থীদের পোষাক", en: "Student Uniform" },
        key: "student_uniform",
        href: "student_uniform",
      },
      {
        icon: LucideTestTubes,
        label: { bn: "পরীক্ষা পদ্ধতি", en: "Exam System" },
        key: "exam_system",
        href: "exam_system",
      },
    ],
  },
  {
    icon: "",
    label: { bn: "সুযোগ-সুবিধা", en: "Facilities" },
    key: "facilities",
    href: "facilities",
    sublinks: [
      {
        icon: LucideBookCopy,
        label: { bn: "পাঠাগার", en: "Library" },
        key: "library",
        href: "library",
      },
      {
        icon: LucideBike,
        label: { bn: "খেলার মাঠ", en: "Play Ground" },
        key: "play_ground",
        href: "play_ground",
      },
      {
        icon: LucideDumbbell,
        label: { bn: "সহশিক্ষা কার্যক্রম", en: "Co-curricular Activity" },
        key: "cocurricular_activity",
        href: "cocurricular_activity",
      },
    ],
  },
  {
    icon: "",
    label: { bn: "ফলাফল", en: "Result" },
    key: "result",
    href: "result",
    sublinks: [
      {
        icon: LucideNewspaper,
        label: { bn: "পরীক্ষার ফলাফল", en: "Academic Result" },
        key: "academic_result",
        href: "academic_result",
      },
      {
        icon: LucideBookOpenCheck,
        label: { bn: "ভর্তি পরীক্ষার ফলাফল", en: "Admission Test" },
        key: "admission_test",
        href: "admission_test",
      },
    ],
  },
  {
    icon: "",
    label: { bn: "অন্যান্য", en: "Others" },
    key: "others",
    href: "others",
    sublinks: [
      {
        icon: LucideAirplay,
        label: { bn: "বিজ্ঞপ্তি", en: "Notice" },
        key: "notice",
        href: "notice",
      },
      {
        icon: LucideNewspaper,
        label: { bn: "প্রচ্ছদ", en: "Article" },
        key: "news",
        href: "news",
      },
      {
        icon: LucideImage,
        label: { bn: "প্রদর্শনী", en: "Gallery" },
        key: "gallery",
        href: "gallery",
      },
      {
        icon: LucideInspect,
        label: { bn: "গুরুত্বপূর্ণ মুহুর্ত", en: "Events" },
        key: "events",
        href: "events",
      },
      {
        icon: LucideTimer,
        label: { bn: "পরীক্ষার সময়সূচী", en: "Exam Routine" },
        key: "exam_routine",
        href: "exam_routine",
      },
    ],
  },
];

// ADMIN NAVIGATION LINKS

export const ADMIN_NAVIGATION_LINKS: INavigation_links[] = [
  {
    icon: FaFolder,
    href: "dashboard",
    key: "dashboard",
    label: { en: "Dashboard", bn: "ড্যাসবোর্ড" },
    sublinks: [
      {
        icon: LucideUserCircle,
        href: "profile",
        key: "profile",
        label: { en: "Admin Profile", bn: "এডমিন প্রোফাইল" },
      },
      {
        icon: LucideLifeBuoy,
        href: "help_support",
        key: "help_support",
        label: { en: "Help & Support", bn: "সাহায্য ও সহায়তা" },
      },
    ],
  },
  {
    icon: FaFolder,
    href: "analytics",
    key: "analytics",
    label: { en: "Analytics", bn: "অ্যানালিটিক্স" },
    sublinks: [
      {
        icon: LucideBarChartBig,
        href: "student_analytics",
        key: "student_analytics",
        label: { en: "Student Analytics", bn: "শিক্ষার্থী অ্যানালিটিক্স" },
      },
      {
        icon: LucideBarChart4,
        href: "employee_analytics",
        key: "employee_analytics",
        label: { en: "Teacher Analytics", bn: "শিক্ষক অ্যানালিটিক্স" },
      },
      {
        icon: LucideBarChartHorizontal,
        href: "exam_analytics",
        key: "exam_analytics",
        label: { en: "Examination Analytics", bn: "পরীক্ষা অ্যানালিটিক্স" },
      },
      {
        icon: LucideBarChartHorizontal,
        href: "user_analytics",
        key: "user_analytics",
        label: { en: "User Analytics", bn: "ব্যবহারকারী অ্যানালিটিক্স" },
      },
    ],
  },
  {
    icon: FaChartPie,
    href: "student_panel",
    key: "student_panel",
    label: { en: "Student Panel", bn: "শিক্ষার্থী প্যান্‌ল" },
    sublinks: [
      {
        icon: LucideCross,
        href: "student_admission",
        key: "student_admission",
        label: { en: "Student Admission", bn: "শিক্ষার্থীদের ভর্তি তালিকা" },
      },
      {
        icon: LucideListOrdered,
        href: "student_list",
        key: "student_list",
        label: { en: "Student List", bn: "শিক্ষার্থীদের তালিকা" },
      },
      {
        icon: LucideCreditCard,
        href: "id_card",
        key: "id_card",
        label: { en: "ID Card", bn: "আইডি কার্ড" },
      },
      {
        icon: LucideFileOutput,
        href: "transfer_certificate",
        key: "transfer_certificate",
        label: { en: "Transfer Certificate", bn: "স্থানান্তর সনদ" },
      },
      {
        icon: LucideFileText,
        href: "character_certificate",
        key: "character_certificate",
        label: { en: "Character Certificate", bn: "চারিত্রিক সনদ" },
      },
      {
        icon: LucideFileSpreadsheet,
        href: "testimonial",
        key: "testimonial",
        label: { en: "Testimonial", bn: "প্রশংসাপত্র" },
      },
    ],
  },
  {
    icon: FaVideo,
    href: "teacher_panel",
    key: "teacher_panel",
    label: { en: "Teacher Panel", bn: "শিক্ষক প্যান্‌ল" },
    sublinks: [
      {
        icon: LucideListOrdered,
        href: "employee_list",
        key: "employee_list",
        label: { en: "Teachers List", bn: "শিক্ষকদের তালিকা" },
      },
    ],
  },
  {
    icon: FaCircleInfo,
    href: "user_panel",
    key: "user_panel",
    label: { en: "User Panel", bn: "ব্যবহারকারী প্যান্‌ল" },
    sublinks: [
      {
        icon: LucideListOrdered,
        href: "user_list",
        key: "user_list",
        label: { en: "User List", bn: "ব্যবহারকারীর তালিকা" },
      },
    ],
  },
  {
    icon: FaChartPie,
    href: "examination",
    key: "examination",
    label: { en: "Examination", bn: "পরীক্ষা" },
    sublinks: [
      {
        icon: LucideCross,
        href: "result_submission",
        key: "result_submission",
        label: { en: "Result Submission", bn: "ফলাফল প্রদান" },
      },
      {
        icon: LucideListTree,
        href: "student_marks",
        key: "student_marks",
        label: { en: "Student Marks", bn: "শিক্ষার্থীদের নম্বর" },
      },
      {
        icon: LucideGrid,
        href: "tabulation_sheet",
        key: "tabulation_sheet",
        label: { en: "Tabulation Sheet", bn: "সারণি শীট" },
      },
      {
        icon: LucideClock10,
        label: { bn: "পরীক্ষার সময়সূচী", en: "Exam Routine" },
        key: "exam_routine",
        href: "exam_routine",
      },
    ],
  },
  {
    icon: FaChartPie,
    href: "notice_board",
    key: "notice_board",
    label: { en: "Notice Board", bn: "ঘোষণাপত্র বোর্ড" },
    sublinks: [
      {
        icon: LucideScreenShare,
        href: "notice",
        key: "notice",
        label: { bn: "বিজ্ঞপ্তি", en: "Notice" },
      },
      {
        icon: LucideScrollText,
        href: "highlight",
        key: "highlight",
        label: { bn: "লক্ষণীয় বিষয়", en: "Highlight" },
      },
    ],
  },
  {
    icon: FaChartPie,
    href: "configuration",
    key: "configuration",
    label: { en: "Configuration", bn: "গঠনপ্রণালী" },
    sublinks: [
      {
        icon: LucideListPlus,
        href: "class_list",
        key: "class_list",
        label: { bn: "শ্রেণির তালিকা", en: "Class List" },
      },
      {
        icon: LucideListChecks,
        href: "subject_list",
        key: "subject_list",
        label: { bn: "বিষয়ের তালিকা", en: "Subject List" },
      },
      {
        icon: LucideLayoutList,
        href: "classroom_list",
        key: "classroom_list",
        label: { bn: "শ্রেণিকক্ষের তালিকা", en: "Classroom List" },
      },
      {
        icon: LucideListTree,
        href: "section_list",
        key: "section_list",
        label: { bn: "শাখার তালিকা", en: "Section List" },
      },
      {
        icon: LucideListTree,
        href: "examination_list",
        key: "examination_list",
        label: { bn: "পরীক্ষার তালিকা", en: "Examination List" },
      },
    ],
  },
  {
    icon: FaCircleInfo,
    href: "cms",
    key: "cms",
    label: {
      en: "CMS",
      bn: "সিএমএস",
    },
    sublinks: [
      {
        icon: LucideBadgeInfo,
        label: { bn: "আমাদের সম্পর্কে", en: "About Us" },
        key: "about_us",
        href: "about_us",
      },
      {
        icon: LucideUser,
        label: { bn: "প্রতিষ্ঠাতা", en: "Founder" },
        key: "founder",
        href: "founder",
      },
      {
        icon: LucideHistory,
        label: { bn: "ইতিহাস", en: "History" },
        key: "history",
        href: "history",
      },
      {
        icon: LucideGoal,
        label: { bn: "আমাদের লক্ষ্য", en: "Our Vision" },
        key: "our_vision",
        href: "our_vision",
      },
      {
        icon: LucideCrown,
        label: { bn: "আমাদের সাফল্য", en: "Achievements" },
        key: "achievements",
        href: "achievements",
      },
      {
        icon: LucideUsers2,
        label: { bn: "ম্যানেজিং কমিটি", en: "Managing Committee" },
        key: "managing_committee",
        href: "managing_committee",
      },
      {
        icon: LucideUserSquare2,
        label: { bn: "প্রশাসনিক কর্মকর্তাবৃন্দ", en: "Administrator" },
        key: "administrator",
        href: "administrator",
      },
      {
        icon: LucideTimer,
        label: { bn: "ক্লাসের সময়", en: "Class Schedule" },
        key: "class_schedule",
        href: "class_schedule",
      },
      {
        icon: LucideStrikethrough,
        label: { bn: "শিক্ষাগ্রহণ নীতিমালা", en: "Academic Roles" },
        key: "academic_roles",
        href: "academic_roles",
      },
      {
        icon: LucideCalendarDays,
        label: { bn: "শিক্ষাগ্রহণ পঞ্জিকা", en: "Academic Calendar" },
        key: "academic_calender",
        href: "academic_calender",
      },
      {
        icon: LucideCalendarMinus,
        label: { bn: "ছুটি ব্যবস্থাপনা", en: "Leave Information" },
        key: "leave_information",
        href: "leave_information",
      },
      {
        icon: LucideShieldQuestion,
        label: { bn: "কেন আমরা?", en: "Why Us?" },
        key: "why_us",
        href: "why_us",
      },
      {
        icon: LucideSquareStack,
        label: { bn: "কিভাবে আবেদন করবেন?", en: "How to Apply?" },
        key: "how_to_apply",
        href: "how_to_apply",
      },
      {
        icon: LucideRemoveFormatting,
        label: { bn: "ভর্তি নীতিমালা", en: "Admission Policy" },
        key: "admission_policy",
        href: "admission_policy",
      },
      {
        icon: LucideSquareEqual,
        label: { bn: "নিবন্ধন পদ্ধতি", en: "Registration System" },
        key: "registration_system",
        href: "registration_system",
      },
      {
        icon: LucideBadgeDollarSign,
        label: { bn: "বেতন কাঠামো", en: "Tution Fees" },
        key: "tution_fees",
        href: "tution_fees",
      },
      {
        icon: LucideActivitySquare,
        label: { bn: "দৈনন্দিন কার্যক্রম", en: "Daily Activities" },
        key: "daily_activities",
        href: "daily_activities",
      },
      {
        icon: LucideShirt,
        label: { bn: "শিক্ষার্থীদের পোষাক", en: "Student Uniform" },
        key: "student_uniform",
        href: "student_uniform",
      },
      {
        icon: LucideTestTubes,
        label: { bn: "পরীক্ষা পদ্ধতি", en: "Exam System" },
        key: "exam_system",
        href: "exam_system",
      },
      {
        icon: LucideNewspaper,
        label: { bn: "প্রচ্ছদ", en: "Article" },
        key: "news",
        href: "news",
      },
      {
        icon: LucideImage,
        label: { bn: "প্রদর্শনী", en: "Gallery" },
        key: "gallery",
        href: "gallery",
      },
      {
        icon: LucideInspect,
        label: { bn: "গুরুত্বপূর্ণ মুহুর্ত", en: "Events" },
        key: "events",
        href: "events",
      },
    ],
  },
];

// ADMIN PROFILE NAVIGATION LINKS

export const EMPLOYEE_PROFILE_NAVIGATION: INavigation_links[] = [
  {
    icon: FaFolder,
    href: "dashboard",
    key: "dashboard",
    label: { en: "Dashboard", bn: "ড্যাসবোর্ড" },
    sublinks: [
      {
        icon: LucideLayoutDashboard,
        href: "profile",
        key: "profile",
        label: { en: "Dashboard", bn: "ড্যাশবোর্ড" },
      },
      {
        icon: LucideLifeBuoy,
        href: "help_support",
        key: "help_support",
        label: { en: "Help & Support", bn: "সাহায্য ও সহায়তা" },
      },
      {
        icon: LucideCross,
        href: "result_submission",
        key: "result_submission",
        label: { en: "Result Submission", bn: "ফলাফল প্রদান" },
      },
    ],
  },
];

export const USER_PROFILE_NAVIGATION: INavigation_links[] = [
  {
    icon: FaFolder,
    href: "dashboard",
    key: "dashboard",
    label: { en: "Dashboard", bn: "ড্যাসবোর্ড" },
    sublinks: [
      {
        icon: LucideUserCircle,
        href: "profile",
        key: "profile",
        label: { en: "User Profile", bn: "ব্যবহারকারীর প্রোফাইল" },
      },
      {
        icon: LucideLifeBuoy,
        href: "help_support",
        key: "help_support",
        label: { en: "Help & Support", bn: "সাহায্য ও সহায়তা" },
      },
    ],
  },
];
