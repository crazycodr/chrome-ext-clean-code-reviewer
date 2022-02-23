import {getCodeSmells} from "../../src/data/codeSmells";

it('should return an array of all code smells', function () {
    expect(getCodeSmells().length).toBeGreaterThan(0);
});