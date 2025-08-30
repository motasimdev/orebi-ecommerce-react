import { PiNumberTwoBold } from "react-icons/pi";
import Container from "../Container";
import Flex from "../Flex";
import Heading from "../Heading";
import { FaTruck, FaUndoAlt } from "react-icons/fa";

const Information = () => {
  return (
    <>
      <div className="bg-infoBg py-6 hidden lg:block">
        <Container>
          <Flex className={"justify-between"}>
            <div className="flex items-center gap-x-2">
              <PiNumberTwoBold />
              <Heading
                text={"Two years warranty"}
                as={"p"}
                className={"text-[#6D6D6D] text-base"}
              />
            </div>
            <div className="flex items-center gap-x-2">
              <FaTruck />
              <Heading
                text={"Free shipping"}
                as={"p"}
                className={"text-[#6D6D6D] text-base"}
              />
            </div>
            <div className="flex items-center gap-x-2">
              <FaUndoAlt />
              <Heading
                text={"Return policy in 30 days"}
                as={"p"}
                className={"text-[#6D6D6D] text-base"}
              />
            </div>
          </Flex>
        </Container>
      </div>

      {/* responsive------------  */}
      <div className="bg-infoBg py-3 lg:hidden px-2">
        <Container>
          <Flex className={"justify-between"}>
            <div className="flex items-center gap-x-2">
              <PiNumberTwoBold />
              <Heading
                text={"Two years warranty"}
                as={"p"}
                className={"text-[#6D6D6D] text-[8px]"}
              />
            </div>
            <div className="flex items-center gap-x-2">
              <FaTruck />
              <Heading
                text={"Free shipping"}
                as={"p"}
                className={"text-[#6D6D6D] text-[8px]"}
              />
            </div>
            <div className="flex items-center gap-x-2">
              <FaUndoAlt />
              <Heading
                text={"Return policy in 30 days"}
                as={"p"}
                className={"text-[#6D6D6D] text-[8px]"}
              />
            </div>
          </Flex>
        </Container>
      </div>
      {/* responsive------------ end */}
    </>
  );
};

export default Information;
