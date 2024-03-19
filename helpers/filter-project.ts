export const filterProject = (cat: string, arr: any[]) => {
  if (cat === "all") return arr;
  const data = arr.filter((item) => item.category === cat && item);
  return data;
};
