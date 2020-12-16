//this is simple crud operation  with using sequelize
//its only the functions no routes attach to this file 

exports.list = function (req, res) {
  if (data.length === 0) {
    res.send("no data available");
  }
  res.send(data);
};

exports.insert = function (req, res) {
  id = { id: req.body.id };
  fname = { fname: req.body.fname };
  lname = { lname: req.body.lname };
  email = { email: req.body.email };
  mobile = { mobile: req.body.mobile };
  password = { password: req.body.password };

  const newPost = {
    ...id,
    ...fname,
    ...lname,
    ...email,
    ...mobile,
    ...password,
  };
  console.log(newPost);
  data.push(newPost);
  fs.writeFileSync(path.join(__dirname, filename), JSON.stringify(data));
  let fileData = fs.readFileSync(path.join(__dirname, filename), {
    encoding: "utf8",
    flag: "r",
  });
  res.json(JSON.parse(fileData));
};


exports.remove = function (req, res) {
  const { id } = req.params;

  let arr = data.filter((element) => {
    return element.id !== id;
  });
  console.log(arr);
  fs.writeFileSync(path.join(__dirname, filename), JSON.stringify(arr));
  let fileData = fs.readFileSync(path.join(__dirname, filename), {
    encoding: "utf8",
    flag: "r",
  });
  res.json(JSON.parse(fileData));
};

exports.update = function (req, res) {
	const { id } = req.params;
	
  let dataUpdated = data.map((element) => {
    if (element.id === id) {
      element.fname = req.body.fname || element.fname;
      element.lname = req.body.lname || element.lname;
      element.email = req.body.email || element.email;
      element.mobile = req.body.mobile || element.mobile;
      element.password = req.body.password || element.password;
      return element;
    } else {
      return element;
    }
  });
  console.log(dataUpdated);
  fs.writeFileSync(path.join(__dirname, filename), JSON.stringify(dataUpdated));
  let fileData = fs.readFileSync(path.join(__dirname, filename), {
    encoding: "utf8",
    flag: "r",
  });
  res.json(JSON.parse(fileData));
};

exports.getById = function (req, res) {
  const { id } = req.params;
  data.forEach((element) => {
    if (element.id === id) {
      res.send(element);
    }
  });
};