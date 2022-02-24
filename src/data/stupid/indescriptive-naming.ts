import { CodeSmellStructure } from '../../models/codeSmellStructure'

const sin1 = new CodeSmellStructure(
  'SIN1',
  'STUPID/In-descriptive Naming',
  'Name Things For Other Developers',
  '(See "Clean Code/N*" code smells for more information) You should code for other developers, not for you, not for a machine. Machines understand zeros and ones not words, therefore, you should aim at making your code as clear as possible. Review all Clean Code naming code smells for more information.',
  '',
  0
)

const sin2 = new CodeSmellStructure(
  'SIN2',
  'STUPID/In-descriptive Naming',
  'Do Not Abbreviate',
  '(See "Clean Code/N*" code smells for more information) You should code for other developers, not for you. Abbreviations are rarely beneficial unless the name of an entity is enormously long. If this slows you down repetitively when you type it over and over again, then yes, it can make sense but you have to ensure that your peers know what your abbreviation means, discuss it and get approval first.',
  '',
  0
)

export { sin1, sin2 }
