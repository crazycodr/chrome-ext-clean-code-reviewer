import { CodeSmellStructure } from '../../models/codeSmellStructure'

const c1 = new CodeSmellStructure(
  'C1',
  'Clean-Code/Comments',
  'Inappropriate information',
  'It is inappropriate for a comment to hold information better held in a different kind of system such as your source code. Comments should be reserved for technical notes about the code and design.',
  'Clean-Code/Comments',
  286
)

const c2 = new CodeSmellStructure(
  'C2',
  'Clean-Code/Comments',
  'Obsolete Comment',
  'Comments get old quickly. It is best not to write a comment that will become obsolete quickly because developers do not look a lot at comments and code changes easily and often. Get rid of comment and refactor if needed to prevent comments that can become obsolete.',
  'Clean-Code/Comments',
  286
)

const c3 = new CodeSmellStructure(
  'C3',
  'Clean-Code/Comments',
  'Redundant Comment',
  'Comments that describe an obvious behavior for code are useless. For example, a comment that explains what a line of code does when the code is clear and easy to understand makes the comment useless and noisy.',
  'Clean-Code/Comments',
  286
)

const c4 = new CodeSmellStructure(
  'C4',
  'Clean-Code/Comments',
  'Poorly Written Comment',
  'A comment worth writting is worth writing well. If you are going to write a comment, take the time to make sure it is the best comment you can write.',
  'Clean-Code/Comments',
  287
)

const c5 = new CodeSmellStructure(
  'C5',
  'Clean-Code/Comments',
  'Commented-Out Code',
  'That code will sit there are rot and there are good chances no one will ever remove until we stumble upon it and waste time trying to figure out if it is there for a good reason. If it should stay, wrap it with a feature flag, if not, delete the code.',
  'Clean-Code/Comments',
  287
)

export { c1, c2, c3, c4, c5 }
