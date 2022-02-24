import { CodeSmellStructure } from '../../models/codeSmellStructure'

const stc1 = new CodeSmellStructure(
  'STC1',
  'STUPID/Tight Coupling',
  'Tight Coupled Dependency',
  '(See SOLID/Dependency Inversion) Dependency Inversion stipulates that a class should not be tightly coupled to another by creating the instance of that dependency directly. You should instead use an inversion of control package commonly known as a Dependency Container and require that dependency as part of the constructor of the current class.',
  '',
  0
)

export { stc1 }
