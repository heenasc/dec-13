/*import React, { useEffect, useState } from 'react';
import { view } from '@forge/bridge';
import View from './View';
import Edit from './Edit';

function App() {
  const [context, setContext] = useState();

  useEffect(() => {
    view.getContext().then(setContext);
  }, []);

  if (!context) {
    return 'Loading...';
  }

  return context.extension.entryPoint === 'edit' ? <Edit/> : <View/>;
}

export default App;
*/


/*import { Label } from '@atlaskit/form';
import Select from '@atlaskit/select';
//import Select from 'react';
import React, { useEffect, useState } from 'react';
import { view } from '@forge/bridge';
import View from './View';
import Edit from './Edit';

const cities = [
    { text: 'Books', value: 1 },
    { text: 'Movies, Music & Games', value: 2 },
    { text: 'Electronics & Computers', value: 3 },
    { text: 'Home, Garden & Tools', value: 4 },
    { text: 'Health & Beauty', value: 5 },
    { text: 'Toys, Kids & Baby', value: 6 },
    { text: 'Clothing & Jewelry', value: 7 },
    { text: 'Sports & Outdoors', value: 8 },
    { text: 'Automotive & Industrial', value: 9 }
];

console.log("cities",cities);

const App = () => (
  <>
    <Label htmlFor="multi-select-example">What cities have you lived in?</Label>
    <Select
      inputId="multi-select-example"
      className="multi-select"
      classNamePrefix="react-select"
      options={cities}
      isMulti
      isSearchable={false}
      placeholder="Choose a city"
    />
  </>
);

export default App;*/

import React, { useEffect, useState } from 'react';
import { view } from '@forge/bridge';
import View from './View';
import Edit from './Edit';
import { invoke } from '@forge/bridge';
//import Select , {CreatableSelect}from '@atlaskit/select';
//import Select from 'react-select'; // Import the Select component

//import React from 'react';
import { Label } from '@atlaskit/form';
import Select from '@atlaskit/select';

const App = () => (
  <>
    <Label htmlFor="single-select-example">What city do you live in?</Label>
    <Select
      inputId="single-select-example"
      className="single-select"
      classNamePrefix="react-select"
      options={[
        { label: 'Adelaide', value: 'adelaide' },
        { label: 'Brisbane', value: 'brisbane' },
        { label: 'Canberra', value: 'canberra' },
        { label: 'Darwin', value: 'darwin' },
        { label: 'Hobart', value: 'hobart' },
        { label: 'Melbourne', value: 'melbourne' },
        { label: 'Perth', value: 'perth' },
        { label: 'Sydney', value: 'sydney' },
      ]}
      placeholder="Choose a city"
    />
  </>
);

export default App;



