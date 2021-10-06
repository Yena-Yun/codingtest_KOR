import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
import axios from 'axios';
import data from '../data.json';
import MaterialTable, { MTableToolbar } from 'material-table';

const BeerList = () => {
  // const [loading, setLoading] = useState(false);

  return (
    <MaterialTable
      title='BeerList'
      components={{
        Toolbar: (props) => (
          <div style={{ backgroundColor: 'yellow' }}>
            <MTableToolbar {...props} />
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
        { title: 'Dscription', field: 'description' },
        { title: 'First Brewed', field: 'first_brewed' },
        { title: 'Alchohol Degree', field: 'abv' },
      ]}
      data={data}
    />
  );
};

export default BeerList;
