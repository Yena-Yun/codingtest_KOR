/* eslint-disable */
import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import beerdata from '../data.json';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import MaterialTable, { MTableToolbar, MTableActions } from 'material-table';
import { ShoppingCartOutlined, ArrowRightOutlined } from '@ant-design/icons';

const BeerList = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [data, setData] = useState(beerdata);

  const fourToFive = '#34411f';
  const fiveToSix = '#556B2F';
  const sixToSeven = '#228B22';
  const sevenToEight = '#338a5a';
  const eightToNine = '#3CB371';
  const nineToTen = '#46d687';
  const tenToEleven = '#bce757';
  const elevenToTwelve = '#bdff7f';
  const twelveToThirteen = '#f8da55';
  const thirteenToFourteen = '#fc8b4a';
  const fourteenToFifteen = '#d65b5b';
  const fifteenAndAbove = '#ee2c2c';

  const abvArr = beerdata.map((el) => el.abv);
  const sortedAbv = abvArr.sort((a, b) => a - b);

  const columns = [
    {
      title: 'Image',
      field: 'imageUrl',
      cellStyle: {
        width: 100,
        minWidth: 100,
        textAlign: 'center',
      },
      headerStyle: {
        textAlign: 'center',
      },
      render: (data) => <img src={data.image_url} style={{ width: 40, borderRadius: '50%' }} alt='beer' />,
    },
    {
      title: 'Name',
      field: 'name',
      cellStyle: {
        width: 80,
        minWidth: 80,
        textAlign: 'center',
      },
      headerStyle: {
        textAlign: 'center',
      },
    },
    {
      title: 'Description',
      field: 'description',
      cellStyle: {
        width: 350,
        minWidth: 350,
      },
      headerStyle: {
        textAlign: 'center',
      },
    },
    {
      title: 'First Brewed',
      field: 'first_brewed',
      cellStyle: {
        width: 80,
        minWidth: 80,
        textAlign: 'center',
      },
      headerStyle: {
        textAlign: 'center',
      },
    },
    {
      title: 'Alchohol Degree',
      field: 'abv',
      cellStyle: {
        width: 80,
        minWidth: 80,
        textAlign: 'center',
      },
      headerStyle: {
        textAlign: 'center',
      },
    },
  ];

  // useEffect(() => {
  //   setDrag([...drag, ...data.map((id) => id)]);
  // }, [drag, data]);

  const sortAlchohol = (abv) => {
    if (abv >= 4 && abv < 5) setData(data.filter((el) => el.abv >= 4 && el.abv < 5));
    else if (abv >= 5 && abv < 6) setData(data.filter((el) => el.abv >= 5 && el.abv < 6));
    else if (abv >= 6 && abv < 7) setData(data.filter((el) => el.abv >= 6 && el.abv < 7));
    else if (abv >= 7 && abv < 8) setData(data.filter((el) => el.abv >= 7 && el.abv < 8));
    else if (abv >= 8 && abv < 9) setData(data.filter((el) => el.abv >= 8 && el.abv < 9));
    else if (abv >= 9 && abv < 10) setData(data.filter((el) => el.abv >= 9 && el.abv < 10));
    else if (abv >= 10 && abv < 11) setData(data.filter((el) => el.abv >= 10 && el.abv < 11));
    else if (abv >= 11 && abv < 12) setData(data.filter((el) => el.abv >= 11 && el.abv < 12));
    else if (abv >= 12 && abv < 13) setData(data.filter((el) => el.abv >= 12 && el.abv < 13));
    else if (abv >= 13 && abv < 14) setData(data.filter((el) => el.abv >= 13 && el.abv < 14));
    else if (abv >= 14 && abv < 15) setData(data.filter((el) => el.abv >= 14 && el.abv < 15));
    else return setData(data.filter((el) => el.abv >= 15));
  };

  return (
    <MaterialTable
      title={
        <Header>
          <h1>BeerList</h1>
          <button
            onClick={() => {
              history.push('/cart');
            }}
          >
            Go to Cart &nbsp;
            <ArrowRightOutlined />
          </button>
        </Header>
      }
      data={data}
      components={{
        Toolbar: (props) => (
          <div
            style={{
              width: '100%',
              height: '120px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              paddingTop: '30px',
            }}
          >
            <MTableToolbar {...props} />
            <RangeWrapper>
              <Range
                style={{
                  backgroundColor: fourToFive,
                }}
                onClick={() => {
                  sortAlchohol(sortedAbv.find((el) => el >= 4 && el < 5));
                }}
              >
                4 - 5
              </Range>
              <Range
                style={{
                  backgroundColor: fiveToSix,
                }}
                onClick={() => sortAlchohol(sortedAbv.find((el) => el >= 5 && el < 6))}
              >
                5 - 6
              </Range>
              <Range
                style={{
                  backgroundColor: sixToSeven,
                }}
                onClick={() => sortAlchohol(sortedAbv.find((el) => el >= 6 && el < 7))}
              >
                6 - 7
              </Range>
              <Range
                style={{
                  backgroundColor: sevenToEight,
                }}
                onClick={() => sortAlchohol(sortedAbv.find((el) => el >= 7 && el < 8))}
              >
                7 - 8
              </Range>
              <Range
                style={{
                  backgroundColor: eightToNine,
                }}
                onClick={() => sortAlchohol(sortedAbv.find((el) => el >= 8 && el < 9))}
              >
                8 - 9
              </Range>
              <Range
                style={{
                  backgroundColor: nineToTen,
                }}
                onClick={() => sortAlchohol(sortedAbv.find((el) => el >= 9 && el < 10))}
              >
                9 - 10
              </Range>
              <Range
                style={{
                  backgroundColor: tenToEleven,
                }}
                onClick={() => sortAlchohol(sortedAbv.find((el) => el >= 10 && el < 11))}
              >
                10 - 11
              </Range>
              <Range
                style={{
                  backgroundColor: elevenToTwelve,
                }}
                onClick={() => sortAlchohol(sortedAbv.find((el) => el >= 11 && el < 12))}
              >
                11 - 12
              </Range>
              <Range
                style={{
                  backgroundColor: twelveToThirteen,
                }}
                onClick={() => sortAlchohol(sortedAbv.find((el) => el >= 12 && el < 13))}
              >
                12 - 13
              </Range>
              <Range
                style={{
                  backgroundColor: thirteenToFourteen,
                }}
                onClick={() => sortAlchohol(sortedAbv.find((el) => el >= 13 && el < 14))}
              >
                13 - 14
              </Range>
              <Range
                style={{
                  backgroundColor: fourteenToFifteen,
                }}
                onClick={() => sortAlchohol(sortedAbv.find((el) => el >= 14 && el < 15))}
              >
                14 - 15
              </Range>
              <Range
                style={{
                  backgroundColor: fifteenAndAbove,
                }}
                onClick={() => sortAlchohol(sortedAbv.find((el) => el >= 15))}
              >
                15 - above
              </Range>
            </RangeWrapper>
          </div>
        ),
      }}
      onRowClick={(e, rowData) => {
        console.log(rowData);
        console.log(rowData.id);
        dispatch({ type: 'addBeer', payload: rowData });
      }}
      columns={columns}
      options={{
        draggable: true,
        search: false,
        paging: false,
      }}
    />
  );
};

const Header = styled.div`
  position: relative;
  height: 100px;
  font-size: 20px;
  font-weight: 700;
  width: 1000px;
  margin-bottom: 20px;

  & h1 {
    position: absolute;
    top: 0;
    left: 40px;
    font-size: 40px;
    font-weight: 700;
  }

  & button {
    position: absolute;
    top: 40px;
    right: 80px;
    cursor: pointer;
    background: none;
    border: none;
    border-radius: 4px;
    padding: 8px 18px;
    font-size: 24px;
    text-decoration: underline;
  }
`;

const RangeWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

const Range = styled.div`
  width: 100px;
  cursor: pointer;
  color: #fff;
  font-size: 14px;
  text-align: center;
  line-height: 35px;
  padding: 4px 0;

  &:hover,
  &:active {
    opacity: 0.8;
  }
`;

export default BeerList;
