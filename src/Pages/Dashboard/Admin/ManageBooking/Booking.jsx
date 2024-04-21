import React from 'react';

const Booking = ({booking}) => {
    console.log(booking);
  
    return (
        <div>
            <p>{booking?.order?.currency}</p>
            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
    
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th></th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
   
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Booking;