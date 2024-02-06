import capitalize from '../code/capitalize'

test('"test" should become "Test"', () => {
    expect(capitalize('test')).toBe('Test');
})

test('"TEST" should become "Test"', () => {
    expect(capitalize('TEST')).toBe('Test');
})

test('"TeSt" should become "Test"', () => {
    expect(capitalize('TeSt')).toBe('Test');
})

test('"my test" should become "My test"', () => {
    expect(capitalize('my test')).toBe('My test');
})

test('"MY TEST" should become "My test"', () => {
    expect(capitalize('MY TEST')).toBe('My test');
})

test('"mY TeSt" should become "My test"', () => {
    expect(capitalize('mY TeSt')).toBe('My test');
})