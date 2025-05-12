import { Card, CardContent } from "@/components/ui/card";
import { JSX } from "react";

export default function ItemInfo(): JSX.Element {
  return (
    <div className="relative w-full max-w-[40vw]">
      <div className="w-full flex flex-col">
        <div className="flex flex-col-reverse lg:flex-row lg:h-[65vh] gap-6 lg:gap-[3vh]">
          {/* Left thumbnails */}
          <div className="flex flex-row lg:flex-col gap-[2vh] justify-start">
            {[...Array(3)].map((_, idx) => (
              <Card
                key={idx}
                className="w-[28vw] sm:w-[22vw] md:w-[18vw] max-w-[125px] aspect-square border border-[#cccccc] bg-gradient-to-t from-[#fefdf6] to-[#fefdf6]"
              >
                <CardContent className="p-0 h-full"></CardContent>
              </Card>
            ))}
          </div>

          {/* Main product display */}
          <Card className="lg:ml-[3vw] w-full max-w-[691px] aspect-[3/2] sm:aspect-[4/3] lg:w-[30vw] border border-[#cccccc] bg-gradient-to-t from-[#fefdf6] to-[#fefdf6]">
            <CardContent className="p-0 h-full w-full"></CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
