import { types, flow } from 'mobx-state-tree';

const Meter = types.model('Meter', {
  id: types.identifier,
  _type: types.array(types.string),
  area: types.model({
    id: types.string,
  }),
  is_automatic: types.maybeNull(types.boolean),
  communication: types.string,
  description: types.string,
  serial_number: types.string,
  installation_date: types.string,
  brand_name: types.maybeNull(types.string),
  model_name: types.maybeNull(types.string),
  initial_values: types.array(types.number),
});

export const MeterStore = types
  .model('MeterStore', {
    meters: types.array(Meter),
    count: types.optional(types.number, 0),
    loading: types.optional(types.boolean, false),
    offset: types.optional(types.number, 0),
    limit: types.optional(types.number, 20),
  })
  .actions((self) => {
    const fetchMeters = flow(function* () {
      self.loading = true;
      try {
        const response = yield fetch(
          `/api/v4/test/meters/?limit=${self.limit}&offset=${self.offset}`
        );
        const data = yield response.json();

        self.meters.replace(data.results);
        self.count = data.count;
      } catch (error) {
        console.error('Failed to fetch meters:', error);
      } finally {
        self.loading = false;
      }
    });

    const deleteMeter = flow(function* (meterId: string) {
      try {
        yield fetch(`/api/v4/test/meters/${meterId}/`, {
          method: 'DELETE',
        });

        yield fetchMeters();
      } catch (error) {
        console.error('Failed to delete meter:', error);
      }
    });

    const setOffset = (newOffset: number) => {
      self.offset = newOffset;
    };

    return {
      fetchMeters,
      deleteMeter,
      setOffset,
    };
  })
  .views((self) => ({
    get areaIds() {
      return self.meters.map((meter) => meter.area.id);
    },
    get totalPages() {
      return Math.ceil(self.count / self.limit);
    },
    get currentPage() {
      return Math.floor(self.offset / self.limit) + 1;
    },
  }));
