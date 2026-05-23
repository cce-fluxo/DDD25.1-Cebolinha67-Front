export type ProfileField = {
  id: string;
  label: string;
  value: string;
  editLabel?: string;
};

export type ProfileFieldRow = {
  id: string;
  columns?: 1 | 2;
  fields: ProfileField[];
};

export type ProfileSectionData = {
  id: string;
  title: string;
  rows: ProfileFieldRow[];
};

export type ProfileDetailsColumn = {
  id: string;
  sections: ProfileSectionData[];
};

export type ProfileSummaryData = {
  titlePrefix: string;
  name: string;
  avatarSrc: string;
  avatarAlt: string;
};

export type ProfileMenuIcon = "clipboard" | "help";

export type ProfileMenuItem = {
  id: string;
  label: string;
  icon: ProfileMenuIcon;
  isActive?: boolean;
};
