import logo from './logo.svg';
import './App.css';
import Random from './Random';
import Tag from './Tag';
import './index.css'

function App() { 
  return (
    <div className="w-full  h-screen flex flex-col background relative overflow-x-hidden items-center">
           <h1 className='bg-white  rounded-lg text-center mt-[40px] w-11/12
             px-10 py-2 text-4xl font-bold absoulte'>RANDOM GIFS</h1>
           <div className='flex flex-col w-full items-center gap-y-10 mt-[30px] '>
            <Random  />
            <Tag/>
           </div>

    </div> 
  );
}

export default App;
