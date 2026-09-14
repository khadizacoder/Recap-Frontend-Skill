import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AllCarts from './components/AllCarts';
import Footer from './components/Footer';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const custommerData = fetch("/custommer.json").then(res => res.json());

function App() {
  const [progress, setProgress] = useState([]);
  const [cmp, setCmp] = useState([]);

  const handleProgress = (pCart) => {
    const alreadyprogress = progress.some(prev => prev.id == pCart.id);
    const alreadyComplete = cmp.some(prev => prev.id == pCart.id);
    // const notify = () => toast('Add Progress');

    if (!alreadyprogress && !alreadyComplete)
    {
      setProgress(prev => [...prev, pCart]);
      toast.success("Added to Task Status!");
    }
    else if(alreadyComplete)
      toast.info("Task already completed!");
    else
      toast.warning("Already in progress!");
  }

  const handleCmp = (cCart) => {
    const alreadyCmp = cmp.some(prev => prev.id === cCart.id);

    if (!alreadyCmp) {
      setCmp(prev => [...prev, cCart]);
      setProgress(prev => prev.filter(item => item.id !== cCart.id));
      toast.success("Task Marked as Complete!");
    }
  }



  console.log("Resolve ", cmp)

  return (
    <>
     <ToastContainer position='top-right' autoClose={2000} />
      <Navbar />

      <main className='bg-[#627382]/8'>
        <div className='w-11/12 max-w-screen-xl mx-auto'>
          <Hero progress={progress} cmp={cmp} />
          <div className='grid grid-cols-1 md:grid-cols-[70%_30%] pb-10'>

            <div className='order-2 md:order-1'>
              <h2 className='font-semibold text-2xl'>Customer Tickets</h2>

              <AllCarts custommerData={custommerData} handleProgress={handleProgress} />
            </div>

            <aside className='order-1 md:order-2'>
              <div>
                <h2 className='font-semibold text-2xl'>Task Status</h2>
                <div className='mt-2'>
                  {
                    progress.length > 0 ? (

                      progress.map(item => (
                        <div key={item.id} className='bg-white p-6 rounded mb-4 shadow'>
                          <h2 className='font-semibold text-xl'>{item.title}</h2>
                          <button onClick={() => handleCmp(item)} className='bg-[#02A53B] text-white w-full py-2 mt-3 rounded cursor-pointer'>Complete</button>
                        </div>
                      ))

                    ) : (<p>Select a ticket to add to Task Status</p>)
                  }
                </div>
              </div>

              <div className='my-10'>
                <h2 className='font-semibold text-2xl'>Resolved Task</h2>
                <div className='mt-2'>
                  {
                    cmp.length > 0 ? (

                      cmp.map(item => (
                        <div key={item.id} className='bg-[#E0E7FF] p-4 rounded mb-4'>
                          <h2 className='font-medium text-lg'>{item.title}</h2>
                        </div>
                      ))

                    ) : (<p>No resolved tasks yet.</p>)
                  }
                </div>
              </div>
            </aside>

          </div>
        </div>
      </main>

      <Footer />

    </>
  )
}

export default App
