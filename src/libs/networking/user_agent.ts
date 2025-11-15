export interface UserAgentOptions {
  browser?: "chrome" | "firefox" | "safari" | "edge" | "all";
  os?: "windows" | "mac" | "linux" | "android" | "ios" | "all";
  mobile?: boolean;
}

const CHROME_VERSIONS = ["120", "121", "122", "123", "124", "125"];
const FIREFOX_VERSIONS = ["121", "122", "123", "124"];
const SAFARI_VERSIONS = ["17.0", "17.1", "17.2", "17.3"];
const EDGE_VERSIONS = ["120", "121", "122", "123", "124", "125"];

const WINDOWS_VERSIONS = [
  "Windows NT 10.0; Win64; x64",
  "Windows NT 10.0; WOW64",
  "Windows NT 6.1; Win64; x64",
];

const MAC_VERSIONS = [
  "Macintosh; Intel Mac OS X 10_15_7",
  "Macintosh; Intel Mac OS X 11_6_8",
  "Macintosh; Intel Mac OS X 12_7",
  "Macintosh; Intel Mac OS X 13_5",
];

const LINUX_VERSIONS = [
  "X11; Linux x86_64",
  "X11; Linux i686",
  "X11; Ubuntu; Linux x86_64",
];

const ANDROID_VERSIONS = [
  "Linux; Android 13",
  "Linux; Android 14",
  "Linux; Android 15",
];

const MOBILE_DEVICES = [
  "SM-G991B",
  "SM-G950F",
  "Pixel 7",
  "Pixel 8",
  "ONEPLUS A6013",
];

const getRandomElement = <T>(arr: T[]) =>
  arr[Math.floor(Math.random() * arr.length)];

const getRandomNumber = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const generateChromeUA = (): string => {
  const version = getRandomElement(CHROME_VERSIONS);
  const buildNumber = getRandomNumber(1000, 9999);
  const os = getRandomElement(WINDOWS_VERSIONS);

  return `Mozilla/5.0 (${os}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${version}.0.0.${buildNumber} Safari/537.36`;
};

const generateFirefoxUA = (): string => {
  const version = getRandomElement(FIREFOX_VERSIONS);
  const os = getRandomElement(LINUX_VERSIONS);

  return `Mozilla/5.0 (${os}; rv:${version}.0) Gecko/20100101 Firefox/${version}.0`;
};

const generateSafariUA = (): string => {
  const version = getRandomElement(SAFARI_VERSIONS);
  const os = getRandomElement(MAC_VERSIONS);
  const buildNumber = getRandomNumber(600, 620);

  return `Mozilla/5.0 (${os}) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/${version}.${buildNumber} Safari/605.1.15`;
};

const generateEdgeUA = (): string => {
  const version = getRandomElement(EDGE_VERSIONS);
  const buildNumber = getRandomNumber(1000, 9999);
  const os = getRandomElement(WINDOWS_VERSIONS);

  return `Mozilla/5.0 (${os}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${version}.0.0.${buildNumber} Safari/537.36 Edg/${version}.0.0.${buildNumber}`;
};

const generateMobileUA = (): string => {
  const browsers = ["chrome", "firefox", "safari"];
  const browser = getRandomElement(browsers);

  if (browser === "chrome") {
    const version = getRandomElement(CHROME_VERSIONS);
    const buildNumber = getRandomNumber(1000, 9999);
    const device = getRandomElement(MOBILE_DEVICES);
    const android = getRandomElement(ANDROID_VERSIONS);

    return `Mozilla/5.0 (${android}; ${device}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${version}.0.0.${buildNumber} Mobile Safari/537.36`;
  } else if (browser === "firefox") {
    const version = getRandomElement(FIREFOX_VERSIONS);
    const android = getRandomElement(ANDROID_VERSIONS);

    return `Mozilla/5.0 (${android}; Mobile; rv:${version}.0) Gecko/${version}.0 Firefox/${version}.0`;
  } else {
    return `Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Mobile/15E148 Safari/604.1`;
  }
};

const generateUserAgent = (options: UserAgentOptions = {}): string => {
  const { browser = "all", mobile = false } = options;

  if (mobile) {
    return generateMobileUA();
  }

  let selectedBrowser = browser;
  if (browser === "all") {
    selectedBrowser = getRandomElement([
      "chrome",
      "firefox",
      "safari",
      "edge",
    ]) as any;
  }

  switch (selectedBrowser) {
    case "chrome":
      return generateChromeUA();
    case "firefox":
      return generateFirefoxUA();
    case "safari":
      return generateSafariUA();
    case "edge":
      return generateEdgeUA();
    default:
      return generateChromeUA();
  }
};

export default generateUserAgent;
