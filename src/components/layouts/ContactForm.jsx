import React from "react";
import Container from "../Container";
import Heading from "../Heading";


const ContactForm = () => {
  return (
    <>
      <div className="py-2">
        <Container>
          <div className="mb-10">
            <form action="">
              <Heading
                text={" Fill up a Form"}
                as={"p"}
                className={
                  "text-[25px] lg:text-[39px] font-bold text-[#262626] pb-6"
                }
              />

              <Heading
                text={"Name"}
                as={"p"}
                className={
                  "text-[20px] lg:text-[16px] font-bold text-[#262626]"
                }
              />
              <input type="text" name="" id="" placeholder="Your name here " className="lg:w-[700px] border-b border-b-[#D8D8D8] py-3 mb-6 focus:outline-none" />

              <Heading
                text={"Email"}
                as={"p"}
                className={
                  "text-[20px] lg:text-[16px] font-bold text-[#262626]"
                }
              />
              <input type="email" name="" id="" placeholder="Your email here" className="lg:w-[700px] border-b border-b-[#D8D8D8] py-3 mb-6 focus:outline-none"/>

              <Heading
                text={"Massage"}
                as={"p"}
                className={
                  "text-[20px] lg:text-[16px] font-bold text-[#262626] pb-6"
                }
              />
              <textarea
                name=""
                id=""
                placeholder="Your message here"
                cols={"85"}
                rows={"4"}
                className="focus:outline-none border-b border-b-[#D8D8D8]"
              ></textarea>
              <button className="px-[80px] py-4 bg-[#262626] block mt-3">
                <p className="font-bold text-[14px] text-white">Post</p>
              </button>
            </form>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ContactForm;
