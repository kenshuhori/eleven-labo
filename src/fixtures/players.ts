export const defaultPlayer = ({
  backgroundColor,
  borderColor,
  color,
  name,
  number,
  textShadowColor,
}: {
  backgroundColor?: string;
  borderColor?: string;
  className?: string;
  color?: string;
  name?: string;
  number?: number;
  textShadowColor?: string;
}): Player => ({
  name: name ?? "???",
  number: number ?? 99,
  team: {
    code: "default",
    name: "Default",
    backgroundColor: backgroundColor ?? "#FFFFFF",
    borderColor: borderColor ?? "#000000",
    color: color ?? "#000000",
    textShadowColor: textShadowColor ?? null,
  },
});

export const players: Player[] = [
  {
    name: "T.Alexander-Arnold",
    number: 66,
    team: {
      code: "liverpool",
      name: "Liverpool",
      backgroundColor: "#C8102E",
      borderColor: "#00B2A9",
      color: "#F6EB61",
      textShadowColor: null,
    },
  },
  {
    name: "M.Salah",
    number: 11,
    team: {
      code: "liverpool",
      name: "Liverpool",
      backgroundColor: "#C8102E",
      borderColor: "#00B2A9",
      color: "#F6EB61",
      textShadowColor: null,
    },
  },
  {
    name: "V.van Dijk",
    number: 4,
    team: {
      code: "liverpool",
      name: "Liverpool",
      backgroundColor: "#C8102E",
      borderColor: "#00B2A9",
      color: "#F6EB61",
      textShadowColor: null,
    },
  },
  {
    name: "A.Becker",
    number: 1,
    team: {
      code: "liverpool",
      name: "Liverpool",
      backgroundColor: "#C8102E",
      borderColor: "#00B2A9",
      color: "#F6EB61",
      textShadowColor: null,
    },
  },
  {
    name: "K.De Bruyne",
    number: 17,
    team: {
      code: "manchester_city",
      name: "Manchester City",
      backgroundColor: "#6CABDD",
      borderColor: "#FFFFFF",
      color: "#1C2C5B",
      textShadowColor: "#FFFFFF",
    },
  },
  {
    name: "M.Odegaard",
    number: 8,
    team: {
      code: "arsenal",
      name: "Arsenal",
      backgroundColor: "#EF0107",
      borderColor: "#063672",
      color: "#FFFFFF",
      textShadowColor: "#9C824A",
    },
  },
  {
    name: "H.Son",
    number: 7,
    team: {
      code: "tottenham",
      name: "Tottenham",
      color: "#132257",
      backgroundColor: "#FFFFFF",
      borderColor: "#132257",
      textShadowColor: null,
    },
  },
  {
    name: "T.Silva",
    number: 6,
    team: {
      code: "chelsea",
      name: "Chelsea",
      color: "#FFFFFF",
      backgroundColor: "#034694",
      borderColor: "#DBA111",
      textShadowColor: null,
    },
  },
  {
    name: "B.Fernandes",
    number: 18,
    team: {
      code: "manchester_united",
      name: "Manchester United",
      color: "#000000",
      backgroundColor: "#DA291C",
      borderColor: "#000000",
      textShadowColor: "#FBE122",
    },
  },
  {
    name: "K.Mitoma",
    number: 22,
    team: {
      code: "brighton",
      name: "Brighton",
      color: "#FFCD00",
      backgroundColor: "#0057B8",
      borderColor: "#FFFFFF",
      textShadowColor: null,
    },
  },
  {
    name: "M.Antonio",
    number: 9,
    team: {
      code: "west_ham_united",
      name: "West Ham United",
      color: "#F3D459",
      backgroundColor: "#7A263A",
      borderColor: "#1BB1E7",
      textShadowColor: null,
    },
  },
  {
    name: "J.Sarr",
    number: 1,
    team: {
      code: "wolverhampton",
      name: "Wolverhampton",
      color: "#231F20",
      backgroundColor: "#FDB913",
      borderColor: "#231F20",
      textShadowColor: "#FFFFFF",
    },
  },
  {
    name: "B.Guimaraes",
    number: 39,
    team: {
      code: "newcastle",
      name: "Newcastle",
      color: "#F1BE48",
      backgroundColor: "#241F20",
      borderColor: "#41B6E6",
      textShadowColor: "#FFFFFF",
    },
  },
  {
    name: "L.Digne",
    number: 12,
    team: {
      code: "aston_villa",
      name: "Aston Villa",
      color: "#670E36",
      backgroundColor: "#95BFE5",
      borderColor: "#FEE505",
      textShadowColor: null,
    },
  },
];
