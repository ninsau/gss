import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type VouchersModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class VouchersModel {
  readonly id: string;
  readonly name?: string | null;
  readonly discount?: number | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<VouchersModel, VouchersModelMetaData>);
  static copyOf(source: VouchersModel, mutator: (draft: MutableModel<VouchersModel, VouchersModelMetaData>) => MutableModel<VouchersModel, VouchersModelMetaData> | void): VouchersModel;
}