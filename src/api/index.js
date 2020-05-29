import axios from "axios";

const url = "https://api.github.com/users";

export const fetchData = async (username) => {
  let changeableUrl = url;
  if (username) {
    console.log(`In the if statement in API with username: ${username}`);
    changeableUrl = `${url}/${username}`;
  } else {
    changeableUrl = `${url}/example`;
  }
  try {
    const { data } = await axios.get(changeableUrl);
    if (data.message) {
      const modifiedData = {
        message: data.message,
      };
      return modifiedData;
    }
    const modifiedData = {
      username: data.login,
      avatar: data.avatar_url,
      url: data.html_url,
      repos: data.repos_url,
      name: data.name,
      company: data.company,
      blog: data.blog,
      location: data.location,
      bio: data.bio,
      twitter: data.twitter_username,
      followers: data.followers,
      following: data.following,
      created: data.created_at,
      total_repos: data.public_repos,
      message: "",
    };
    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};
