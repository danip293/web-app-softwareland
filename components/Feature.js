import React from "react";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
const FeatureBox = (props) => {
  return (
    <>
      {props.features.map((feature, key) =>
        feature.id % 2 !== 0 ? (
          <Row
            key={key}
            className={
              feature.id === 1
                ? "align-items-center"
                : "align-items-center mt-5"
            }
          >
            <Col md={5}>
              <div style={{ height: 400 }}>
                <Image
                  src={feature.img}
                  alt={feature.title}
                  className="img-fluid d-block mx-auto"
                  // layout='fill'
                  width={384}
                  height={506}
                />
              </div>
            </Col>
            <Col md={{ size: 6, offset: 1 }}>
              <div className="mt-5 mt-sm-0 mb-4">
                <div className="my-4">
                  <i className={feature.icon}></i>
                </div>
                <h5 className="text-dark font-weight-normal mb-3 pt-3">
                  {feature.title}
                </h5>
                <p className="text-muted mb-3 f-15">{feature.desc}</p>
                <a href={feature.link} className="f-16 text-warning">
                  Read More <span className="right-icon ml-2">&#8594;</span>
                </a>
              </div>
            </Col>
          </Row>
        ) : (
          <Row key={key} className="align-items-center mt-5">
            <Col md={6}>
              <div className="mb-4">
                <div className="my-4">
                  <i className="mdi mdi-account-group"></i>
                </div>
                <h5 className="text-dark font-weight-normal mb-3 pt-3">
                  {feature.title}
                </h5>
                <p className="text-muted mb-3 f-15">{feature.desc}</p>
                <a href={feature.link} className="f-16 text-warning">
                  Read More <span className="right-icon ml-2">&#8594;</span>
                </a>
              </div>
            </Col>
            <Col md={{ size: 5, offset: 1 }} className="mt-5 mt-sm-0">
              <div style={{ height: 400 }}>
                <Image
                  src={feature.img}
                  alt={feature.title}
                  className="img-fluid d-block mx-auto"
                  // layout='fill'
                  width={384}
                  height={506}
                />
              </div>
            </Col>
          </Row>
        )
      )}
    </>
  );
};
const Feature = () => {
  const features = [
    {
      id: 1,
      img: "/images/1a.png",
      title: "Crema anti-edad",
      desc: "Con un shot de vitaminas, que contienen sus uniesferas, que se complementan con una rica mezcla de colágeno y Hemp Oil, revela una piel más firme, densa y tersa, como efecto ideal para todo tipo de piel.",
      link: "/",
    },
    {
      id: 2,
      img: "/images/2a.png",
      title: "Crema anti-manchas",
      desc: "Suave y ligera textura de uso facial y corporal con suero kójico, un poderoso despigmentante, que ayuda a reducir las manchas de la piel ocasionadas por el sol, cambios hormonales, melasma o acné, bloqueando la formación de melanina e impidiendo la repigmentación.",
      link: "/",
    },
    {
      id: 3,
      img: "/images/3a.png",
      title: "Crema corporal",
      desc: "Lleva la experiencia en hidratación de forma avanzada al cuidado corporal, su fórmula refrescante y ligera está enriquecida con vitamina E, aceita de almendras y Hemp Oil, ingredientes utilizados en el cuidado de la piel.",
      link: "/",
    },
  ];
  return (
    <section className="section" id="feature">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark">
                <span className="text-warning">Caracteristicas</span>
              </h3>
              <p className="text-muted">
                La delicada piel que esta alrededor de los ojos tendrá un efecto
                inmediato al desinflamar las bolsas y ojeras, teniendo un
                aspecto más hidratado y luminoso, sin líneas de expresión con
                una piel más firme y tersa.
              </p>
            </div>
          </Col>
        </Row>
        <FeatureBox features={features} />
      </Container>
    </section>
  );
};
export default Feature;
