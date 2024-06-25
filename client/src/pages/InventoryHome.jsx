import { Fragment } from "react";
import Wrapper from "../inventorycomponent/components/wrapper/Wrapper";
import Section from "../inventorycomponent/components/Section";
import { products, discoutProducts } from "../inventorycomponent/utils/products";
import SliderHome from "../inventorycomponent/components/Slider";
import useWindowScrollToTop from "../inventorycomponent/hooks/useWindowScrollToTop";
import "../App.css"

const Home = () => {
  const newArrivalData = products.filter(
    (item) => item.category === "mobile" || item.category === "wireless"
  );
  const bestSales = products.filter((item) => item.category === "sofa");
  useWindowScrollToTop();
  return (
    <Fragment>
      <div style={{marginTop:"680em",width:"100%"}}>
      <SliderHome />
      <Wrapper/>  
      </div>  
      <div style={{marginLeft:"60vh"}}>
      <Section
        title="Big Discount"
        bgColor="#f6f9fc"
        productItems={discoutProducts}
      />
      
      <Section
        title="New Arrivals"
        bgColor="white"
        productItems={newArrivalData}
      />
       
      <Section title="Best Sales" bgColor="#f6f9fc" productItems={bestSales} />
      </div> 
    </Fragment>
  );
};

export default Home;
