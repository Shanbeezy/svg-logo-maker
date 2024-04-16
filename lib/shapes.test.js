const { Triangle, Square, Circle } = require("./shapes");

describe("Triangle", () => {
    test("should render svg for a grey polygon element", () => {
      const expectedSvg =
        '<polygon points="150, 18 244, 182 56, 182" fill="orange" />';
      const triangle = new Triangle();
      triangle.setColor("orange");
      const actualSvg = triangle.render();
      expect(actualSvg).toEqual(expectedSvg);
    });
    test("should accept a fillColor param", () => {
      const expectedSvg =
        '<polygon points="150, 18 244, 182 56, 182" fill="grey" />';
      const triangle = new Triangle();
      triangle.setColor("grey");
      const actualSvg = triangle.render();
      expect(actualSvg).toEqual(expectedSvg);
    });
  });

  describe("Square", () => {
    test("should render svg for a blue polygon element", () => {
      const expectedSvg =
        '<rect x="90" y="40" width="120" height="120" fill="green" />';
      const square = new Square();
      square.setColor("green");
      const actualSvg = square.render();
      expect(actualSvg).toEqual(expectedSvg);
    });
    test("should accept a fillColor param", () => {
      const expectedSvg =
        '<rect x="90" y="40" width="120" height="120" fill="blue" />';
      const square = new Square();
      square.setColor("blue");
      const actualSvg = square.render();
      expect(actualSvg).toEqual(expectedSvg);
    });
  });

  describe("Circle", () => {
    test("should render svg for a yellow circle element", () => {
      const expectedSvg = '<circle cx="150" cy="100" r="80" fill="green" />';
      const circle = new Circle();
      circle.setColor("green");
      const actualSvg = circle.render();
      expect(actualSvg).toEqual(expectedSvg);
    });
    test("should accept a fillColor param", () => {
      const expectedSvg = '<circle cx="150" cy="100" r="80" fill="yellow" />';
      const circle = new Circle();
      circle.setColor("yellow");
      const actualSvg = circle.render();
      expect(actualSvg).toEqual(expectedSvg);
    });
  });
  