'use client';

import { type ComplexPresenterProps } from '../../interfaces/common';
import { type UserEntity } from '../../../domain/entities/users';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

import { css } from '@emotion/react'
import styled from '@emotion/styled'

/*
const Container = styled.div(props => ({
  display: 'flex',
  flexDirection: props.column && 'column'
}))
*/


const color = 'gray'

const columns: GridColDef<(typeof rows)[number]>[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerClassName: color,
    headerName: 'ФИО',
    width: 150,
    sortable: true,
  },
  {
    field: 'username',
    headerName: 'login',
    width: 150,
  },
  {
    field: 'email',
    headerName: 'E-mail',
    width: 150,
  },
  {
    field: 'phone',
    headerName: 'Телефон',
    sortable: false,
    width: 160,
  },
  {
    field: 'company',
    headerName: 'Компания',
    sortable: false,
    width: 400,
    valueGetter: (value, row) => `${row.company.name || ''} ${row.company.catchPhrase || ''}`,
  },
];



export type UsersPagePresenterProps = ComplexPresenterProps<{
  data: {
    items: UserEntity[];
  };
}>;



export function UsersPagePresenter({data}){
  //console.log(data)
  return (
    <Box sx={{ height: 400, width: '100%','& .super-app-theme--header': {
        backgroundColor: 'rgba(255, 7, 0, 0.55)',
      }, }}>
      <DataGrid
        sx={{ backgroundColor: color, }}
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}

