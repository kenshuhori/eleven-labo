import { defaultTeam, teams } from "./teams";

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
  team: defaultTeam({
    backgroundColor,
    borderColor,
    color,
    textShadowColor,
  }),
});

export const players: Player[] = [
  {
    name: "T.Alexander-Arnold",
    number: 66,
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    team: teams.find((team) => team.code === "LIV")!,
  },
  {
    name: "M.Salah",
    number: 11,
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    team: teams.find((team) => team.code === "LIV")!,
  },
  {
    name: "V.van Dijk",
    number: 4,
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    team: teams.find((team) => team.code === "LIV")!,
  },
  {
    name: "A.Becker",
    number: 1,
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    team: teams.find((team) => team.code === "LIV")!,
  },
  {
    name: "K.De Bruyne",
    number: 17,
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    team: teams.find((team) => team.code === "MAC")!,
  },
  {
    name: "M.Odegaard",
    number: 8,
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    team: teams.find((team) => team.code === "ARS")!,
  },
  {
    name: "H.Son",
    number: 7,
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    team: teams.find((team) => team.code === "TOT")!,
  },
  {
    name: "T.Silva",
    number: 6,
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    team: teams.find((team) => team.code === "CHE")!,
  },
  {
    name: "B.Fernandes",
    number: 18,
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    team: teams.find((team) => team.code === "MUN")!,
  },
  {
    name: "K.Mitoma",
    number: 22,
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    team: teams.find((team) => team.code === "BRI")!,
  },
  {
    name: "M.Antonio",
    number: 9,
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    team: teams.find((team) => team.code === "WES")!,
  },
  {
    name: "J.Sarr",
    number: 1,
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    team: teams.find((team) => team.code === "WOL")!,
  },
  {
    name: "B.Guimaraes",
    number: 39,
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    team: teams.find((team) => team.code === "NEW")!,
  },
  {
    name: "L.Digne",
    number: 12,
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    team: teams.find((team) => team.code === "AST")!,
  },
];
