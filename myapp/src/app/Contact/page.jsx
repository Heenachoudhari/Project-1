import ContactUs from "@/component/Contact/contact";
import Footer from "@/component/Footer/Footer";
import Navbar from "@/component/Home/Home";


export default function Home() {
    return ( 
        <div>
         <Navbar/>
         <ContactUs/> 
         <Footer/>  
        </div>
    );
}