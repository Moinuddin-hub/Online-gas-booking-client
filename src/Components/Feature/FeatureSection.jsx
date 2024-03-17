import Data from '../Feature/FeatureData'
import FeatureCard from './FeatureCard';

const FeatureSection = () => {
    console.log(Data)
    return (
        <>
        
         <div className=" font-serif  mt-4 mb-4">
            <h2 className='text-center text-3xl font-bold  '>Feature</h2>
            <p className="text-center">An online gas booking system typically includes various features to streamline <br/> the process of booking and managing gas services</p>
         <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2">
           {
                Data?.map((item) => <FeatureCard key={item.title} icon={item.icon} 
                title={item.title} description={item.description} />)
            }
           </div>
         </div>
        </>
    );
};

export default FeatureSection;