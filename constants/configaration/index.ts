import { ILabelPlaceholder } from "../auth";

// ADD CLASS AND EDIT CLASS FORM
export interface IAddOrEditClass {
  className: {
    en: ILabelPlaceholder;
    bn: ILabelPlaceholder;
  };
}

export const ADD_OR_EDIT_CLASS: IAddOrEditClass = {
  className: {
    en: {
      label: {
        en: "Write The Class Name (English) ✽",
        bn: "ক্লাসের নামটি লিখুন (ইংরেজি) ✽",
      },
      placeholder: {
        en: "Write the class name in English",
        bn: "ক্লাসের নামটি ইংরেজিতে লিখুন",
      },
    },
    bn: {
      label: {
        en: "Write The Class Name (Bangla) ✽",
        bn: "ক্লাসের নামটি লিখুন (বাংলা) ✽",
      },
      placeholder: {
        en: "Write the class name in Bangla",
        bn: "ক্লাসের নামটি বাংলায় লিখুন",
      },
    },
  },
};

// ADD SUBJECT AND EDIT SUBJECT FORM
export interface IAddOrEditSubject {
  subjectName: {
    en: ILabelPlaceholder;
    bn: ILabelPlaceholder;
  };
}

export const ADD_OR_EDIT_SUBJECT: IAddOrEditSubject = {
  subjectName: {
    en: {
      label: {
        en: "Write The Subject Name (English) ✽",
        bn: "বিষয়ের নামটি লিখুন (ইংরেজি) ✽",
      },
      placeholder: {
        en: "Write the subject name in English",
        bn: "বিষয়ের নামটি ইংরেজিতে লিখুন",
      },
    },
    bn: {
      label: {
        en: "Write The Subject Name (Bangla) ✽",
        bn: "বিষয়ের নামটি লিখুন (বাংলা) ✽",
      },
      placeholder: {
        en: "Write the subject name in Bangla",
        bn: "বিষয়ের নামটি বাংলায় লিখুন",
      },
    },
  },
};

// ADD SECTION AND EDIT SECTION FORM
export interface IAddOrEditSection {
  sectionName: {
    en: ILabelPlaceholder;
    bn: ILabelPlaceholder;
  };
}

export const ADD_OR_EDIT_SECTION: IAddOrEditSection = {
  sectionName: {
    en: {
      label: {
        en: "Write The Section Name (English) ✽",
        bn: "শাখার নামটি লিখুন (ইংরেজি) ✽",
      },
      placeholder: {
        en: "Write the section name in English",
        bn: "শাখার নামটি ইংরেজিতে লিখুন",
      },
    },
    bn: {
      label: {
        en: "Write The Section Name (Bangla) ✽",
        bn: "শাখার নামটি লিখুন (বাংলা) ✽",
      },
      placeholder: {
        en: "Write the section name in Bangla",
        bn: "শাখার নামটি বাংলায় লিখুন",
      },
    },
  },
};

// ADD EXAMINATION AND EDIT EXAMINATION FORM
export interface IAddOrEditExamination {
  examinationName: {
    en: ILabelPlaceholder;
    bn: ILabelPlaceholder;
  };
}

export const ADD_OR_EDIT_EXAMINATION: IAddOrEditExamination = {
  examinationName: {
    en: {
      label: {
        en: "Write The Examination Name (English) ✽",
        bn: "পরীক্ষার নামটি লিখুন (ইংরেজি) ✽",
      },
      placeholder: {
        en: "Write the examination name in English",
        bn: "পরীক্ষার নামটি ইংরেজিতে লিখুন",
      },
    },
    bn: {
      label: {
        en: "Write The Examination Name (Bangla) ✽",
        bn: "পরীক্ষার নামটি লিখুন (বাংলা) ✽",
      },
      placeholder: {
        en: "Write the examination name in Bangla",
        bn: "পরীক্ষার নামটি বাংলায় লিখুন",
      },
    },
  },
};

// ADD CLASSROOM AND EDIT CLASSROOM FORM
export interface IAddOrEditClassroom {
  classId: ILabelPlaceholder;
  sectionId: ILabelPlaceholder;
  subjectsTeachersList: {
    teacherId: ILabelPlaceholder;
    subjectId: ILabelPlaceholder;
    subjectFullMark: ILabelPlaceholder;
    subjectPassMark: ILabelPlaceholder;
  };
}

export const ADD_OR_EDIT_CLASSROOM: IAddOrEditClassroom = {
  classId: {
    label: {
      en: "Choose The Class ✽",
      bn: "শ্রেণি নির্বাচন করুন ✽",
    },
    placeholder: {
      en: "Choose the class",
      bn: "শ্রেণি নির্বাচন করুন",
    },
  },
  sectionId: {
    label: {
      en: "Choose The Section ✽",
      bn: "শাখা নির্বাচন করুন ✽",
    },
    placeholder: {
      en: "Choose the section",
      bn: "শাখা নির্বাচন করুন",
    },
  },
  subjectsTeachersList: {
    teacherId: {
      label: {
        en: "Choose The Teacher ✽",
        bn: "শিক্ষক/ শিক্ষিকা নির্বাচন করুন ✽",
      },
      placeholder: {
        en: "Choose the teacher",
        bn: "শিক্ষক/ শিক্ষিকা নির্বাচন করুন",
      },
    },
    subjectId: {
      label: {
        en: "Choose The Subject ✽",
        bn: "বিষয় নির্বাচন করুন ✽",
      },
      placeholder: {
        en: "Choose the subject",
        bn: "বিষয় নির্বাচন করুন",
      },
    },
    subjectFullMark: {
      label: {
        en: "Write The Full Mark Of Subject ✽",
        bn: "বিষয়ের সম্পূর্ণ নম্বর লিখুন ✽",
      },
      placeholder: {
        en: "Write the full mark of subject",
        bn: "বিষয়ের সম্পূর্ণ নম্বর লিখুন",
      },
    },
    subjectPassMark: {
      label: {
        en: "Write The Pass Mark Of Subject ✽",
        bn: "বিষয়ের উত্তির্ণ নম্বর লিখুন ✽",
      },
      placeholder: {
        en: "Write the pass mark of subject",
        bn: "বিষয়ের উত্তির্ণ নম্বর লিখুন",
      },
    },
  },
};
