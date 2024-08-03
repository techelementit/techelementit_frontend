// USER LOGIN FORM
//-------------------------
export interface ILabelPlaceholder {
  label: {
    en: string;
    bn: string;
  };
  placeholder: {
    en: string;
    bn: string;
  };
}
interface IUser_Login {
  email: ILabelPlaceholder;
  password: ILabelPlaceholder;
}

export const USER_LOGIN: IUser_Login = {
  email: {
    label: {
      en: "Email",
      bn: "ইমেইল",
    },
    placeholder: {
      en: "example@mail.com",
      bn: "example@mail.com",
    },
  },
  password: {
    label: {
      en: "Password",
      bn: "পাসওয়ার্ড",
    },
    placeholder: {
      en: "Write your password",
      bn: "এখানে পাসওয়ার্ড লিখুন",
    },
  },
};

// USER REGISTRATION FORM
//-------------------------

interface IUser_Registration {
  name: {
    firstName: ILabelPlaceholder;
    sureName: ILabelPlaceholder;
  };
  email: ILabelPlaceholder;
  password: ILabelPlaceholder;
  studentRefCode: ILabelPlaceholder;
}
export const USER_REGISTRATIOIN: IUser_Registration = {
  name: {
    firstName: {
      label: {
        en: "First Nname",
        bn: "নামের প্রথম অংশ",
      },
      placeholder: {
        en: "Write your first name",
        bn: "নামের প্রথম অংশ লিখুন",
      },
    },
    sureName: {
      label: {
        en: "Sure Name",
        bn: "নামের শেষ অংশ",
      },
      placeholder: {
        en: "Write your sure name",
        bn: "নামের শেষ অংশ লিখুন",
      },
    },
  },
  email: {
    label: {
      en: "Email",
      bn: "ইমেইল",
    },
    placeholder: {
      en: "example@mail.com",
      bn: "example@mail.com",
    },
  },
  password: {
    label: {
      en: "Password",
      bn: "পাসওয়ার্ড",
    },
    placeholder: {
      en: "Write your password",
      bn: "এখানে পাসওয়ার্ড লিখুন",
    },
  },
  studentRefCode: {
    label: {
      en: "Student Reference Number",
      bn: "শিক্ষার্থীর রেফারেন্স নাম্বার",
    },
    placeholder: {
      en: "Write student reference number",
      bn: "শিক্ষার্থীর রেফারেন্স নাম্বার লিখুন",
    },
  },
};
