declare module 'kchelper' {
  export function isMobile(event: object): boolean;
  export function getFieldElement(fieldCode: number, isMobile: boolean | void): HTMLElement
  export function getFieldElements(fieldCode: number, isMobile: boolean | void): HTMLElement[]
  export function getSpaceElement(spaceId: string, isMobile: boolean | void): HTMLElement
  export function getRecord(isMobile: boolean | void): kintone.types.SavedFields
  export function setRecord(record: kintone.types.SavedFields, isMobile: boolean | void): void
  export function hideField(fieldCode: number, isMobile: boolean | void): void
  export function getDateString(format: string, inputDate: Date | void): string
  
}