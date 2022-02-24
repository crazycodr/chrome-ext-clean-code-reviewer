import { CodeSmellStructure } from '../../models/codeSmellStructure'

const sls1 = new CodeSmellStructure(
  'SLS1',
  'SOLID/Liskov Substitution',
  'Inconsistent Parent Behavior',
  'Code components extending or extended off one another should not warp behavior and be substituted without problem. This code has become incompatible with the Liskov principle because all children have been changed to have similar behavior but the parent does not have the same behavior as its children. Consider creating a different child from parent or changing the parent to be an interface instead or you cannot replace the children with the parent without error.',
  '',
  0
)

const sls2 = new CodeSmellStructure(
  'SLS2',
  'SOLID/Liskov Substitution',
  'Inconsistent Child Behavior',
  'Code components extending or extended off one another should not warp behavior and be substituted without problem. This code has become incompatible with the Liskov principle because the parent behaves different from the child class, if this was intended, it means you should have had an interface covering both classes to make them interchangeable and at the same level instead of one being the child of the other and covering/changing the parent\'s behavior.',
  '',
  0
)

export { sls1, sls2 }
