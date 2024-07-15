import { players } from "@/fixtures/players";
import { teams } from "@/fixtures/teams";
import { expect, test } from "vitest";
import { groupedPlayers } from "./groupPlayer";

test("グループ化された選手配列が返ること", () => {
  const result = groupedPlayers(players, teams);
  expect(result).toStrictEqual([
    {
      category: "Arsenal",
      options: [
        {
          label: "M.Odegaard",
          name: "M.Odegaard",
          number: 8,
          team: {
            backgroundColor: "#EF0107",
            borderColor: "#063672",
            code: "arsenal",
            color: "#FFFFFF",
            name: "Arsenal",
            textShadowColor: "#9C824A",
          },
          value: "M.Odegaard",
        },
      ],
    },
    {
      category: "Aston Villa",
      options: [
        {
          label: "L.Digne",
          name: "L.Digne",
          number: 12,
          team: {
            backgroundColor: "#95BFE5",
            borderColor: "#FEE505",
            code: "aston_villa",
            color: "#670E36",
            name: "Aston Villa",
            textShadowColor: null,
          },
          value: "L.Digne",
        },
      ],
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
      options: [
        {
          label: "K.Mitoma",
          name: "K.Mitoma",
          number: 22,
          team: {
            backgroundColor: "#0057B8",
            borderColor: "#FFFFFF",
            code: "brighton",
            color: "#FFCD00",
            name: "Brighton",
            textShadowColor: null,
          },
          value: "K.Mitoma",
        },
      ],
    },
    {
      category: "Burnley",
      options: [],
    },
    {
      category: "Chelsea",
      options: [
        {
          label: "T.Silva",
          name: "T.Silva",
          number: 6,
          team: {
            backgroundColor: "#034694",
            borderColor: "#DBA111",
            code: "chelsea",
            color: "#FFFFFF",
            name: "Chelsea",
            textShadowColor: null,
          },
          value: "T.Silva",
        },
      ],
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
      category: "Ipswich Town",
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
          label: "T.Alexander-Arnold",
          name: "T.Alexander-Arnold",
          number: 66,
          team: {
            backgroundColor: "#C8102E",
            borderColor: "#00B2A9",
            code: "liverpool",
            color: "#F6EB61",
            name: "Liverpool",
            textShadowColor: null,
          },
          value: "T.Alexander-Arnold",
        },
        {
          label: "M.Salah",
          name: "M.Salah",
          number: 11,
          team: {
            backgroundColor: "#C8102E",
            borderColor: "#00B2A9",
            code: "liverpool",
            color: "#F6EB61",
            name: "Liverpool",
            textShadowColor: null,
          },
          value: "M.Salah",
        },
        {
          label: "V.van Dijk",
          name: "V.van Dijk",
          number: 4,
          team: {
            backgroundColor: "#C8102E",
            borderColor: "#00B2A9",
            code: "liverpool",
            color: "#F6EB61",
            name: "Liverpool",
            textShadowColor: null,
          },
          value: "V.van Dijk",
        },
        {
          label: "A.Becker",
          name: "A.Becker",
          number: 1,
          team: {
            backgroundColor: "#C8102E",
            borderColor: "#00B2A9",
            code: "liverpool",
            color: "#F6EB61",
            name: "Liverpool",
            textShadowColor: null,
          },
          value: "A.Becker",
        },
      ],
    },
    {
      category: "Manchester City",
      options: [
        {
          label: "K.De Bruyne",
          name: "K.De Bruyne",
          number: 17,
          team: {
            backgroundColor: "#6CABDD",
            borderColor: "#FFFFFF",
            code: "manchester_city",
            color: "#1C2C5B",
            name: "Manchester City",
            textShadowColor: "#FFFFFF",
          },
          value: "K.De Bruyne",
        },
      ],
    },
    {
      category: "Manchester United",
      options: [
        {
          label: "B.Fernandes",
          name: "B.Fernandes",
          number: 18,
          team: {
            backgroundColor: "#DA291C",
            borderColor: "#000000",
            code: "manchester_united",
            color: "#000000",
            name: "Manchester United",
            textShadowColor: "#FBE122",
          },
          value: "B.Fernandes",
        },
      ],
    },
    {
      category: "Newcastle",
      options: [
        {
          label: "B.Guimaraes",
          name: "B.Guimaraes",
          number: 39,
          team: {
            backgroundColor: "#241F20",
            borderColor: "#41B6E6",
            code: "newcastle",
            color: "#F1BE48",
            name: "Newcastle",
            textShadowColor: "#FFFFFF",
          },
          value: "B.Guimaraes",
        },
      ],
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
      options: [
        {
          label: "H.Son",
          name: "H.Son",
          number: 7,
          team: {
            backgroundColor: "#FFFFFF",
            borderColor: "#132257",
            code: "tottenham",
            color: "#132257",
            name: "Tottenham",
            textShadowColor: null,
          },
          value: "H.Son",
        },
      ],
    },
    {
      category: "West Ham United",
      options: [],
    },
    {
      category: "Watford",
      options: [],
    },
    {
      category: "Wolverhampton",
      options: [
        {
          label: "J.Sarr",
          name: "J.Sarr",
          number: 1,
          team: {
            backgroundColor: "#FDB913",
            borderColor: "#231F20",
            code: "wolverhampton",
            color: "#231F20",
            name: "Wolverhampton",
            textShadowColor: "#FFFFFF",
          },
          value: "J.Sarr",
        },
      ],
    },
  ]);
});
