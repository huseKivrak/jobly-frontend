import axios from "axios";

const BASE_URL = process.env.API_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // Remember, the backend needs to be authorized with a token
  // We're providing a token you can use to interact with the backend API
  // DON'T MODIFY THIS TOKEN
  static token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
    "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
    "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = method === "get" ? data : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  //##########  Companies Routes  ##########

  /** Get details on a company by handle. */
  static async getCompanies() {
    let res = await this.request(`companies/`);
    return res.companies;
  }

  static async findCompanies(query) {
    let res = await this.request(`companies/?nameLike=${query}`);
    return res.companies;
  }

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  //##########  Jobs Routes  ##########

  static async getAllJobs() {
    let res = await this.request(`jobs/`);
    return res.jobs;
  }

  static async findJobs(query) {
    let res = await this.request(`jobs/?title=${query}`);
    return res.jobs;
  }

  //##########  Auth Routes  ##########

  //TODO: can set JoblyApi.token in these routes

  static async getAuthToken({ username, password }) {
    let res = await this.request(`auth/token`, { username, password }, "POST");
    return res.token;
  }

  static async registerAndGetToken({username, firstName, lastName, email, password}) {
    let res = await this.request(
      `auth/register`,
      {username, firstName, lastName, email, password},
      "POST");
    return res.token;
  }

  //##########  Users Routes  ##########

  static async getUserData(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }

  static async editUserData() {}
}

export default JoblyApi;
