import React from "react";
import Section from "../../Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "../../SectionHeader";
import Faq from "../../Faq";

function FaqAccordianSection(props) {
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={2}
          spaced={true}
          className="text-center"
        />
        
        <Faq
          items={[
            {
              question: "What is a business-specific functionality?",
              answer:
                "A Business-Specific functionality is a tool built into your website that is useful to your specific business. The kind of tool depends on the industry your business is in and the goals you have for your website in relation to your business.",
                answer2:
                "For example, the business-specific functionality for a restaurant's website would be online ordering from their menu. This is a functionality that serves the restaurant's goal of taking food orders online and increasing overall customer orders. ",
                answer3:
                "However, a roofing company has different goals for their website. They want their website to generate leads, so a contact form for potential clients to enter their information that is connected to the roofing company's CRM would be a business-specific functionality for their site.",
                answer4:
                "A third example is a business that schedules direct appointments for services, such as barbers, nail salons, tattoo artists, and more. A lead generation form could potentially be useful to these businesses too, but a calendar booking link allowing customers to book appointments directly into the business' schedule would be even better.",
                answer5:
                "",
            },
            {
              question: "WHAT IS CLOUD TECHNOLOGY AND HOW CAN IT HELP ME?",
              answer:
                "As a small business, leveraging cloud technology can provide numerous benefits:",
                answer2:
                "1. Cost Efficiency: Cloud technology can help you avoid the upfront cost and complexity of owning and maintaining your own IT infrastructure, and instead simply pay for what you use.",
                answer3:
                "2. Scalability: With cloud technology, you can easily scale up or down your operation and storage needs quickly to accommodate growth or changes in your business.",
                answer4:
                "3. Accessibility: Cloud services are designed to be accessed securely from anywhere, anytime. This means you can manage your business operations and access your data from any device with an internet connection.",
                answer5:
                "4. Security: Many cloud providers offer a set of policies, technologies, and controls that strengthen your security posture overall, helping protect your data, apps, and infrastructure from potential threats.",
            },
            {
              question: "HOW DOES THE WEB DESIGN PROCESS WORK AT VIA DEL WEB?",
              answer:
                "Discovery and Research: We start by understanding your business, your goals, your audience, and your competition. This helps us create a strategic plan for your website.",
                answer2:
                "Wireframing and Design: Based on our research, we create wireframes which are simple layouts that outline the specific size and placement of site features, conversion areas, and navigation. Once the wireframes are approved, we move on to the design phase where we bring your site to life with colors, images, and typography.",
                answer3:
                "Development: After the design is approved, we move on to the development phase. This is where we build and code your website, ensuring it's responsive and optimized for performance.",
                answer4:
                "Testing: We rigorously test your website on multiple devices and browsers to ensure it looks great and works perfectly. We also check all features and functionalities to ensure they work as intended.",
                answer5:
                "Launch and Maintenance: Once everything is tested and approved, we launch your website. But our job doesn't end there. We offer ongoing maintenance and support to ensure your website stays up-to-date and continues to deliver results.",
            },
            {
              question: "HOW DOES VIA DEL WEB LEVERAGE CLOUD TECHNOLOGY IN WEB DEVELOPMENT?",
              answer:
                "At Via Del Web, we leverage cloud technology in several ways to enhance our web development process and deliver superior results for our clients.",
                answer2:
                "Scalable Infrastructure: Cloud technology allows us to easily scale the infrastructure as per the needs of your website. Whether you're expecting a surge in traffic or expanding your business, we can quickly adjust the resources to ensure optimal performance of your website.",
                answer3:
                "Data Storage and Management: We use cloud-based databases to store and manage data. This not only ensures the security of your data but also allows for efficient data management and easy access from anywhere, anytime.",
                answer4:
                "Development and Testing Environments: Cloud technology enables us to create separate development and testing environments without the need for physical servers. This makes the development process more efficient and allows for rigorous testing before the website goes live.",
                answer5:
                "Backup and Recovery: With cloud technology, we ensure your website data is regularly backed up. In case of any mishaps, we can quickly restore your website to its previous state, minimizing downtime and loss of data.",
                answer6:
                "Integration of Cloud Services: We can integrate various cloud services into your website, such as cloud-based CRM systems, payment gateways, or cloud-based analytics tools. This can enhance the functionality of your website and improve the user experience."
            },
{/*            {
              question: "WHAT TYPES OF BUSINESSES CAN BENEFIT FROM YOUR SERVICES?",
              answer:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
                answer2:
                "Integer ornare neque mauris, ac vulputate lacus venenatis et. Pellentesque ut ultrices purus. Suspendisse ut tincidunt eros. In velit mi, rhoncus dictum neque a, tincidunt lobortis justo.",
                answer3:
                "Integer ornare neque mauris, ac vulputate lacus venenatis et. Pellentesque ut ultrices purus. Suspendisse ut tincidunt eros. In velit mi, rhoncus dictum neque a, tincidunt lobortis justo.",
                answer4:
                "Integer ornare neque mauris, ac vulputate lacus venenatis et. Pellentesque ut ultrices purus. Suspendisse ut tincidunt eros. In velit mi, rhoncus dictum neque a, tincidunt lobortis justo.",
                answer5:
                "Integer ornare neque mauris, ac vulputate lacus venenatis et. Pellentesque ut ultrices purus. Suspendisse ut tincidunt eros. In velit mi, rhoncus dictum neque a, tincidunt lobortis justo.",
            },*/}
          ]}
        />
      </Container>
    </Section>
  );
}

export default FaqAccordianSection;
