import FirstHeader from "../header/first-header";
import ForthHeader from "../header/fourth-header";
import SecondHeader from "../header/second-header";
import ThirdHeader from "../header/third-header";

export const HeaderSwitch = (data) => {
  switch (data) {
    case "1":
      return <FirstHeader />;
    case "2":
      return <SecondHeader />;
    case "3":
      return <ThirdHeader />;
    case "4":
      return <ForthHeader />;
    default:
      return <FirstHeader />;
  }
};
