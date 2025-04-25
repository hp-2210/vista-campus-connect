
export const courseOptions = [
  { value: "B.Tech", label: "B.Tech" },
  { value: "M.Tech", label: "M.Tech" },
];

export const branchOptions = [
  { value: "Computer Science", label: "Computer Science" },
  { value: "Computer Science and Business Systems", label: "Computer Science and Business Systems" },
];

export const yearOptions = [
  { value: "1", label: "1st Year" },
  { value: "2", label: "2nd Year" },
  { value: "3", label: "3rd Year" },
  { value: "4", label: "4th Year" },
];

export const semesterOptions = Array.from({ length: 8 }, (_, i) => ({
  value: String(i + 1),
  label: `Semester ${i + 1}`,
}));

export const companyOptions = [
  { value: "Google", label: "Google" },
  { value: "Microsoft", label: "Microsoft" },
  { value: "Amazon", label: "Amazon" },
  { value: "Meta", label: "Meta" },
  { value: "Apple", label: "Apple" },
  { value: "other", label: "Other" },
];
