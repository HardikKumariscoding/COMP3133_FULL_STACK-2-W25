import { expect } from "chai";

import * as calculator from "../app/calculator.js";

console.log("RUNNING TESTS NOW....");

describe("Calculator Tests", () => {
  describe("Addition", () => {
    it("should return 7 for add(5, 2)", () => {
      expect(calculator.add(5, 2)).to.equal(7); 
    });

    it("should fail for add(5, 2) to equal 8", () => {
      expect(calculator.add(5, 2)).to.equal(8); 
    });
  });

  
  describe("Subtraction", () => {
    it("should return 3 for sub(5, 2)", () => {
      expect(calculator.sub(5, 2)).to.equal(3); 
    });

    it("should fail for sub(5, 2) to equal 4", () => {
      expect(calculator.sub(5, 2)).to.equal(4); 
    });
  });

  describe("Multiplication", () => {
    it("should return 10 for mul(5, 2)", () => {
      expect(calculator.mul(5, 2)).to.equal(10); 
    });

    it("should fail for mul(5, 2) to equal 12", () => {
      expect(calculator.mul(5, 2)).to.equal(12); 
    });
  });

  
  describe("Division", () => {
    it("should return 5 for div(10, 2)", () => {
      expect(calculator.div(10, 2)).to.equal(5); 
    });

    it("should fail for div(10, 2) to equal 6", () => {
      expect(calculator.div(10, 2)).to.equal(6); 
    });

    it("should return 'Infinity' for div(10, 0)", () => {
      expect(calculator.div(10, 0)).to.equal(Infinity); 
    });
  });
});
