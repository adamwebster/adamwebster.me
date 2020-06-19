import React, { useState } from 'react';
import { Combobox, Button } from '@adamwebster/fused-components';

interface Props {
  data: any;
}
const SearchBox = ({ data }: Props) => {
  const [searchValue, setSearchValue] = useState('');
  const [items, setItems] = useState([]);
  const searchData = e => {
    const test = data
      .search(e.target.value, { expand: true }) // Map over each ID and return the full document
      .map(({ ref }) => data.documentStore.getDoc(ref));
    console.log(test);
    // const test1 = dataReturned.filter(item =>
    //   item.title.includes(e.target.value)
    // );
    setItems(test);

    setSearchValue(e.target.value);
  };
  return (
    <Combobox
      aria-label="Search the site"
      inputIcon="search"
      openOnClick={false}
      id="SearchInput"
      items={items}
      keyToSearch="title"
      onChange={e => searchData(e)}
      onItemClick={index => (window.location.href = items[index].path)}
      itemFormatter={(index: any) => {
        return (
          <div onClick={() => console.log('click')}>
            <div>{items[index].title}</div> <div>{items[index].category}</div>
          </div>
        );
      }}
    />
  );
};

export default SearchBox;
