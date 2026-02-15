export const boardContentData = {
  "Federal Board of Intermediate and Secondary Education (FBISE)": {
    subjects: [
      { id: 1, name: "Mathematics", icon: "📐" },
      { id: 2, name: "Physics", icon: "⚛️" },
      { id: 3, name: "Chemistry", icon: "🧪" },
      { id: 4, name: "Biology", icon: "🧬" },
      { id: 5, name: "English", icon: "📚" },
      { id: 6, name: "Urdu", icon: "🔤" },
      { id: 7, name: "Islamic Studies", icon: "📖" },
      { id: 8, name: "Pakistan Studies", icon: "🗺️" }
    ],
    pastPapers: [
      { id: 1, year: 2023, term: "Final", subjects: 8 },
      { id: 2, year: 2023, term: "Midterm", subjects: 8 },
      { id: 3, year: 2022, term: "Final", subjects: 8 },
      { id: 4, year: 2022, term: "Midterm", subjects: 8 },
      { id: 5, year: 2021, term: "Final", subjects: 8 }
    ],
    guides: [
      { id: 1, title: "Mathematics Study Guide", subject: "Mathematics", level: "Class 12" },
      { id: 2, title: "Physics Concepts Explained", subject: "Physics", level: "Class 12" },
      { id: 3, title: "Chemistry Notes & Tips", subject: "Chemistry", level: "Class 12" },
      { id: 4, title: "Biology Complete Guide", subject: "Biology", level: "Class 12" },
      { id: 5, title: "English Literature Guide", subject: "English", level: "Class 12" }
    ]
  },
  "BISE Lahore": {
    subjects: [
      { id: 1, name: "Mathematics", icon: "📐" },
      { id: 2, name: "Physics", icon: "⚛️" },
      { id: 3, name: "Chemistry", icon: "🧪" },
      { id: 4, name: "Biology", icon: "🧬" },
      { id: 5, name: "English", icon: "📚" },
      { id: 6, name: "Urdu", icon: "🔤" },
      { id: 7, name: "Islamic Studies", icon: "📖" },
      { id: 8, name: "Pakistan Studies", icon: "🗺️" }
    ],
    pastPapers: [
      { id: 1, year: 2023, term: "Final", subjects: 8 },
      { id: 2, year: 2023, term: "Midterm", subjects: 8 },
      { id: 3, year: 2022, term: "Final", subjects: 8 },
      { id: 4, year: 2022, term: "Midterm", subjects: 8 }
    ],
    guides: [
      { id: 1, title: "Mathematics Study Guide", subject: "Mathematics", level: "Class 12" },
      { id: 2, title: "Physics Concepts Explained", subject: "Physics", level: "Class 12" },
      { id: 3, title: "Chemistry Notes & Tips", subject: "Chemistry", level: "Class 12" }
    ]
  },
  "Central Board of Secondary Education (CBSE)": {
    subjects: [
      { id: 1, name: "Mathematics", icon: "📐" },
      { id: 2, name: "Physics", icon: "⚛️" },
      { id: 3, name: "Chemistry", icon: "🧪" },
      { id: 4, name: "Biology", icon: "🧬" },
      { id: 5, name: "English", icon: "📚" },
      { id: 6, name: "Hindi", icon: "🔤" },
      { id: 7, name: "Social Studies", icon: "📚" },
      { id: 8, name: "Computer Science", icon: "💻" }
    ],
    pastPapers: [
      { id: 1, year: 2023, term: "Final", subjects: 8 },
      { id: 2, year: 2022, term: "Final", subjects: 8 },
      { id: 3, year: 2021, term: "Final", subjects: 8 }
    ],
    guides: [
      { id: 1, title: "Mathematics Study Guide", subject: "Mathematics", level: "Class 12" },
      { id: 2, title: "Physics Concepts Explained", subject: "Physics", level: "Class 12" }
    ]
  }
};

// Default content for boards without specific data
export const getDefaultBoardContent = (boardName) => {
  return {
    subjects: [
      { id: 1, name: "Mathematics", icon: "📐" },
      { id: 2, name: "Physics", icon: "⚛️" },
      { id: 3, name: "Chemistry", icon: "🧪" },
      { id: 4, name: "Biology", icon: "🧬" },
      { id: 5, name: "English", icon: "📚" },
      { id: 6, name: "Urdu", icon: "🔤" }
    ],
    pastPapers: [
      { id: 1, year: 2023, term: "Final", subjects: 6 },
      { id: 2, year: 2022, term: "Final", subjects: 6 }
    ],
    guides: [
      { id: 1, title: "Study Guide", subject: "General", level: "Class 12" }
    ]
  };
};
