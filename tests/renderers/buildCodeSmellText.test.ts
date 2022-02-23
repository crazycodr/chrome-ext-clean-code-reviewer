import {CodeSmellStructure} from "../../src/models/codeSmellStructure";
import {buildCodeSmellText} from "../../src/renderers/buildCodeSmellText";

describe('buildCodeSmellText', () => {
    it('each line should be a citation', () => {
        const codeSmell: CodeSmellStructure = new CodeSmellStructure(
            'test',
            'category',
            'some smell',
            'text of the code smell',
            'some reference',
            1
        )
        const comment: string = buildCodeSmellText(codeSmell)
        const lines: string[] = comment.split("\n")
        lines.forEach(line => expect(line.trim()).toMatch(/^>/))
    })
    it('should print code and name in first line', () => {
        const codeSmell: CodeSmellStructure = new CodeSmellStructure(
            'test',
            'category',
            'some smell',
            'text of the code smell',
            'some reference',
            1
        )
        const comment: string = buildCodeSmellText(codeSmell);
        const firstLine: string = comment.split("\n")[0];
        expect(firstLine).toContain(codeSmell.code)
        expect(firstLine).toContain(codeSmell.name)
    })
    it('should print category in parentheses in first line', () => {
        const codeSmell: CodeSmellStructure = new CodeSmellStructure(
            'test',
            'category',
            'some smell',
            'text of the code smell',
            'some reference',
            1
        )
        const comment: string = buildCodeSmellText(codeSmell)
        const firstLine: string = comment.split("\n")[0]
        expect(firstLine).toContain("(" + codeSmell.category + ")")
    })
    it('second line should be an empty citation', () => {
        const codeSmell: CodeSmellStructure = new CodeSmellStructure(
            'test',
            'category',
            'some smell',
            'text of the code smell',
            'some reference',
            1
        )
        const comment: string = buildCodeSmellText(codeSmell)
        const secondLine: string = comment.split("\n")[1].trim()
        expect(secondLine).toBe(">")
    })
    it('third line should be the text of the code smell', () => {
        const codeSmell: CodeSmellStructure = new CodeSmellStructure(
            'test',
            'category',
            'some smell',
            'text of the code smell',
            'some reference',
            1
        )
        const comment: string = buildCodeSmellText(codeSmell)
        const thirdLine: string = comment.split("\n")[2].trim()
        expect(thirdLine).toContain(codeSmell.text)
    })
    it('fourth line should be an empty citation', () => {
        const codeSmell: CodeSmellStructure = new CodeSmellStructure(
            'test',
            'category',
            'some smell',
            'text of the code smell',
            'some reference',
            1
        )
        const comment: string = buildCodeSmellText(codeSmell)
        const fourthLine: string = comment.split("\n")[3].trim()
        expect(fourthLine).toBe(">")
    })
    it('fifth line should be the reference and page of the code smell in italic', () => {
        const codeSmell: CodeSmellStructure = new CodeSmellStructure(
            'test',
            'category',
            'some smell',
            'text of the code smell',
            'some reference',
            1
        )
        const comment: string = buildCodeSmellText(codeSmell)
        const fifthLine: string = comment.split("\n")[4].trim()
        expect(fifthLine).toContain('See page ')
        expect(fifthLine).toContain(codeSmell.page.toString())
        expect(fifthLine).toContain(' of ')
        expect(fifthLine).toContain(codeSmell.reference)
        expect(fifthLine).toContain(' for more info')
        expect(fifthLine).toMatch(/\*\(.*\)\*/)
    })
    it('generated content should be trimmed', () => {
        const codeSmell: CodeSmellStructure = new CodeSmellStructure(
            'test',
            'category',
            'some smell',
            'text of the code smell',
            'some reference',
            1
        )
        const comment: string = buildCodeSmellText(codeSmell)
        const trimmedComment: string = comment.trim()
        expect(comment).toBe(trimmedComment)
    })
    it('generated content should be trimmed even when fourth and fifth lines are missing due to missing reference or page', () => {
        const codeSmell: CodeSmellStructure = new CodeSmellStructure(
            'test',
            'category',
            'some smell',
            'text of the code smell',
            'some reference',
            0
        )
        const comment: string = buildCodeSmellText(codeSmell)
        const trimmedComment: string = comment.trim()
        expect(comment).toBe(trimmedComment)
    })
    it('fourth and fifth line should not be present if reference is not provided', () => {
        const codeSmell: CodeSmellStructure = new CodeSmellStructure(
            'test',
            'category',
            'some smell',
            'text of the code smell',
            '',
            1
        )
        const comment: string = buildCodeSmellText(codeSmell)
        const lines: string[] = comment.split("\n")
        expect(lines.length).toBe(3)
    })
    it('fourth and fifth line should not be present if page is not provided (0)', () => {
        const codeSmell: CodeSmellStructure = new CodeSmellStructure(
            'test',
            'category',
            'some smell',
            'text of the code smell',
            'some reference',
            0
        )
        const comment: string = buildCodeSmellText(codeSmell)
        const lines: string[] = comment.split("\n")
        expect(lines.length).toBe(3)
    })
})
