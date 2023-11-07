import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function FAQ() {
  
  const queArray = [
    {
      head1: " Why buy from you?",
      para1:
        "As we are committed to customer satisfaction and fulfil the needs and expectations of our school owners, we have happier clients for our services. And as we are a digital infrastructure company, we will integrate the feature technologies to all our school clients to ace in their school services."
    },

    {
      head1: "How to buy it?",
      para1:
        "In the top of this page, click the signup tab and do the basic registration, after verifications, we will share the link to proceed to purchase."
    },
    ,
    {
      head1: "Can I buy a website alone or ERP alone?",
      para1:
        "Yes, you can, but just imagine, if you have a single point of communication of all your school services integrated ERP would be better."
    },
    ,
    {
      head1: "Pricing?",
      para1:
        "As we are charging based on the features of the website and clients other requirements, it varies. But you will receive more value for what you paid."
    },
    ,
    {
      head1: "Can I manage multiple schools?",
      para1: "Yes, our SaaS model is designed to manage multiple schools"
    },
    ,
    {
      head1: "Can I try before I buy?",
      para1: "Yes, we provide trails for schools."
    },
    ,
    {
      head1: "Can I change my plan later?",
      para1: "Yes, you can change the plan."
    },
    ,
    {
      head1: "What payment methods do you accept? ",
      para1:
        "UPI, all app based payments, Credit Card, Debit Card and internet banking too."
    },
    ,
    {
      head1: "Do you have a contract ",
      para1: "Yes, for both the parties’ benefits, a contract will be made."
    }
  ];
  return (
    <>
      <div className="accordion">
        <h1 className="accordionhead">Frequently Asked Questions</h1>
        <Accordion
          fullWidth={false}
          variant="shadow"
          isCompact={false}
          motionProps={{
            variants: {
              enter: {
                y: 0,
                opacity: 1,
                height: "auto",
                transition: {
                  height: {
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                    duration: 1
                  },
                  opacity: {
                    easings: "ease",
                    duration: 1
                  }
                }
              },
              exit: {
                y: -10,
                opacity: 0,
                height: 0,
                transition: {
                  height: {
                    easings: "ease",
                    duration: 0.25
                  },
                  opacity: {
                    easings: "ease",
                    duration: 0.3
                  }
                }
              }
            }
          }}
        >
          {queArray.map((item, index) => (
            <AccordionItem
              key={index}
              aria-label="Accordion 1"
              title={item.head1}
            >
              {item.para1}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
}
