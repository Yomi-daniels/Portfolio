import { testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { companies } from "@/data";
const Clients = ({
  id,
  name,
  img,
  nameImg,
}: {
  id: number;
  name: string;
  img: string;
  nameImg: string;
}) => {
  return (
    <div id="testimonials" className="py-20">
      <h1 className="heading">
        Kind words from <br />{" "}
        <span className="text-gray-500">satisfied clients</span>
      </h1>

      <div className="flex flex-wrap flex-col items-center mt-4 max-lg:mt-10">
        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="slow"
        />
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10 mt-4">
          {companies.map(({ id, name, img, nameImg }) => (
            <div key={id} className="flex md:max-w-60 max-w-32">
              <img src={img} alt={name} className="md:w-10 w-5" />
              <img src={nameImg} alt={name} className="md:w-24 w-20" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
