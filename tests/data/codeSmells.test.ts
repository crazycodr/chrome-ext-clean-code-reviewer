import {getCodeSmell, getCodeSmells} from "../../src/data/codeSmells";
import {CodeSmellNotFoundError} from "../../src/data/codeSmellNotFoundError";

describe('getCodeSmells', () => {
    it('should return an array of all code smells', function () {
        expect(getCodeSmells().length).toBeGreaterThan(0);
    });
})

describe('getCodeSmell', () => {
    it('should return the proper code smell', () => {
        expect(getCodeSmell('G1').code).toBe('G1')
    })
    it('should return the proper code smell regardless of case', () => {
        expect(getCodeSmell('g1').code).toBe('G1')
    })
    it('should throw CodeSmellNotFoundError when not found', () => {
        expect(() => getCodeSmell('does-not-exist')).toThrowError(CodeSmellNotFoundError)
    })
})
