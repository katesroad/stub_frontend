import React from 'react'
import { Row, usePagination, useTable } from 'react-table'
import { Wrapper } from './styles'
import { AiFillCaretLeft, AiFillCaretRight, BsChevronDown } from 'react-icons/all'


// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const Table = ({ columns, data, fetchData, pageCount: controlledPageCount }) => {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    // eslint-disable-next-line
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    // Get the state from the instance
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 }, // Pass our hoisted table state
      manualPagination: true, // Tell the usePagination
      // hook that we'll handle our own data fetching
      // This means we'll also have to provide our own
      // pageCount.
      pageCount: controlledPageCount,
    },
    usePagination,
  )

  // Listen for changes in pagination and use the state to fetch our new data
  React.useEffect(() => {
    fetchData({ pageIndex, pageSize })
  }, [fetchData, pageIndex, pageSize])


  // Render the UI for your table
  return (
    <Wrapper>
      <table {...getTableProps()}>
        <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
        </thead>
        <tbody {...getTableBodyProps()}>
        { // eslint-disable-next-line
          page.map((row: Row<any>) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell: { getCellProps: () => JSX.IntrinsicAttributes & React.ClassAttributes<HTMLTableDataCellElement> & React.TdHTMLAttributes<HTMLTableDataCellElement>; render: (arg0: string) => boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined }) => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className='pagination'>
        <div className='dropdown'>
          Items per page:
          <div className='page-count'>
            <select
              value={pageSize}
              onChange={e => {
                setPageSize(Number(e.target.value))
              }}
            >
              {[10, 20, 30, 40, 50].map(pageSize => (
                <option key={pageSize} value={pageSize}>
                  {pageSize}
                </option>
              ))}
            </select>
            <BsChevronDown className='icon' />
          </div>

          <div className='item-info'>
            {(pageIndex) * pageSize + 1}-{(pageIndex + 1) * pageSize} of {pageOptions.length * pageSize} items
          </div>
        </div>
        <div className='page-control'>
          <input
            type='number'
            defaultValue={pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(page)
            }}
          />
          <BsChevronDown className='icon' />
          <div className='page-info'>
            {pageIndex + 1} of {pageOptions.length} Pages
          </div>
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            <AiFillCaretLeft />
          </button>
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            <AiFillCaretRight />
          </button>
        </div>
      </div>
    </Wrapper>
  )
}


