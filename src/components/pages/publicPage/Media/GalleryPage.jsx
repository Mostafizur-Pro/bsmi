import { Button } from "@/components/ui/button";

const GalleryPage = () => {
  const images = [
    "/images/image1.jpg",
    "/images/image2.jpg",
    "/images/image3.jpg",
    "/images/image4.jpg",
    "/images/image5.jpg",
    "/images/image6.jpg",
  ];

  return (
    <section className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900">Our Gallery</h1>
        <p className="mt-4 text-gray-600">
          Explore our collection of beautiful images from our recent projects.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((src, index) => (
          <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
            <img
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex items-center justify-center">
              <Button className="text-white bg-indigo-600 hover:bg-indigo-700">
                View Image
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GalleryPage;
