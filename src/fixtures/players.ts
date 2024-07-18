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
  id: 0,
  name: name ?? "???",
  number: number ?? 99,
  photo: "https://example.com/default.png",
  position: "Attacker",
  team: defaultTeam({
    backgroundColor,
    borderColor,
    color,
    textShadowColor,
  }),
});

export const players: Player[] = [
  {
    id: 280,
    name: "Alisson Becker",
    number: 1,
    photo: "https://media.api-sports.io/football/players/280.png",
    position: "Goalkeeper",
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    team: teams.find((team) => team.code === "LIV")!,
  },
  {
    id: 290,
    name: "V. van Dijk",
    number: 4,
    photo: "https://media.api-sports.io/football/players/290.png",
    position: "Defender",
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    team: teams.find((team) => team.code === "LIV")!,
  },
  {
    id: 8500,
    name: "W. Endo",
    number: 3,
    photo: "https://media.api-sports.io/football/players/8500.png",
    position: "Midfielder",
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    team: teams.find((team) => team.code === "LIV")!,
  },
  {
    id: 283,
    name: "T.Alexander-Arnold",
    number: 66,
    photo: "https://media.api-sports.io/football/players/283.png",
    position: "Midfielder",
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    team: teams.find((team) => team.code === "LIV")!,
  },
  {
    id: 1096,
    name: "D. Szoboszlai",
    number: 8,
    photo: "https://media.api-sports.io/football/players/1096.png",
    position: "Midfielder",
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    team: teams.find((team) => team.code === "LIV")!,
  },
  {
    id: 6716,
    name: "A. Mac Allister",
    number: 10,
    photo: "https://media.api-sports.io/football/players/6716.png",
    position: "Midfielder",
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    team: teams.find((team) => team.code === "LIV")!,
  },
  {
    id: 306,
    name: "Mohamed Salah",
    number: 11,
    photo: "https://media.api-sports.io/football/players/306.png",
    position: "Attacker",
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    team: teams.find((team) => team.code === "LIV")!,
  },
  {
    id: 51617,
    name: "D. Núñez",
    number: 9,
    photo: "https://media.api-sports.io/football/players/51617.png",
    position: "Attacker",
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    team: teams.find((team) => team.code === "LIV")!,
  },
  {
    id: 0,
    name: "K.De Bruyne",
    number: 17,
    photo: "https://media.api-sports.io/football/players/0.png",
    position: "Midfielder",
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    team: teams.find((team) => team.code === "MAC")!,
  },
];
