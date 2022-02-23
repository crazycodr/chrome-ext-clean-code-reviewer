import {CodeSmellStructure} from "../../models/codeSmellStructure";

const n1 = new CodeSmellStructure(
    'N1',
    'Expressions',
    'Choose Descriptive Names',
    "Don't be too quick to choose a name for a variable or function. Make sure the name is descriptive. Remember that the reader that will come back here later has no knowledge of the code and it has to understand it quickly. Names are more important than the way you end up doing the code in most cases.",
    'Names',
    309
);

const n2 = new CodeSmellStructure(
    'N2',
    'Expressions',
    'Choose Names at the Right Level of Abstraction',
    "Names in an abstract context, mostly names of classes or names of interfaces are not written the same way than concrete classes are. Choose names that reflect what you want to offer doing for these items while the concrete class has a name that says how it's implemented.",
    'Names',
    311
);

const n3 = new CodeSmellStructure(
    'N3',
    'Standards',
    'Use Standard Nomenclature Where Possible',
    'Names are easier to understand and make up if you have a good reference sheet or a proven standardized code base. Try to use names that already exist and convey the same meaning has other items, it increases cohesion and readability.',
    'Names',
    311
);

const n4 = new CodeSmellStructure(
    'N4',
    'Functions',
    'Unambiguous Function Names',
    'Ensure functions have proper names that fully explain their objective. A function that does more than expected will lead to logical errors and assumptions.',
    'Names',
    312
);

const n5 = new CodeSmellStructure(
    'N5',
    'Expressions',
    'Length of Names Should Reflect Scope',
    "If a variable is to be used in a tiny set of lines of code, you shouldn't need a very long name. Inversely, a variable that spans many lines of code should be much more descriptive by increasing the number of characters required to describe it.",
    'Names',
    312
);

const n6 = new CodeSmellStructure(
    'N6',
    'Expressions',
    'Avoid Encodings',
    'Variables or functions should not be prefixed, suffixed or have abbreviated components unless they are a convention or standard amongst the team. And then again, you should avoid abbreviations when possible unless you have a really good reason to do so.',
    'Names',
    312
);

const n7 = new CodeSmellStructure(
    'N7',
    'Expressions',
    'Names Should Describe Side-Effects',
    'Names, of functions mainly, should describe potential side-effects of running code based on them. If you have a flag argument (bad practice) that changes the function and induces a side-effect, then the flag argument name should be descriptive of what is the side-effect.',
    'Names',
    313
);

export {n1, n2, n3, n4, n5, n6, n7};