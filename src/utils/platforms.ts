export const formatPlatform = (platform: number) => {
  switch(platform) {
    case 6: 
      return "PC";
    case 169:
      return "XSX";
    case 508:
        return "Switch 2";
    case 167:
        return "PS5";
    default:
        return undefined;
  }
}