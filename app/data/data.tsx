import dataImage from '../../public/image/data/image1.svg'

export interface Data {
    id: number;
    title: string;
    price: number;
    qty: number;
    image: string;
  }

export interface DataCustomer {
    id: number;
    name: string;
    menu: string;
    payment: number;
    status: string;
  }

  export const generateDummyData = (count: number): Data[] => {
    const dummyDatas: Data[] = [];
    for (let i = 1; i <= count; i++) {
      dummyDatas.push({
        id: i,
        title: `Data ${i}`,
        price: i * 20000,
        qty: i * 2,
        image: dataImage
      });
    }
    
    return dummyDatas;
  };

  export const generateDummyDataCustomer = (count: number): DataCustomer[] => {
    const dummyDatas: DataCustomer[] = [];
    const statusOptions: string[] = ["completed", "pending", "preparing"]; // Add your status options here
  
    for (let i = 1; i <= count; i++) {
      const randomStatusIndex = Math.floor(Math.random() * statusOptions.length);
      const randomStatus = statusOptions[randomStatusIndex];
  
      dummyDatas.push({
        id: i,
        name: `Data Customer ${i}`,
        menu: `Data Menu ${i}`,
        payment: i * 20000,
        status: randomStatus
      });
    }
    
    return dummyDatas;
  };


  const dummyData: Data[] = generateDummyData(5);
  const dummyDataCustomer: DataCustomer[] = generateDummyDataCustomer(5);


  export const getAllData = (): Data[] => {
    return dummyData;
  };

  export const getAllDataCustomer = (): DataCustomer[] => {
    return dummyDataCustomer;
  };
  
  export const addData = (newData: Data): void => {
    const newId = dummyData.length + 1;
    const dataToAdd = { ...newData, id: newId };
    dummyData.push(dataToAdd);
  };