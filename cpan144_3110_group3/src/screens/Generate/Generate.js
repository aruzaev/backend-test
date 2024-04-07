import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Import useNavigate and useLocation hooks
import handleSearch from "../../components/Global/unsplashAPI/unsplash";
import {
  Button,
  Form,
  FormControl,
  InputGroup,
  Container,
  Row,
  Col,
  Image,
  Card,
  Badge,
} from "react-bootstrap";

import "./Generate.css";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Generate = () => {
  const navigate = useNavigate(); // Use useNavigate hook
  const query = useQuery();
  const [term, setTerm] = useState(query.get("search") || "");
  const [resolution, setResolution] = useState(
    query.get("resolution") || "landscape"
  );
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (term) {
      handleSearch(term, resolution, setImages);
    }
  }, [term, resolution]);

  const handleButtonClick = (e) => {
    e.preventDefault();
    const searchValue = e.currentTarget.elements.searchTerm.value;
    const resolutionValue = e.currentTarget.elements.resolution.value;
    setTerm(searchValue);
    setResolution(resolutionValue);
    navigate(`?search=${searchValue}&resolution=${resolutionValue}`);
  };

  return (
    <Container className="generate-box-main">
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <h1>Generate</h1>
          <Form onSubmit={handleButtonClick}>
            <InputGroup className="mb-3 input-box">
              <FormControl
                id="searchTerm"
                type="text"
                placeholder="Search for images..."
                defaultValue={term}
              />
              <Form.Select id="resolution" defaultValue={resolution}>
                <option value="landscape">Desktop</option>
                <option value="portrait">Mobile</option>
                <option value="squarish">Square</option>
              </Form.Select>
              <Button variant="outline-secondary" type="submit">
                Search
              </Button>
            </InputGroup>
          </Form>
          {images.map((image) => (
            <Row>
              <Col md={6}>
                <div className="image-container">
                  <Image
                    key={image.id}
                    src={image.urls.regular}
                    alt="random"
                    className="m-2"
                    style={{
                      width: "50%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </Col>
              <Col md={6}>
                <div className="info-container">
                  <Card style={{ width: "18rem" }}>
                    <Card.Body>
                      <Card.Title>{image.alt_description}</Card.Title>
                      <Card.Text>Photo by {image.user.name}</Card.Text>
                      <Card.Text>
                        Downloads: {image.statistics.downloads.total}
                      </Card.Text>
                      <Card.Text>
                        Views: {image.statistics.views.total}
                      </Card.Text>
                      <Button
                        href={image.links.download}
                        target="_blank"
                        className="download-button"
                      >
                        Download
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            </Row>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Generate;
