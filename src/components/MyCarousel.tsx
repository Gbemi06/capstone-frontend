import { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { CarouselInterface } from "../types/RegistrationInterface";

function MyCarousel() {
  const [index, setIndex] = useState(0);

  const [carousel, setCarousel] = useState<CarouselInterface[] | []>([]);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    uploadCarousel();
  }, []);

  const uploadCarousel = async () => {
    // //  e.preventDefault();
    // //  const inpFile = document.getElementById("formUploadExperiencePic");
    // const formData = new FormData();
    // //  formData.append("experience", inpFile?.files[0]);
    // //  console.log(inpFile?.files[0]);

    try {
      const response = await fetch("http://localhost:4002/carousel", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
        },
      });
      if (response.ok) {
        let data = (await response.json()) as CarouselInterface[];
        console.log(data);
        setCarousel(data);
      } else {
        alert("something went wrong :(");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block carousel-img"
          src={carousel[0]?.path}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{carousel[0]?.originalname}</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block carousel-img"
          src={carousel[1]?.path}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>{carousel[1]?.originalname}</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block carousel-img"
          src={carousel[2]?.path}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>{carousel[2]?.originalname}</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;
