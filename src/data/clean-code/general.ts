import {CodeSmellStructure} from "../../models/codeSmellStructure";


const g1 = new CodeSmellStructure(
    'G1',
    'Architecture',
    'Multiple Languages In One Source File',
    'Although it is possible to have multiple languages in one source file (.vue files for example) it should be avoided. Try to extract the data here to another file and include the other file into this source code file. (Avoid HereDoc or NowDoc approaches)',
    'General',
    288
);

const g2 = new CodeSmellStructure(
    'G2',
    'Expressions',
    'Obvious Behavior Is Not Implemented',
    'Following the principle of least surprises is a savior in many cases. A function or class that declares it does something should properly do it and do it well in a clean, clear, optimal and tested way. Obvious behaviors not implemented lead to surprises and logic errors that could be avoided.',
    'General',
    288
);

const g3 = new CodeSmellStructure(
    'G3',
    'Expressions',
    'Incorrect Behavior at the Boundaries',
    "Although code may seem obvious, sometimes, we declare something our code should do and don't go to the full extent which generates expectations at the boundaries that are not tested and sometimes poorly implemented. Ensure your code is tested up to each boundary and ensure it works properly as expected.",
    'General',
    289
);

const g4 = new CodeSmellStructure(
    'G4',
    'Standards',
    'Overridden Safeties',
    'It is risky to override safeties. Should it be to override authentication, authorization or business rules that are put in place to prevent something from happening, overriding safeties is never a good thing.',
    'General',
    289
);

const g5 = new CodeSmellStructure(
    'G5',
    'Expressions',
    'Duplication',
    'This block of code seems to be duplicated. There are almost no occasion where we should allow ourselves to duplicate code. Extract this code to a reusable component such as a local function or an external class that is injected into this component.',
    'General',
    289
);

const g6 = new CodeSmellStructure(
    'G6',
    'Architecture',
    'Code at Wrong Level of Abstraction',
    'It is important to properly abstract and isolate types of code. Creating code of a certain type at a certain level while for another process the same code is at another level of abstraction will create a lot of confusion at the architectural level. Example: Controllers, Services, Actions, Repositories, etc.',
    'General',
    290
);

const g7 = new CodeSmellStructure(
    'G7',
    'Architecture',
    'Base Class Depending on Their Derivatives',
    "Code from higher levels of abstraction should not depend on the lower levels of abstraction. It should be aware of features directly underneath it to use it but must not know about it's details and depend on the way it works.",
    'General',
    291
);

const g8 = new CodeSmellStructure(
    'G8',
    'Architecture',
    'Too Much Information',
    'Well-defined modules have very small interfaces that allow you to do a lot with a little. Having too many functions or features inside one module leads to widening of interfaces which leads to multiple steps to accomplish one thing.',
    'General',
    291
);

const g9 = new CodeSmellStructure(
    'G9',
    'Architecture',
    'Dead Code',
    "Dead code is code that isn't executed. It can be simple if statements that lead nowhere to functions never used or even classes that are never used. Code that is unreachable and dead should be investigated for potential bugs or just be removed.",
    'General',
    292
);

const g10 = new CodeSmellStructure(
    'G10',
    'Expressions',
    'Vertical Separation',
    'Variables and functions should be defined close to where they are used. Local variables should be declared just above their first usage and should have a small vertical scope between their use and declaration.',
    'General',
    292
);

const g11 = new CodeSmellStructure(
    'G11',
    'Standards',
    'Inconsistency',
    'If you do something a certain way, always do it the same way or it may induce unexpected behaviors at edges. This goes back to the principle of least surprises, if you do something always the same way, diverging may not be obvious at first and produce unexpected results.',
    'General',
    292
);

const g12 = new CodeSmellStructure(
    'G12',
    'Expressions',
    'Clutter',
    'Unused variables, empty constructors or constructors that call the parent constructor without change in behavior are just clutter when trying to figure out what code does. Keep your source file clean.',
    'General',
    293
);

const g13 = new CodeSmellStructure(
    'G13',
    'Architecture',
    'Artificial Coupling',
    'Enums and static functions, unless explicitly required to, should not be part of another unrelated class. This forces the code to know about a class that is not required for the context.',
    'General',
    293
);

const g14 = new CodeSmellStructure(
    'G14',
    'Functions',
    'Feature Envy',
    'Code should know only of direct methods of the classes below it not of further down elements. If you call a method on an object returned by a method of an object you have access, this means you envy the 2nd object of the chain. Calling format, cast or any other value type method off the result of a direct method is not considered feature envy.',
    'General',
    293
);

const g15 = new CodeSmellStructure(
    'G15',
    'Functions',
    'Selector Arguments',
    'Similar to flag arguments, selector arguments are boolean or enum arguments that change the way a function operates. Selector arguments on the other hand can be converted to a real value type that expresses the way the function should operate instead of fixed enumerator values or boolean arguments.',
    'General',
    294
);

const g16 = new CodeSmellStructure(
    'G16',
    'Expressions',
    'Obscured Intent',
    "Minified code, condensed code, obscure variable names, they all contribute to making code unreadable or hard to interpret. If you can't read code like real text, you should review it.",
    'General',
    295
);

const g17 = new CodeSmellStructure(
    'G17',
    'Architecture',
    'Misplaced Responsibility',
    'Constants, Variables, Functions, should be placed at the most obvious place one should find it. If you put constants in a class but readers would expect them somewhere else then you failed this.',
    'General',
    295
);

const g18 = new CodeSmellStructure(
    'G18',
    'Architecture',
    'Inappropriate Static',
    "Functions or variables should only be made static if it makes sense for them to be static. If it doesn't make sense to create a new instance of a class to use a method such as for the function min(a, b) or max(a, b); then your function should be static.",
    'General',
    296
);

const g19 = new CodeSmellStructure(
    'G19',
    'Expressions',
    'Explanatory Variables',
    'Variables should explain what data they carry but also their intent. Furthermore, it is perfectly valid to create intermediate variables to explain a complex operation instead of nesting many complex operations into one another.',
    'General',
    296
);

const g20 = new CodeSmellStructure(
    'G20',
    'Functions',
    'Function Names Should Say What They Do',
    'Would you expect a function that says it adds 5 to a number to add 6? Would you expect a function to change a property of an object if it says it calculates and returns something?',
    'General',
    296
);

const g21 = new CodeSmellStructure(
    'G21',
    'Expressions',
    'Understand The Algorithm',
    "Lots of very funny code can be written by testing out outcomes. Sometimes, code produced isn't very clear although it just works. When code is a messy and hard to understand, it usually indicates that the developer didn't really understand what he was doing but ended up succeeding at it.",
    'General',
    297
);

const g22 = new CodeSmellStructure(
    'G22',
    'Architecture',
    'Make Logical Dependencies Physical',
    'Sometimes our code assumes things about another module such as variable existence, constants, etc. When this happens, we are creating a logical dependency between two modules. This should be avoided and be transformed into a physical dependency such as exposing a method on the other end to get some data.',
    'General',
    298
);

const g23 = new CodeSmellStructure(
    'G23',
    'Architecture',
    'Prefer Polymorphism to conditions or switches',
    'If your code should behave differently based off a parameter using a condition or a switch, you should prefer using polymorphism or a dependency injection to make it act differently.',
    'General',
    299
);

const g24 = new CodeSmellStructure(
    'G24',
    'Standards',
    'Follow Standard Conventions',
    'Every team should have a convention, should it be implied, documented or automated. Stick to it!',
    'General',
    299
);

const g25 = new CodeSmellStructure(
    'G25',
    'Expressions',
    'Replace Magic Numbers With Constants',
    'A number can usually be hard to understand while a constant is easy, transform numbers that have a meaning into a variable or better yet a constant that means something when read.',
    'General',
    300
);

const g26 = new CodeSmellStructure(
    'G26',
    'Expressions',
    'Be Precise',
    'Expecting that there is one item in a collection because index 0 exists is bad. Same goes for using decimals for currency, avoiding transactions because a lock should not happen anyway, using a precise concrete class instead of an interface, these are all ways to create issue with your code later. Be precise, expect the unexpected.',
    'General',
    301
);

const g27 = new CodeSmellStructure(
    'G27',
    'Architecture',
    'Structure Over Convention',
    "Use named and physical structures to enforce things not conventions. Developers are more tempted to cut corners if there are no structures because they can. A switch statement doesn't need to be implemented the same way everytime but abstract methods force you to.",
    'General',
    301
);

const g28 = new CodeSmellStructure(
    'G28',
    'Conditions',
    'Encapsulate Conditionals',
    'Analyzing complex conditions requires thought and analysis, when possible, it is preferable to extract all conditions of an if statement to a sub function that declares right away what was the intent of the condition without having to decode its multiple parts.',
    'General',
    301
);

const g29 = new CodeSmellStructure(
    'G29',
    'Conditions',
    'Avoid Negative Conditionals',
    "Negative conditionals are hard to understand, when possible reverse them. For example: 'if(!user.isDead())' is hard to understand while 'if(user.isAlive())' is much easier.",
    'General',
    302
);

const g30 = new CodeSmellStructure(
    'G30',
    'Functions',
    'Functions Should Do One Thing',
    "It is often tempting to create functions that have multiple sections that perform a series of operations. Functions of this kind do more than one thing and the name usually doesn't describe that. Segment functions into multiple sub functions and name everything properly so it explains the objective of the function properly.",
    'General',
    302
);

const g31 = new CodeSmellStructure(
    'G31',
    'Architecture',
    'Hidden Temporal Couplings',
    'If you can call sub functions in a function and reversing their order leads to inconsistent code but nothing couples the functions together, it means you have a hidden temporal coupling. To fix this, create an exchange chain where data is exchanged between functions forcing you to keep the chain in the same order.',
    'General',
    302
);

const g32 = new CodeSmellStructure(
    'G32',
    'Standards',
    "Don't Be Arbitrary",
    "You should have a good reason to structure your code the way you do if it bypasses expectations or conventions. Other developers will change it or use it without your consent. For example, if you have a function that is public but you made it public just for ease of use for yourself, remember that this might also incite other devs to use it while you didn't intend to.",
    'General',
    303
);

const g33 = new CodeSmellStructure(
    'G33',
    'Conditions',
    'Encapsulate Boundary Conditions',
    'When you reuse a variable with an operation in a condition, it means you should have encapsulated that operation in a variable instead of repeating it. By reducing this copied code to a variable, you will often give a different meaning to that expression now that it has a name.',
    'General',
    304
);

const g34 = new CodeSmellStructure(
    'G34',
    'Functions',
    'Functions Should Have Only One Level of Abstraction',
    'If you have code that uses two different concepts together, there is a good chance that you are mixing levels of abstraction. An example is mixing logic over data with transformation of that data into something else, instead, you should encapsulate the transformation into another module to make the code more readable.',
    'General',
    304
);

const g35 = new CodeSmellStructure(
    'G35',
    'Architecture',
    'Keep Configurable Data at High Levels',
    'If you have data that can be set to a certain value and if it can be defaulted to a certain value, you should ensure that this default value is close to the initialization of that variable not deep down in an obscure class. That said, avoid defaulting non provided values in late stages.',
    'General',
    306
);

const g36 = new CodeSmellStructure(
    'G36',
    'Architecture',
    'Avoid Transitive Navigation',
    'Similar to Feature Envy, if you know something about an indirect dependency such as A knows about C through B then you are doing transitive navigation. Instead, you should only use functions of direct collaborators, not distant. This can mean you need to reimplement some features of C inside of B to prevent A from navigating to it.',
    'General',
    306
);

export {
    g1,
    g2,
    g3,
    g4,
    g5,
    g6,
    g7,
    g8,
    g9,
    g10,
    g11,
    g12,
    g13,
    g14,
    g15,
    g16,
    g17,
    g18,
    g19,
    g20,
    g21,
    g22,
    g23,
    g24,
    g25,
    g26,
    g27,
    g28,
    g29,
    g30,
    g31,
    g32,
    g33,
    g34,
    g35,
    g36
};