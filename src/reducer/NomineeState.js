import { useEffect, useState } from "react";

const initialState = {
  nominees: [],
};

export const NomineeState = (state = initialState) => {
  const [nominees, setNominees] = useState([]);

  const getNominees = useEffect(() => {
    console.log("stuff");
  }, []);

  console.log("Nominee state component");
  return state;
};
