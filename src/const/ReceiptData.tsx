export const RECEIPT_HEIGHT = 1000;

const DIVIDER: ILine = {
  text: ["-------------------------------------"],
  spacing: 0,
  isLeft: true,
};

export interface ILine {
  text: string[];
  spacing?: number;
  isLeft?: boolean;
}

export const LINES: ILine[] = [
  { text: ["(she/her)"], spacing: 16 },
  { text: ["order #00110"], isLeft: true },
  { text: ["***"], spacing: 8, isLeft: true }, // date
  DIVIDER,
  { text: ["item", "detail", "date"] },
  DIVIDER,
  { text: ["**internships**"], spacing: 8 },
  { text: ["datadog", "swe intern", "1.24"] },
  { text: ["", "new york city, ny", "-now"], spacing: 8 },
  { text: ["bloomberg", "swe intern", "5.23"] },
  { text: ["", "new york city, ny", "-8.23"], spacing: 8 },
  { text: ["faire", "backend intern", "9.22"] },
  { text: ["", "toronto, on", "-12.22"], spacing: 8 },
  { text: ["faire", "frontend intern", "1.22"] },
  { text: ["", "waterloo, on", "-4.22"], spacing: 8 },
  { text: ["td bank", "swe intern", "5.21"] },
  { text: ["", "remote", "-8.21"], spacing: 8 },
  DIVIDER,
  { text: ["**education**"], spacing: 8 },
  { text: ["uwaterloo", "software engineering;", "9.20"] },
  { text: ["", "combinatorics &", "-4.25"] },
  { text: ["", "optimization minor", ""], spacing: 8 },
  { text: ["uc3m", "study abroad;", "9.23"] },
  { text: ["", "madrid, spain", "-12.23"], spacing: 8 },
  DIVIDER,
  { text: ["**currently**"], spacing: 8 },
  { text: ["learning", "web security", ""] },
  { text: ["", "gouache painting", ""] },
  { text: ["", "spanish", ""], spacing: 8 },
  { text: ["excited", "interactive art", ""] },
  { text: ["about", "fb marketplace", ""] },
  { text: ["", "travel", ""], spacing: 8 },
  DIVIDER,
  { text: ["card: **** **** **** 0160"], isLeft: true },
  { text: ["auth code: 200220"], isLeft: true },
  { text: ["cardholder: grace gao "], isLeft: true, spacing: 24 },
  { text: ["thank you for visiting!"], spacing: 16 },
  { text: ["open to 2025 new grad roles"] },
];

export const NO_HIGHLIGHT = new Set<string>([
  "item",
  "detail",
  "date"
]);