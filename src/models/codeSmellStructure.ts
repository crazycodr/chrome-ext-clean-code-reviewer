export class CodeSmellStructure {
    public readonly code: string;
    public readonly category: string;
    public readonly name: string;
    public readonly text: string;
    public readonly reference: string;
    public readonly page: number;

    constructor(code: string, category: string, name: string, text: string, reference: string, page: number) {
        this.code = code;
        this.category = category;
        this.name = name;
        this.text = text;
        this.reference = reference;
        this.page = page;
    }
}