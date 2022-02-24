import { CodeSmellStructure } from '../../models/codeSmellStructure'

const sdi1 = new CodeSmellStructure(
  'SDI1',
  'SOLID/Dependency Inversion',
  'Tight Coupled Dependency',
  'Dependency Inversion stipulates that a class should not be tightly coupled to another by creating the instance of that dependency directly. You should instead use an inversion of control package commonly known as a Dependency Container and require that dependency as part of the constructor of the current class.',
  '',
  0
)

const sdi2 = new CodeSmellStructure(
  'SDI2',
  'SOLID/Dependency Inversion',
  'Dependency On a Concrete Class',
  'Dependency Inversion stipulates that a class should not depend on another concrete class but on an interface. Coupled to Interface Segregation, this can also mean that a dependant class will need to receive more than one new dependency because it might need multiple different behaviors from the original dependency. It is therefore normal to increase the number of dependencies when this happens.',
  '',
  0
)

export { sdi1, sdi2 }
