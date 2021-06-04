import { handleAPIErrors } from "../lib";
import { getEncodedParams } from "../utils";
import axios from "axios";

export async function get({ path, params }) {
  let uri = path;
  if (params) {
    const encodedParams = getEncodedParams(params);

    if (encodedParams) {
      uri = `${path}?${encodedParams}`;
    }
  }

  const response = await axios.get(process.env.REACT_APP_API_ENDPOINT + uri);
  return handleAPIErrors(response.data);
}
