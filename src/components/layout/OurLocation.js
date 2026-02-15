"use client";
import LocationCard from "../ui/LocationCard";

export default function OurLocation() {
  const locations = [
    {
      id: 1,
      name: "NBM RHYTHM (PORUR)",
      address: "456 River Street, Riverside District, State 12346",
      phone: "+1 (555) 234-5678",
      hours: "Mon-Fri: 8:00 AM-7:00 PM | Sat: 9:00 AM-3:00 PM",
      rating: 4.9,
      reviews: 750,
      image: "/office-location.png", // replace with your image path
    },
    {
      id: 2,
      name: "NBM RHYTHM (NANGANALLUR)",
      address: "456 River Street, Riverside District, State 12346",
      phone: "+1 (555) 234-5678",
      hours: "Mon-Fri: 8:00 AM-7:00 PM | Sat: 9:00 AM-3:00 PM",
      rating: 2.9,
      reviews: 80,
      image: "/office-location.png", // replace with your image path
    },
    {
      id: 3,
      name: "NBM RHYTHM (NANGANALLUR)",
      address: "456 River Street, Riverside District, State 12346",
      phone: "+1 (555) 234-5678",
      hours: "Mon-Fri: 8:00 AM-7:00 PM | Sat: 9:00 AM-3:00 PM",
      rating: 2.9,
      reviews: 80,
      image: "/office-location.png", // replace with your image path
    },
    {
      id: 4,
      name: "NBM RHYTHM (NANGANALLUR)",
      address: "456 River Street, Riverside District, State 12346",
      phone: "+1 (555) 234-5678",
      hours: "Mon-Fri: 8:00 AM-7:00 PM | Sat: 9:00 AM-3:00 PM",
      rating: 2.9,
      reviews: 80,
      image: "/office-location.png", // replace with your image path
    },
    // Add more locations if needed
  ];
  return (
    <section
      className="mx-[1rem]
  sm:ms-[2rem]
  md:ms-[4rem]
  lg:ms-[6rem]
  xl:ms-[7.5rem]
  2k:ms-[9rem]
  mt-[8rem] md:mt-0
  "
    >
      <div className="flex flex-col items-center justify-center mx-[2.5rem] md:mx-[0%] text-center">
        <div>
          <h1 className="text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] lg:text-[2.25rem] xl:text-[2rem] 2k:text-[2.5rem] font-bold my-[2rem]  text-[#014579]">
            Our Locations
          </h1>
        </div>
        <div className="mb-[3rem]">
          <p
            className="text-[#757575] text-[0.875rem]  /* default base size */
   sm:text-[1rem]          /* small screens */
   md:text-[1.125rem]      /* medium screens */
   lg:text-[1.25rem]       /* large screens */
   xl:text-[1rem]          /* 1440px */
   2k:text-[1.5rem]"
          >
            Serving patients across the city with multiple physiotherapy clinics
            for easy access and convenience.
          </p>
        </div>
      </div>
      <div
        className="mt-[2rem]     /* base */
   sm:mt-[3rem]          /* small screens */
   md:mt-[5rem]          /* medium screens */
   lg:mt-[6rem]          /* large screens */
   xl:mt-[7rem]          /* 1440px */
   2k:mt-[9rem]"
      >
        <div className="flex flex-col md:flex-row overflow-x-auto snap-x snap-mandatory"
         
        >
          {locations.map((loc) => (
            <div key={loc.id}>

                <LocationCard location={loc} />
            </div>
      
          ))}
        </div>
      </div>
    </section>
  );
}
