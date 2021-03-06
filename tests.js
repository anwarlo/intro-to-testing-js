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
describe('isEven',function () {
    it('should be a defined function', function () {
        expect(typeof isEven).toBe('function')
    });
    it('should return a boolean no matter the input', function () {
        expect(typeof isEven()).toBe("boolean")
    });
    it('should return true when passed the number 2 as input', function () {
        expect(isEven(2)).toBe(true)
    });
    it('should return true when passed the negative number -4 as input', function () {
        expect(isEven(-4)).toBe(true)
    });
    it('should return false when passed odd number 3 as input', function () {
        expect(isEven(3)).toBe(false)
    });
    it('should return false when passed the string "banana"', function () {
        expect(isEven("banana")).toBe(false)
    });
    it('should return true when passed the number 8 as a string', function () {
        expect(isEven("8")).toBe(true)
    });
    it('should return false when called with infinity', function () {
        expect(isEven(Infinity)).toBe(false)
    });
    it('should return false when called with true', function () {
        expect(isEven("true")).toBe(false)
    });
    it('should return false when called with false', function () {
        expect(isEven("false")).toBe(false)
    });
    it('should return false when nothing is passed through', function () {
        expect(isEven()).toBe(false)
    });
});
describe('isVowel',function () {
    it('should be a defined function', function () {
        expect(typeof isVowel).toBe('function')
    });
    it('should always return a boolean', function () {
        expect(typeof isVowel()).toBe('boolean')
    });
    it('should return true when passed the string "a"', function () {
        expect(isVowel("a")).toBe(true)
    });
    it('should return true when passed the string "A"', function () {
        expect(isVowel("A")).toBe(true)
    });
    it('should return false when passed the string "y"', function () {
        expect(isVowel("y")).toBe(false)
    });
    it('should return false when passed the number 4', function () {
        expect(isVowel(4)).toBe(false)
    });
    it('should return false when passed the boolean true', function () {
        expect(isVowel(true)).toBe(false)
    });
    it('should return false when passed the boolean false', function () {
        expect(isVowel(false)).toBe(false)
    });
    it('should return false when passed the string "banana"', function () {
        expect(isVowel("banana")).toBe(false)
    });
    it('should return false when passed an empty string', function () {
        expect(isVowel("")).toBe(false)
    });
});
describe('add', function () {
    it('should be a defined function', function () {
        expect(typeof add).toBe('function')
    });
    it('should return 5 when passed with 2,3', function () {
        expect(add(2,3)).toBe(5)
    });
    it('should return -12 when passed with -3,-9', function () {
        expect(add(-3,-9)).toBe(-12)
    });
    it('should return 11 when passed with "5",6', function () {
        expect(add("5",6)).toBe(11)
    });
    it('should return 6 when passed with "-4","10"', function () {
        expect(add("-4","10")).toBe(6)
    });
    it('should return NaN when passed with "banana","split"', function () {
        expect(add("banana","split")).toBeNaN()
    });
    it('should return NaN when passed with 2,"apples"', function () {
        expect(add(2,"apples")).toBeNaN()
    });
    it('should return NaN when passed empty', function () {
        expect(add()).toBeNaN()
    });

});