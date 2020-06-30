"use strict";
import { CHANGE_FIELD } from './constants.js'

export const setSearchField = (text) => ({
	type: CHANGE_FIELD,
	payload: text
});