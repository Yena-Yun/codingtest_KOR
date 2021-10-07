import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import MaterialTable, { MTableToolbar } from 'material-table';

const Cart = (props) => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart);
  console.log(cartData);

  const HeaderTitle = ({ variant, text }) => (
    <div
      variant={variant}
      style={{
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        fontSize: '40px',
        fontWeight: '700',
        textAlign: 'center',
        width: '400px',
      }}
    >
      {text}
    </div>
  );

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

  return (
    <MaterialTable
      title={<HeaderTitle variant='h6' text='Cart' />}
      data={cartData}
      components={{
        Toolbar: (props) => (
          <div
            style={{
              width: '100%',
              height: '80px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              paddingTop: '30px',
              borderBottom: '1px solid lightgrey',
            }}
          >
            <MTableToolbar {...props} />
          </div>
        ),
      }}
      columns={columns}
      onRowClick={(e, rowData) => {
        console.log(rowData);
        console.log(rowData.id);
        dispatch({ type: 'removeBeer', payload: rowData });
      }}
      options={{
        search: false,
        paging: false,
      }}
    />
  );
};

const CartBlock = styled.div``;

export default Cart;
