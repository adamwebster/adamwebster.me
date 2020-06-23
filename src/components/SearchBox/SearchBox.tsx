import React, { useState } from 'react';
import { Combobox } from '@adamwebster/fused-components';
import styled from 'styled-components';
import { AWMVariables } from '../../styles/StyledVariables';

const StyledCombobox = styled(Combobox)`
  border-radius: ${AWMVariables.borderRadius};
`;

const SearchCategory = styled.div`
  font-size: 12px;
  font-weight: 700;
`;

interface Props {
  data: any;
}

const SearchBox = ({ data }: Props) => {
  const [items, setItems] = useState<Array<any>>([]);
  const searchData = (e: any) => {
    const results = data
      .search(e.target.value, { expand: true }) // Map over each ID and return the full document
      .map(({ ref }: any) => data.documentStore.getDoc(ref));
    // const test1 = dataReturned.filter(item =>
    //   item.title.includes(e.target.value)
    // );
    setItems(results.slice(0, 5));
  };
  return (
    <StyledCombobox
      aria-label="Search the site"
      inputIcon="search"
      openOnClick={false}
      id="SearchInput"
      items={items}
      keyToSearch="title"
      onChange={e => searchData(e)}
      menuBorderRadius={AWMVariables.borderRadius}
      onItemClick={(index: number) => {
        if (items[index]) {
          if (typeof window !== 'undefined') {
            window.location.href = items[index].path;
          }
        }
      }}
      itemFormatter={(index: any) => {
        return (
          <div key={items[index] && items[index].id}>
            <div>{items[index] && items[index].title}</div>{' '}
            <SearchCategory>
              {items[index] && items[index].category}
            </SearchCategory>
          </div>
        );
      }}
    />
  );
};

export default SearchBox;
