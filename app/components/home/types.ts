export type Appointment = {
  time: string;
  patient: string;
};

export type CalendarDay = {
  key: string;
  day: number;
  inCurrentMonth: boolean;
  weekdayLabel?: string;
  appointments?: Appointment[];
  extraAppointments?: number;
  selected?: boolean;
};

export type FilterOption = {
  id: string;
  label: string;
};

export type NavItem = {
  label: string;
  href: string;
  icon?: "home";
};
