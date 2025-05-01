import ImageCarousel from './ImageCarousel';

function App() {
  const carouselImages = [
    {
      src: "/images/image1.jpg",
      alt: "Image 1",
    },
    {
      src: "/images/image2.jpg",
      alt: "Image 2",
    },
    {
      src: "/images/image3.jpg",
      alt: "Image 3",
    },
    {
      src: "/images/image2.jpg", // Repeated image is okay
      alt: "Image 4",
    }
  ];

  return (
    <div className="app">
      <h1>React Image Carousel</h1>
      <ImageCarousel 
        images={carouselImages}
        autoPlayInterval={5000}
        showControls={true}
      />
    </div>
  );
}

export default App;
