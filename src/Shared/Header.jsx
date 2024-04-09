import React from 'react';

const Header = ({title}) => {

    return (
        <div className='mx-auto md:w-3/12'>
            
            <h3 className="text-4xl uppercase border-y-4 text-center mb-8">{title}</h3>
       
        </div>
    );
};

export default Header;