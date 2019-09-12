import {
  repo1,
  repo2,
} from "./responses.js"

export default {
  get: jest.fn((url) => {
    let data = {};
    switch (url) {
    case "https://api.github.com/users/username/repos":
      data = {
        data: [
          repo1,
          repo2
        ]
      };
      break;
    default:
      data = { data: [] };
    }
    return Promise.resolve(data);
  }),
};