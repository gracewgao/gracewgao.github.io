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

const randomNumber = (n: number): string => {
  let result = "";
  for (let i = 0; i < n; i++) {
    const randomDigit = Math.floor(Math.random() * 10);
    result += randomDigit.toString();
  }
  return result;
};

export const LINES: ILine[] = [
  { text: ["grace gao"] },
  { text: ["(she/her)"], spacing: 16 },
  { text: [`order #${randomNumber(5)}`], isLeft: true },
  { text: ["***"], spacing: 8, isLeft: true }, // date
  DIVIDER,
  { text: ["item", "detail", "date"] },
  DIVIDER,
  { text: ["**experience**"], spacing: 8 },
  { text: ["figma", "security engineer", "9.25"] },
  { text: ["", "new york city, ny", "-now"], spacing: 8 },
  { text: ["", "swe intern", "5.24"] },
  { text: ["", "san francisco, ca", "-9.24"], spacing: 8 },
  { text: ["datadog", "swe intern", "1.24"] },
  { text: ["", "new york city, ny", "-4.24"], spacing: 8 },
  { text: ["bloomberg", "swe intern", "5.23"] },
  { text: ["", "new york city, ny", "-8.23"], spacing: 8 },
  { text: ["faire", "security intern", "9.22"] },
  { text: ["", "toronto, on", "-12.22"], spacing: 8 },
  { text: ["", "swe intern", "1.22"] },
  { text: ["", "waterloo, on", "-4.22"], spacing: 8 },
  DIVIDER,
  { text: ["**education**"], spacing: 8 },
  { text: ["uwaterloo", "software engineering;", "9.20"] },
  { text: ["", "combinatorics minor", "-4.25"], spacing: 8 },
  { text: ["uc3m", "study abroad;", "9.23"] },
  { text: ["", "madrid, spain", "-12.23"], spacing: 8 },
  DIVIDER,
  { text: ["**currently**"], spacing: 8 },
  { text: ["learning", "portraiture", ""] },
  { text: ["", "oil pastels", ""] },
  { text: ["", "french vocabulary", ""], spacing: 8 },
  { text: ["excited", "interactive art", ""] },
  { text: ["about", "sugar", ""] },
  { text: ["", "secondhand shopping", ""], spacing: 8 },
  DIVIDER,
  { text: [`card: **** **** **** ${randomNumber(4)}`], isLeft: true },
  { text: [`auth code: ${randomNumber(6)}`], isLeft: true },
  { text: ["cardholder: grace gao"], isLeft: true, spacing: 24 },
  { text: ["thank you for visiting!"] },
];

export const NO_HIGHLIGHT = new Set<string>([
  "item",
  "detail",
  "date",
  DIVIDER.text[0],
]);

export const ALWAYS_HIGHLIGHT = new Set<string>([
  "grace gao",
]);
