import User from "../model/UserModel.js";

const getUsers = async ({ response }) => {
  const users = await User.orderBy("createdAt", "desc").all();

  response.status = 200;
  response.body = users;
};

const getUser = async ({ params, response }) => {
  const { id } = params;

  const user = await User.where("_id", id).get();

  response.status = 200;
  response.body = user;
};

const createUser = async ({ request, response }) => {
  const { value: {name, email} } = await request.body();

  const user = await User.create({ name, email });

  if (user) {
    response.status = 200;
    response.body = {
      success: true,
      data: user,
    };
  } else {
    response.status = 400;
    response.body = { message: "user not created." };
  }
};

export { getUsers, getUser, createUser };
