export const fetchPartners = () => (dispatch) => {
  dispatch(promotionsLoading());

  return fetch(baseUrl + "promotions")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error(
            `Error ${response.status}: ${response.statusText}`
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        const errMess = new Error(error.message);
        throw errMess;
      }
    )
    .then((response) => response.json())
    .then((promotions) => dispatch(addPromotions(promotions)))
    .catch((error) => dispatch(promotionsFailed(error.message)));
};

export const updatePartner = () => {
  fetch(url, {
    method: PUT,
  });
};

export const createPartner = () => {
  fetch(url, {
    method: POST,
  });
};

export const deletePartner = () => {
  fetch(url, {
    method: DESTROY,
  });
};

export const deletePartners = () => {
  fetch(url, {
    method: DESTROY,
  });
};
