export const calendarSchedule = [
  {
    date: 25,
    day: "Mon",
    isActive: true,
    isCurrentDay: false,
    times: [
      { time: "10:00", available: true, booked: false },
      { time: "11:00", available: true, booked: false },
      { time: "12:00", available: true, booked: false },
    ],
  },
  {
    date: 26,
    day: "Tues",
    isActive: true,
    isCurrentDay: true,
    times: [
      { time: "08:00", available: true, booked: false },
      { time: "09:00", available: true, booked: true }, // Highlighted
      { time: "10:00", available: true, booked: false },
    ],
  },

  {
    date: 27,
    day: "Wed",
    isActive: true,
    isCurrentDay: false,
    times: [
      { time: "12:00", available: true, booked: false },
      { time: "", available: false, booked: false }, // Empty slot
      { time: "13:00", available: true, booked: false },
    ],
  },
  {
    date: 28,
    day: "Thurs",
    isActive: true,
    isCurrentDay: false,
    times: [
      { time: "10:00", available: true, booked: false },
      { time: "11:00", available: true, booked: true },
      { time: "", available: false, booked: false }, // Empty slot
    ],
  },
  {
    date: 29,
    day: "Fri",
    isActive: true,
    isCurrentDay: false,
    times: [
      { time: "", available: false, booked: false }, // Empty slot
      { time: "14:00", available: true, booked: false },
      { time: "16:00", available: true, booked: false },
    ],
  },
  {
    date: 30,
    day: "Sat",
    isActive: true,
    isCurrentDay: false,
    times: [
      { time: "12:00", available: true, booked: true }, // Highlighted
      { time: "14:00", available: true, booked: false },
      { time: "15:00", available: true, booked: false },
    ],
  },
  {
    date: 31,
    day: "Sun",
    isActive: false,
    isCurrentDay: false,
    times: [
      { time: "09:00", available: true, booked: true }, // Highlighted
      { time: "10:00", available: false, booked: false }, // Disabled
      { time: "11:00", available: false, booked: false },
    ],
  },
];
