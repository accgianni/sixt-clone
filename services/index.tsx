import request, { gql } from "graphql-request";

export const getCarList = async () => {
  const query = gql`
    query CarList {
      carLists(first: 20) {
        gearbox
        marque
        name
        passengers
        price
        typeOfVehicule
        image {
          url
          width
          height
        }
      }
    }
  `;

  const result = await request(
    "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cluyxnapy0w6v07wbbxv807jr/master",
    query
  );

  return result;
};
