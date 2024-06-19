export const RECEIPT_HEIGHT = 1080;

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
  { text: ["grace gao"] },
  { text: ["(she/her)"], spacing: 16 },
  { text: ["order #00110"], isLeft: true },
  { text: ["***"], spacing: 8, isLeft: true }, // date
  DIVIDER,
  { text: ["item", "detail", "date"] },
  DIVIDER,
  { text: ["**coding**"], spacing: 8 },
  { text: ["figma", "swe intern", "5.24"] },
  { text: ["", "san francisco, ca", "-now"], spacing: 8 },
  { text: ["datadog", "swe intern", "1.24"] },
  { text: ["", "new york city, ny", "-4.24"], spacing: 8 },
  { text: ["bloomberg", "swe intern", "5.23"] },
  { text: ["", "new york city, ny", "-8.23"], spacing: 8 },
  { text: ["faire", "security intern", "9.22"] },
  { text: ["", "toronto, on", "-12.22"], spacing: 8 },
  { text: ["", "frontend intern", "1.22"] },
  { text: ["", "waterloo, on", "-4.22"], spacing: 8 },
  { text: ["td bank", "swe intern", "5.21"] },
  { text: ["", "remote", "-8.21"], spacing: 8 },
  DIVIDER,
  { text: ["**studying**"], spacing: 8 },
  { text: ["uwaterloo", "software engineering;", "9.20"] },
  { text: ["", "combinatorics minor", "-4.25"], spacing: 8 },
  { text: ["uc3m", "study abroad;", "9.23"] },
  { text: ["", "madrid, spain", "-12.23"], spacing: 8 },
  DIVIDER,
  { text: ["**currently**"], spacing: 8 },
  { text: ["learning", "security", ""] },
  { text: ["", "human anatomy", ""] },
  { text: ["", "spanish", ""], spacing: 8 },
  { text: ["excited", "interactive art", ""] },
  { text: ["about", "fb marketplace", ""] },
  { text: ["", "crafty design", ""], spacing: 8 },
  DIVIDER,
  { text: ["card: **** **** **** 0160"], isLeft: true },
  { text: ["auth code: 200220"], isLeft: true },
  { text: ["cardholder: grace gao"], isLeft: true, spacing: 24 },
  { text: ["thank you for visiting!"], spacing: 16 },
  { text: ["open to 2025 new grad roles"] },
];

export const NO_HIGHLIGHT = new Set<string>(["item", "detail", "date", DIVIDER.text[0]]);

export const ALWAYS_HIGHLIGHT = new Set<string>([
  "grace gao",
  "open to 2025 new grad roles"
]);
