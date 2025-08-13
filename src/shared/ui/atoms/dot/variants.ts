export const DotVariant = {
  available: "bg-green-200",
  busy: "bg-orange-200",
  full: "bg-red-200",
};

export type DotStatus = keyof typeof DotVariant;
