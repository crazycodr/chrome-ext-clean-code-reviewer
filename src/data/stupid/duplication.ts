import { CodeSmellStructure } from '../../models/codeSmellStructure'

const sd1 = new CodeSmellStructure(
  'SD1',
  'STUPID/Duplication',
  'Non-Extracted Duplication',
  '(See "Clean Code/G5 - Duplication") This code block and other very similar blocks of code seems to exist in this class or code base. You should abstract it as they are actually the same and would benefit from extraction by clarifying and unifying the portions of code.',
  '',
  0
)

const sd2 = new CodeSmellStructure(
  'SD2',
  'STUPID/Duplication',
  'Inappropriate Duplicate Extraction',
  'Although all duplicated code should be extracted and not repeated, sometimes it is not advisable to extract duplicated code because it would be used differently at different call sites and thus confuse the users. Code that acts the same but are not used for the same purpose can be confusing if you extract it to a common base.',
  '',
  0
)

export { sd1, sd2 }
