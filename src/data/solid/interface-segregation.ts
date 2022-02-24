import { CodeSmellStructure } from '../../models/codeSmellStructure'

const sis1 = new CodeSmellStructure(
  'SIS1',
  'SOLID/Interface Segregation',
  'Interface Is Too Wide',
  'Interface segregation stipulates that an interface should expose only the bare minimum of functionalities. A class may have a Single Responsibility that covers multiple use cases such as reading/fetching data and modifying data but that doesn\'t mean it should have only one interface to cover its features. Consider splitting the interface into multiple smaller interfaces that describe portions of responsibilities instead of one big interface.',
  '',
  0
)

const sis2 = new CodeSmellStructure(
  'SIS2',
  'SOLID/Interface Segregation',
  'Non segmented dependency',
  'Interface segregation stipulates that a class depending on another class should only depend on the exact portion of what it uses. Therefore, if you are depending on an interface that provides more than you should be allowed to see, you should consider splitting the interface into smaller chunks but extend the original interface from the two new sub interfaces so you don\'t lose the precision somewhere else.',
  '',
  0
)

export { sis1, sis2 }
