import { types, flow } from 'mobx-state-tree';

const House = types.model('House', {
  id: types.string,
  address: types.string,
  fias_addrobjs: types.array(types.string),
});

const Area = types.model('Area', {
  id: types.identifier,
  number: types.number,
  str_number: types.string,
  str_number_full: types.string,
  house: House,
});

export const AreaStore = types
  .model('AreaStore', {
    areas: types.map(Area),
    loading: types.optional(types.boolean, false),
  })
  .actions((self) => ({
    fetchAreas: flow(function* (areaIds: string[]) {
      const unknownIds = areaIds.filter((id) => !self.areas.has(id));

      if (unknownIds.length === 0) return;

      self.loading = true;
      try {
        const params = new URLSearchParams();
        unknownIds.forEach((id) => params.append('id__in', id));

        const response = yield fetch(
          `/api/v4/test/areas/?${params.toString()}`
        );
        const data = yield response.json();

        data.results.forEach((area: any) => {
          self.areas.put(area);
        });
      } catch (error) {
        console.error('Failed to fetch areas:', error);
      } finally {
        self.loading = false;
      }
    }),
  }))
  .views((self) => ({
    getArea(id: string) {
      return self.areas.get(id);
    },
    getAddress(id: string) {
      const area = self.areas.get(id);
      if (!area) return '';
      return `${area.house.address}, ${area.str_number_full}`;
    },
  }));
