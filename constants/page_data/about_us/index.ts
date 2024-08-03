export type AboutUsParagraphProps = {
  en: string;
  bn: string;
};
export type AboutUsDataProps = {
  ourStory: {
    heading: {
      en: string;
      bn: string;
    };
    paragraph: AboutUsParagraphProps[];
  };
  ourMission: {
    heading: {
      en: string;
      bn: string;
    };
    paragraph: AboutUsParagraphProps[];
  };
  ourVision: {
    heading: {
      en: string;
      bn: string;
    };
    paragraph: AboutUsParagraphProps[];
  };
};

export const aboutUsData: AboutUsDataProps = {
  ourStory: {
    heading: {
      en: "Our Story",
      bn: "আমাদের গল্প",
    },

    paragraph: [
      {
        en: "Welcome to Tech Element IT! Founded with a passion for innovation and a commitment to excellence, Tech Element IT began its journey as a small startup. Our founders, driven by a vision to empower businesses and individuals, started with a simple goal: to provide cutting-edge web solutions that transform ideas into digital realities. From our humble beginnings, we have grown into a leading agency in the web development industry, serving a diverse range of clients.",
        bn: " Tech Element IT আপনাকে স্বাগত জানাই! উদ্ভাবনের প্রতি আগ্রহ এবং উৎকর্ষের জায়গায় আপোষহীনতা নিয়ে Tech Element IT এর যাত্রা শুরু হয় একটি ছোট্ট স্টার্টআপ হিসেবে। ব্যবসা এবং ব্যক্তিদের ক্ষমতায়নে সহায়ক হওয়ার দৃঢ় প্রত্যয়ে প্রতিষ্ঠাতারা শুরু করেন একটি সহজ লক্ষ্য নিয়ে: এমন কয়েকটি cutting-edge ওয়েব সমাধান সরবরাহ করা যা ধারণাগুলোকে ডিজিটাল বাস্তবে রূপান্তরিত করবে। এই সূচনালঙ্গ থেকেই আমরা ওয়েব ডেভেলপমেন্ট ইন্ডাস্ট্রিতে একটি শীর্ষস্থানীয় সংস্থায় পরিণত হয়েছি, বিভিন্ন ধরণের ক্লায়েন্টদের সেবা প্রদান করছি।",
      },
      {
        en: "Over the years, we have built a reputation for delivering high-quality websites and web applications that not only meet but exceed our clients' expectations. Our expertise spans across various domains, including e-commerce platforms, school management systems, POS systems, and personal websites. Each project we undertake is a testament to our dedication, creativity, and technical prowess, reflecting our commitment to excellence.",
        bn: "এ বছরগুলিতে, আমরা এমন উচ্চ-মানের ওয়েবসাইট এবং ওয়েব অ্যাপ্লিকেশন সরবরাহের জন্য একটি খ্যাতি অর্জন করেছি যা কেবল আমাদের ক্লায়েন্টদের প্রত্যাশা পূরণ করে না বরং তা ছাড়িয়ে যায়। আমাদের দক্ষতা বিভিন্ন ক্ষেত্রে বিস্তৃত, যার মধ্যে রয়েছে ই-কমার্স প্ল্যাটফর্ম, স্কুল ম্যানেজমেন্ট সিস্টেম,পস সিস্টেম এবং ব্যক্তিগত ওয়েবসাইট। আমরা যে প্রকল্পই হাতে নিই, তা আমাদের নিষ্ঠা, সৃজনশীলতা এবং প্রযুক্তিগত দক্ষতার স্বাক্ষর বহন করে, উৎকর্ষ সাধনের প্রতি আমাদের প্রতিশ্রুতির প্রতিফলন ঘটায়।",
      },
      {
        en: "At Tech Element IT, we believe that our success is driven by our clients' success. We pride ourselves on our ability to understand our clients' unique needs and deliver tailored solutions that help them achieve their goals. Our journey has been marked by continuous learning, innovation, and a relentless pursuit of perfection. As we look to the future, we remain committed to pushing the boundaries of what is possible, ensuring that our clients stay ahead in the digital landscape.",
        bn: "টেক এলিমেন্ট আইটিতে, আমরা বিশ্বাস করি যে আমাদের সাফল্য আমাদের ক্লায়েন্টদের সাফল্যের দ্বারা পরিচালিত। আমরা আমাদের ক্লায়েন্টদের অনন্য চাহিদা বুঝতে এবং তাদের লক্ষ্য অর্জনে সহায়ক এমন বিশেষায়িত সমাধান সরবরাহ করার ক্ষমতায় গর্ববোধ করি। আমাদের যাত্রাপথ চিহ্নিত হয়েছে, উদ্ভাবন এবং নিখুঁতত্ব অর্জনে অক্লান্ত চেষ্টা দ্বারা। ভবিষ্যতের দিকে তাকিয়ে, আমরা সম্ভবের সীমানা আরও বিস্তৃত করার ক্ষেত্রে প্রতিশ্রুতিবদ্ধ থাকব, যাতে আমাদের ক্লায়েন্টরা ডিজিটাল ল্যান্ডস্কেপে এগিয়ে থাকে।",
      },
    ],
  },

  ourMission: {
    heading: {
      en: "Our Mission",
      bn: "আমাদের লক্ষ্য",
    },

    paragraph: [
      {
        en: "At Tech Element IT, our mission is to deliver exceptional web solutions that drive growth and success for our clients. We strive to create websites and applications that are not only visually appealing but also highly functional and user-friendly. By staying ahead of industry trends and leveraging the latest technologies, we aim to provide innovative solutions that give our clients a competitive edge.",
        bn: "Tech Element IT তে, আমাদের লক্ষ্য হলো এমন অসাধারণ ওয়েব সমাধান সরবরাহ করা যা আমাদের ক্লায়েন্টদের জন্য বৃদ্ধি এবং সাফল্য এনে দেয়। আমরা এমন ওয়েবসাইট এবং অ্যাপ্লিকেশন তৈরি করতে সচেষ্টা করি যা কেবল চোখ ধাঁধানোর মতো সুন্দরই না, বরং অত্যন্ত কার্যকর এবং ব্যবহারকারী-বান্ধবও। শিল্পের প্রবণতাগুলির এগিয়ে থাকার এবং সর্বশেষ প্রযুক্তিগুলি কাজে লাগিয়ে, আমরা এমন উদ্ভাবনী সমাধান সরবরাহ করতে চাই যা আমাদের ক্লায়েন্টদের প্রতিযোগিতামূলক সুবিধা দেয়।",
      },
      {
        en: "We believe in building long-term relationships based on trust, transparency, and mutual respect. Our personalized approach ensures that each client receives solutions tailored to their unique needs and goals. Our mission is to be a trusted partner in your digital journey, committed to your success and dedicated to delivering excellence in every project we undertake.",
        bn: "আমরা বিশ্বাস করি বিশ্বাস, স্বচ্ছতা এবং পারস্পরিক সম্মানের দীর্ঘমেয়াদী সম্পর্ক গড়ে তোলা উচিত। আমাদের ব্যক্তিগতকৃত পদ্ধতি নিশ্চিত করে যে প্রতিটি ক্লায়েন্ট তাদের অনন্য চাহিদা এবং লক্ষ্যের জন্য বিশেষভাবে তৈরি করা সমাধান পায়। আমাদের লক্ষ্য হলো আপনার ডিজিটাল যাত্রায় একটি বিশ্বস্ত সহযোগী হওয়া, আপনার সাফল্যের প্রতি প্রতিশ্রুতিবদ্ধ এবং আমরা যে প্রকল্পই হাতে নিই, তাতে উৎকর্ষ সরবরাহে নিবেদিত।",
      },
    ],
  },
  ourVision: {
    heading: {
      en: "Our Vision",
      bn: "আমাদের দৃষ্টিভঙ্গি",
    },

    paragraph: [
      {
        en: "Our vision is to be at the forefront of the digital revolution, setting new standards for excellence in web development. We aim to continuously evolve and adapt to the ever-changing technological landscape, ensuring that our clients always receive the best possible solutions. At Tech Element IT, we envision a future where every business, regardless of size, has access to top-tier web solutions that enhance their online presence and drive success. We are committed to fostering a culture of innovation, collaboration, and continuous improvement, empowering our team to push the boundaries of what is possible. Our ultimate goal is to be the go-to agency for businesses and individuals seeking reliable, cutting-edge web solutions.",
        bn: "Tech Element IT তে, আমাদের দৃষ্টিভঙ্গি হলো ডিজিটাল বিপ্লবের এগিয়ে থাকা এবং ওয়েব ডেভেলপমেন্টের ক্ষেত্রে উৎকর্ষের নতুন মানদণ্ড স্থাপন করা। আমরা ক্রমাগত বিবর্তিত হওয়া এবং চির-পরিবর্তনশীল প্রযুক্তিগত পরিবেশে মানিয়ে নেওয়ার চেষ্টা করি, যাতে আমাদের ্গ্রাহকরা সর্বদা সর্বোত্তম সম্ভাব্য সমাধান পায়। আমরা এমন একটি ভবিষ্যৎ কল্পনা করি যেখানে প্রতিটি ব্যবসা, আকার নির্বিশেষে, শীর্ষস্থানীয় ওয়েব সমাধানে অ্যাক্সেস পাবে যা তাদের অনলাইন উপস্থিতি বাড়িয়ে দেয় এবং সাফল্য এনে দেয়। আমরা উদ্ভাবন, সহযোগিতা ও ক্রমাগত উন্নতির একটি সংস্কৃতি গড়ে তুলছি। এটি আমাদের দলকে নতুন সম্ভাবনার দ্বার উন্মুক্ত করতে সাহায্য করে। আমাদের লক্ষ্য হলো, নির্ভরযোগ্য ও আধুনিক ওয়েব সমাধানের সন্ধানে থাকা ব্যবসা ও ব্যক্তিদের কাছে প্রথম পছন্দ হয়ে ওঠা।",
      },
    ],
  },
};
