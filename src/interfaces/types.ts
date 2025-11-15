export interface TCommonUrlUsername {
  username: string;
  url: string;
  urlProbe?: string;
}

/*
    CLAIMED   = Username Detected
    AVAILABLE = Username Not Detected
    UNKNOWN   = Error Occurred While Trying To Detect Username
    ILLEGAL   = Username Not Allowable For This Site
    WAF       = Request blocked by WAF (i.e. Cloudflare)
*/
export type SHERLOCK_STATUS =
  | "CLAIMED"
  | "AVAILABLE"
  | "UNKNOWN"
  | "ILLEGAL"
  | "WAF";

export interface FormatedResponse {
  status: SHERLOCK_STATUS;
  url: string;
  isNSFW?: boolean;
  time: number;
}
