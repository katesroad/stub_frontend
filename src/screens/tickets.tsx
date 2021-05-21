import * as React from 'react'
import { AppLayout } from '../components/commom'
import { Table } from '../components/commom/table'
import cn from 'classnames'
import { Wrapper } from './tickets.styles'
import { AiOutlineEye } from 'react-icons/ai'
import { FiEdit } from 'react-icons/fi'
import { RiDeleteBinLine } from 'react-icons/ri'


const columns = [
  {
    Header: 'Name',
    accessor: 'name',
  },
  {
    Header: 'Price',
    id: 'price',
    // eslint-disable-next-line
    Cell: ({ row }: { row: any }) => (
      <span>
            ${row.original.price}
      </span>
    ),
  },
  {
    Header: 'Time Added',
    accessor: 'time',
  },
  {
    Header: 'Status',
    id: 'status',
    // eslint-disable-next-line
    Cell: ({ row }: { row: any }) => (
      <span className={cn(row.original.status === 'Sold' ? 'sold' : 'sale', 'status')}>
            {row.original.status}
      </span>
    ),
  },
  {
    Header: () => null,
    id: 'operation',
    // eslint-disable-next-line
    Cell: ({ row }: { row: any }) => (
      <div className={cn(row.original.status === 'Sold' ? 'sold' : 'sale', 'operation')}>
            <AiOutlineEye className='icon'/>
            <FiEdit className='icon'/>
            <RiDeleteBinLine className='icon'/>
      </div>
    ),
  },
]


const data = [{
  name: 'Barcelona vs. Real Madrid first class seat',
  price: 650,
  time: '2020, May 11',
  status: 'For Sale',
}, {
  name: 'Barcelona vs. Real Madrid first class seat',
  price: 650,
  time: '2020, May 11',
  status: 'For Sale',
}, {
  name: 'Barcelona vs. Real Madrid first class seat',
  price: 650,
  time: '2020, May 11',
  status: 'Sold',
}, {
  name: 'Barcelona vs. Real Madrid first class seat',
  price: 650,
  time: '2020, May 11',
  status: 'For Sale',
},
]

export default function TicketsScreen() {
  return (
    <AppLayout title='Tickets'>
      <Wrapper>
        <Table fetchData={()=>null} pageCount={100} columns={columns} data={data} />
      </Wrapper>
    </AppLayout>

  )
}
