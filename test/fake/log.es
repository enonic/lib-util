/* eslint-disable no-console */

export const NoLog = {
	debug: () => {},
	info: () => {},
	error: () => {},
	warning: () => {}
};


export const Log = {
	debug: console.debug,
	info: console.log,
	error: console.error,
	warning: console.warn
};


export const LogErrors = {
	debug: () => {},
	info: () => {},
	error: () => console.error,
	warning: () => {}
};


export const LogWarnings = {
	debug: () => {},
	info: () => {},
	error: () => console.error,
	warning: () => console.warn
};


export default {
	Log,
	LogErrors,
	LogWarnings,
	NoLog
};
