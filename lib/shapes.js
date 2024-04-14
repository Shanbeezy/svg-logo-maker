// Shape class
class Shape {
    constructor() {
        this.color = "";
    }
    changeColor(color) {
        this.color = color;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points"150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    render() {
        return `<react x="90" y="40" width="120" fill="${this.color}" />`;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cy="100" r="80" fill"${this.color}" />`;
    }
}

module.exports = { Triangle, Square, Circle };