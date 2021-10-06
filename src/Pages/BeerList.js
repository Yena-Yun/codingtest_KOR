import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import beerdata from '../data.json';
import MaterialTable, { MTableToolbar, MTableActions } from 'material-table';
// import { NumberOutlined } from '@ant-design/icons';

const BeerList = () => {
  // const [loading, setLoading] = useState(false);
  const [data, setData] = useState(beerdata);
  const [sortedData, setSortedData] = useState([]);

  const abvArr = beerdata.map((el) => el.abv);
  const sortedAbv = abvArr.sort((a, b) => a - b);
  // const abv = sortedAbv.map((el) => el);

  const sortAlchohol = (abv) => {
    if (abv >= 4 && abv < 5) return setData(data.find((el) => el.abv >= 4 && el.abv < 5));
    else if (abv >= 5 && abv < 6) return data.filter((el) => el.abv >= 5 && el.abv < 6);
    else if (abv >= 6 && abv < 7) return data.filter((el) => el.abv >= 6 && el.abv < 7);
    else if (abv >= 7 && abv < 8) return data.filter((el) => el.abv >= 7 && el.abv < 8);
    else if (abv >= 8 && abv < 9) return data.filter((el) => el.abv >= 8 && el.abv < 9);
    else if (abv >= 9 && abv < 10) return data.filter((el) => el.abv >= 9 && el.abv < 10);
    else if (abv >= 10 && abv < 11) return data.filter((el) => el.abv >= 10 && el.abv < 11);
    else if (abv >= 11 && abv < 12) return data.filter((el) => el.abv >= 11 && el.abv < 12);
    else if (abv >= 12 && abv < 13) return data.filter((el) => el.abv >= 12 && el.abv < 13);
    else if (abv >= 13 && abv < 14) return data.filter((el) => el.abv >= 13 && el.abv < 14);
    else if (abv >= 14 && abv < 15) return data.filter((el) => el.abv >= 14 && el.abv < 15);
    else return data.filter((el) => el.abv >= 15);
  };

  return (
    <MaterialTable
      title='BeerList'
      components={{
        Toolbar: (props) => (
          <div style={{ height: '120px' }}>
            <MTableToolbar {...props} />
            <ChipGroup>
              <Chip onClick={() => sortAlchohol(sortedAbv.find((el) => el >= 4 && el < 5))}>4 - 5</Chip>
              <Chip>5 - 6</Chip>
              <Chip>6 - 7</Chip>
              <Chip>7 - 8</Chip>
              <Chip>8 - 9</Chip>
              <Chip>9 - 10</Chip>
              <Chip>10 - 11</Chip>
              <Chip>11 - 12</Chip>
              <Chip>12 - 13</Chip>
              <Chip>13 - 14</Chip>
              <Chip>14 - 15</Chip>
              <Chip>more</Chip>
            </ChipGroup>
          </div>
        ),
      }}
      options={{
        selection: true, // 체크박스
        draggable: true, // column 드래그 앤 드롭
      }}
      columns={[
        {
          title: 'Image',
          field: 'imageUrl',
          render: (data) => <img src={data.image_url} style={{ width: 40, borderRadius: '50%' }} alt='beer' />,
        },
        { title: 'Name', field: 'name' },
        { title: 'Description', field: 'description' },
        { title: 'First Brewed', field: 'first_brewed' },
        { title: 'Alchohol Degree', field: 'abv' },
      ]}
      data={data}
    />
  );
};

const ChipGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding: 4px 16px;
`;

const Chip = styled.div`
  width: 70px;
  height: 35px;
  border-radius: 40px;
  background: #e490b3;
  cursor: pointer;
  color: #fff;
  font-size: 14px;
  text-align: center;
  line-height: 35px;
  margin-right: 10px;
  padding: 0 10px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`;

export default BeerList;
