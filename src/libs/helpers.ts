export function toOxString(value?: string) {
  return value as `0x${string}`;
}

export function formatWalletAddress(
  walletAddress: string,
  separator?: string,
  startAt?: number,
  endAt?: number
) {
  if (typeof walletAddress !== "string" || walletAddress.length < 6) {
    return "Invalid wallet address";
  }

  const prefix = startAt
    ? walletAddress.substring(0, startAt)
    : walletAddress.substring(0, 5);
  const suffix = endAt
    ? walletAddress.substring(walletAddress.length - endAt)
    : walletAddress.substring(walletAddress.length - 4);
  const div = separator ? separator : "...";

  return `${prefix}${div}${suffix}`;
}

export const getWagmiError = (inputString: string) => {
  // Split the input string by line breaks
  const lines = inputString.split("\n");

  // Initialize an empty array to store the sentences
  const sentences = [];

  // Iterate through each line
  for (let line of lines) {
    // Trim leading and trailing whitespace from the line
    line = line.trim();

    // If the line is not empty, split it into sentences and add the first sentence to the array
    if (line !== "") {
      // Split the line into sentences using period ('.') as the delimiter
      const lineSentences = line.split(".");

      // Add the first sentence to the array
      sentences.push(lineSentences[0]);

      // Break the loop as we only need the first sentence
      break;
    }
  }

  // Join the sentences array into a single string and return it
  return sentences.join(". ");
};

export const walletToLowercase = (wallet: string) => {
  return wallet.toLowerCase();
};

export const weiToUnit = (wei: string | number) => {
  const unit = Number(wei) / 1e18;
  return unit;
};

export const getFirstLetters = (fullName: string) => {
  const words = fullName.split(" ");
  let initials = "";
  for (const word of words) {
    const firstLetter = word[0]?.toUpperCase();
    if (firstLetter) {
      initials += firstLetter;
    }
  }
  return initials;
};

export const timestampToDate = (time: string | number) => {
  const date = new Date(Number(time) * 1000);
  return date;
};

export const stringToColor = (str: string) => {
  // Hash function to convert string to a number (modify if needed)
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  // Convert hash to a hex color string (adjust for desired color range)
  let color = "#";
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xff;
    color += value.toString(16).padStart(2, "0");
  }

  return color;
};

export const isLikelyUsername = (str: string) => {
  if (!str || str.length < 3) {
    return false;
  }

  const usernameRegex = /^[a-zA-Z0-9]+$/;
  return usernameRegex.test(str);
};

export const isValidPostID = (str: string) => {
  const idRegex =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return idRegex.test(str);
};

export function formatCur(value: string | number, maxSignDigit?: number) {
  const cur = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "NGN",
    maximumSignificantDigits: maxSignDigit || 6,
    currencySign: "accounting",
  });
  const cleanInp = value.toString()?.replace(/(,)/g, "");
  const fAmt = cur.format(Number(cleanInp));
  const amount = fAmt.toString().replace(/(NGN|\s)/g, "");
  return amount;
}

export function isNumber(value: number) {
  return !isNaN(value);
}

export const countWords = (sentence: string) => {
  const trimmedSentence = sentence.trim();
  const wordsArray = trimmedSentence.split(/\s+/);
  const nonEmptyWordsArray = wordsArray.filter((word) => word !== "");
  const length = trimmedSentence === "" ? 0 : nonEmptyWordsArray.length;
  return length;
};

type PlainObject = { [key: string]: any };

export function pick<T extends PlainObject>(
  obj: T,
  keys: (keyof T)[]
): Partial<T> {
  const result: Partial<T> = {};
  keys.forEach((key) => {
    if (key in obj) {
      result[key] = obj[key];
    }
  });
  return result;
}

export const RE_DIGIT = new RegExp(/^\d+$/);

export function pickFromArray<T extends PlainObject>(
  arr: T[],
  keys: (keyof T)[]
): Partial<T>[] {
  return arr.map((item) => pick(item, keys));
}
