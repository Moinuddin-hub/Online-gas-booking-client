import Lottie from "lottie-react";


const FeatureIcon = ({icon}) => {
    return (
        <div>
            <Lottie animationData={icon} className='w-24 h-16  mx-auto'/>
        </div>
    );
};

export default FeatureIcon;