import { players } from "@/fixtures/players";
import { expect, test } from "vitest";
import { groupedPlayers } from "./groupPlayer";

test("グループ化された選手配列が返ること", () => {
  const result = groupedPlayers(players);
  expect(result).toStrictEqual([
    {
      teamName: "Default",
      teamId: 0,
      leagueId: 39,
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
            backgroundColor: "#FFFFFF",
            borderColor: "#000000",
            code: "default",
            color: "#000000",
            id: 0,
            leagueId: 39,
            logo: "https://example.com/default.png",
            name: "Default",
            textShadowColor: null,
            createdAt: new Date("2021-08-08T00:00:00.000Z"),
          },
          value: 280,
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
            backgroundColor: "#FFFFFF",
            borderColor: "#000000",
            code: "default",
            color: "#000000",
            id: 0,
            leagueId: 39,
            logo: "https://example.com/default.png",
            name: "Default",
            textShadowColor: null,
            createdAt: new Date("2021-08-08T00:00:00.000Z"),
          },
          value: 290,
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
            backgroundColor: "#FFFFFF",
            borderColor: "#000000",
            code: "default",
            color: "#000000",
            id: 0,
            leagueId: 39,
            logo: "https://example.com/default.png",
            name: "Default",
            textShadowColor: null,
            createdAt: new Date("2021-08-08T00:00:00.000Z"),
          },
          value: 8500,
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
            backgroundColor: "#FFFFFF",
            borderColor: "#000000",
            code: "default",
            color: "#000000",
            id: 0,
            leagueId: 39,
            logo: "https://example.com/default.png",
            name: "Default",
            textShadowColor: null,
            createdAt: new Date("2021-08-08T00:00:00.000Z"),
          },
          value: 283,
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
            backgroundColor: "#FFFFFF",
            borderColor: "#000000",
            code: "default",
            color: "#000000",
            id: 0,
            leagueId: 39,
            logo: "https://example.com/default.png",
            name: "Default",
            textShadowColor: null,
            createdAt: new Date("2021-08-08T00:00:00.000Z"),
          },
          value: 1096,
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
            backgroundColor: "#FFFFFF",
            borderColor: "#000000",
            code: "default",
            color: "#000000",
            id: 0,
            leagueId: 39,
            logo: "https://example.com/default.png",
            name: "Default",
            textShadowColor: null,
            createdAt: new Date("2021-08-08T00:00:00.000Z"),
          },
          value: 6716,
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
            backgroundColor: "#FFFFFF",
            borderColor: "#000000",
            code: "default",
            color: "#000000",
            id: 0,
            leagueId: 39,
            logo: "https://example.com/default.png",
            name: "Default",
            textShadowColor: null,
            createdAt: new Date("2021-08-08T00:00:00.000Z"),
          },
          value: 306,
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
            backgroundColor: "#FFFFFF",
            borderColor: "#000000",
            code: "default",
            color: "#000000",
            id: 0,
            leagueId: 39,
            logo: "https://example.com/default.png",
            name: "Default",
            textShadowColor: null,
            createdAt: new Date("2021-08-08T00:00:00.000Z"),
          },
          value: 51617,
        },
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
            backgroundColor: "#FFFFFF",
            borderColor: "#000000",
            code: "default",
            color: "#000000",
            id: 0,
            leagueId: 39,
            logo: "https://example.com/default.png",
            name: "Default",
            textShadowColor: null,
            createdAt: new Date("2021-08-08T00:00:00.000Z"),
          },
          value: 0,
        },
      ],
    },
  ]);
});
