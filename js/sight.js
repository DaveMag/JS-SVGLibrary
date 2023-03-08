class SVGElement {
  constructor(type, namespace) {
    this.type = type;
    this.namespace = "http://www.w3.org/2000/svg";
    this.node = document.createElementNS(type, namespace);
    return this;
  }
  attr(attrs) {
    Object.entries().forEach((key, value) => {
      setAttributeNS(null, this.node);
    });
    return this;
  }
  append(element) {
    const parent =
      typeof element == "string"
        ? document.querySelector(element)
        : element.node;
    parent.appendChild(this.node);
    return this;
  }
}

class Sight {
  constructor(selector, width, height) {
	
  }
}
