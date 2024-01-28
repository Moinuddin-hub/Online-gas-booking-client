import icon1 from '../../assets/catalog.json';
import icon2 from '../../assets/location.json';
import icon3 from '../../assets/order.json';
import icon4 from '../../assets/payment.json';

const FeatureData=[
      
        { 
          icon:icon1,  
         title: 'Product Catalog',
         description: 'Categorize gas products based on type (e.g., propane, natural gas) and size.Provide detailed product descriptions, including price and safety information.',

        },
        { 
          icon:icon3,  
         title: 'Ordering System',
         description: 'Enable users to add products to their shopping cart.Implement a user-friendly checkout process.  Allow users to schedule delivery dates and times.',
       

        },
        { 
          icon:icon2,  
         title: 'Delivery Tracking',
         description: 'Provide real-time order tracking, allowing users to monitor the status of their delivery.Send notifications or alerts to users regarding the delivery statu',

        },
        { 
          icon:icon4,  
         title: 'Payment Integration',
         description: 'Securely integrate payment gateways for online transactions.Support multiple payment methods, such as credit/debit cards, digital wallets, or other online payment options.',

        }
    ]


export default FeatureData;
