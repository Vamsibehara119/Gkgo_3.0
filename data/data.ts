export const MOCK_DATA = {
  user: { name: "Jane Doe" },
  policy: {
    title: "Third Party Basic",
    premium: "J$159,786.00",
    number: "#223-401-224B",
    vehicle: "2018 Mazda 3 Sedan",
    expiryDate: "July 24, 2025",
    daysLeft: 30,
  },
  documents: [
    { id: 1, name: "Insurance Certificate" },
    { id: 2, name: "Schedule" },
    { id: 3, name: "Endorsements" },
  ],
  coverage: [
    { label: "Windscreen Protection", value: "$1000.00" },
    { label: "Roadside assistance", value: "$4000.00" },
    { label: "Wrecker service", value: "$40,000.00" },
  ],
  drivers: [
    { type: "Main Driver", name: "Anthony Blake-Richardson Jr", trn: "167987096" },
    { type: "Driver 2", name: "Jonathon Simpson Jr", trn: "678654983" },
  ],
  claims: [], // Empty array triggers the "No claims in progress" UI from the image
  payments: [
    { date: "Feb 29, 2024", amount: "J$39,460.50", status: "Paid", isUpcoming: false },
    { date: "Mar 29, 2024", amount: "J$39,460.50", status: "Paid", isUpcoming: false },
    { date: "April 29, 2024", amount: "J$39,460.50", status: "Upcoming", isUpcoming: true },
    { date: "May 29, 2024", amount: "J$39,460.50", status: "Upcoming", isUpcoming: true },
  ]
};