import { isNull, isUndefined, isEmptyObject } from "../../utils";

describe("Utility Functions", () => {
  describe("isNull", () => {
    it("should return true for null", () => {
      expect(isNull(null)).toBe(true);
    });

    it("should return false for undefined", () => {
      expect(isNull(undefined)).toBe(false);
    });

    it("should return false for non-null values", () => {
      expect(isNull(0)).toBe(false);
      expect(isNull("")).toBe(false);
      expect(isNull([])).toBe(false);
      expect(isNull({})).toBe(false);
    });
  });

  describe("isUndefined", () => {
    it("should return true for undefined", () => {
      expect(isUndefined(undefined)).toBe(true);
    });

    it("should return false for null", () => {
      expect(isUndefined(null)).toBe(false);
    });

    it("should return false for non-undefined values", () => {
      expect(isUndefined(0)).toBe(false);
      expect(isUndefined("")).toBe(false);
      expect(isUndefined([])).toBe(false);
      expect(isUndefined({})).toBe(false);
    });
  });

  describe("isEmptyObject", () => {
    it("should return true for undefined", () => {
      expect(isEmptyObject(undefined)).toBe(true);
    });

    it("should return true for null", () => {
      expect(isEmptyObject(null)).toBe(true);
    });

    it("should return true for an empty object", () => {
      expect(isEmptyObject({})).toBe(true);
    });

    it("should return false for a non-empty object", () => {
      expect(isEmptyObject({ key: "value" })).toBe(false);
    });
  });
});
