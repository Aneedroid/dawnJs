import { PUT_CONTENT } from "client/javascripts/actions/types";

export const putContentToState = content => {
    return { type: PUT_CONTENT , content };
};