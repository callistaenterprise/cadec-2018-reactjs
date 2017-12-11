export const cadecModel = {
  2018: {
    year: "2018",
    location: {
      id: "bergkungen",
      name: "Bergkungen",
      address: "..",
      mapLocation: "123,456"
    },
    speakers: {
      stephen: {
        id: "stephen",
        name: "stephen",
        bio: "",
        twitter: "",
        linkedIn: "",
        email: "",
        phone: "",
        pic: "base64 image",
        talks: ["react"]
      }
    },
    talks: {
      react: {
        id: "react",
        title: "React best practices",
        description: "it's so fantastical",
        time: "30",
        start: "20180123 13:00",
        speakers: ["stephen"]
      }
    },
    users: {
      enterpriseDamagedJavaDeveloper1: {
        id: "enterpriseDamagedJavaDeveloper1",
        name: "",
        company: "",
        email: "",
        avatarLink: "",
        stars: {
          react: 5000,
          kafka: -5000
        }
      }
    }
  }
};
