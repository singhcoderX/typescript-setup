export const isNull = (value: any): boolean => {
  return value === null;
};

export const isUndefined = (value: any): boolean => {
  return value === undefined;
};

export const isEmptyObject = (value: any): boolean => {
  return (
    isUndefined(value) ||
    isNull(value) ||
    (typeof value === "object" && Object.keys(value).length === 0)
  );
};
