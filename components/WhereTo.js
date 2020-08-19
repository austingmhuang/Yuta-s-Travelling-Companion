import TextAndInputField from "./TextAndInputField";

const WhereTo = () => {
  return (
    <div>
      <TextAndInputField
        text="Leaving from"
        placeholder="introduce your destination"
      />
      <TextAndInputField text="Flying to" placeholder="introduce your origin" />
      <TextAndInputField text="Date" placeholder="introduce your time" />
    </div>
  );
};

export default WhereTo;
