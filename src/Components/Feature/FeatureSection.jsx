import Data from '../Feature/FeatureData'
import FeatureCard from './FeatureCard';

const FeatureSection = () => {
    console.log(Data)
    return (
        <>
        
         <div className=" bg-slate-300 mt-4 mb-4">
            <h2 className='text-center text-3xl font-bold py-4 my-8 mb-8'>Feature</h2>
         <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2">
           {
                Data.map((item) => <FeatureCard key={item.title} icon={item.icon} 
                title={item.title} description={item.description} />)
            }
           </div>
         </div>
        </>
    );
};

export default FeatureSection;