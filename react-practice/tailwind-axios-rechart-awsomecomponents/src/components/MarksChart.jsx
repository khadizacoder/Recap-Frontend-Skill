import React, { use } from 'react'
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

export default function MarksChart({marksPromiss}) {
    const marksDataRes = use(marksPromiss);
    const markData = marksDataRes.data;

    // data processing for the chart
    const marksChartData = markData.map(studentData => {
        const student = {
            id: studentData.studentId,
            name: studentData.studentName,
            Mathematics: studentData.marks.Mathematics,
            Science: studentData.marks.Science,
            English: studentData.marks.English,
        }
        const avg = (student.Mathematics + student.Science + student.English) / 3;
        student.avg = avg;

        return student;
    })
    console.log(marksChartData)

  return (
    <div className='my-30'>
        <BarChart width={900} height={300} data={marksChartData}>
            <XAxis dataKey={'name'} />
            <YAxis />
            <Bar dataKey={'Mathematics'} fill='#FFD51E'></Bar>
            <Bar dataKey={'Science'} fill='#FF467A'></Bar>
            <Bar dataKey={'English'} fill='#5003C0'></Bar>
        </BarChart>
    </div>
  )
}
