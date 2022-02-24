import { CodeSmellStructure } from '../models/codeSmellStructure'
import { c1, c2, c3, c4, c5 } from './clean-code/comments'
import { e1, e2 } from './clean-code/environment'
import { f1, f2, f3, f4 } from './clean-code/functions'
import {
  g1,
  g10,
  g11,
  g12,
  g13,
  g14,
  g15,
  g16,
  g17,
  g18,
  g19,
  g2,
  g20,
  g21,
  g22,
  g23,
  g24,
  g25,
  g26,
  g27,
  g28,
  g29,
  g3,
  g30,
  g31,
  g32,
  g33,
  g34,
  g35,
  g36,
  g4,
  g5,
  g6,
  g7,
  g8,
  g9
} from './clean-code/general'
import { n1, n2, n3, n4, n5, n6, n7 } from './clean-code/names'
import { t1, t2, t3, t4, t5, t6, t7, t8, t9 } from './clean-code/tests'
import { ssr1, ssr2 } from './solid/single-responsibility'
import { soc1, soc2 } from './solid/open-close'
import { filter, first } from 'lodash'
import { CodeSmellNotFoundError } from './codeSmellNotFoundError'

export function getCodeSmells (): CodeSmellStructure[] {
  return codeSmells
}

export function getCodeSmell (code: string): CodeSmellStructure {
  const matchingCodeSmells: CodeSmellStructure[] = filter(codeSmells, (codeSmell: CodeSmellStructure) => {
    return codeSmell.code.toLowerCase() === code.toLowerCase()
  })
  const firstCodeSmell: CodeSmellStructure | undefined = first(matchingCodeSmells)
  if (firstCodeSmell === undefined) {
    throw new CodeSmellNotFoundError()
  }
  return firstCodeSmell
}

const codeSmells = [
  c1, c2, c3, c4, c5,
  e1, e2,
  f1, f2, f3, f4,
  g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12, g13, g14, g15, g16, g17, g18, g19, g20, g21, g22, g23, g24, g25, g26, g27, g28, g29, g30, g31, g32, g33, g34, g35, g36,
  n1, n2, n3, n4, n5, n6, n7,
  t1, t2, t3, t4, t5, t6, t7, t8, t9,
  ssr1, ssr2,
  soc1, soc2
]
