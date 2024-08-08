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
