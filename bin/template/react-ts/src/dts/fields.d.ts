declare namespace kintone.types {
  interface Fields {

  }
  interface SavedFields extends Fields {
    $id: kintone.fieldTypes.Id;
    $revision: kintone.fieldTypes.Revision;
    更新人: kintone.fieldTypes.Modifier;
    建立人: kintone.fieldTypes.Creator;
    記錄號碼: kintone.fieldTypes.RecordNumber;
    更新時間: kintone.fieldTypes.UpdatedTime;
    建立時間: kintone.fieldTypes.CreatedTime;
  }
}
