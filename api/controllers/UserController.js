const axios = require("axios");
const User = require("../models/User");
const urlVTEX =
  "https://cruce.vtexcommercestable.com.br/api/oms/pvt/orders?f_creationDate=creationDate%3A%5B2016-01-01T02%3A00%3A00.000Z%20TO%202021-01-01T01%3A59%3A59.999Z%5D&f_hasInputInvoice=false";

class UserController {
  static async getAllUsers(req, res) {
    try {
      const { metodoDeFacturacion } = req.query;
      const filter = {};

      if (metodoDeFacturacion) filter.metodoDeFacturacion = metodoDeFacturacion;

      const users = await User.find(filter);

      res.send(users);
    } catch (err) {
      res.status(500).send(err);
    }
  }
  static async crateUser(req, res) {
    try {
      const newUser = new User(req.body);
      await newUser.save();

      res.status(201).send(newUser);
    } catch (err) {
      res.status(500).send(err);
    }
  }
  static async getByActivity(req, res) {
    try {
      const actives = await User.find({ isActive: true });
      const inactives = await User.find({ isActive: false });

      res.send({
        actives: {
          length: actives.length,
          users: actives,
        },
        inactives: {
          length: inactives.length,
          users: inactives,
        },
      });
    } catch (err) {
      res.status(500).send(err);
    }
  }
  static async changeInfo(req, res) {
    try {
      const { email, update } = req.body;
      const changed = await User.findOneAndUpdate({ email }, update, {
        new: true,
      });

      res.send(changed);
    } catch (err) {
      res.status(500).send(err);
    }
  }

  static async getVTEXOrders(req, res) {
    const { id } = req.params;
    const user = await User.findById(id);

    const options = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-VTEX-API-AppToken": user.appToken,
        "X-VTEX-API-AppKey": user.appKey,
      },
    };

    return axios
      .get(urlVTEX, options)
      .then((response) => response.data)
      .then((data) => res.send(data.list))
      .catch((response) => res.status(500).send(response));
  }

  static async getVTEXOrdersByEmails(req, res) {
    const { emails } = req.body;
    const orders = {};

    if(emails.length < 1 ) return res.sendStatus(202) 

    for (let email of emails) {
      try {
        const user = await User.findOne({ email });

        const options = {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "X-VTEX-API-AppToken": user.appToken,
            "X-VTEX-API-AppKey": user.appKey,
          },
        };

        const request = await axios.get(urlVTEX, options);
        console.log(request.data);
        orders[email] = request.data.list;
      } catch{
        orders[email] = "no content";
      }
    }
    res.status(200).send(orders);
  }
}

module.exports = UserController;
