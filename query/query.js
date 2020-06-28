const config =  require("../config/config");

const docClient = config.docClient;
const ses = config.ses;

class Query {
  async put(params) {
    return await new Promise((resolve, reject) => {
      docClient.put(params, async function (err, data) {
        if (err) {
          console.error(
            "Unable to add item. Error JSON:",
            JSON.stringify(err, null, 2)
          );
          reject({
            statusCode: 400,
            error: `Could not put data: ${err.message}`,
          });
        } else {
          console.log("data:", data);
          resolve({
            statusCode: 201,
            message: "Record has been Inserted successfully.",
            data: params.Item,
          });
        }
      });
    });
  }

  async get(params) {
    return await new Promise((resolve, reject) => {
      docClient.get(params, function (err, data) {
        if (err) {
          console.error(
            "Unable to read item. Error JSON:",
            JSON.stringify(err, null, 2)
          );
          reject({
            statusCode: 400,
            error: `Could not read data: ${err.message}`,
          });
        } else {
          console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
          resolve({
            statusCode: 200,
            message: "Record has been read successfully.",
            data: data,
          });
        }
      });
    });
  }

  async update(params) {
    return await new Promise((resolve, reject) => {
      docClient.update(params, function (err, data) {
        if (err) {
          console.error(
            "Unable to update item. Error JSON:",
            JSON.stringify(err, null, 2)
          );
          reject({
            statusCode: 400,
            error: `Could not update data: ${err.message}`,
          });
        } else {
          console.log("UpdateItem succeeded:", JSON.stringify(data, null, 2));
          resolve({
            statusCode: 200,
            message: "Record has been updated successfully.",
            data: data,
          });
        }
      });
    });
  }

  async delete(params) {
    return await new Promise((resolve, reject) => {
      docClient.delete(params, function (err, data) {
        if (err) {
          console.error(
            "Unable to delete item. Error JSON:",
            JSON.stringify(err, null, 2)
          );
          reject({
            statusCode: 400,
            error: `Could not delete data: ${err.message}`,
          });
        } else {
          console.log("DeleteItem succeeded:", JSON.stringify(data, null, 2));
          resolve({
            statusCode: 200,
            message: "Record has been deleted successfully.",
            data: data,
          });
        }
      });
    });
  }

  async scan(params) {
    return await new Promise((resolve, reject) => {
      docClient.scan(params, onScan);
      async function onScan(err, data) {
        if (err) {
          console.error(
            "Unable to scan the table. Error JSON:",
            JSON.stringify(err, null, 2)
          );
          reject({
            statusCode: 400,
            error: `Could not scan data: ${err.message}`,
          });
        } else {
          console.log("Scan succeeded.", data);
          if (typeof data.LastEvaluatedKey != "undefined") {
            console.log("Scanning for more...");
            params.ExclusiveStartKey = data.LastEvaluatedKey;
            docClient.scan(params, onScan);
          }
          resolve({
            statusCode: 200,
            message: "Record has been scanned successfully.",
            data: data,
          });
        }
      }
    });
  }

  async query(params) {
    return await new Promise((resolve, reject) => {
      docClient.query(params, function (err, data) {
        if (err) {
          console.error(
            "Unable to query. Error:",
            JSON.stringify(err, null, 2)
          );
          reject({
            statusCode: 400,
            error: `Could not query data: ${err.message}`,
          });
        } else {
          console.log("Query succeeded.", data);
          resolve({
            statusCode: 200,
            message: "Record has been found successfully.",
            data: data,
          });
        }
      });
    });
  }

//   async mail(params) {
//     return await new Promise((resolve, reject) => {
//       ses.sendEmail(params, function (err, data) {
//         if (err) {
//           console.error(
//             "Unable to send email. Error:",
//             JSON.stringify(err, null, 2)
//           );
//           reject({
//             statusCode: 400,
//             error: `Could not send email: ${err.message}`,
//           });
//         } else {
//           console.log("Email sent! Message ID: ", data.MessageId);
//           resolve({
//             statusCode: 200,
//             message: "Email sent successfully.",
//             data: data,
//           });
//         }
//       });
//     });
//   }

  async batchWrite(params) {
    return await new Promise((resolve, reject) => {
      docClient.batchWrite(params, function (err, data) {
        if (err) {
          console.error(
            "Unable to write. Error:",
            JSON.stringify(err, null, 2)
          );
          reject({
            statusCode: 400,
            error: `Could not delete data: ${err.message}`,
          });
        } else {
          console.log("delete succeeded.", data);
          resolve({
            statusCode: 200,
            message: "Record has been deleted successfully."
          });
        }
      });
    });
  }
}

module.exports = new Query();
