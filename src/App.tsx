import { createRootStore } from './stores/RootStore';
import { StoreContext } from './contexts/StoreContext';
import { MeterList } from './components/MeterList';

const rootStore = createRootStore();

function App() {
  return (
    <StoreContext.Provider value={rootStore}>
      <MeterList store={rootStore} />
    </StoreContext.Provider>
  );
}

export default App;
