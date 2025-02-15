```javascript
import { BrowserRouter, Routes, Route, useSearchParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/search" element={<Search />} />
        {/* ...more routes */}
      </Routes>
    </BrowserRouter>
  );
}

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q');

  return (
    <div>
      <h1>Search Results</h1>
      <p>Query: {query}</p>
      {/* ...rest of search component */}
    </div>
  );
}
export default App;
```