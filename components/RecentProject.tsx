import { projects } from "@/data";
import { div } from "three/webgpu";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa";

const RecentProject = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        A small selection of <br />{" "}
        <span className="text-gray-500">recent projects</span>
      </h1>

      <div
        className="flex flex-wrap items-center justify-center p-4
      gap-16 mt-10"
      >
        {projects.map(({ id, title, des, iconLists, img, link }) => (
          <div
            key={id}
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw] cursor-pointer"
          >
            <PinContainer title={title} href={link}>
              <div
                className=" relative flex items-center justify-center sm:w-96 w-[80vw] h-[20vh] overflow-hidden lg:h-[30vh]
              mb-10 "
              >
                <div className="relative w-full h-full overflow-hidden lg:rounded-xl bg-[#13162d]">
                  <img src="/bg.png" alt="bg-img" />
                </div>
                <img src={img} alt={title} className="z-0 absolute bottom-0" />
              </div>
              <h1
                className="font-bold lg:text-2xl
              md:text-xl text-base line-clamp-1"
              >
                {title}
              </h1>
              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                {des}
              </p>
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="border borderwhite/[0.2] rounded-full gap-2 bg-black
                        lg:w-10 lg:h-10 w-8 h-8 flex items-center justify-center"
                      style={{
                        transform: `translateX(-${5 * index * 2}px)`,
                      }}
                    >
                      <img src={icon} alt={icon} className="p-2" />
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-gray-500 lg:font-bold">
                    Check live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="gray" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProject;