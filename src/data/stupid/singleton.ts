import { CodeSmellStructure } from '../../models/codeSmellStructure'

const ss1 = new CodeSmellStructure(
  'SS1',
  'STUPID/Singleton',
  'Class With Global State',
  'Classes that use global state (or static variable scope) instead of being a true singleton are very difficult to test. When you depend on a global state that is hidden and doesn\'t reset easily, you may induce errors that you did not expect. In most cases, you should consider using a real singleton from a dependency injection container which solves most of these issues.',
  '',
  0
)

const ss2 = new CodeSmellStructure(
  'SS2',
  'STUPID/Singleton',
  'Dependency Should Not Be Singleton Based',
  'When you have a dependency container, it will most of the time create singletons of your different classes. This means that most dependencies will be reused throughout different dependent classes. If your dependency has a state in it and you do not expect the state to be shared, then you should configure your dependency injection container to create instances of this class for each dependent class that asks for it.',
  '',
  0
)

const ss3 = new CodeSmellStructure(
  'SS3',
  'STUPID/Singleton',
  'Singleton/Instance Duality',
  'When you have a dependency container, it will most of the time create singletons of your different classes. But if you configure your class to be a singleton in some cases while it is an instance in others, you create potential logic issues that are hard to diagnose. You should then split your dependency definition into two interfaces to clearly identity that one version is shared, the other not.',
  '',
  0
)

export { ss1, ss2, ss3 }
