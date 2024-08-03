// STUDENT ADMISSION FORM

import { ILabelPlaceholder } from "../auth";
// PARENT INFORMATION TYPES
export interface IParentInfo {
  name: {
    en: ILabelPlaceholder;
    bn: ILabelPlaceholder;
  };
  phone: ILabelPlaceholder;
  email: ILabelPlaceholder;
}

// STUDENT ADDRESS

export interface IAddress {
  town: ILabelPlaceholder;
  postOffice: ILabelPlaceholder;
  district: ILabelPlaceholder;
  upazila: ILabelPlaceholder;
  division: ILabelPlaceholder;
  nationality: ILabelPlaceholder;
}

// ADMISSION FORM DATA TYPES
export interface IAdmissionForm {
  studentInfo: {
    name: {
      firstName: {
        en: ILabelPlaceholder;
        bn: ILabelPlaceholder;
      };
      sureName: {
        en: ILabelPlaceholder;
        bn: ILabelPlaceholder;
      };
    };
    sex: ILabelPlaceholder;
    bloodGroup: ILabelPlaceholder;
    dateOfBirth: ILabelPlaceholder;
    religion: ILabelPlaceholder;
    BCN: ILabelPlaceholder;
    admitClass: ILabelPlaceholder;
    avatar: ILabelPlaceholder;
    admissionTestRoll: ILabelPlaceholder;
  };
  parentsInfo: {
    fathersInfo: IParentInfo;
    mothersInfo: IParentInfo;
  };
  address: {
    present: IAddress;
    permanent: IAddress;
  };
  othersInfo: {
    previousSchool: ILabelPlaceholder;
    guardian: ILabelPlaceholder;
    guardianContactNumber: ILabelPlaceholder;
    guardianEmail: ILabelPlaceholder;
  };
}

export const ADMISSION_FORM: IAdmissionForm = {
  studentInfo: {
    name: {
      firstName: {
        en: {
          label: {
            en: "Write Studnet's First Name (English) ✽",
            bn: "শিক্ষার্থীর নামের প্রথম অংশ লিখুন (ইংরেজি) ✽",
          },
          placeholder: {
            en: "Write studnet's first name in English",
            bn: "শিক্ষার্থীর নামের প্রথম অংশ ইংরেজিতে লিখুন",
          },
        },
        bn: {
          label: {
            en: "Write Studnet's First  Name (Bangla) ✽",
            bn: "শিক্ষার্থীর নামের প্রথম অংশ লিখুন (বাংলা) ✽",
          },
          placeholder: {
            en: "Write Studnet's First  Name in Bangla",
            bn: "শিক্ষার্থীর নামের প্রথম অংশ বাংলায় লিখুন",
          },
        },
      },
      sureName: {
        en: {
          label: {
            en: "Write Studnet's Last Name (English)",
            bn: "শিক্ষার্থীর নামের শেষের অংশ লিখুন (ইংরেজি)",
          },
          placeholder: {
            en: "Write studnet's last name in English",
            bn: "শিক্ষার্থীর নামের শেষের অংশ ইংরেজিতে লিখুন",
          },
        },
        bn: {
          label: {
            en: "Write Studnet's Last  Name (Bangla)",
            bn: "শিক্ষার্থীর নামের শেষ অংশ লিখুন (বাংলা)",
          },
          placeholder: {
            en: "Write studnet's last  name in Bangla",
            bn: "শিক্ষার্থীর নামের শেষ অংশ বাংলায় লিখুন",
          },
        },
      },
    },
    sex: {
      label: {
        en: "Choose The Student's Gender ✽",
        bn: "শিক্ষার্থীর লিঙ্গ নির্বাচন করুন ✽",
      },
      placeholder: {
        en: "Choose the student's gender",
        bn: "শিক্ষার্থীর লিঙ্গ নির্বাচন করুন",
      },
    },
    bloodGroup: {
      label: {
        en: "Choose The Student's Blood Group",
        bn: "শিক্ষার্থীর রক্তের গ্রুপ নির্বাচন করুন",
      },
      placeholder: {
        en: "Choose the student's blood group in English",
        bn: "শিক্ষার্থীর রক্তের গ্রুপ নির্বাচন করুন",
      },
    },
    dateOfBirth: {
      label: {
        en: "Write The Student's Date Of Birth ✽",
        bn: "শিক্ষার্থীর জন্ম তারিখ লিখুন ✽ ",
      },
      placeholder: { en: "Date/Month/Year", bn: "তারিখ/মাস/বছর" },
    },
    religion: {
      label: {
        en: "Choose The Student's Religion ✽",
        bn: "শিক্ষার্থীর ধর্ম নির্বাচন করুন ✽",
      },
      placeholder: {
        en: "Choose the student's religion",
        bn: "শিক্ষার্থীর ধর্ম নির্বাচন করুন",
      },
    },
    BCN: {
      label: {
        en: "Write The Student's Date Of Birth Number",
        bn: "শিক্ষার্থীর জন্ম নিবন্ধন নাম্বারটি লিখুন",
      },
      placeholder: {
        en: "Write the student's date of birth number",
        bn: "শিক্ষার্থীর জন্ম নিবন্ধন নাম্বারটি ইংরেজিতে লিখুন",
      },
    },
    admitClass: {
      label: {
        en: "Choose The Class For Adminssion ✽",
        bn: "ভর্তির জন্য শ্রেণি নির্বাচন করুন ✽",
      },
      placeholder: {
        en: "Choose the class for adminssion",
        bn: "ভর্তির জন্য শ্রেণি নির্বাচন করুন",
      },
    },
    avatar: {
      label: {
        en: "Choose The Student's Photo ✽",
        bn: "শিক্ষার্থীর ছবি নির্বাচন করুন ✽",
      },
      placeholder: {
        en: "Choose the student's photo",
        bn: "শিক্ষার্থীর ছবি নির্বাচন করুন",
      },
    },
    admissionTestRoll: {
      label: {
        en: "Write The Student's Admission Test Roll",
        bn: "শিক্ষার্থীর ভর্তি পরিক্ষার ক্রমিক নং লিখুন",
      },
      placeholder: {
        en: "Write the student's admission test roll in English",
        bn: "শিক্ষার্থীর ভর্তি পরিক্ষার ক্রমিক নং ইংরেজিতে লিখুন",
      },
    },
  },
  parentsInfo: {
    fathersInfo: {
      name: {
        en: {
          label: {
            en: "Write Student Father's Name (English) ✽",
            bn: "শিক্ষার্থীর পিতার নাম লেখুন (ইংরেজি) ✽",
          },
          placeholder: {
            en: "Write studnet father's name in English",
            bn: "শিক্ষার্থীর পিতার নাম ইংরেজিতে লিখুন",
          },
        },
        bn: {
          label: {
            en: "Write Student Father's Name (Bangla) ✽",
            bn: "শিক্ষার্থীর পিতার নাম লেখুন (বাংলা) ✽",
          },
          placeholder: {
            en: "Write studnet father's name in Bangla",
            bn: "শিক্ষার্থীর পিতার নাম বাংলায় লিখুন",
          },
        },
      },
      phone: {
        label: {
          en: "Write Father's Phone Number ✽",
          bn: "পিতার ফোন নাম্বার লিখুন ✽",
        },
        placeholder: {
          en: "Write father's phone number in English",
          bn: "পিতার ফোন নাম্বার ইংরেজিতে লিখুন",
        },
      },
      email: {
        label: {
          en: "Write Father's Email Address",
          bn: "পিতার ইমেইল  লিখুন",
        },
        placeholder: {
          en: "Write father's email address",
          bn: "পিতার ইমেইল লিখুন",
        },
      },
    },
    mothersInfo: {
      name: {
        en: {
          label: {
            en: "Write Student Mother's Name (English) ✽",
            bn: "শিক্ষার্থীর মাতার নাম লেখুন (ইংরেজি) ✽",
          },
          placeholder: {
            en: "Write studnet mother's name in English",
            bn: "শিক্ষার্থীর মাতার নাম ইংরেজিতে লিখুন",
          },
        },
        bn: {
          label: {
            en: "Write Student Mother's Name (Bangla) ✽",
            bn: "শিক্ষার্থীর মাতার নাম লেখুন (বাংলা) ✽",
          },
          placeholder: {
            en: "Write studnet mother's name in Bangla",
            bn: "শিক্ষার্থীর মাতার নাম বাংলায় লিখুন",
          },
        },
      },
      phone: {
        label: {
          en: "Write Mother's Phone Number ✽",
          bn: "মাতার ফোন নাম্বার লিখুন ✽",
        },
        placeholder: {
          en: "Write mother's phone number in English",
          bn: "মাতার ফোন নাম্বার ইংরেজিতে লিখুন",
        },
      },
      email: {
        label: {
          en: "Write Mother's Email Address",
          bn: "মাতার ইমেইল লিখুন",
        },
        placeholder: {
          en: "Write mother's email address",
          bn: "মাতার ইমেইল লিখুন",
        },
      },
    },
  },
  address: {
    present: {
      town: {
        label: {
          en: "Write Present Town/ Village Name ✽",
          bn: "বর্তমান গ্রাম অথবা শহরের নাম লিখুন ✽",
        },
        placeholder: {
          en: "Write present town/ village name in English",
          bn: "বর্তমান গ্রাম অথবা শহরের নাম ইংরেজিতে লিখুন",
        },
      },
      postOffice: {
        label: {
          en: "Write Present Post Office/ Union Address ✽",
          bn: "বর্তমান ডাকঘর/ ইউনিয়নের ঠিকানা লিখুন ✽",
        },
        placeholder: {
          en: "Write present post office/ union address in English",
          bn: "বর্তমান ডাকঘর/ ইউনিয়নের ঠিকানা ইংরেজিতে লিখুন",
        },
      },
      district: {
        label: {
          en: "Write Present District Name ✽",
          bn: "বর্তমান জেলার নাম লিখুন ✽",
        },
        placeholder: {
          en: "Write present district name in English",
          bn: "বর্তমান জেলার নাম ইংরেজিতে লিখুন",
        },
      },
      upazila: {
        label: {
          en: "Write Present Police Station/ Upazila Name ✽",
          bn: "বর্তমান থানা/ উপজেলার নাম লিখুন ✽",
        },
        placeholder: {
          en: "Write present police station / upazila address in English",
          bn: "বর্তমান থানা/ উপজেলার ঠিকানা ইংরেজিতে লিখুন",
        },
      },
      division: {
        label: {
          en: "Write The Present Division ✽",
          bn: "বর্তমান বিভাগের নামটি লিখুন ✽",
        },
        placeholder: {
          en: "Write the present division in English",
          bn: "বর্তমান বিভাগের নামটি ইংরেজিতে লিখুন",
        },
      },
      nationality: {
        label: {
          en: "Write The Student's Nationality ✽",
          bn: "শিক্ষার্থীর জাতীয়তা লিখুন ✽",
        },
        placeholder: {
          en: "Write the student's nationality",
          bn: "শিক্ষার্থীর জাতীয়তা ইংরেজিতে লিখুন",
        },
      },
    },
    permanent: {
      town: {
        label: {
          en: "Write Permanent Town/ Village ✽",
          bn: "স্থায়ী গ্রাম অথবা শহরের নাম লিখুন ✽",
        },
        placeholder: {
          en: "Write permanent town/ village in English",
          bn: "স্থায়ী গ্রাম অথবা শহরের নাম ইংরেজিতে লিখুন",
        },
      },
      postOffice: {
        label: {
          en: "Write Permanent Post Office/ Union Address ✽",
          bn: "স্থায়ী ডাকঘর/ ইউনিয়নের ঠিকানা লিখুন ✽",
        },
        placeholder: {
          en: "Write permanent post office/ union address in English",
          bn: "স্থায়ী ডাকঘর/ ইউনিয়নের ঠিকানা ইংরেজিতে লিখুন",
        },
      },
      district: {
        label: {
          en: "Write Permanent District Name ✽",
          bn: "স্থায়ী জেলার নাম লিখুন ✽",
        },
        placeholder: {
          en: "Write permanent district name in English",
          bn: "স্থায়ী জেলার নাম ইংরেজিতে লিখুন",
        },
      },
      upazila: {
        label: {
          en: "Write Permanent Police Station/ Upazila Name ✽",
          bn: "স্থায়ী থানা/ উপজেলার নাম লিখুন ✽",
        },
        placeholder: {
          en: "Write permanent police station / upazila namec in English",
          bn: "স্থায়ী থানা/ উপজেলার নাম ইংরেজিতে লিখুন",
        },
      },
      division: {
        label: {
          en: "Write The Permanent Division ✽",
          bn: "স্থায়ী বিভাগের নামটি লিখুন ✽",
        },
        placeholder: {
          en: "Write the permanent division",
          bn: "স্থায়ী বিভাগের নামটি লিখুন",
        },
      },
      nationality: {
        label: {
          en: "Write The Student's Nationality ✽",
          bn: "শিক্ষার্থীর জাতীয়তা লিখুন ✽",
        },
        placeholder: {
          en: "Write the student's nationality",
          bn: "শিক্ষার্থীর জাতীয়তা ইংরেজিতে লিখুন",
        },
      },
    },
  },
  othersInfo: {
    previousSchool: {
      label: {
        en: "Write Previous School Name",
        bn: "পূর্ববর্তী স্কুলের নাম লিখুন",
      },
      placeholder: {
        en: "Write previous school name in English",
        bn: "পূর্ববর্তী স্কুলের নাম ইংরেজিতে লিখুন",
      },
    },
    guardian: {
      label: {
        en: "Write The Guardian's Name Who Should Be Informed About All Important Matters ✽",
        bn: "শিক্ষার্থীর অভিবাভকের নাম লিখুন যাকে সকল গুরত্বপূর্ণ বিষয় জানানো উচিত ✽",
      },
      placeholder: {
        en: "Write the guardian's name who should be informed about all important matters in English",
        bn: "শিক্ষার্থীর অভিভাবকের নাম ইংরেজিতে লিখুন যাকে সকল গুরত্বপূর্ণ বিষয় জানানো উচিত",
      },
    },
    guardianContactNumber: {
      label: {
        en: "Write Guardian Contact Number ✽",
        bn: "শিক্ষার্থীর অভিভাবকের ফোন/ মোবাইল নাম্বার লিখুন ✽",
      },
      placeholder: {
        en: "Write guardian contact number in English",
        bn: "শিক্ষার্থীর অভিভাবকের ফোন/ মোবাইল নাম্বার ইংরেজিতে লিখুন",
      },
    },
    guardianEmail: {
      label: {
        en: "Write Guardian Email Address",
        bn: "শিক্ষার্থীর অভিভাবকের ইমেইল লিখুন",
      },
      placeholder: {
        en: "Write guardian email address",
        bn: "শিক্ষার্থীর অভিভাবকের ইমেইল লিখুন",
      },
    },
  },
};

// CLASS LIST
interface IClassList {
  class: {
    bn: string;
    en: string;
  };
}
export const CLASS_LIST: IClassList[] = [
  {
    class: {
      bn: "প্লে",
      en: "Play",
    },
  },
  {
    class: {
      bn: "নার্সারী",
      en: "Nursery",
    },
  },
  {
    class: {
      bn: "প্রথম শ্রেণি",
      en: "Class One",
    },
  },
  {
    class: {
      bn: "দ্বিতীয় শ্রেণি",
      en: "Class Two",
    },
  },
  {
    class: {
      bn: "তৃতীয় শ্রেণি",
      en: "Class Three",
    },
  },
  {
    class: {
      bn: "চতুর্থ শ্রেণি",
      en: "Class Four",
    },
  },
  {
    class: {
      bn: "পঞ্চম শ্রেণি",
      en: "Class Five",
    },
  },
];

// GENDER LIST

interface IGenderList {
  gender: {
    bn: string;
    en: string;
  };
}
export const GENDER_LIST: IGenderList[] = [
  {
    gender: {
      bn: "ছেলে",
      en: "Male",
    },
  },
  {
    gender: {
      bn: "মেয়ে",
      en: "Female",
    },
  },
  {
    gender: {
      bn: "অন্যান্য",
      en: "Other",
    },
  },
];

// RELIGION LIST
interface IReligionList {
  religion: {
    bn: string;
    en: string;
  };
}
export const RELIGION_LIST: IReligionList[] = [
  {
    religion: {
      bn: "ইসলাম ধর্ম",
      en: "Islam",
    },
  },
  {
    religion: {
      bn: "খ্রিষ্টান ধর্ম",
      en: "Christianity",
    },
  },
  {
    religion: {
      bn: "হিন্দু ধর্ম",
      en: "Hinduism",
    },
  },
  {
    religion: {
      bn: "বৌদ্ধ ধর্ম",
      en: "Buddhism",
    },
  },
];

// RELIGION LIST
interface IBloodGroupList {
  blood: {
    bn: string;
    en: string;
  };
}
export const BLOOD_GROUP_LIST: IBloodGroupList[] = [
  {
    blood: {
      bn: "এ পজিটিভ",
      en: "A Positive",
    },
  },
  {
    blood: {
      bn: "এ নেগিটিভ",
      en: "A Negative",
    },
  },
  {
    blood: {
      bn: "বি পজিটিভ",
      en: "B Positive",
    },
  },
  {
    blood: {
      bn: "বি নেগিটিভ",
      en: "B Negative",
    },
  },
  {
    blood: {
      bn: "এবি পজিটিভ",
      en: "AB Positive",
    },
  },
  {
    blood: {
      bn: "এবি নেগিটিভ",
      en: "AB Negative",
    },
  },
  {
    blood: {
      bn: "ও পজিটিভ",
      en: "O Positive",
    },
  },
  {
    blood: {
      bn: "ও নেগিটিভ",
      en: "O Negative",
    },
  },
];

// RELIGION LIST
interface verificationOptions {
  option: {
    bn: string;
    en: string;
  };
}
export const VERIFICATION_OPTIONS: verificationOptions[] = [
  {
    option: {
      bn: "ভেরিফাইড",
      en: "Verified",
    },
  },
  {
    option: {
      bn: "ভেরিফাইড নয়",
      en: "Not Verified",
    },
  },
];

// EMPLOYEE ROLE OPTIONS
interface employeeRoleOptions {
  option: {
    bn: string;
    en: string;
  };
}

export const EMPLOYEE_ROLE_OPTIONS: employeeRoleOptions[] = [
  {
    option: {
      bn: "এডমিন",
      en: "Admin",
    },
  },
  {
    option: {
      bn: "ম্যানাজার",
      en: "Manager",
    },
  },
  {
    option: {
      bn: "শিক্ষক",
      en: "Teacher",
    },
  },
];
