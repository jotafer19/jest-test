import caesarCipher from "../code/caesarCipher"

test('Encrypt string', () => {
    expect(caesarCipher('test', 7)).toBe('ALZA')
})

test('Encrypt string', () => {
    expect(caesarCipher('my test!', 12)).toBe('YK FQEF!')
})