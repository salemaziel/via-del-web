import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
//import Newsletter from "./Newsletter";
import "./NewsletterSectionCentered.scss";

import NewsletterForm from './NewsletterForm'

function NewsletterSectionCentered(props) {
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container className="text-left">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={2}
          spaced={false}
        />
        <div className="NewsletterSectionCentered__form-container mr-auto">
          {/*<Newsletter
            parentColor={props.color}
            buttonText={props.buttonText}
            buttonColor={props.buttonColor}
            inputPlaceholder={props.inputPlaceholder}
            subscribedMessage={props.subscribedMessage}
            size="lg"
          />*/}
          <NewsletterForm />
        </div>
      </Container>
    </Section>
  );
}

export default NewsletterSectionCentered;
