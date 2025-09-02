const baseUrl = "http://localhost:3030/jsonstore/users";

export default {
  async getAll() {
    const response = await fetch(baseUrl);
    const result = await response.json();
    const users = Object.values(result);
    return users;
  },

  formatingDate(dateToFormat) {
    const date = new Date(dateToFormat);
    const formatedData = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })

    return formatedData
  },
};
