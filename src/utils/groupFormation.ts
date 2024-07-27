import type { Formation, FormationSelectOption } from "@/types";

export const groupedFormations = (
  formations: Formation[],
): {
  category: string;
  options: FormationSelectOption[];
}[] => {
  const threeBacks = formations.filter((formation) => formation.code.startsWith("3")).sort();
  const fourBacks = formations.filter((formation) => formation.code.startsWith("4")).sort();
  const fiveBacks = formations.filter((formation) => formation.code.startsWith("5")).sort();
  const others = formations.filter(
    (formation) =>
      !formation.code.startsWith("3") &&
      !formation.code.startsWith("4") &&
      !formation.code.startsWith("5"),
  );

  const groupedOptions: {
    category: string;
    options: FormationSelectOption[];
  }[] = [
    {
      category: "3バック",
      options: threeBacks.map((formation) => ({
        value: formation.code,
        label: formation.name,
        ...formation,
      })),
    },
    {
      category: "4バック",
      options: fourBacks.map((formation) => ({
        value: formation.code,
        label: formation.name,
        ...formation,
      })),
    },
    {
      category: "5バック",
      options: fiveBacks.map((formation) => ({
        value: formation.code,
        label: formation.name,
        ...formation,
      })),
    },
    {
      category: "その他",
      options: others.map((formation) => ({
        value: formation.code,
        label: formation.name,
        ...formation,
      })),
    },
  ];

  return groupedOptions;
};
