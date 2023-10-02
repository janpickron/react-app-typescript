import { IPerson } from "../App";

const OneChild = ({ parentData }: { parentData: IPerson }) => {
  return (
    <>
      <h3>Im child component with {parentData.name}</h3>
      <h4>I'm child with {parentData.age}</h4>
      <h5>I'm {parentData.employed}</h5>
    </>
  );
};

export default OneChild;
