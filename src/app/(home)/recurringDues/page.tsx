'use client'
import { CircleCheckBig } from 'lucide-react'
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Avatar,
} from '@nextui-org/react'
import { useCallback, useState } from 'react'
import { RecurringPayment } from '@/lib/types/RecurringPayment'
import NumberTicker from '@/app/_components/magicui/numberTicker'
import { useAsyncList } from '@react-stately/data'

const details = [
  {
    key: 'Upcoming Month',
    value: 500,
  },
  {
    key: 'Upcoming Week',
    value: 200,
  },
  {
    key: 'Today',
    value: 100,
  },
]

const columns = [
  {
    key: 'name',
    label: 'Name',
  },
  {
    key: 'amount',
    label: 'Amount',
  },
  {
    key: 'status',
    label: 'Status',
  },
  {
    key: 'dueIn/paid',
    label: 'Due In/Paid',
  },
]

const rows: RecurringPayment[] = [
  {
    name: 'ChatGPT',
    amount: 100,
    status: 'Paid',
    timeline: -2,
  },
  {
    name: 'Gym',
    amount: 50,
    status: 'Due',
    timeline: 2,
  },
]

const colorHexCodes = [
  {
    bg: '#fff1f2',
    text: '#292929',
  },
  {
    bg: '#ffdfe1',
    text: '#292929',
  },
  {
    bg: '#ffc5c9',
    text: '#292929',
  },
  {
    bg: '#ff9ca3',
    text: '#292929',
  },
  {
    bg: '#ff646f',
    text: '#f7f7f7',
  },
  {
    bg: '#ff3342',
    text: '#f7f7f7',
  },
  {
    bg: '#ee1424',
    text: '#f7f7f7',
  },
  {
    bg: '#c80d1a',
    text: '#f7f7f7',
  },
  {
    bg: '#a90f1a',
    text: '#f7f7f7',
  },
  {
    bg: '#89131b',
    text: '#f7f7f7',
  },
  {
    bg: '#4b0409',
    text: '#f7f7f7',
  },
  {
    bg: '#fffeea',
    text: '#292929',
  },
  {
    bg: '#fffdc5',
    text: '#292929',
  },
  {
    bg: '#fffa87',
    text: '#292929',
  },
  {
    bg: '#fff148',
    text: '#292929',
  },
  {
    bg: '#ffe31e',
    text: '#f7f7f7',
  },
  {
    bg: '#fcc504',
    text: '#f7f7f7',
  },
  {
    bg: '#eda200',
    text: '#f7f7f7',
  },
  {
    bg: '#b96d04',
    text: '#f7f7f7',
  },
  {
    bg: '#96540a',
    text: '#f7f7f7',
  },
  {
    bg: '#7b440c',
    text: '#f7f7f7',
  },
  {
    bg: '#472301',
    text: '#f7f7f7',
  },
  {
    bg: '#f4f9f4',
    text: '#292929',
  },
  {
    bg: '#e5f3e8',
    text: '#292929',
  },
  {
    bg: '#cce6d1',
    text: '#292929',
  },
  {
    bg: '#a3d2ac',
    text: '#292929',
  },
  {
    bg: '#73b580',
    text: '#f7f7f7',
  },
  {
    bg: '#59a869',
    text: '#f7f7f7',
  },
  {
    bg: '#3d7c4a',
    text: '#f7f7f7',
  },
  {
    bg: '#33623d',
    text: '#f7f7f7',
  },
  {
    bg: '#2c4f33',
    text: '#f7f7f7',
  },
  {
    bg: '#26412d',
    text: '#f7f7f7',
  },
  {
    bg: '#102315',
    text: '#f7f7f7',
  },
  {
    bg: '#f0f8fe',
    text: '#292929',
  },
  {
    bg: '#ddedfc',
    text: '#292929',
  },
  {
    bg: '#c2e1fb',
    text: '#292929',
  },
  {
    bg: '#99cff7',
    text: '#292929',
  },
  {
    bg: '#68b5f2',
    text: '#f7f7f7',
  },
  {
    bg: '#4e9ced',
    text: '#f7f7f7',
  },
  {
    bg: '#307be0',
    text: '#f7f7f7',
  },
  {
    bg: '#2766ce',
    text: '#f7f7f7',
  },
  {
    bg: '#2652a7',
    text: '#f7f7f7',
  },
  {
    bg: '#244884',
    text: '#f7f7f7',
  },
  {
    bg: '#1a2d51',
    text: '#f7f7f7',
  },
  {
    bg: '#f7f7f7',
    text: '#292929',
  },
  {
    bg: '#efefef',
    text: '#292929',
  },
  {
    bg: '#dcdcdc',
    text: '#292929',
  },
  {
    bg: '#bdbdbd',
    text: '#292929',
  },
  {
    bg: '#989898',
    text: '#f7f7f7',
  },
  {
    bg: '#7c7c7c',
    text: '#f7f7f7',
  },
  {
    bg: '#656565',
    text: '#f7f7f7',
  },
  {
    bg: '#525252',
    text: '#f7f7f7',
  },
  {
    bg: '#464646',
    text: '#f7f7f7',
  },
  {
    bg: '#3d3d3d',
    text: '#f7f7f7',
  },
  {
    bg: '#292929',
    text: '#f7f7f7',
  },
]

const RecurringDuesPage = () => {
  const [isLoading, setIsLoading] = useState(true)

  let list = useAsyncList({
    async load({ signal }) {
      setIsLoading(false)

      return {
        items: rows,
      }
    },
    async sort({ items, sortDescriptor }) {
      return {
        items: items.sort((a, b) => {
          let first = a[sortDescriptor.column]
          let second = b[sortDescriptor.column]
          let cmp = (parseInt(first) || first) < (parseInt(second) || second) ? -1 : 1

          if (sortDescriptor.direction === 'descending') {
            cmp *= -1
          }

          return cmp
        }),
      }
    },
  })

  const renderCell = useCallback((payment: RecurringPayment, columnKey: React.Key) => {
    const cellValue = payment[columnKey as keyof RecurringPayment]

    switch (columnKey) {
      case 'name':
        const firstCharacter = payment.name.charAt(0).toUpperCase()
        const randomColor = colorHexCodes[Math.floor(Math.random() * colorHexCodes.length)]
        return (
          <div className="flex items-center gap-2">
            <div
              className={`flex h-5 w-5 items-center justify-center rounded-sm font-medium`}
              style={{ backgroundColor: randomColor.bg, color: randomColor.text }}
            >
              {firstCharacter}
            </div>
            <p className="font-medium">{cellValue}</p>
          </div>
        )
      case 'amount':
        return (
          <div className="font-semibold text-blackHaze-950">
            $<NumberTicker value={cellValue as number} direction="up" />
          </div>
        )
      case 'status':
        return (
          <div
            className={`h-6 w-11 border ${
              cellValue === 'Paid'
                ? 'border-green-400 bg-green-300 text-green-600'
                : 'border-yellow-600 bg-yellow-500 text-yellow-800'
            } flex items-center justify-center rounded-sm font-medium`}
          >
            {cellValue}
          </div>
        )
      case 'dueIn/paid':
        return (
          <div>
            {payment.status === 'Paid' ? (
              <p className="text-blackHaze-500">Paid {-payment.timeline} days ago</p>
            ) : (
              <p className="text-blackHaze-500">Due in {payment.timeline} days</p>
            )}
          </div>
        )
      default:
        return cellValue
    }
  }, [])

  const handleSelectionChange = (selectedKeys: any) => {
    const selectedItem = rows.find((item) => item.name === selectedKeys.currentKey)
    console.log(selectedItem)
  }

  return (
    <div className="h-full w-full">
      {/* Page Header */}
      <div className="flex flex-col gap-2 border-b border-b-blackHaze-200 bg-blackHaze-50 px-2 py-3 lg:px-8">
        <h1 className="text-4xl font-medium">Recurring Dues</h1>
        <div className="flex items-center gap-2 bg-blackHaze-50">
          <CircleCheckBig color="#EDA200" size={16} />
          <span className="text-base text-blackHaze-300">
            Paid <NumberTicker value={6} />
            /10 this month
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-4 px-2 py-5 lg:px-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-medium">Details</h2>
          <div className="max-w-96 rounded-md border border-blackHaze-200">
            {details.map((detail, index) => (
              <div
                key={index}
                className="flex justify-between border-b border-blackHaze-200 px-4 py-2"
              >
                <span className="text-blackHaze-500">{detail.key}</span>
                <span className="font-medium text-blackHaze-950">
                  $<NumberTicker value={detail.value} direction="up" />
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-medium">Details</h2>
          <Table
            selectionMode="single"
            onSelectionChange={handleSelectionChange}
            aria-label="Example static collection table"
            sortDescriptor={list.sortDescriptor}
            onSortChange={list.sort}
          >
            <TableHeader columns={columns}>
              {(column) => <TableColumn allowsSorting key={column.key}>{column.label}</TableColumn>}
            </TableHeader>
            <TableBody
              items={list.items as RecurringPayment[]}
              emptyContent="No Payments in That Time Duration"
            >
              {(item: RecurringPayment) => {
                return (
                  <TableRow key={item.name}>
                    {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                  </TableRow>
                )
              }}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}

export default RecurringDuesPage
