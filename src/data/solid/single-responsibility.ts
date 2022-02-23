import { CodeSmellStructure } from '../../models/codeSmellStructure'

const ssr1 = new CodeSmellStructure(
  'SSR1',
  'SOLID/Single responsibility',
  'Unclear responsibility from name',
  'Code components should have a clear single responsibility. The name of the component or function promotes confusion as to what is the expected responsibility of the component. Try to isolate the exact nature and goal of the component at hand and rename it and if need be, refactor code to ensure it has only one responsibility.',
  '',
  0
)

const ssr2 = new CodeSmellStructure(
  'SSR2',
  'SOLID/Single responsibility',
  'Extra responsibility',
  'Code components should have a clear single responsibility. The pointed out code seems to induce additional responsibilities to the component, consider changing the code to enforce single responsibility. You can pull the code out to the parent or extract the code to another class and wrap both original class and new class in a parent class that has the responsibility to connect the two together.',
  '',
  0
)

export { ssr1, ssr2 }
