import {CodeSmellStructure} from "../../models/codeSmellStructure";

const t1 = new CodeSmellStructure(
    'T1',
    'Tests',
    'Insufficient Tests',
    "How many tests are required? No metric can tell you that, not even code coverage. 'Looks like enough' isn't enough. You should write a list of all potential cases that could go bad and then implement then, don't just cover your traces, go further.",
    'Tests',
    313
);

const t2 = new CodeSmellStructure(
    'T2',
    'Tests',
    'Use a Coverage Tool',
    'Coverage tools are very useful even if they are not all of the equation. Use them but specify the coverage depth, a coverage tool should only cover the lines of the class you test, not other classes so make sure you declare what you are covering.',
    'Tests',
    313
);

const t3 = new CodeSmellStructure(
    'T3',
    'Tests',
    "Don't Skip Trivial Tests",
    'They are easier to write and offer more value than you might think. If you like writing long and hard to read tests, you miss a big point in testing which is documentation. Tests should offer documentation as well as safeties.',
    'Tests',
    313
);

const t4 = new CodeSmellStructure(
    'T4',
    'Tests',
    'An Ignored Test Is a Question of Ambiguity',
    "Sometimes we are unsure of the behavior to be achieved and thus we skip or disable a test. This is a sign that the documentation, the code, the complexity is not properly adjusted and there needs to be a review of that code base. Tests and code should be understandable, if something breaks and we don't know why, it is a sign of overcomplexity.",
    'Tests',
    313
);

const t5 = new CodeSmellStructure(
    'T5',
    'Tests',
    'Test Boundary Conditions',
    'Take special care in testing boundary conditions or looped value sets, they can produce strange results sometimes, mostly if you have to calculate things from them.',
    'Tests',
    314
);

const t6 = new CodeSmellStructure(
    'T6',
    'Tests',
    'Exhaustively Test Near Bugs',
    'When you write regression tests because of bugs, that the time to write more tests than what is just necessary, sometimes, there are other bugs nearby.',
    'Tests',
    314
);

const t7 = new CodeSmellStructure(
    'T7',
    'Tests',
    'Patterns of Failure Are Revealing',
    'If you spot a pattern in failing tests, it means there is a pattern in code that generates the bug. A fixed test for one bug that offers a clear pattern means you should apply the same test somewhere else maybe?',
    'Tests',
    314
);

const t8 = new CodeSmellStructure(
    'T8',
    'Tests',
    'Test Coverage Patterns Can Be Revealing',
    'Looking at code that is or is not executed by the passing tests give clue to why the failing tests fail.',
    'Tests',
    314
);

const t9 = new CodeSmellStructure(
    'T9',
    'Tests',
    'Tests Should Be Fast',
    "A slow test is a test that won't get run. When things get right, it's the slow tests that will be dropped from the suite. Do what is needed to make tests fast.",
    'Tests',
    314
);

export {t1, t2, t3, t4, t5, t6, t7, t8, t9};