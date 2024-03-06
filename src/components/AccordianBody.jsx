import AccordianItem from "./AccordianItem";

const AccordianBody = ({ item }) => {
  //   console.log(item[0].card.info);
  return (
    <div>
      {item.map((dish, id) => (
        <>
          <AccordianItem key={id} item={dish.card.info} />
        </>
      ))}
    </div>
  );
};

export default AccordianBody;
