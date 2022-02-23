import { CodeSmellStructure } from '../../models/codeSmellStructure'

const soc1 = new CodeSmellStructure(
  'SOC1',
  'SOLID/Open Closed',
  'Hardcoded non-extensible logic',
  'Code components should be open for extension and closed to modification. The code at hand features hardcoded logic that could need extension later but because it the logic is hardcoded into the component, it cannot be easily extended. Consider using a collection of items that you can supplement with such as handlers, resolvers or anything similar to promote extensibility of algorithm without having to extend the class itself and call parent code.',
  '',
  0
)

const soc2 = new CodeSmellStructure(
  'SOC2',
  'SOLID/Open Closed',
  'Misplaced logic',
  'Code components should be open for extension and closed to modification. The code at hand features logic that could have been put in another object such as the source object that you are applying logic to. For example, a shape class should have a getter to return it\'s area, it should not be coded into an AreaCalculator which fails to be open for extension.',
  '',
  0
)

export { soc1, soc2 }
