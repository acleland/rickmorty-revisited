import { Switch } from 'react-router-dom';
import CharacterDetail from './views/CharacterDetail';
import CharacterList from './views/CharacterList';
import { Route } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Switch>
        <Route path="/:id">
          <CharacterDetail />
        </Route>
        <Route path="/">
          <CharacterList />
        </Route>
      </Switch>
    </>
  );
}
