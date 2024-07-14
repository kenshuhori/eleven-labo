export const groupedFormations = (formations: Formation[]): GroupedFormationSelectOption[] => {
  formations.sort();
  const threeBacks = formations.filter((formation) => formation.code.startsWith("3"));
  const fourBacks = formations.filter((formation) => formation.code.startsWith("4"));
  const fiveBacks = formations.filter((formation) => formation.code.startsWith("5"));
  const others = formations.filter(
    (formation) =>
      !formation.code.startsWith("3") &&
      !formation.code.startsWith("4") &&
      !formation.code.startsWith("5"),
  );

  const groupedOptions: GroupedFormationSelectOption[] = [
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
