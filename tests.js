// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});
describe('sayHello',function (){
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function')
    });
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return a string "Hello, Jane!"', function () {
        expect(sayHello()).toBe("Hello, Jane!");
    });
    it('should return a string "Hello, Alex!', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return a string "Hello, Pat!"', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!")
    });
    it('should return a string "Hello, World!"', function () {
        expect(sayHello(false)).toBe("Hello, World!")
    });
    it('should return a string "Hello, World!"', function () {
        expect(sayHello(true)).toBe("Hello, World!")
    });
});
describe('isFive',function () {
    it('should be a defined function', function () {
        expect(typeof isFive).toBe('function')
    });
    it('should return a boolean when called', function () {
        expect(typeof isFive()).toBe("boolean")
    });
    it('should return true when passed the number 5', function () {
        expect(isFive(5)).toBe(true);
    });
    it('should return false when passed the string "5"', function () {
        expect(isFive("5")).toBe(false);
    });
});