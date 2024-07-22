import { players } from "@/fixtures/players";
import { teams } from "@/fixtures/teams";
import { expect, test } from "vitest";
import { groupedPlayers } from "./groupPlayer";

test("グループ化された選手配列が返ること", () => {
  const result = groupedPlayers(players, teams);
  expect(result).toStrictEqual([
    {
      category: "Arsenal",
      options: [],
    },
    {
      category: "Aston Villa",
      options: [],
    },
    {
      category: "Bournemouth",
      options: [],
    },
    {
      category: "Brentford",
      options: [],
    },
    {
      category: "Brighton",
      options: [],
    },
    {
      category: "Burnley",
      options: [],
    },
    {
      category: "Chelsea",
      options: [],
    },
    {
      category: "Crystal Palace",
      options: [],
    },
    {
      category: "Everton",
      options: [],
    },
    {
      category: "Fullham",
      options: [],
    },
    {
      category: "Ipswich",
      options: [],
    },
    {
      category: "Leicester City",
      options: [],
    },
    {
      category: "Liverpool",
      options: [
        {
          id: 280,
          label: "Alisson Becker",
          name: "Alisson Becker",
          age: 0,
          number: 1,
          photo: "https://media.api-sports.io/football/players/280.png",
          position: "Goalkeeper",
          teamId: 40,
          team: {
            backgroundColor: "#C8102E",
            borderColor: "#00B2A9",
            code: "LIV",
            color: "#F6EB61",
            id: 40,
            logo: "https://media.api-sports.io/football/teams/40.png",
            name: "Liverpool",
            textShadowColor: null,
            createdAt: new Date("2021-08-08T00:00:00.000Z"),
          },
          value: "Alisson Becker",
        },
        {
          id: 290,
          label: "V. van Dijk",
          name: "V. van Dijk",
          age: 0,
          number: 4,
          photo: "https://media.api-sports.io/football/players/290.png",
          position: "Defender",
          teamId: 40,
          team: {
            backgroundColor: "#C8102E",
            borderColor: "#00B2A9",
            code: "LIV",
            color: "#F6EB61",
            id: 40,
            logo: "https://media.api-sports.io/football/teams/40.png",
            name: "Liverpool",
            textShadowColor: null,
            createdAt: new Date("2021-08-08T00:00:00.000Z"),
          },
          value: "V. van Dijk",
        },
        {
          id: 8500,
          label: "W. Endo",
          name: "W. Endo",
          age: 0,
          number: 3,
          photo: "https://media.api-sports.io/football/players/8500.png",
          position: "Midfielder",
          teamId: 40,
          team: {
            backgroundColor: "#C8102E",
            borderColor: "#00B2A9",
            code: "LIV",
            color: "#F6EB61",
            id: 40,
            logo: "https://media.api-sports.io/football/teams/40.png",
            name: "Liverpool",
            textShadowColor: null,
            createdAt: new Date("2021-08-08T00:00:00.000Z"),
          },
          value: "W. Endo",
        },
        {
          id: 283,
          label: "T.Alexander-Arnold",
          name: "T.Alexander-Arnold",
          age: 0,
          number: 66,
          photo: "https://media.api-sports.io/football/players/283.png",
          position: "Midfielder",
          teamId: 40,
          team: {
            backgroundColor: "#C8102E",
            borderColor: "#00B2A9",
            code: "LIV",
            color: "#F6EB61",
            id: 40,
            logo: "https://media.api-sports.io/football/teams/40.png",
            name: "Liverpool",
            textShadowColor: null,
            createdAt: new Date("2021-08-08T00:00:00.000Z"),
          },
          value: "T.Alexander-Arnold",
        },
        {
          id: 1096,
          label: "D. Szoboszlai",
          name: "D. Szoboszlai",
          age: 0,
          number: 8,
          photo: "https://media.api-sports.io/football/players/1096.png",
          position: "Midfielder",
          teamId: 40,
          team: {
            backgroundColor: "#C8102E",
            borderColor: "#00B2A9",
            code: "LIV",
            color: "#F6EB61",
            id: 40,
            logo: "https://media.api-sports.io/football/teams/40.png",
            name: "Liverpool",
            textShadowColor: null,
            createdAt: new Date("2021-08-08T00:00:00.000Z"),
          },
          value: "D. Szoboszlai",
        },
        {
          id: 6716,
          label: "A. Mac Allister",
          name: "A. Mac Allister",
          age: 0,
          number: 10,
          photo: "https://media.api-sports.io/football/players/6716.png",
          position: "Midfielder",
          teamId: 40,
          team: {
            backgroundColor: "#C8102E",
            borderColor: "#00B2A9",
            code: "LIV",
            color: "#F6EB61",
            id: 40,
            logo: "https://media.api-sports.io/football/teams/40.png",
            name: "Liverpool",
            textShadowColor: null,
            createdAt: new Date("2021-08-08T00:00:00.000Z"),
          },
          value: "A. Mac Allister",
        },
        {
          id: 306,
          label: "Mohamed Salah",
          name: "Mohamed Salah",
          age: 0,
          number: 11,
          photo: "https://media.api-sports.io/football/players/306.png",
          position: "Attacker",
          teamId: 40,
          team: {
            backgroundColor: "#C8102E",
            borderColor: "#00B2A9",
            code: "LIV",
            color: "#F6EB61",
            id: 40,
            logo: "https://media.api-sports.io/football/teams/40.png",
            name: "Liverpool",
            textShadowColor: null,
            createdAt: new Date("2021-08-08T00:00:00.000Z"),
          },
          value: "Mohamed Salah",
        },
        {
          id: 51617,
          label: "D. Núñez",
          name: "D. Núñez",
          age: 0,
          number: 9,
          photo: "https://media.api-sports.io/football/players/51617.png",
          position: "Attacker",
          teamId: 40,
          team: {
            backgroundColor: "#C8102E",
            borderColor: "#00B2A9",
            code: "LIV",
            color: "#F6EB61",
            id: 40,
            logo: "https://media.api-sports.io/football/teams/40.png",
            name: "Liverpool",
            textShadowColor: null,
            createdAt: new Date("2021-08-08T00:00:00.000Z"),
          },
          value: "D. Núñez",
        },
      ],
    },
    {
      category: "Luton",
      options: [],
    },
    {
      category: "Manchester City",
      options: [
        {
          id: 0,
          label: "K.De Bruyne",
          name: "K.De Bruyne",
          age: 0,
          number: 17,
          photo: "https://media.api-sports.io/football/players/0.png",
          position: "Midfielder",
          teamId: 50,
          team: {
            backgroundColor: "#6CABDD",
            borderColor: "#FFFFFF",
            code: "MAC",
            color: "#1C2C5B",
            id: 50,
            logo: "https://media.api-sports.io/football/teams/50.png",
            name: "Manchester City",
            textShadowColor: "#FFFFFF",
            createdAt: new Date("2021-08-08T00:00:00.000Z"),
          },
          value: "K.De Bruyne",
        },
      ],
    },
    {
      category: "Manchester United",
      options: [],
    },
    {
      category: "Newcastle",
      options: [],
    },
    {
      category: "Norwich City",
      options: [],
    },
    {
      category: "Nottingham Forest",
      options: [],
    },
    {
      category: "Sheffield United",
      options: [],
    },
    {
      category: "Southampton",
      options: [],
    },
    {
      category: "Tottenham",
      options: [],
    },
    {
      category: "Watford",
      options: [],
    },
    {
      category: "West Ham",
      options: [],
    },
    {
      category: "Wolves",
      options: [],
    },
  ]);
});
