import { SalesType } from "../../models";
const createSale = (time, amount) => ({ time, amount });

export default (): Promise<SalesType[]> =>
  new Promise((resolve) =>
    resolve([
      createSale("00:00", 0),
      createSale("03:00", 300),
      createSale("06:00", 600),
      createSale("09:00", 800),
      createSale("12:00", 1500),
      createSale("15:00", 2000),
      createSale("18:00", 2400),
      createSale("21:00", 2400),
      createSale("24:00", undefined),
    ])
  );
