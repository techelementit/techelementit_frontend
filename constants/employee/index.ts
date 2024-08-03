import { ILabelPlaceholder } from "../auth";

// EMPLOYEE REGISTER FORM DATA TYPES
export interface IEmployeeRegisterForm {
  generalInfo: {
    name: {
      firstName: ILabelPlaceholder;
      sureName: ILabelPlaceholder;
    };
    email: ILabelPlaceholder;
    phone: ILabelPlaceholder;
    password: ILabelPlaceholder;
    avatar: ILabelPlaceholder;
  };
  personalInfo: {
    sex: ILabelPlaceholder;
    bloodGroup: ILabelPlaceholder;
    BCN: ILabelPlaceholder;
    NID: ILabelPlaceholder;

    religion: ILabelPlaceholder;
    dateOfBirth: ILabelPlaceholder;
    address: {
      town: ILabelPlaceholder;
      postOffice: ILabelPlaceholder;
      district: ILabelPlaceholder;
      upazila: ILabelPlaceholder;
      division: ILabelPlaceholder;
      nationality: ILabelPlaceholder;
    };
  };
  educations: {
    examName: ILabelPlaceholder;
    examYear: ILabelPlaceholder;
    examBoard: ILabelPlaceholder;
    examResult: ILabelPlaceholder;
  };
}

// EMPLOYEE REGISTER FORM
export const EMPLOYEE_REGISTRATION_FORM: IEmployeeRegisterForm = {
  generalInfo: {
    name: {
      firstName: {
        label: {
          en: "Write Your First Name ✽",
          bn: "আপনার নামের প্রথম অংশ লিখুন ✽",
        },
        placeholder: {
          en: "Write your first name in English",
          bn: "আপনার নামের প্রথম অংশ ইংরেজিতে লিখুন",
        },
      },
      sureName: {
        label: {
          en: "Write Your Last Name",
          bn: "আপনার নামের শেষের অংশ লিখুন",
        },
        placeholder: {
          en: "Write your last name in English",
          bn: "আপনার নামের শেষের অংশ ইংরেজিতে লিখুন",
        },
      },
    },
    email: {
      label: {
        en: "Write Your Email For Login ✽",
        bn: "লগইনের জন্য আপনার ইমেইল লিখুন ✽",
      },
      placeholder: {
        en: "Write your email for login",
        bn: "লগইনের জন্য আপনার ইমেইল লিখুন",
      },
    },
    password: {
      label: {
        en: "Write The Password For Login  ✽",
        bn: "লগইনের জন্য পাসওয়ার্ড লিখুন ✽",
      },
      placeholder: {
        en: "Write the password for login",
        bn: "লগইনের জন্য পাসওয়ার্ড লিখুন",
      },
    },
    phone: {
      label: {
        en: "Write Your Phone Number ✽",
        bn: "আপনার ফোন নাম্বার লিখুন ✽",
      },
      placeholder: {
        en: "Write your phone number",
        bn: "আপনার ফোন নাম্বার লিখুন",
      },
    },
    avatar: {
      label: {
        en: "Choose Your Profile Photo ✽",
        bn: "আপনার প্রোফাইলের ছবি সনাক্ত করুন ✽",
      },
      placeholder: {
        en: "Choose your profile photo",
        bn: "আপনার প্রোফাইলের ছবি সনাক্ত করুন",
      },
    },
  },
  personalInfo: {
    sex: {
      label: {
        en: "Choose Your Gender ✽",
        bn: "আপনার লিঙ্গ নির্বাচন করুন ✽",
      },
      placeholder: {
        en: "Choose your gender",
        bn: "আপনার লিঙ্গ নির্বাচন করুন",
      },
    },
    bloodGroup: {
      label: {
        en: "Choose Your Blood Group",
        bn: "আপনার রক্তের গ্রুপ নির্বাচন করুন",
      },
      placeholder: {
        en: "Choose your blood group",
        bn: "আপনার রক্তের গ্রুপ নির্বাচন করুন",
      },
    },
    BCN: {
      label: {
        en: "Write Your Birthday Certificate Number",
        bn: "আপনার জন্ম সনদ নাম্বারটি লিখুন",
      },
      placeholder: {
        en: "Write the student's date of birth number",
        bn: "শিক্ষার্থীর জন্ম নিবন্ধন নাম্বারটি ইংরেজিতে লিখুন",
      },
    },
    NID: {
      label: {
        en: "Write Your National ID Card Number",
        bn: "আপনার জাতীয় পরিচয়পত্র নম্বরটি লিখুন",
      },
      placeholder: {
        en: "Write Your National ID Card Number",
        bn: "আপনার জাতীয় পরিচয়পত্র নম্বরটি লিখুন",
      },
    },
    religion: {
      label: {
        en: "Choose Your Religion ✽",
        bn: "আপনার ধর্ম নির্বাচন করুন ✽",
      },
      placeholder: {
        en: "Choose your religion",
        bn: "আপনার ধর্ম নির্বাচন করুন",
      },
    },
    dateOfBirth: {
      label: {
        en: "Write Your Date Of Birth ✽",
        bn: "আপনার জন্ম তারিখ লিখুন ✽ ",
      },
      placeholder: { en: "Date/Month/Year", bn: "তারিখ/মাস/বছর" },
    },
    address: {
      town: {
        label: {
          en: "Write Your Town/ Village Name ✽",
          bn: "আপনার গ্রাম অথবা শহরের নাম লিখুন ✽",
        },
        placeholder: {
          en: "Write your town/ village in English",
          bn: "আপনার গ্রাম অথবা শহরের নাম ইংরেজিতে লিখুন",
        },
      },
      nationality: {
        label: {
          en: "Write Your Nationality ✽",
          bn: "আপনার জাতীয়তা লিখুন ✽",
        },
        placeholder: {
          en: "Write Your Nationality in English",
          bn: "আপনার জাতীয়তা ইংরেজিতে লিখুন",
        },
      },
      postOffice: {
        label: {
          en: "Write Your Post Office Address ✽",
          bn: "আপনার ডাকঘরের ঠিকানা লিখুন ✽",
        },
        placeholder: {
          en: "Write your post office address in English",
          bn: "আপনার ডাকঘরের ঠিকানা ইংরেজিতে লিখুন",
        },
      },
      district: {
        label: {
          en: "Write Your District Address ✽",
          bn: "আপনার জেলার ঠিকানা লিখুন ✽",
        },
        placeholder: {
          en: "Write your district address in English",
          bn: "আপনার জেলার ঠিকানা ইংরেজিতে লিখুন",
        },
      },
      upazila: {
        label: {
          en: "Write Your Upazila/ Police Station Address ✽",
          bn: "আপনার উপজেলা/ থানার ঠিকানা লিখুন ✽",
        },
        placeholder: {
          en: "Write your upazila/ police station address in English",
          bn: "আপনার উপজেলা/ থানার ঠিকানা ইংরেজিতে লিখুন",
        },
      },
      division: {
        label: {
          en: "Write Your Division ✽",
          bn: "আপনার বিভাগটি লিখুন ✽",
        },
        placeholder: {
          en: "Write your divisioin in English",
          bn: "আপনার বিভাগটি ইংরেজিতে লিখুন",
        },
      },
    },
  },
  educations: {
    examName: {
      label: {
        en: "Write The Examination Name ✽",
        bn: "পরীক্ষার নামটি লিখুন ✽",
      },
      placeholder: {
        en: "Write the examination name",
        bn: "পরীক্ষার নামটি লিখুন",
      },
    },
    examYear: {
      label: {
        en: "Write The Examination Year ✽",
        bn: "পরীক্ষার সাল/ বছরটি লিখুন ✽",
      },
      placeholder: {
        en: "Write the examination year in English",
        bn: "পরীক্ষার সাল/ বছরটি ইংরেজিতে লিখুন",
      },
    },
    examBoard: {
      label: {
        en: "Write The Examination Board ✽",
        bn: "পরীক্ষার বোর্ডের নামটি লিখুন ✽",
      },
      placeholder: {
        en: "Write the examination name in English",
        bn: "পরীক্ষার বোর্ডের নামটি ইংরেজিতে লিখুন",
      },
    },
    examResult: {
      label: {
        en: "Write The Examination Result ✽",
        bn: "পরীক্ষার রেজাল্ট লিখুন ✽",
      },
      placeholder: {
        en: "Write the examination result with gpa or cgpa",
        bn: "পরীক্ষার রেজাল্ট জিপিএ অথবা সিজিপিএ লিখুন",
      },
    },
  },
};

// EMPLOYEE LOGIN FORM

export const EMPLOYEE_LOGIN_FORM = {
  email: {
    label: {
      en: "Write Your Email ✽",
      bn: "আপনার ইমেইল লিখুন ✽",
    },
    placeholder: {
      en: "example@gmail.com",
      bn: "example@gmail.com",
    },
  },
  password: {
    label: {
      en: "Write The Password  ✽",
      bn: "পাসওয়ার্ড লিখুন ✽",
    },
    placeholder: {
      en: "Write the password",
      bn: "পাসওয়ার্ড লিখুন",
    },
  },
  employmentRef: {
    label: {
      en: "Write The Employment Reference Code ✽",
      bn: "ইমপ্লয়মেন্ট রেফারেন্স কোডটি লিখুন ✽",
    },
    placeholder: {
      en: "Write the employment reference code in English",
      bn: "ইমপ্লয়মেন্ট রেফারেন্স কোডটি ইংরেজিতে লিখুন",
    },
  },
};

// ADD EMPLOYEE GUIDE

export const ADD_EMPLOYEE_GUIDE = [
  {
    en: `Logout your account.`,
    bn: `আপনার একাউন্ট লগআউট করুন।`,
  },
  {
    en: `You will get a "Login" button on the home page.`,
    bn: `আপনি হোম পেইজে একটি "লগইন" বাটন পেয়ে যাবেন।`,
  },
  {
    en: `Press the "Login" button, and you will get the "Login" or "Signup" buttons for teacher on the bottom of the page.`,
    bn: `"লগইন" বাটন চাপুন, এবং পেইজের নিচের দিকে শিক্ষক/ শিক্ষিকাদের জন্য "লগইন" অথবা "সাইনআপ" বাটন পেয়ে যাবেন।`,
  },
];

// EMPLOYEE REGISTER FORM
export interface IEmployeeEditFormAdmin {
  generalInfo: {
    name: {
      firstName: ILabelPlaceholder;
      sureName: ILabelPlaceholder;
    };
    email: ILabelPlaceholder;
    phone: ILabelPlaceholder;
    password: ILabelPlaceholder;
    avatar: ILabelPlaceholder;
  };
  personalInfo: {
    sex: ILabelPlaceholder;
    bloodGroup: ILabelPlaceholder;
    BCN: ILabelPlaceholder;
    NID: ILabelPlaceholder;

    religion: ILabelPlaceholder;
    dateOfBirth: ILabelPlaceholder;
    address: {
      town: ILabelPlaceholder;
      postOffice: ILabelPlaceholder;
      district: ILabelPlaceholder;
      upazila: ILabelPlaceholder;
      division: ILabelPlaceholder;
      nationality: ILabelPlaceholder;
    };
  };
  educations: {
    examName: ILabelPlaceholder;
    examYear: ILabelPlaceholder;
    examBoard: ILabelPlaceholder;
    examResult: ILabelPlaceholder;
  };
  othersInfo: {
    employmentRef: ILabelPlaceholder;
    role: ILabelPlaceholder;
    isVerified: ILabelPlaceholder;
    classTeacher: {
      classId: ILabelPlaceholder;
      sectionId: ILabelPlaceholder;
    };
    classList: {
      subjectId: ILabelPlaceholder;
      classId: ILabelPlaceholder;
      sectionId: ILabelPlaceholder;
    };
  };
}
export const EMPLOYEE_EDIT_FORM_ADMIN: IEmployeeEditFormAdmin = {
  generalInfo: {
    name: {
      firstName: {
        label: {
          en: "Write Your First Name ✽",
          bn: "আপনার নামের প্রথম অংশ লিখুন ✽",
        },
        placeholder: {
          en: "Write your first name in English",
          bn: "আপনার নামের প্রথম অংশ ইংরেজিতে লিখুন",
        },
      },
      sureName: {
        label: {
          en: "Write Your Last Name",
          bn: "আপনার নামের শেষের অংশ লিখুন",
        },
        placeholder: {
          en: "Write your last name in English",
          bn: "আপনার নামের শেষের অংশ ইংরেজিতে লিখুন",
        },
      },
    },
    email: {
      label: {
        en: "Write Your Email For Login ✽",
        bn: "লগইনের জন্য আপনার ইমেইল লিখুন ✽",
      },
      placeholder: {
        en: "Write your email for login",
        bn: "লগইনের জন্য আপনার ইমেইল লিখুন",
      },
    },
    password: {
      label: {
        en: "Write The Password For Login ✽",
        bn: "লগইনের জন্য পাসওয়ার্ড লিখুন ✽",
      },
      placeholder: {
        en: "Write the password for login",
        bn: "লগইনের জন্য পাসওয়ার্ড লিখুন",
      },
    },
    phone: {
      label: {
        en: "Write Your Phone Number ✽",
        bn: "আপনার ফোন নাম্বার লিখুন ✽",
      },
      placeholder: {
        en: "Write your phone number",
        bn: "আপনার ফোন নাম্বার লিখুন",
      },
    },
    avatar: {
      label: {
        en: "Choose Your Profile Photo ✽",
        bn: "আপনার প্রোফাইলের ছবি নির্বাচন করুন ✽",
      },
      placeholder: {
        en: "Choose your profile photo",
        bn: "আপনার প্রোফাইলের ছবি নির্বাচন করুন",
      },
    },
  },
  personalInfo: {
    sex: {
      label: {
        en: "Choose Your Gender ✽",
        bn: "আপনার লিঙ্গ নির্বাচন করুন ✽",
      },
      placeholder: {
        en: "Choose your gender",
        bn: "আপনার লিঙ্গ নির্বাচন করুন",
      },
    },
    bloodGroup: {
      label: {
        en: "Choose Your Blood Group",
        bn: "আপনার রক্তের গ্রুপ নির্বাচন করুন",
      },
      placeholder: {
        en: "Choose your blood group",
        bn: "আপনার রক্তের গ্রুপ নির্বাচন করুন",
      },
    },
    BCN: {
      label: {
        en: "Write Your Birth Certificate Number",
        bn: "আপনার জন্ম সনদ নম্বরটি লিখুন",
      },
      placeholder: {
        en: "Write the birth certificate number",
        bn: "জন্ম সনদ নম্বরটি লিখুন",
      },
    },
    NID: {
      label: {
        en: "Write Your National ID Card Number",
        bn: "আপনার জাতীয় পরিচয়পত্র নম্বরটি লিখুন",
      },
      placeholder: {
        en: "Write your national ID card number",
        bn: "আপনার জাতীয় পরিচয়পত্র নম্বরটি লিখুন",
      },
    },
    religion: {
      label: {
        en: "Choose Your Religion ✽",
        bn: "আপনার ধর্ম নির্বাচন করুন ✽",
      },
      placeholder: {
        en: "Choose your religion",
        bn: "আপনার ধর্ম নির্বাচন করুন",
      },
    },
    dateOfBirth: {
      label: {
        en: "Write Your Date Of Birth ✽",
        bn: "আপনার জন্ম তারিখ লিখুন ✽ ",
      },
      placeholder: { en: "Date/Month/Year", bn: "তারিখ/মাস/বছর" },
    },
    address: {
      town: {
        label: {
          en: "Write Your Town/ Village Name ✽",
          bn: "আপনার গ্রাম অথবা শহরের নাম লিখুন ✽",
        },
        placeholder: {
          en: "Write your town/ village name in English",
          bn: "আপনার গ্রাম অথবা শহরের নাম ইংরেজিতে লিখুন",
        },
      },
      nationality: {
        label: {
          en: "Write Your Nationality ✽",
          bn: "আপনার জাতীয়তা লিখুন ✽",
        },
        placeholder: {
          en: "Write your nationality in English",
          bn: "আপনার জাতীয়তা ইংরেজিতে লিখুন",
        },
      },
      postOffice: {
        label: {
          en: "Write Your Post Office Address ✽",
          bn: "আপনার ডাকঘরের ঠিকানা লিখুন ✽",
        },
        placeholder: {
          en: "Write your post office address in English",
          bn: "আপনার ডাকঘরের ঠিকানা ইংরেজিতে লিখুন",
        },
      },
      district: {
        label: {
          en: "Write Your District Address ✽",
          bn: "আপনার জেলার ঠিকানা লিখুন ✽",
        },
        placeholder: {
          en: "Write your district address in English",
          bn: "আপনার জেলার ঠিকানা ইংরেজিতে লিখুন",
        },
      },
      upazila: {
        label: {
          en: "Write Your Upazila/ Police Station Address ✽",
          bn: "আপনার উপজেলা/ থানার ঠিকানা লিখুন ✽",
        },
        placeholder: {
          en: "Write your upazila/ police station address in English",
          bn: "আপনার উপজেলা/ থানার ঠিকানা ইংরেজিতে লিখুন",
        },
      },
      division: {
        label: {
          en: "Write Your Division ✽",
          bn: "আপনার বিভাগটি লিখুন ✽",
        },
        placeholder: {
          en: "Write your division in English",
          bn: "আপনার বিভাগটি ইংরেজিতে লিখুন",
        },
      },
    },
  },
  educations: {
    examName: {
      label: {
        en: "Write The Examination Name ✽",
        bn: "পরীক্ষার নামটি লিখুন ✽",
      },
      placeholder: {
        en: "Write the examination name",
        bn: "পরীক্ষার নামটি লিখুন",
      },
    },
    examYear: {
      label: {
        en: "Write The Examination Year ✽",
        bn: "পরীক্ষার সাল/ বছরটি লিখুন ✽",
      },
      placeholder: {
        en: "Write the examination year in English",
        bn: "পরীক্ষার সাল/ বছরটি ইংরেজিতে লিখুন",
      },
    },
    examBoard: {
      label: {
        en: "Write The Examination Board ✽",
        bn: "পরীক্ষার বোর্ডের নামটি লিখুন ✽",
      },
      placeholder: {
        en: "Write the examination board name",
        bn: "পরীক্ষার বোর্ডের নামটি লিখুন",
      },
    },
    examResult: {
      label: {
        en: "Write The Examination Result ✽",
        bn: "পরীক্ষার ফলাফল লিখুন ✽",
      },
      placeholder: {
        en: "Write the examination result with GPA or CGPA",
        bn: "পরীক্ষার ফলাফল জিপিএ অথবা সিজিপিএ দিয়ে লিখুন",
      },
    },
  },
  othersInfo: {
    employmentRef: {
      label: {
        en: "Write The Employment Reference Code",
        bn: "চাকুরীর পরিচয় কোডটি লিখুন",
      },
      placeholder: {
        en: "Write the employment reference code in English",
        bn: "চাকুরীর পরিচয় কোডটি ইংরেজিতে লিখুন",
      },
    },
    role: {
      label: {
        en: "Choose The Role For This Employee",
        bn: "এই এমপ্লয়ইর জন্য ভূমিকা নির্বাচন করুন",
      },
      placeholder: {
        en: "Choose the role for this employee",
        bn: "এই এমপ্লয়ইর জন্য ভূমিকা নির্বাচন করুন",
      },
    },
    isVerified: {
      label: {
        en: "Choose The Verification Status",
        bn: "ভেরিফিকেইশনের অবস্থা নির্বাচন করুন",
      },
      placeholder: {
        en: "Choose the verification status",
        bn: "ভেরিফিকেইশনের অবস্থা নির্বাচন করুন",
      },
    },

    classTeacher: {
      classId: {
        label: {
          en: "Choose The Class For Class Teacher",
          bn: "শ্রেণি শিক্ষকের জন্য শ্রেণি নির্বাচন করুন",
        },
        placeholder: {
          en: "Choose the class for class teacher",
          bn: "শ্রেণি শিক্ষকের জন্য শ্রেণি নির্বাচন করুন",
        },
      },
      sectionId: {
        label: {
          en: "Choose The Class Section For Class Teacher",
          bn: "শ্রেণি শিক্ষকের জন্য শ্রেণির শাখা নির্বাচন করুন",
        },
        placeholder: {
          en: "Choose the class section for class teacher",
          bn: "শ্রেণি শিক্ষকের জন্য শ্রেণির শাখা নির্বাচন করুন",
        },
      },
    },
    classList: {
      subjectId: {
        label: {
          en: "Choose The Subject",
          bn: "বিষয় নির্বাচন করুন",
        },
        placeholder: {
          en: "Choose the subject",
          bn: "বিষয় নির্বাচন করুন",
        },
      },
      classId: {
        label: {
          en: "Choose The Class",
          bn: "ক্লাস নির্বাচন করুন",
        },
        placeholder: {
          en: "Choose the class",
          bn: "ক্লাস নির্বাচন করুন",
        },
      },
      sectionId: {
        label: {
          en: "Choose The Section",
          bn: "সেকশন নির্বাচন করুন",
        },
        placeholder: {
          en: "Choose the section",
          bn: "সেকশন নির্বাচন করুন",
        },
      },
    },
  },
};
