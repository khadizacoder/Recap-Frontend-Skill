import React from 'react'
import { Line, LineChart, XAxis, YAxis } from 'recharts'

const resultData = [
  {
    "studentId": 101,
    "studentName": "Rahul Sharma",
    "mathematics": 85,
    "science": 90,
    "english": 78,
    "history": 82,
    "computer": 95,
    "total": 430,
    "average": 86.0
  },
  {
    "studentId": 102,
    "studentName": "Ananya Sen",
    "mathematics": 92,
    "science": 88,
    "english": 95,
    "history": 89,
    "computer": 90,
    "total": 454,
    "average": 90.8
  },
  {
    "studentId": 103,
    "studentName": "Rohan Roy",
    "mathematics": 65,
    "science": 70,
    "english": 68,
    "history": 72,
    "computer": 80,
    "total": 355,
    "average": 71.0
  },
  {
    "studentId": 104,
    "studentName": "Priya Das",
    "mathematics": 78,
    "science": 82,
    "english": 85,
    "history": 80,
    "computer": 88,
    "total": 413,
    "average": 82.6
  },
  {
    "studentId": 105,
    "studentName": "Tanvir Ahmed",
    "mathematics": 95,
    "science": 96,
    "english": 89,
    "history": 91,
    "computer": 98,
    "total": 469,
    "average": 93.8
  },
  {
    "studentId": 106,
    "studentName": "Sneha Roy",
    "mathematics": 58,
    "science": 62,
    "english": 70,
    "history": 65,
    "computer": 75,
    "total": 330,
    "average": 66.0
  },
  {
    "studentId": 107,
    "studentName": "Amit Verma",
    "mathematics": 88,
    "science": 84,
    "english": 80,
    "history": 78,
    "computer": 91,
    "total": 421,
    "average": 84.2
  },
  {
    "studentId": 108,
    "studentName": "Meera Khan",
    "mathematics": 72,
    "science": 75,
    "english": 81,
    "history": 85,
    "computer": 79,
    "total": 392,
    "average": 78.4
  },
  {
    "studentId": 109,
    "studentName": "Kabir Patel",
    "mathematics": 90,
    "science": 91,
    "english": 88,
    "history": 86,
    "computer": 94,
    "total": 449,
    "average": 89.8
  },
  {
    "studentId": 110,
    "studentName": "Nusrat Jahan",
    "mathematics": 81,
    "science": 79,
    "english": 84,
    "history": 88,
    "computer": 87,
    "total": 419,
    "average": 83.8
  }
]

export default function Recharts() {
  return (
    <div className='mt-10'>
        <LineChart width={500} height={300} data={resultData}>
            <XAxis dataKey={'total'}></XAxis>
            <YAxis></YAxis>
            <Line dataKey={'science'} stroke='#F54927'></Line>
            <Line dataKey={'english'} stroke='#8FE03E'></Line>
            <Line dataKey={'history'} stroke='#4755D7'></Line>
        </LineChart>
    </div>
  )
}
