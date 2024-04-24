// import icon1 from "../../assets/image/catelog-removebg-preview.png";
// import icon2 from "../../assets/image/order-removebg-preview.png";
// import icon3 from "../../assets/image/Checkout-Process-removebg.png";
// import icon4 from "../../assets/image/Payment-Integration-remove.png";
import { GrCatalog } from "react-icons/gr";
import {FaShoppingCart } from "react-icons/fa";
import { IoBagCheckOutline } from "react-icons/io5";
import { RiSecurePaymentLine } from "react-icons/ri";
const FeatureData = [
  {
    // icon:GrCatalog,
    title: "Product Catalog",
    description:
      "Categorize gas products based on type (e.g., propane, natural gas) and size.Provide detailed product descriptions, including price and safety information.",
  },
  {
    // icon: FaShoppingCart,
    title: "Ordering System",
    description:
      "Enable users to add products to their shopping cart.Implement a user-friendly checkout process.  Allow users to schedule delivery dates and times.",
  },
  {
    // icon:IoBagCheckOutline ,
    title: "Checkout Process",
    description:
      " streamlined checkout process with multiple payment options (credit/debit card, PayPal, etc.), shipping options, and order summary.",
  },
  {
    // icon:RiSecurePaymentLine,
    title: "Payment Integration",
    description:
      "Securely integrate payment gateways for online transactions.Support multiple payment methods, such as credit/debit cards, digital wallets, or other online payment options.",
  },
];

export default FeatureData;
