import { sequence } from "@sveltejs/kit/hooks";

import type { Handle } from "@sveltejs/kit";
import { connect } from "$lib/db";

export const connectDb: Handle = async ({ event, resolve }) => {
  // await connect();
  return await resolve(event);
};
export const handle = sequence(connectDb);
