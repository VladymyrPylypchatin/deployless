import React, { useEffect } from 'react';
// import sections
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import HowItWorks from '../components/sections/HowItWorks';
import Cta from '../components/sections/Cta';
import emailjs from 'emailjs-com';
import { v4 } from 'uuid';

const Home = () => {

  useEffect(() => {
    emailjs.init('user_aP1zRcAVwg7Q9wjWaCAbJ');
  }, []);

  const submitHandler = async (value) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
      const id = toast.info('Sending');

      await emailjs.send("gmail", "deployless", {
        "id": v4(),
        "userEmail": value,
        "referer": document.referrer
      });

      toast.update(id, {
        render: 'Success! Thank you for joining. I will get back to you soon',
        type: 'success'
      });

    } else {
      toast.error('Please check your email');
    }
  }



  return (
    <>
      <Hero className="illustration-section-01" />
      <FeaturesTiles />
      <HowItWorks topDivider />
      <Cta
        split
        onSubmit={submitHandler}
      />
      <ToastContainer
        position="bottom-center"
        hideProgressBar={true}
      />
    </>
  );
}

export default Home;