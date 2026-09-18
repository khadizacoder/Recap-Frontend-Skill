import React from 'react'
import SimpleForm from './components/SimpleForm'
import FormAction from './components/FormAction'
import ControlledForm from './components/ControlledForm'
import UnControlledForm from './components/UnControlledForm'
import CustomHookForm from './components/CustomHookForm'
import ProductForm from './components/Product/ProductForm'
import ProductManagement from './components/Product/ProductManagement'

export default function App() {
  return (
    <div className='mt-10'>
      {/* <SimpleForm /> */}
      {/* <FormAction /> */}
      {/* <ControlledForm /> */}
      {/* <UnControlledForm /> */}
      {/* <CustomHookForm /> */}
      <ProductManagement />
    </div>
  )
}
