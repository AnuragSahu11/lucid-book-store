const AddressBlock = ({ addressData }) => {
  const { name, street, city, state, zipcode } = addressData;
  return (
    <div className="address-blocks elevated br-2 li-shadow">
      <div className="textbox p-up-4 p-x-4">
        {name}
        <br />
        <hr />
        {`${street}, ${city}, ${state}, ${zipcode}`}
        <br />
        Phone number: 123456789
      </div>
      <i className="m-l-4 is-4 m-dw-3 fa-solid fa-trash-can" />
    </div>
  );
};

export { AddressBlock };
