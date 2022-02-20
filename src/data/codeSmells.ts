import { CodeSmellStructure } from '../models/codeSmellStructure'

export const codeSmells = [
  new CodeSmellStructure(
    'C1',
    'Comments',
    'Inappropriate information',
    'It is inappropriate for a comment to hold information better held in a different kind of system such as your source code. Comments should be reserved for technical notes about the code and design.',
    'Comments',
    286
  ),
  new CodeSmellStructure(
    'C2',
    'Comments',
    'Obsolete Comment',
    'Comments get old quickly. It is best not to write a comment that will become obsolete quickly because developers do not look a lot at comments and code changes easily and often. Get rid of comment and refactor if needed to prevent comments that can become obsolete.',
    'Comments',
    286
  ),
  new CodeSmellStructure(
    'C3',
    'Comments',
    'Redundant Comment',
    'Comments that describe an obvious behavior for code are useless. For example, a comment that explains what a line of code does when the code is clear and easy to understand makes the comment useless and noisy.',
    'Comments',
    286
  ),
  new CodeSmellStructure(
    'C4',
    'Comments',
    'Poorly Written Comment',
    'A comment worth writting is worth writing well. If you are going to write a comment, take the time to make sure it is the best comment you can write.',
    'Comments',
    287
  ),
  new CodeSmellStructure(
    'C5',
    'Comments',
    'Commented-Out Code',
    'That code will sit there are rot and there are good chances no one will ever remove until we stumble upon it and waste time trying to figure out if it is there for a good reason. If it should stay, wrap it with a feature flag, if not, delete the code.',
    'Comments',
    287
  ),
  new CodeSmellStructure(
    'E1',
    'Environment',
    'Build Requires More Than One Step',
    'Building a project or a piece of code should not require multiple manual steps, everything should be automated or could be made automated. You should not need to lookup inside the code to build something or adjust configuration scripts based on changes in the code.',
    'Environment',
    287
  ),
  new CodeSmellStructure(
    'E2',
    'Environment',
    'Tests Require More Than One Step',
    'Testing should require only a single script to run, no configuration or reset of state and they should not affect the state of other processes.',
    'Environment',
    287
  ),
  new CodeSmellStructure(
    'F1',
    'Functions',
    'Too Many Arguments',
    'Functions should have a small number of arguments. No argument is best, followed by one, two and three. More than three is very questionable and should be avoided. Consider using a parameter object and factory.',
    'Functions',
    288
  ),
  new CodeSmellStructure(
    'F2',
    'Functions',
    'Output Arguments',
    'Output arguments are counter intuitive. Readers expect arguments to be inputs, not outputs. If your function must return multiple different items, consider returning a return object that wraps all returned items instead.',
    'Functions',
    288
  ),
  new CodeSmellStructure(
    'F3',
    'Functions',
    'Flag Arguments',
    'Flag arguments loudly declare that the function does more than one thing. They are confusing and should be eliminated or avoided at all costs.',
    'Functions',
    288
  ),
  new CodeSmellStructure(
    'F4',
    'Functions',
    'Dead Function',
    "Methods that are never called should be discarded. Keeping dead code around is wasteful. Don't be afraid to delete the function. Remember that source control still has a copy of that function anyway.",
    'Functions',
    288
  ),
  new CodeSmellStructure(
    'G1',
    'Architecture',
    'Multiple Languages In One Source File',
    'Although it is possible to have multiple languages in one source file (.vue files for example) it should be avoided. Try to extract the data here to another file and include the other file into this source code file. (Avoid HereDoc or NowDoc approaches)',
    'General',
    288
  ),
  new CodeSmellStructure(
    'G2',
    'Expressions',
    'Obvious Behavior Is Not Implemented',
    'Following the principle of least surprises is a savior in many cases. A function or class that declares it does something should properly do it and do it well in a clean, clear, optimal and tested way. Obvious behaviors not implemented lead to surprises and logic errors that could be avoided.',
    'General',
    288
  ),
  new CodeSmellStructure(
    'G3',
    'Expressions',
    'Incorrect Behavior at the Boundaries',
    "Although code may seem obvious, sometimes, we declare something our code should do and don't go to the full extent which generates expectations at the boundaries that are not tested and sometimes poorly implemented. Ensure your code is tested up to each boundary and ensure it works properly as expected.",
    'General',
    289
  ),
  new CodeSmellStructure(
    'G4',
    'Standards',
    'Overridden Safeties',
    'It is risky to override safeties. Should it be to override authentication, authorization or business rules that are put in place to prevent something from happening, overriding safeties is never a good thing.',
    'General',
    289
  ),
  new CodeSmellStructure(
    'G5',
    'Expressions',
    'Duplication',
    'This block of code seems to be duplicated. There are almost no occasion where we should allow ourselves to duplicate code. Extract this code to a reusable component such as a local function or an external class that is injected into this component.',
    'General',
    289
  ),
  new CodeSmellStructure(
    'G6',
    'Architecture',
    'Code at Wrong Level of Abstraction',
    'It is important to properly abstract and isolate types of code. Creating code of a certain type at a certain level while for another process the same code is at another level of abstraction will create a lot of confusion at the architectural level. Example: Controllers, Services, Actions, Repositories, etc.',
    'General',
    290
  ),
  new CodeSmellStructure(
    'G7',
    'Architecture',
    'Base Class Depending on Their Derivatives',
    "Code from higher levels of abstraction should not depend on the lower levels of abstraction. It should be aware of features directly underneath it to use it but must not know about it's details and depend on the way it works.",
    'General',
    291
  ),
  new CodeSmellStructure(
    'G8',
    'Architecture',
    'Too Much Information',
    'Well-defined modules have very small interfaces that allow you to do a lot with a little. Having too many functions or features inside one module leads to widening of interfaces which leads to multiple steps to accomplish one thing.',
    'General',
    291
  ),
  new CodeSmellStructure(
    'G9',
    'Architecture',
    'Dead Code',
    "Dead code is code that isn't executed. It can be simple if statements that lead nowhere to functions never used or even classes that are never used. Code that is unreachable and dead should be investigated for potential bugs or just be removed.",
    'General',
    292
  ),
  new CodeSmellStructure(
    'G10',
    'Expressions',
    'Vertical Separation',
    'Variables and functions should be defined close to where they are used. Local variables should be declared just above their first usage and should have a small vertical scope between their use and declaration.',
    'General',
    292
  ),
  new CodeSmellStructure(
    'G11',
    'Standards',
    'Inconsistency',
    'If you do something a certain way, always do it the same way or it may induce unexpected behaviors at edges. This goes back to the principle of least surprises, if you do something always the same way, diverging may not be obvious at first and produce unexpected results.',
    'General',
    292
  ),
  new CodeSmellStructure(
    'G12',
    'Expressions',
    'Clutter',
    'Unused variables, empty constructors or constructors that call the parent constructor without change in behavior are just clutter when trying to figure out what code does. Keep your source file clean.',
    'General',
    293
  ),
  new CodeSmellStructure(
    'G13',
    'Architecture',
    'Artificial Coupling',
    'Enums and static functions, unless explicitly required to, should not be part of another unrelated class. This forces the code to know about a class that is not required for the context.',
    'General',
    293
  ),
  new CodeSmellStructure(
    'G14',
    'Functions',
    'Feature Envy',
    'Code should know only of direct methods of the classes below it not of further down elements. If you call a method on an object returned by a method of an object you have access, this means you envy the 2nd object of the chain. Calling format, cast or any other value type method off the result of a direct method is not considered feature envy.',
    'General',
    293
  ),
  new CodeSmellStructure(
    'G15',
    'Functions',
    'Selector Arguments',
    'Similar to flag arguments, selector arguments are boolean or enum arguments that change the way a function operates. Selector arguments on the other hand can be converted to a real value type that expresses the way the function should operate instead of fixed enumerator values or boolean arguments.',
    'General',
    294
  ),
  new CodeSmellStructure(
    'G16',
    'Expressions',
    'Obscured Intent',
    "Minified code, condensed code, obscure variable names, they all contribute to making code unreadable or hard to interpret. If you can't read code like real text, you should review it.",
    'General',
    295
  ),
  new CodeSmellStructure(
    'G17',
    'Architecture',
    'Misplaced Responsibility',
    'Constants, Variables, Functions, should be placed at the most obvious place one should find it. If you put constants in a class but readers would expect them somewhere else then you failed this.',
    'General',
    295
  ),
  new CodeSmellStructure(
    'G18',
    'Architecture',
    'Inappropriate Static',
    "Functions or variables should only be made static if it makes sense for them to be static. If it doesn't make sense to create a new instance of a class to use a method such as for the function min(a, b) or max(a, b), then your function should be static.",
    'General',
    296
  ),
  new CodeSmellStructure(
    'G19',
    'Expressions',
    'Explanatory Variables',
    'Variables should explain what data they carry but also their intent. Furthermore, it is perfectly valid to create intermediate variables to explain a complex operation instead of nesting many complex operations into one another.',
    'General',
    296
  ),
  new CodeSmellStructure(
    'G20',
    'Functions',
    'Function Names Should Say What They Do',
    'Would you expect a function that says it adds 5 to a number to add 6? Would you expect a function to change a property of an object if it says it calculates and returns something?',
    'General',
    296
  ),
  new CodeSmellStructure(
    'G21',
    'Expressions',
    'Understand The Algorithm',
    "Lots of very funny code can be written by testing out outcomes. Sometimes, code produced isn't very clear although it just works. When code is a messy and hard to understand, it usually indicates that the developer didn't really understand what he was doing but ended up succeeding at it.",
    'General',
    297
  ),
  new CodeSmellStructure(
    'G22',
    'Architecture',
    'Make Logical Dependencies Physical',
    'Sometimes our code assumes things about another module such as variable existence, constants, etc. When this happens, we are creating a logical dependency between two modules. This should be avoided and be transformed into a physical dependency such as exposing a method on the other end to get some data.',
    'General',
    298
  ),
  new CodeSmellStructure(
    'G23',
    'Architecture',
    'Prefer Polymorphism to conditions or switches',
    'If your code should behave differently based off a parameter using a condition or a switch, you should prefer using polymorphism or a dependency injection to make it act differently.',
    'General',
    299
  ),
  new CodeSmellStructure(
    'G24',
    'Standards',
    'Follow Standard Conventions',
    'Every team should have a convention, should it be implied, documented or automated. Stick to it!',
    'General',
    299
  ),
  new CodeSmellStructure(
    'G25',
    'Expressions',
    'Replace Magic Numbers With Constants',
    'A number can usually be hard to understand while a constant is easy, transform numbers that have a meaning into a variable or better yet a constant that means something when read.',
    'General',
    300
  ),
  new CodeSmellStructure(
    'G26',
    'Expressions',
    'Be Precise',
    'Expecting that there is one item in a collection because index 0 exists is bad. Same goes for using decimals for currency, avoiding transactions because a lock should not happen anyway, using a precise concrete class instead of an interface, these are all ways to create issue with your code later. Be precise, expect the unexpected.',
    'General',
    301
  ),
  new CodeSmellStructure(
    'G27',
    'Architecture',
    'Structure Over Convention',
    "Use named and physical structures to enforce things not conventions. Developers are more tempted to cut corners if there are no structures because they can. A switch statement doesn't need to be implemented the same way everytime but abstract methods force you to.",
    'General',
    301
  ),
  new CodeSmellStructure(
    'G28',
    'Conditions',
    'Encapsulate Conditionals',
    'Analyzing complex conditions requires thought and analysis, when possible, it is preferable to extract all conditions of an if statement to a sub function that declares right away what was the intent of the condition without having to decode its multiple parts.',
    'General',
    301
  ),
  new CodeSmellStructure(
    'G29',
    'Conditions',
    'Avoid Negative Conditionals',
    "Negative conditionals are hard to understand, when possible reverse them. For example: 'if(!user.isDead())' is hard to understand while 'if(user.isAlive())' is much easier.",
    'General',
    302
  ),
  new CodeSmellStructure(
    'G30',
    'Functions',
    'Functions Should Do One Thing',
    "It is often tempting to create functions that have multiple sections that perform a series of operations. Functions of this kind do more than one thing and the name usually doesn't describe that. Segment functions into multiple sub functions and name everything properly so it explains the objective of the function properly.",
    'General',
    302
  ),
  new CodeSmellStructure(
    'G31',
    'Architecture',
    'Hidden Temporal Couplings',
    'If you can call sub functions in a function and reversing their order leads to inconsistent code but nothing couples the functions together, it means you have a hidden temporal coupling. To fix this, create an exchange chain where data is exchanged between functions forcing you to keep the chain in the same order.',
    'General',
    302
  ),
  new CodeSmellStructure(
    'G32',
    'Standards',
    "Don't Be Arbitrary",
    "You should have a good reason to structure your code the way you do if it bypasses expectations or conventions. Other developers will change it or use it without your consent. For example, if you have a function that is public but you made it public just for ease of use for yourself, remember that this might also incite other devs to use it while you didn't intend to.",
    'General',
    303
  ),
  new CodeSmellStructure(
    'G33',
    'Conditions',
    'Encapsulate Boundary Conditions',
    'When you reuse a variable with an operation in a condition, it means you should have encapsulated that operation in a variable instead of repeating it. By reducing this copied code to a variable, you will often give a different meaning to that expression now that it has a name.',
    'General',
    304
  ),
  new CodeSmellStructure(
    'G34',
    'Functions',
    'Functions Should Have Only One Level of Abstraction',
    'If you have code that uses two different concepts together, there is a good chance that you are mixing levels of abstraction. An example is mixing logic over data with transformation of that data into something else, instead, you should encapsulate the transformation into another module to make the code more readable.',
    'General',
    304
  ),
  new CodeSmellStructure(
    'G35',
    'Architecture',
    'Keep Configurable Data at High Levels',
    'If you have data that can be set to a certain value and if it can be defaulted to a certain value, you should ensure that this default value is close to the initialization of that variable not deep down in an obscure class. That said, avoid defaulting non provided values in late stages.',
    'General',
    306
  ),
  new CodeSmellStructure(
    'G36',
    'Architecture',
    'Avoid Transitive Navigation',
    'Similar to Feature Envy, if you know something about an indirect dependency such as A knows about C through B then you are doing transitive navigation. Instead, you should only use functions of direct collaborators, not distant. This can mean you need to reimplement some features of C inside of B to prevent A from navigating to it.',
    'General',
    306
  ),
  new CodeSmellStructure(
    'N1',
    'Expressions',
    'Choose Descriptive Names',
    "Don't be too quick to choose a name for a variable or function. Make sure the name is descriptive. Remember that the reader that will come back here later has no knowledge of the code and it has to understand it quickly. Names are more important than the way you end up doing the code in most cases.",
    'Names',
    309
  ),
  new CodeSmellStructure(
    'N2',
    'Expressions',
    'Choose Names at the Right Level of Abstraction',
    "Names in an abstract context, mostly names of classes or names of interfaces are not written the same way than concrete classes are. Choose names that reflect what you want to offer doing for these items while the concrete class has a name that says how it's implemented.",
    'Names',
    311
  ),
  new CodeSmellStructure(
    'N3',
    'Standards',
    'Use Standard Nomenclature Where Possible',
    'Names are easier to understand and make up if you have a good reference sheet or a proven standardized code base. Try to use names that already exist and convey the same meaning has other items, it increases cohesion and readability.',
    'Names',
    311
  ),
  new CodeSmellStructure(
    'N4',
    'Functions',
    'Unambiguous Function Names',
    'Ensure functions have proper names that fully explain their objective. A function that does more than expected will lead to logical errors and assumptions.',
    'Names',
    312
  ),
  new CodeSmellStructure(
    'N5',
    'Expressions',
    'Length of Names Should Reflect Scope',
    "If a variable is to be used in a tiny set of lines of code, you shouldn't need a very long name. Inversely, a variable that spans many lines of code should be much more descriptive by increasing the number of characters required to describe it.",
    'Names',
    312
  ),
  new CodeSmellStructure(
    'N6',
    'Expressions',
    'Avoid Encodings',
    'Variables or functions should not be prefixed, suffixed or have abbreviated components unless they are a convention or standard amongst the team. And then again, you should avoid abbreviations when possible unless you have a really good reason to do so.',
    'Names',
    312
  ),
  new CodeSmellStructure(
    'N7',
    'Expressions',
    'Names Should Describe Side-Effects',
    'Names, of functions mainly, should describe potential side-effects of running code based on them. If you have a flag argument (bad practice) that changes the function and induces a side-effect, then the flag argument name should be descriptive of what is the side-effect.',
    'Names',
    313
  ),
  new CodeSmellStructure(
    'T1',
    'Tests',
    'Insufficient Tests',
    "How many tests are required? No metric can tell you that, not even code coverage. 'Looks like enough' isn't enough. You should write a list of all potential cases that could go bad and then implement then, don't just cover your traces, go further.",
    'Tests',
    313
  ),
  new CodeSmellStructure(
    'T2',
    'Tests',
    'Use a Coverage Tool',
    'Coverage tools are very useful even if they are not all of the equation. Use them but specify the coverage depth, a coverage tool should only cover the lines of the class you test, not other classes so make sure you declare what you are covering.',
    'Tests',
    313
  ),
  new CodeSmellStructure(
    'T3',
    'Tests',
    "Don't Skip Trivial Tests",
    'They are easier to write and offer more value than you might think. If you like writing long and hard to read tests, you miss a big point in testing which is documentation. Tests should offer documentation as well as safeties.',
    'Tests',
    313
  ),
  new CodeSmellStructure(
    'T4',
    'Tests',
    'An Ignored Test Is a Question of Ambiguity',
    "Sometimes we are unsure of the behavior to be achieved and thus we skip or disable a test. This is a sign that the documentation, the code, the complexity is not properly adjusted and there needs to be a review of that code base. Tests and code should be understandable, if something breaks and we don't know why, it is a sign of overcomplexity.",
    'Tests',
    313
  ),
  new CodeSmellStructure(
    'T5',
    'Tests',
    'Test Boundary Conditions',
    'Take special care in testing boundary conditions or looped value sets, they can produce strange results sometimes, mostly if you have to calculate things from them.',
    'Tests',
    314
  ),
  new CodeSmellStructure(
    'T6',
    'Tests',
    'Exhaustively Test Near Bugs',
    'When you write regression tests because of bugs, that the time to write more tests than what is just necessary, sometimes, there are other bugs nearby.',
    'Tests',
    314
  ),
  new CodeSmellStructure(
    'T7',
    'Tests',
    'Patterns of Failure Are Revealing',
    'If you spot a pattern in failing tests, it means there is a pattern in code that generates the bug. A fixed test for one bug that offers a clear pattern means you should apply the same test somewhere else maybe?',
    'Tests',
    314
  ),
  new CodeSmellStructure(
    'T8',
    'Tests',
    'Test Coverage Patterns Can Be Revealing',
    'Looking at code that is or is not executed by the passing tests give clue to why the failing tests fail.',
    'Tests',
    314
  ),
  new CodeSmellStructure(
    'T9',
    'Tests',
    'Tests Should Be Fast',
    "A slow test is a test that won't get run. When things get right, it's the slow tests that will be dropped from the suite. Do what is needed to make tests fast.",
    'Tests',
    314
  )
]
