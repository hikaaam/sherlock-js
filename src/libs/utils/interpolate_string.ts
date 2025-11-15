import type { TCommonUrlUsername } from "../../interfaces/types";

const interpolate_string = ({
  url,
  username,
  urlProbe,
}: TCommonUrlUsername): string => {
  return (urlProbe ?? url).replace("{}", username);
};

export default interpolate_string;
