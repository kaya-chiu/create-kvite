import type { KintoneRecordField } from '@kintone/rest-api-client'

declare namespace KintoneTypes {
  type Base = {
    $id: KintoneRecordField.Id;
    $revision: KintoneRecordField.Revision;
    更新人: KintoneRecordField.Modifier;
    建立人: KintoneRecordField.Creator;
    記錄號碼: KintoneRecordField.RecordNumber;
    更新時間: KintoneRecordField.UpdatedTime;
    建立時間: KintoneRecordField.CreatedTime;
  }

  /*********************************************************
   * Run "npm run set-type" to set up field types.
   * To do it manually, follow these steps:
      1. Run "npm run dts-gen" to generate "fields.d.ts".
      2. Copy the contents of the "Fields" interface in 
         "fields.d.ts".
      3. Replace all instances of "kintone.fieldTypes"
         with "KintoneRecordField".
  *********************************************************/
  type Fields = Base & {
    // ↓↓↓ Paste your fields here ↓↓↓

  }

  type Fc<T extends string> = {
    [key in T]: `${key}`
  }

  namespace E {
    interface Fields {
      type: string,
      record?: KintoneTypes.Fields
      records?: (KintoneTypes.Fields)[]
    }
  }
}