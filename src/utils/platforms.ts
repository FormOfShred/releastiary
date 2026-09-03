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
    case 130:
        return "Switch";
    case 39:
        return "iOS";
    default:
        return undefined;
  }
}

export const PLATFORMS = [
  { 
    name: "PC",
    id: 6
  },
  { 
    name: "PS5",
    id: 167
  },
  { 
    name: "XSX",
    id: 169
  },
  { 
    name: "Switch",
    id: 130
  },
  { 
    name: "Switch 2",
    id: 508
  },
  { 
    name: "iOS",
    id: 39
  }
]