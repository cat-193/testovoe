import { types, Instance } from 'mobx-state-tree';
import { MeterStore } from './MeterStore';
import { AreaStore } from './AreaStore';

export const RootStore = types.model('RootStore', {
  meterStore: MeterStore,
  areaStore: AreaStore,
});

export interface IRootStore extends Instance<typeof RootStore> {}

export const createRootStore = () => {
  return RootStore.create({
    meterStore: {},
    areaStore: {},
  });
};
