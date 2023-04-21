export const SUDO_GROUP_REGEX =
  /^%([a-z][a-z0-9_-]{1,31})\s+ALL\s*=\s*\((?:ALL|ALL:ALL)\)\s+(?:.*)?ALL$/;
export const GID_GROUP_REGEX = /\d+\(([a-z][a-z0-9_-]{1,31})\)/;
