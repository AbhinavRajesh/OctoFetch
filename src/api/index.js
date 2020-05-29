import axios from "axios";

const url = "https://api.github.com/users";

export const fetchData = async (username) => {
  let changeableUrl = url;
  if (username) {
    changeableUrl = `${url}/${username}`;
  } else {
    changeableUrl = `${url}/ijadfbaidfihsbdijfnsdj`; // For debugging purpose
  }
  try {
    const { data } = await axios.get(changeableUrl);
    if (data.message !== undefined) {
      const modifiedData = {
        message: data.message,
        name: undefined,
      };
      return modifiedData;
    }
    const modifiedData = {
      username: data.login,
      avatar: data.avatar_url,
      url: data.html_url,
      repos: data.repos_url,
      name: data.name,
      comppany: data.company,
      blog: data.blog,
      location: data.location,
      bio: data.bio,
      twitter: data.twitter_username,
      followers: data.followers,
      following: data.following,
      created: data.created_at,
      total_repos: data.public_repos,
    };
    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};
