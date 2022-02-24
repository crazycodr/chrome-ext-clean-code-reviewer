import { CodeSmellStructure } from '../../models/codeSmellStructure'

const su1 = new CodeSmellStructure(
  'SU1',
  'STUPID/Untestable',
  'Tight Coupled Dependency',
  '(See SOLID/Dependency Inversion) Dependency Inversion stipulates that a class should not be tightly coupled to another by creating the instance of that dependency directly. You should instead use an inversion of control package commonly known as a Dependency Container and require that dependency as part of the constructor of the current class.',
  '',
  0
)

const su2 = new CodeSmellStructure(
  'SU2',
  'STUPID/Untestable',
  'Non Testable External Code Call',
  'All code should be testable, even the one that calls an external code such as a Web API. If your code is too dense (See Clean Code/G30 - Functions Should Do One Thing), then you should split it into multiple functions, extract the access to the dependency that calls the API and mock it so you can test the API call without actually calling it.',
  '',
  0
)

export { su1, su2 }
