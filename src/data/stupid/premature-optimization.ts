import { CodeSmellStructure } from '../../models/codeSmellStructure'

const spo1 = new CodeSmellStructure(
  'SPO1',
  'STUPID/Premature Optimization',
  'Confusing Algorithm',
  '(See "Clean Code/G16 - Obscured Intent", "Clean Code/G21 - Understand The Algorithm" and "Clean Code/G3 - Incorrect Behavior at the Boundaries") Premature Optimization is the hard of making things more complex just for the same of optimizing its execution time. Rule of thumb, unless you have very thorough test suites, don\'t do it, then again, you should still avoid it. Premature Optimization leads to hard to read code and potential unseen errors mostly around boundaries.',
  '',
  0
)

export { spo1 }
