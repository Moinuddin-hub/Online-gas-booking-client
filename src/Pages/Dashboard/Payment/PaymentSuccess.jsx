import { useParams } from "react-router-dom";
const PaymentSuccess = () => {
  const { tranId } = useParams();
  return (
    <div>
      <h2></h2>
      <p className="text-2xl font-sans font-bold">Payment successful! Transaction ID: {tranId}</p>
     <div className="w-1/2 mx-auto">
     <img src="https://i.ibb.co/Tc2vpck/PAYMENT-SUCCESS.png" alt="" className="" />
     </div>
    </div>
  );
};

export default PaymentSuccess;
