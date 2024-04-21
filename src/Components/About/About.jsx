
import about from '../../assets/image/gas.jpg'
const About = () => {
    return (
        <>
         <div className=" font-serif mb-4 mt-8">
         <h2 className="text-5xl font-bold text-center mb-4 text-black">Welcome To The Gas Shop</h2>
            <div className="hero ">
                
  <div className="hero-content flex-col lg:flex-row">
    <img src={about} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-3xl font-bold">OUR GAS SHOP</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-success">Get Started</button>
    </div>
  </div>
</div>
         </div>
        </>
    );
};

export default About;