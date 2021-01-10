import createDataContext from "./createDataContext";
import api from "../api/api";

const authReducer = (
  state = {
    token: null,
    errorMessage: "",
    profile: {},
  },
  action
) => {
  switch (action.type) {
    case "signin":
      return { ...state, token: action.payload };
    default:
      return state;
  }
};

const signin = (dispatch) => async (email, password, callback) => {
  try {
    const response = await api.post("/api/user/signin", { email, password });
    dispatch({ type: "signin", payload: response.data.payload.data.token });

    if (callback) {
      callback();
    }
  } catch (err) {
    dispatch({
      type: "add_error",
      payload: err,
    });
  }
};

const signup = (dispatch) => async (email, password, callback) => {
  try {
    const response = await api.post("/api/user/signup", {
      email,
      password,
      role: "user",
    });
    localStorage.setItem("token", response.data.payload.data.token);
    dispatch({ type: "signup", payload: response.data.payload.data.token });

    if (callback) {
      callback();
    }
  } catch (err) {
    console.log("---->>> tes", err);
    dispatch({ type: "add_error", payload: err });
  }
};

const createEventHost = (dispatch) => async (
  firstName,
  lastName,
  residence,
  occupation,
  bio,
  companyName,
  companyUrl,
  introVideo,
  companyBio,
  callback
) => {
  try {
    await api.put("/api/user/update-profile", {
      ...(firstName && { firstName }),
      ...(lastName && { lastName }),
      ...(residence && { residence }),
      ...(occupation && { occupation }),
      ...(bio && { bio }),
      ...(companyName && { companyName }),
      ...(companyUrl && { companyUrl }),
      ...(introVideo && { introVideo }),
      ...(companyBio && { companyBio }),
      userRole: "host",
    });

    if (callback) {
      callback();
    }
  } catch (err) {
    dispatch({ type: "add_error", payload: err });
  }
};

const updateCategories = (dispatch) => async (
  categories,
  isAdultContent,
  callback
) => {
  try {
    await api.put("/api/user/update-profile", {
      ...(categories && { categories }),
      ...(isAdultContent && { isAdultContent }),
    });

    if (callback) {
      callback();
    }
  } catch (err) {
    dispatch({ type: "add_error", payload: err });
  }
};

const updateHostSocial = (dispatch) => async (
  facebookUrl,
  twitterUrl,
  instagramUrl,
  youtubeUrl,
  twitch,
  callback
) => {
  try {
    const response = await api.put("/api/user/update-profile", {
      ...(facebookUrl && { facebookUrl }),
      ...(twitterUrl && { twitterUrl }),
      ...(instagramUrl && { instagramUrl }),
      ...(youtubeUrl && { youtubeUrl }),
      ...(twitch && { twitch }),
    });
    console.log("---->>>", response);
    if (callback) {
      callback();
    }
  } catch (err) {
    dispatch({ type: "add_error", payload: err });
  }
};

const updateAttendee = (dispatch) => async (username, categories, callback) => {
  try {
    const response = await api.put("/api/user/update-profile", {
      ...(username && { username }),
      ...(categories && { categories }),
      userRole: "attendee",
    });

    console.log("--->>>", response);
    if (callback) {
      callback();
    }
  } catch (err) {
    dispatch({ type: "add_error", payload: err });
  }
};

export const { Provider, Context } = createDataContext(
  authReducer,
  {
    signin,
    signup,
    createEventHost,
    updateCategories,
    updateHostSocial,
    updateAttendee,
  },
  {}
);
