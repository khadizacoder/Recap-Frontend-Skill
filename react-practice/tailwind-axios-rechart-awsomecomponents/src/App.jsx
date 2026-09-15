import React, { Suspense } from 'react'
import Navigate from './components/Navigate'
import Pricing from './components/Pricing'
import Recharts from './components/Recharts';
import MarksChart from './components/MarksChart';
import axios from 'axios';
import Loader from './components/Loader';


const pricingPromiss = fetch('/pricing.json').then(res => res.json());
const marksPromiss = axios.get('/marksData.json');

export default function App() {
  return (
    <div>
      <Navigate />
      <Loader />
      {/* <Pricing pricingPromiss={pricingPromiss} /> */}
      <Recharts />

      <Suspense fallback={<h1>Loading Marks data....</h1>}>
        <MarksChart marksPromiss={marksPromiss} />
      </Suspense>
    </div>
  )
}
