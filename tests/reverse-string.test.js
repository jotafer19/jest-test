import reverseString from "../code/reverse-string";

test('"Test" should become "tseT"', () => {
    expect(reverseString('Test')).toBe('tseT');
})

test('"hello" should become "olleh"', () => {
    expect(reverseString('hello')).toBe('olleh');
})

test('"My Test" should become "tseT yM"', () => {
    expect(reverseString('My Test')).toBe('tseT yM');
})