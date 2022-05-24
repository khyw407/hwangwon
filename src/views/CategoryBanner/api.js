import apiInstance from "../../apiInstance";

export const getMenus = async (category) => {
  const { status, data } = await apiInstance.get(`/category`, {
    params: {
      category,
    },
  });

  if (status !== 200) return;

  return { status, data };
};
