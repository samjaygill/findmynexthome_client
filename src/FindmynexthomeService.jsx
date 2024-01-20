const baseURL = "https://localhost:8080/properties";

export const getProperties = () => {
  return fetch(baseURL).then((res) => res.json());
};

export const getProperty = (id) => {
  return fetch(`${baseURL}/${id}`).then((res) => res.json());
};

export const updateProperty = (property) => {
  let updatedProperty = { ...property };
  delete updatedProperty._id;

  return fetch(baseURL + "/" + property._id, {
    method: "PUT",
    body: JSON.stringify(updatedProperty),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};

export const postProperty = (payload) => {
  return fetch(baseURL, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: { "Content-Type": "application/json" },
  }).then((res) => {
    return res.json();
  });
};

export const deleteProperty = (id) => {
  return fetch(baseURL + id, {
    method: "DELETE",
  });
};
