export const catch500Error = (res, error) => {
	console.log("error", error);
	res.status(500).json({error});
};

export const authFailed = (res) => res.status(401).json({message: "Auth failed"});

