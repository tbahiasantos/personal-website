// hooks/GithubRepos.js

import { useState, useEffect } from 'react';
import axios from 'axios';

const GetGithubRepos = (username) => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    axios.get(`https://api.github.com/users/${username}/repos`)
      .then(response => setRepos(response.data))
      .catch(err => console.error(err));
  }, [username]);

  return repos;
}

export default GetGithubRepos;
