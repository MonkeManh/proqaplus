export interface IResponsePriority {
  priority: string
  determinants: IDeterminant[]
}

interface ISubCode {
  code: string
  text: string
  recResponse: number
}

interface IDeterminant {
  code: string
  text: string
  recResponse: number
  notBreathing?: boolean
  notConscious?: boolean
  multVictim?: boolean
  unknown?: boolean
  defaultCode?: boolean
  subCodes?: ISubCode[]
}

